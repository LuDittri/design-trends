import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function checkDbs() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('subreddit, title, image_url')
        .eq('week_number', 4)
        .not('image_url', 'is', null);

    posts.filter(p => p.image_url.includes('external-preview') || p.image_url.includes('thumbs')).forEach(p => {
        console.log(`[${p.subreddit}] ${p.image_url}`);
    });
}
checkDbs();
