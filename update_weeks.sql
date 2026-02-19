
-- Update week numbers based on custom start date (2026-02-02)

-- Function to calculate week number from fetched_at date
-- Logic: (Date - StartDate) / 7 days + 1
-- We use EPOCH to get seconds, divide by 86400 to get days

UPDATE posts
SET week_number = FLOOR(EXTRACT(EPOCH FROM (fetched_at - '2026-02-02'::timestamp)) / (86400 * 7)) + 1
WHERE fetched_at >= '2026-02-02';

-- Ensure week 1 is the minimum for anything slightly before (if any)
UPDATE posts
SET week_number = 1
WHERE fetched_at < '2026-02-02';

-- Also update fetch_logs if necessary
-- First, ensure the column exists (since it wasn't in the original schema)
ALTER TABLE fetch_logs ADD COLUMN IF NOT EXISTS week_number INTEGER;

UPDATE fetch_logs
SET week_number = FLOOR(EXTRACT(EPOCH FROM (started_at - '2026-02-02'::timestamp)) / (86400 * 7)) + 1
WHERE started_at >= '2026-02-02';

