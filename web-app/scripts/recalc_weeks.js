import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function recalc() {
    console.log("Fetching all posts...");
    const { data: posts, error } = await supabase.from('posts').select('id, fetched_at');
    if (error) {
        console.error(error);
        return;
    }

    let updates = 0;
    const FIRST_DAY = new Date('2026-02-02T00:00:00Z').getTime();

    for (const post of posts) {
        const fetched = new Date(post.fetched_at).getTime();
        const diffDays = Math.floor((fetched - FIRST_DAY) / (1000 * 60 * 60 * 24));
        const weekNum = diffDays < 0 ? 1 : Math.floor(diffDays / 7) + 1;

        await supabase
            .from('posts')
            .update({ week_number: weekNum })
            .eq('id', post.id);
        updates++;
    }
    console.log(`Updated ${updates} posts.`);

    const { data: results } = await supabase.from('posts').select('week_number');
    let counts = {};
    for (const p of results || []) {
        counts[p.week_number] = (counts[p.week_number] || 0) + 1;
    }
    console.log("Final post counts per week:", counts);
}
recalc();
