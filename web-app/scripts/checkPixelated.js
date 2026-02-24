import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function checkImages() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, subreddit, title, image_url')
        .eq('week_number', 4)
        .not('image_url', 'is', null);

    if (error) console.error(error);

    console.log("Checking image URLs for potential low-res thumbnails:");
    let thumbnailCount = 0;
    posts.forEach(p => {
        if (p.image_url.includes('thumbs') || p.image_url.includes('external-preview')) {
            console.log(`[${p.subreddit}] ${p.title.substring(0, 30)}...`);
            console.log(`  IMG: ${p.image_url}`);
            thumbnailCount++;
        }
    });
    console.log(`Found ${thumbnailCount} likely pixelated images.`);
}
checkImages();
