import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function fix() {
    console.log("Updating posts fetched today (>= '2026-02-23') back to Week 4...");
    const { data, error } = await supabase
        .from('posts')
        .update({ week_number: 4 })
        .gte('fetched_at', '2026-02-23T00:00:00Z');

    if (error) {
        console.error("Error updating posts:", error);
    } else {
        console.log("Posts updated successfully.");
    }

    console.log("Updating logs fetched today to Week 4...");
    const { data: logs, error: logsError } = await supabase
        .from('fetch_logs')
        .update({ week_number: 4 })
        .gte('started_at', '2026-02-23T00:00:00Z');

    if (logsError) {
        console.error("Error updating logs:", logsError);
    } else {
        console.log("Logs updated successfully.");
    }

    // Check results
    const { data: results } = await supabase.from('posts').select('week_number');
    let counts = {};
    for (const p of results || []) {
        counts[p.week_number] = (counts[p.week_number] || 0) + 1;
    }
    console.log("Final post counts per week:", counts);
}
fix();
