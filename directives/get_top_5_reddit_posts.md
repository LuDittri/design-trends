# Directive: Get Top 5 Reddit Posts

**Goal**: Fetch the top 5 hot posts from a specific subreddit and save them to a JSON file.

**Inputs**:
- Subreddit name (default: "technology")

**Output**:
- JSON file in `.tmp/top_posts.json` containing: title, score, url, author.

**Steps**:
1. Check if `.env` has valid Reddit credentials.
2. Run `execution/fetch_reddit.py` with the subreddit argument.
3. Verify that `.tmp/top_posts.json` was created.
