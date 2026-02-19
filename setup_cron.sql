-- =====================================================
-- SETUP: Weekly Design Trends Cron Job
-- Run this in Supabase Dashboard → SQL Editor
-- =====================================================

-- Step 1: Remove existing schedule if any (safe to run multiple times)
SELECT cron.unschedule('weekly-design-trends')
WHERE EXISTS (
  SELECT 1 FROM cron.job WHERE jobname = 'weekly-design-trends'
);

-- Step 2: Schedule the Edge Function to run every Monday at 08:00 UTC (05:00 BRT)
SELECT cron.schedule(
  'weekly-design-trends',
  '0 8 * * 1',
  $$
  SELECT net.http_post(
    url := 'https://flcptmcmrlfkbmcuquom.supabase.co/functions/v1/fetch-reddit',
    headers := '{"Authorization": "Bearer YOUR_SERVICE_ROLE_KEY_HERE", "Content-Type": "application/json"}'::jsonb,
    body := '{}'::jsonb
  ) AS request_id;
  $$
);

-- Step 3: Verify the cron job was created
SELECT * FROM cron.job WHERE jobname = 'weekly-design-trends';
