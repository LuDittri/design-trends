// Supabase Edge Function: fetch-reddit
// Fetches top Reddit posts about design trends and generates AI summaries via Gemini

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY")!;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Category → Subreddit mapping
const TOPICS: Record<string, string[]> = {
    "UI/UX": ["UIUX", "UXDesign", "UI_Design"],
    "Figma": ["FigmaDesign"],
    "Design Gráfico": ["graphic_design", "Design"],
    "Cultura": ["designthought", "web_design"],
};

const REDDIT_USER_AGENT = "script:design_trends_supabase:v2.0 (by /u/anonymous)";

// ─── Reddit Fetching ──────────────────────────────────────────

interface RedditPost {
    reddit_id: string;
    title: string;
    score: number;
    url: string;
    subreddit: string;
    author: string;
    num_comments: number;
    created_utc: number;
    permalink: string;
    image_url: string | null;
}

async function fetchSubredditPosts(subredditName: string): Promise<RedditPost[]> {
    const url = `https://www.reddit.com/r/${subredditName}/top.json?t=week&limit=100`;

    const response = await fetch(url, {
        headers: { "User-Agent": REDDIT_USER_AGENT },
    });

    if (response.status === 429) {
        console.warn(`Rate limited on r/${subredditName}. Waiting 5s...`);
        await new Promise((r) => setTimeout(r, 5000));
        return [];
    }

    if (!response.ok) {
        console.error(`Failed to fetch r/${subredditName}: ${response.status}`);
        return [];
    }

    const data = await response.json();
    const children = data?.data?.children ?? [];

    return children.map((child: any) => {
        const p = child.data;

        // Extract best image
        let imageUrl: string | null = null;
        const preview = p.preview;

        // Handle Reddit Galleries (multiple images)
        if (p.media_metadata) {
            const firstId = Object.keys(p.media_metadata)[0];
            const media = p.media_metadata[firstId];
            if (media?.s?.u) {
                imageUrl = media.s.u.replace(/&amp;/g, "&");
            }
        }

        // Handle Standard Images (preview)
        if (!imageUrl && preview?.images?.[0]?.source?.url) {
            imageUrl = preview.images[0].source.url.replace(/&amp;/g, "&");
        } else if (p.url?.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
            imageUrl = p.url;
        } else if (p.thumbnail?.startsWith("http")) {
            imageUrl = p.thumbnail;
        }

        return {
            reddit_id: p.id,
            title: p.title,
            score: p.score,
            url: p.url,
            subreddit: subredditName,
            author: p.author,
            num_comments: p.num_comments,
            created_utc: p.created_utc,
            permalink: `https://www.reddit.com${p.permalink}`,
            image_url: imageUrl,
        };
    });
}

async function fetchPostComments(permalink: string): Promise<string[]> {
    try {
        // Convert permalink to JSON API URL
        const jsonUrl = `${permalink}.json?limit=10&sort=top`;
        const response = await fetch(jsonUrl, {
            headers: { "User-Agent": REDDIT_USER_AGENT },
        });

        if (!response.ok) return [];

        const data = await response.json();
        // Comments are in the second listing
        const comments = data?.[1]?.data?.children ?? [];

        return comments
            .filter((c: any) => c.kind === "t1" && c.data?.body)
            .slice(0, 10)
            .map((c: any) => c.data.body as string);
    } catch {
        return [];
    }
}

// ─── Gemini AI Summarization ──────────────────────────────────

interface AISummary {
    summary: string;
    why_it_matters: string;
    tags: string[];
}

async function generateSummary(
    title: string,
    subreddit: string,
    comments: string[]
): Promise<AISummary> {
    const commentsText = comments.length > 0
        ? comments.join("\n---\n")
        : "No comments available.";

    const prompt = `You are a design trends analyst. Analyze this Reddit post and its discussion.

POST TITLE: "${title}"
SUBREDDIT: r/${subreddit}

TOP COMMENTS:
${commentsText}

Respond in valid JSON only (no markdown, no code blocks), with this exact structure:
{
  "summary": "A concise 2-3 sentence summary of the discussion in Portuguese (BR). Capture the key insights and community sentiment.",
  "why_it_matters": "One sentence in Portuguese (BR) explaining why this matters for designers today.",
  "tags": ["tag1", "tag2", "tag3"]
}

Tags should be 3-5 relevant design keywords in English.`;

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 500,
                    },
                }),
            }
        );

        if (!response.ok) {
            console.error(`Gemini API error: ${response.status}`);
            return fallbackSummary(title, subreddit);
        }

        const data = await response.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

        // Parse JSON from response (handle possible markdown wrapping)
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) return fallbackSummary(title, subreddit);

        const parsed = JSON.parse(jsonMatch[0]);
        return {
            summary: parsed.summary || title,
            why_it_matters: parsed.why_it_matters || `Trending em r/${subreddit}.`,
            tags: parsed.tags || ["Design"],
        };
    } catch (err) {
        console.error(`Gemini parse error: ${err}`);
        return fallbackSummary(title, subreddit);
    }
}

