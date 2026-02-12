import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
} else if (import.meta.env.DEV) {
    console.warn(
        'Supabase credentials not found. Using local JSON fallback. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env'
    );
}

export { supabase };
