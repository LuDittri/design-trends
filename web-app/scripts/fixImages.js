import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function fixImages() {
    console.log("Fetching posts with '&amp;' in their image urls...");

    // Using simple fetch and manual replace to avoid Postgres replace complexities right now
    const { data: posts, error } = await supabase.from('posts').select('id, image_url').like('image_url', '%&amp;%');
    if (error) {
        console.error(error);
        return;
    }

    console.log(`Found ${posts.length} posts with broken image URLs. Fixing...`);
    let count = 0;

    for (const p of posts) {
        const fixedUrl = p.image_url.replace(/&amp;/g, '&');
        await supabase.from('posts').update({ image_url: fixedUrl }).eq('id', p.id);
        count++;
    }

    console.log(`Fixed ${count} image URLs in the database.`);
}
fixImages();
