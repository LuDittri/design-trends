import os
import json
import praw
import logging
from dotenv import load_dotenv

# Configure logging
os.makedirs("logs", exist_ok=True)
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("logs/automation.log", encoding='utf-8'),
        logging.StreamHandler()
    ]
)

# Load environment variables
load_dotenv()

def fetch_top_posts(subreddit_name="technology", limit=5):
    """
    Fetches the top posts from a subreddit.
    """
    try:
        reddit = praw.Reddit(
            client_id=os.getenv("REDDIT_CLIENT_ID"),
            client_secret=os.getenv("REDDIT_CLIENT_SECRET"),
            user_agent=os.getenv("REDDIT_USER_AGENT", "script:top_5_fetcher:v1.0")
        )

        logging.info(f"Fetching top {limit} posts from r/{subreddit_name}...")
        subreddit = reddit.subreddit(subreddit_name)
        
        posts = []
        for post in subreddit.hot(limit=limit):
            posts.append({
                "title": post.title,
                "score": post.score,
                "url": post.url,
                "author": str(post.author),
                "id": post.id
            })

        # Ensure .tmp directory exists
        os.makedirs(".tmp", exist_ok=True)
        
        output_path = ".tmp/top_posts.json"
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(posts, f, indent=2)
            
        logging.info(f"Successfully saved {len(posts)} posts to {output_path}")

    except Exception as e:
        logging.error(f"Error fetching posts: {e}")

if __name__ == "__main__":
    fetch_top_posts()
