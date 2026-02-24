import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
const REDDIT_USER_AGENT = "script:design_trends_local:v3.0";

async function fixPixelated() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, reddit_id, subreddit, title, image_url')
        .eq('week_number', 4)
        .not('image_url', 'is', null);

    if (error) return console.error(error);

    const broken = posts.filter(p => p.image_url.includes('external-preview') || p.image_url.includes('thumbs'));
    console.log(`Found ${broken.length} low-res images to fix.`);

    let count = 0;
    for (const p of broken) {
        console.log(`Fixing [${p.subreddit}] ${p.title.substring(0, 30)}...`);
        try {
            const url = `https://www.reddit.com/r/${p.subreddit}/comments/${p.reddit_id}.json`;
            const res = await fetch(url, { headers: { "User-Agent": REDDIT_USER_AGENT } });
            if (!res.ok) {
                console.log("  Failed to fetch reddit json");
                continue;
            }
            const json = await res.json();
            const pst = json[0]?.data?.children?.[0]?.data;
            if (!pst) continue;

            let highResUrl = null;
            if (pst.preview?.images?.[0]?.source?.url) {
                highResUrl = pst.preview.images[0].source.url.replace(/&amp;/g, '&');
            } else if (pst.url?.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
                highResUrl = pst.url.replace(/&amp;/g, '&');
            }

            if (highResUrl && highResUrl !== p.image_url) {
                await supabase.from('posts').update({ image_url: highResUrl }).eq('id', p.id);
                console.log(`  Updated to: ${highResUrl.substring(0, 60)}...`);
                count++;
            } else {
                console.log("  No high-res URL found.");
            }
        } catch (e) {
            console.error(e);
        }
        await new Promise(r => setTimeout(r, 1000)); // rate limit
    }
    console.log(`Fixed ${count} pixelated images.`);
}
fixPixelated();
