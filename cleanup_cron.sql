-- =====================================================
-- CLEANUP: Remove Supabase Cron Job
-- Run this ONCE in the Supabase Dashboard SQL Editor
-- =====================================================

-- Remove the scheduled cron job
SELECT cron.unschedule('weekly-design-trends');

-- Verify it's gone (should return 0 rows)
SELECT * FROM cron.job WHERE jobname = 'weekly-design-trends';
