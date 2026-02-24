import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function clean() {
    console.log("Deleting old unoptimized entries for Week 4...");
    const { error } = await supabase.from('posts').delete().eq('week_number', 4);
    if (error) console.error(error);
    else console.log("Done. Ready to re-fetch.");
}
clean();
