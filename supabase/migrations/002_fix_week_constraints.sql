-- ============================================
-- Fix: Allow posts to exist across multiple weeks
-- ============================================

-- 1. Drop the existing single-column unique constraint
ALTER TABLE posts DROP CONSTRAINT IF EXISTS posts_reddit_id_key;

-- 2. Add a composite unique constraint for (reddit_id, week_number)
-- This allows the same post to be a "trend" in different weeks without overwriting history
ALTER TABLE posts ADD CONSTRAINT posts_reddit_id_week_unique UNIQUE (reddit_id, week_number);

-- 3. Correct data fetched today (Feb 23) which was erroneously labeled Week 4
-- Today (Feb 23) should be the start of Week 3 collection (or end of Week 2 collection depending on interpretation)
-- Based on Feb 2 being Week 1 start:
-- Feb 2-8: Week 1
-- Feb 9-15: Week 2
-- Feb 16-22: Week 3
-- Feb 23-Mar 1: Week 4
-- However, if the user says it "skipped week 3", they likely expect Feb 16-22 to be Week 2 or they want the labels shifted.
-- User said: "aparece semana 4 no site mas é o conteúdo da semana 3, ele basicamente pula a semana 3"
-- This implies they want the current data to be labeled Week 3.

UPDATE posts 
SET week_number = 3 
WHERE week_number = 4;

-- Also update logs
UPDATE fetch_logs
SET week_number = 3
WHERE week_number = 4;
