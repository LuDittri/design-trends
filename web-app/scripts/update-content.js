import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY; // Must use service role to bypass RLS policies
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY || !GEMINI_API_KEY) {
    console.error("❌ Missing environment variables. Please ensure VITE_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, and GEMINI_API_KEY are set in your .env.local file.");
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

// Category → Subreddit mapping
const TOPICS = {
    "UI/UX": ["UIUX", "UXDesign", "UI_Design"],
    "Figma": ["FigmaDesign"],
    "Design Gráfico": ["graphic_design", "Design", "designBR"],
    "Design Industrial": ["IndustrialDesign", "3Dprinting", "Impressao3D", "3Dmodeling", "blender"]
};

const REDDIT_USER_AGENT = "script:design_trends_local:v3.0 (by /u/anonymous)";

// ─── Week Number Logic ─────────────────────────────────────────

function getWeekNumber(date) {
    // Custom start date: Feb 2, 2026
    const start = new Date("2026-02-02T00:00:00");
    const diff = date.getTime() - start.getTime();

    if (diff < 0) return 1;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    // Week 1 started Feb 2. Days 0-6 = Week 1. Today Feb 23 is day 21, so 21/7 + 1 = 4 (Semana 4)
    return Math.floor(days / 7) + 1;
}

// ─── Reddit Fetching ──────────────────────────────────────────

async function fetchSubredditPosts(subredditName) {
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

    return children.map((child) => {
        const p = child.data;

        let imageUrl = null;
        const preview = p.preview;

        if (p.media_metadata) {
            const firstId = Object.keys(p.media_metadata)[0];
            const media = p.media_metadata[firstId];

            // media.p contains the optimized resolutions for Reddit gallery images
            if (media?.p && media.p.length > 0) {
                // Find a width near 960px-1080px
                const optimal = media.p.slice().reverse().find(r => r.x <= 1080 && r.x >= 640);
                if (optimal && optimal.u) imageUrl = optimal.u.replace(/&amp;/g, "&");
            }
            if (!imageUrl && media?.s?.u) {
                imageUrl = media.s.u.replace(/&amp;/g, "&");
            }
        }

        if (!imageUrl && preview?.images?.[0]) {
            const imgDef = preview.images[0];

            // Try to find an optimized "retina" resolution around 960-1080px from Reddit's generated thumbnails
            const resArray = imgDef.resolutions || [];
            const optimalRes = resArray.slice().reverse().find(r => r.width <= 1080 && r.width >= 640);

            if (optimalRes && optimalRes.url) {
                imageUrl = optimalRes.url.replace(/&amp;/g, "&");
            } else if (imgDef.source?.url) {
                imageUrl = imgDef.source.url.replace(/&amp;/g, "&");
            }
        } else if (!imageUrl && p.url?.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
            imageUrl = p.url;
        } else if (!imageUrl && p.thumbnail?.startsWith("http")) {
            imageUrl = p.thumbnail;
        }

        if (imageUrl && !imageUrl.startsWith('http')) {
            imageUrl = null;
        } else if (imageUrl) {
            imageUrl = imageUrl.replace(/&amp;/g, "&");
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

async function fetchPostComments(permalink) {
    try {
        const jsonUrl = `${permalink}.json?limit=10&sort=top`;
        const response = await fetch(jsonUrl, {
            headers: { "User-Agent": REDDIT_USER_AGENT },
        });

        if (!response.ok) return [];

        const data = await response.json();
        const comments = data?.[1]?.data?.children ?? [];

        return comments
            .filter((c) => c.kind === "t1" && c.data?.body)
            .slice(0, 10)
            .map((c) => c.data.body);
    } catch {
        return [];
    }
}

// ─── Gemini AI Summarization ──────────────────────────────────

async function generateSummary(title, subreddit, comments) {
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

function fallbackSummary(title, subreddit) {
    return {
        summary: title,
        why_it_matters: `Em alta no r/${subreddit} esta semana.`,
        tags: ["Design", "Trending"],
    };
}

// ─── Main Handler ─────────────────────────────────────────────

async function main() {
    console.log("🚀 Starting Local Content Update...");

    const now = new Date();
    const weekNumber = getWeekNumber(now);

    console.log(`📅 Current determined week: ${weekNumber}`);

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
            const allPosts = [];

            for (const sub of subreddits) {
                console.log(`  📡 Fetching r/${sub}...`);
                const posts = await fetchSubredditPosts(sub);
                allPosts.push(...posts);
                await new Promise((r) => setTimeout(r, 1500));
            }

            allPosts.sort((a, b) => b.score - a.score);
            const top10 = allPosts.slice(0, 10);

            for (let i = 0; i < top10.length; i++) {
                const post = top10[i];
                console.log(`  🤖 Summarizing: "${post.title.slice(0, 60)}..."`);

                const comments = await fetchPostComments(post.permalink);
                await new Promise((r) => setTimeout(r, 1000));

                const ai = await generateSummary(post.title, post.subreddit, comments);
                await new Promise((r) => setTimeout(r, 500));

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
                        { onConflict: "reddit_id,week_number" }
                    );

                if (error) {
                    console.error(`  ❌ Error inserting post: ${error.message}`);
                } else {
                    totalFetched++;
                    console.log(`  ✅ Saved: "${post.title.slice(0, 50)}..."`);
                }
            }
        }

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

        console.log(`\n🎉 Success! Fetched and inserted ${totalFetched} posts for Week ${weekNumber}.`);
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
    }
}

main().catch(console.error);
