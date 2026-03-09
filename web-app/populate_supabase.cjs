/**
 * populate_supabase.cjs
 * 
 * Reads existing design_trends.json (from Python script),
 * generates AI summaries via Gemini, and inserts into Supabase.
 * 
 * Usage: node populate_supabase.cjs
 */

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Load .env file for local development
try { require('dotenv').config({ path: path.join(__dirname, '.env.local') }); } catch { }

// ─── Config ───────────────────────────────────────────────────
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY || !GEMINI_API_KEY) {
    console.error('❌ Missing environment variables: SUPABASE_URL, SUPABASE_SERVICE_KEY, GEMINI_API_KEY');
    console.error('   Create web-app/.env.local or set them as environment variables.');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ─── Helpers ──────────────────────────────────────────────────
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getWeekNumber(date) {
    // Custom start date: Feb 2, 2026
    const start = new Date('2026-02-02T00:00:00');
    const diff = date.getTime() - start.getTime();

    if (diff < 0) return 1; // Fallback for dates before start

    // Calculate days difference
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    // Week 1 = 0-6 days, Week 2 = 7-13 days, etc.
    return Math.floor(days / 7) + 1;
}

// ─── Gemini AI ────────────────────────────────────────────────
async function generateSummary(title, subreddit, retries = 3) {
    const prompt = `You are a design trends analyst. Analyze this Reddit post from r/${subreddit}.

POST TITLE: "${title}"

Based on the title and your knowledge of current design trends, respond in valid JSON only (no markdown, no code blocks), with this exact structure:
{
  "summary": "A concise 2-3 sentence analysis of this post in Portuguese (BR). Explain what the trend or topic is about and why the community is discussing it.",
  "why_it_matters": "One sentence in Portuguese (BR) explaining why this matters for designers today.",
  "tags": ["tag1", "tag2", "tag3"]
}

Tags should be 3-5 relevant design keywords in English.`;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: prompt }] }],
                        generationConfig: { temperature: 0.7, maxOutputTokens: 500 },
                    }),
                }
            );

            if (response.status === 429) {
                const wait = attempt * 20;
                console.log(`    ⏳ Gemini rate limited. Waiting ${wait}s... (attempt ${attempt}/${retries})`);
                await sleep(wait * 1000);
                continue;
            }

            if (!response.ok) {
                const errText = await response.text();
                console.error(`    ❌ Gemini error ${response.status}: ${errText.slice(0, 100)}`);
                if (attempt < retries) {
                    await sleep(5000);
                    continue;
                }
                return fallback(title, subreddit);
            }

            const data = await response.json();
            const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (!jsonMatch) {
                console.error(`    ❌ Could not parse Gemini response`);
                return fallback(title, subreddit);
            }

            const parsed = JSON.parse(jsonMatch[0]);
            return {
                summary: parsed.summary || title,
                why_it_matters: parsed.why_it_matters || `Trending em r/${subreddit}.`,
                tags: parsed.tags || ['Design'],
            };
        } catch (err) {
            console.error(`    ❌ Error: ${err.message}`);
            if (attempt < retries) await sleep(5000);
        }
    }
    return fallback(title, subreddit);
}

function fallback(title, subreddit) {
    return {
        summary: title,
        why_it_matters: `Em alta no r/${subreddit} esta semana.`,
        tags: ['Design', 'Trending'],
    };
}

// ─── Main ─────────────────────────────────────────────────────
async function main() {
    // Read local JSON
    const jsonPath = path.join(__dirname, 'public', 'design_trends.json');
    if (!fs.existsSync(jsonPath)) {
        console.error('❌ design_trends.json not found at:', jsonPath);
        process.exit(1);
    }

    const rawData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    const now = new Date();
    const weekNumber = getWeekNumber(now);
    let totalFetched = 0;

    console.log(`\n🚀 Design Trends → Supabase — Semana ${weekNumber}`);
    console.log('='.repeat(50));

    // Map category names (Python uses "Graphic Design", we use "Design Gráfico")
    const categoryMap = {
        'UI/UX': 'UI/UX',
        'Figma': 'Figma',
        'Graphic Design': 'Design Gráfico',
        'Design Gráfico': 'Design Gráfico',
        'Design Industrial': 'Design Industrial',
        'Cultura': 'Cultura',
        'Culture': 'Cultura',
    };

    // Create fetch log
    const { data: logEntry } = await supabase
        .from('fetch_logs')
        .insert({ status: 'running' })
        .select()
        .single();

    try {
        for (const [rawCategory, posts] of Object.entries(rawData)) {
            const category = categoryMap[rawCategory] || rawCategory;
            console.log(`\n📂 ${category} (${posts.length} posts)`);

            for (let i = 0; i < posts.length; i++) {
                const post = posts[i];
                const redditId = post.permalink
                    ? post.permalink.split('/comments/')[1]?.split('/')[0] || `gen_${Date.now()}_${i}`
                    : `gen_${Date.now()}_${i}`;

                // Extract best image (Handle Gallery)
                if (post.media_metadata) {
                    const firstId = Object.keys(post.media_metadata)[0];
                    const media = post.media_metadata[firstId];
                    if (media?.s?.u) {
                        post.image = media.s.u.replace(/&amp;/g, "&");
                    }
                }

                console.log(`  🤖 [${i + 1}/${posts.length}] "${post.title.slice(0, 55)}..."`);

                // Generate AI summary
                console.log(`     → Generating AI summary...`);
                const ai = await generateSummary(post.title, post.subreddit || 'Design');
                console.log(`     → ✅ "${ai.summary.slice(0, 50)}..."`);

                // Upsert to Supabase
                const { error } = await supabase
                    .from('posts')
                    .upsert(
                        {
                            reddit_id: redditId,
                            title: post.title,
                            category,
                            subreddit: post.subreddit || 'Design',
                            author: post.author || 'unknown',
                            score: post.score || 0,
                            num_comments: post.num_comments || 0,
                            url: post.url || '',
                            permalink: post.permalink || '',
                            image_url: post.image || null,
                            ai_summary: ai.summary,
                            ai_why_it_matters: ai.why_it_matters,
                            ai_tags: ai.tags,
                            created_utc: post.created_utc
                                ? new Date(post.created_utc * 1000).toISOString()
                                : now.toISOString(),
                            fetched_at: now.toISOString(),
                            week_number: weekNumber,
                            featured: i === 0,
                        },
                        { onConflict: 'reddit_id,week_number' }
                    );

                if (error) {
                    console.error(`     ❌ DB Error: ${error.message}`);
                } else {
                    totalFetched++;
                    console.log(`     ✅ Saved!`);
                }

                // Delay between Gemini calls to avoid rate limits
                await sleep(3000);
            }
        }

        // Update log
        if (logEntry?.id) {
            await supabase
                .from('fetch_logs')
                .update({
                    completed_at: new Date().toISOString(),
                    posts_fetched: totalFetched,
                    status: 'success',
                })
                .eq('id', logEntry.id);
        }

        console.log(`\n${'='.repeat(50)}`);
        console.log(`🎉 Done! ${totalFetched} posts saved to Supabase.`);
    } catch (err) {
        console.error(`\n❌ Critical error: ${err.message}`);
        if (logEntry?.id) {
            await supabase
                .from('fetch_logs')
                .update({
                    completed_at: new Date().toISOString(),
                    status: 'error',
                    error_message: err.message,
                })
                .eq('id', logEntry.id);
        }
    }
}

main();
