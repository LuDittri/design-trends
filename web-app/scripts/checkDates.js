import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function checkDates() {
    const { data: logs, error: logsError } = await supabase.from('fetch_logs').select('id, week_number, started_at').order('started_at');
    if (logsError) console.error(logsError);

    console.log("LOGS:");
    logs.forEach(l => console.log(l.week_number, l.started_at));

    const { data: posts, error: postsError } = await supabase.from('posts').select('id, week_number, fetched_at').order('fetched_at');
    if (postsError) console.error(postsError);

    console.log("POSTS fetched_at ranges by week:");
    let ranges = {};
    posts.forEach(p => {
        const w = p.week_number;
        if (!ranges[w]) ranges[w] = { min: p.fetched_at, max: p.fetched_at, count: 0 };
        ranges[w].count++;
        if (p.fetched_at < ranges[w].min) ranges[w].min = p.fetched_at;
        if (p.fetched_at > ranges[w].max) ranges[w].max = p.fetched_at;
    });
    console.log(ranges);
}
checkDates();
