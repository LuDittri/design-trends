import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function inspectRedditPost() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('reddit_id, subreddit, title, image_url')
        .eq('week_number', 4)
        .like('image_url', '%external-preview%')
        .limit(1);

    if (error || !posts.length) return console.log("No posts found.");

    const p = posts[0];
    console.log(`Inspecting post: ${p.reddit_id} in r/${p.subreddit}`);

    const url = `https://www.reddit.com/r/${p.subreddit}/comments/${p.reddit_id}.json`;
    const res = await fetch(url, { headers: { "User-Agent": "script:design_trends_local:v3.0" } });
    const json = await res.json();

    const pst = json[0].data.children[0].data;
    console.log("Media metadata:", !!pst.media_metadata);
    console.log("Preview available:", !!pst.preview);
    console.log("Thumbnail:", pst.thumbnail);
    console.log("URL:", pst.url);
    if (pst.preview) {
        fs.writeFileSync('inspect.json', JSON.stringify(pst.preview, null, 2));
        console.log("Wrote preview to inspect.json");
    }
}
inspectRedditPost();
