import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function restoreWeek3() {
    console.log("Backdating the 30 posts overwritten this morning (Feb 23, ~08:40 UTC) back to Feb 16 (Week 3)...");

    // The morning edge function fetch was between 00:00 and 12:00 UTC
    const { data: earlyPosts, error } = await supabase
        .from('posts')
        .select('id, fetched_at')
        .gte('fetched_at', '2026-02-23T00:00:00Z')
        .lt('fetched_at', '2026-02-23T12:00:00Z');

    if (error) {
        console.error(error);
        return;
    }

    console.log(`Found ${earlyPosts.length} posts to restore to Week 3.`);

    for (const p of earlyPosts) {
        // Backdate exactly 7 days
        const newDate = new Date(new Date(p.fetched_at).getTime() - 7 * 24 * 60 * 60 * 1000);
        await supabase
            .from('posts')
            .update({ fetched_at: newDate.toISOString() })
            .eq('id', p.id);
    }

    console.log("Restoration complete. You must run the recalc script to update week numbers.");
}
restoreWeek3();
