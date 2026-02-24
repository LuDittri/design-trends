import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function checkImages() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('subreddit, title, image_url')
        .eq('week_number', 4)
        .eq('category', 'Design Industrial')
        .limit(10);

    if (error) console.error(error);

    console.log("Images for Design Industrial (Week 4):");
    posts.forEach(p => {
        console.log(`[${p.subreddit}] ${p.title.substring(0, 30)}...`);
        console.log(`  IMG: ${p.image_url}`);
    });
}
checkImages();
