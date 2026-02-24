import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function check() {
    const { data, error } = await supabase.from('posts').select('week_number, fetched_at');
    if (error) console.error(error);

    let counts = {};
    for (const p of data || []) {
        counts[p.week_number] = (counts[p.week_number] || 0) + 1;
    }
    console.log("Post counts per week:", counts);
}
check();