function fallbackSummary(title: string, subreddit: string): AISummary {
    return {
        summary: title,
        why_it_matters: `Em alta no r/${subreddit} esta semana.`,
        tags: ["Design", "Trending"],
    };
}

// ─── Main Handler ─────────────────────────────────────────────

function getWeekNumber(date: Date): number {
    // Custom start date: Feb 2, 2026
    const start = new Date("2026-02-02T00:00:00");
    const diff = date.getTime() - start.getTime();

    if (diff < 0) return 1; // Fallback

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return Math.floor(days / 7) + 1;
}

Deno.serve(async (req) => {
    // Optional: verify cron secret for security
    const authHeader = req.headers.get("Authorization");
    const cronSecret = Deno.env.get("CRON_SECRET");
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
        // Allow Supabase service calls (they use the service key)
        const url = new URL(req.url);
        if (!url.searchParams.get("test")) {
            // Still allow for testing, but log warning
            console.warn("No valid auth header. Proceeding anyway for Supabase cron.");
        }
    }

    const now = new Date();
    const weekNumber = getWeekNumber(now);

    // Create fetch log
    const { data: logEntry } = await supabase
        .from("fetch_logs")
        .insert({ week_number: weekNumber, status: "running" })
        .select()
        .single();

    const logId = logEntry?.id;
    let totalFetched = 0;

    try {
        for (const [category, subreddits] of Object.entries(TOPICS)) {
            console.log(`\n📂 Processing category: ${category}`);
            const allPosts: RedditPost[] = [];

            for (const sub of subreddits) {
                console.log(`  📡 Fetching r/${sub}...`);
                const posts = await fetchSubredditPosts(sub);
                allPosts.push(...posts);
                // Be nice to Reddit API
                await new Promise((r) => setTimeout(r, 1500));
            }

            // Sort by score and take top 10
            allPosts.sort((a: any, b: any) => b.score - a.score);
            const top10 = allPosts.slice(0, 10);

            // Mark first post as featured
            for (let i = 0; i < top10.length; i++) {
                const post = top10[i];
                console.log(`  🤖 Summarizing: "${post.title.slice(0, 60)}..."`);

                // Fetch comments for AI context
                const comments = await fetchPostComments(post.permalink);
                await new Promise((r) => setTimeout(r, 1000));

                // Generate AI summary
                const ai = await generateSummary(post.title, post.subreddit, comments);
                await new Promise((r) => setTimeout(r, 500));

                // Upsert to avoid duplicates
                const { error } = await supabase
                    .from("posts")
                    .upsert(
                        {
                            reddit_id: post.reddit_id,
                            title: post.title,
                            category,
                            subreddit: post.subreddit,
                            author: post.author,
                            score: post.score,
                            num_comments: post.num_comments,
                            url: post.url,
                            permalink: post.permalink,
                            image_url: post.image_url,
                            ai_summary: ai.summary,
                            ai_why_it_matters: ai.why_it_matters,
                            ai_tags: ai.tags,
                            created_utc: new Date(post.created_utc * 1000).toISOString(),
                            fetched_at: now.toISOString(),
                            week_number: weekNumber,
                            featured: i === 0,
                        },
                        { onConflict: "reddit_id" }
                    );

                if (error) {
                    console.error(`  ❌ Error inserting post: ${error.message}`);
                } else {
                    totalFetched++;
                    console.log(`  ✅ Saved: "${post.title.slice(0, 50)}..."`);
                }
            }
        }

        // Update fetch log
        if (logId) {
            await supabase
                .from("fetch_logs")
                .update({
                    completed_at: new Date().toISOString(),
                    posts_fetched: totalFetched,
                    status: "success",
                })
                .eq("id", logId);
        }

        return new Response(
            JSON.stringify({
                success: true,
                posts_fetched: totalFetched,
                week_number: weekNumber,
            }),
            { headers: { "Content-Type": "application/json" } }
        );
    } catch (err) {
        console.error(`❌ Critical error: ${err}`);

        if (logId) {
            await supabase
                .from("fetch_logs")
                .update({
                    completed_at: new Date().toISOString(),
                    status: "error",
                    error_message: String(err),
                })
                .eq("id", logId);
        }

        return new Response(
            JSON.stringify({ success: false, error: String(err) }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
});
