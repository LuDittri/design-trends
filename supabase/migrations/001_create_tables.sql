-- ============================================
-- Design Trends - Supabase Schema
-- ============================================

-- Posts table: Reddit posts + AI-generated content
CREATE TABLE IF NOT EXISTS posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  reddit_id TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  subreddit TEXT NOT NULL,
  author TEXT,
  score INTEGER DEFAULT 0,
  num_comments INTEGER DEFAULT 0,
  url TEXT,
  permalink TEXT,
  image_url TEXT,
  ai_summary TEXT,
  ai_why_it_matters TEXT,
  ai_tags TEXT[] DEFAULT '{}',
  created_utc TIMESTAMPTZ,
  fetched_at TIMESTAMPTZ DEFAULT NOW(),
  week_number INTEGER,
  featured BOOLEAN DEFAULT FALSE
);

-- Fetch logs table: track automation runs
CREATE TABLE IF NOT EXISTS fetch_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  posts_fetched INTEGER DEFAULT 0,
  status TEXT DEFAULT 'running',
  error_message TEXT
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category);
CREATE INDEX IF NOT EXISTS idx_posts_week ON posts(week_number);
CREATE INDEX IF NOT EXISTS idx_posts_score ON posts(score DESC);
CREATE INDEX IF NOT EXISTS idx_posts_fetched ON posts(fetched_at DESC);

-- RLS: Posts are publicly readable
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Posts are publicly readable" ON posts
  FOR SELECT USING (true);

-- RLS: Fetch logs are publicly readable (for status display)
ALTER TABLE fetch_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Fetch logs are publicly readable" ON fetch_logs
  FOR SELECT USING (true);
