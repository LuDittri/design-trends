import os
import json
import requests
import time
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

load_dotenv()

# Reddit OAuth credentials
REDDIT_CLIENT_ID = os.environ.get("REDDIT_CLIENT_ID", "")
REDDIT_CLIENT_SECRET = os.environ.get("REDDIT_CLIENT_SECRET", "")

TOPICS = {
    "UI/UX": ["UIUX", "UXDesign", "UI_Design"],
    "Figma": ["FigmaDesign"],
    "Graphic Design": ["graphic_design", "Design", "designBR"],
    "Design Industrial": ["IndustrialDesign", "3Dprinting", "Impressao3D", "3Dmodeling", "3Drequests", "blender"]
}

def get_reddit_token():
    """Get OAuth token from Reddit using client credentials."""
    if not REDDIT_CLIENT_ID or not REDDIT_CLIENT_SECRET:
        logging.warning("No Reddit OAuth credentials found. Using unauthenticated requests.")
        return None
    
    auth = requests.auth.HTTPBasicAuth(REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET)
    data = {"grant_type": "client_credentials"}
    headers = {"User-Agent": "script:design_trends:v2.0 (by /u/ditrstudio)"}
    
    try:
        response = requests.post("https://www.reddit.com/api/v1/access_token", auth=auth, data=data, headers=headers)
        if response.status_code == 200:
            token = response.json().get("access_token")
            logging.info("✅ Reddit OAuth token obtained successfully")
            return token
        else:
            logging.error(f"Failed to get Reddit token: {response.status_code} - {response.text}")
            return None
    except Exception as e:
        logging.error(f"Error getting Reddit token: {e}")
        return None

def fetch_design_trends():
    # Get OAuth token
    token = get_reddit_token()
    
    if token:
        # Use authenticated API (oauth.reddit.com)
        base_url = "https://oauth.reddit.com"
        headers = {
            "Authorization": f"Bearer {token}",
            "User-Agent": "script:design_trends:v2.0 (by /u/ditrstudio)"
        }
    else:
        # Fallback: unauthenticated (works from residential IPs only)
        base_url = "https://www.reddit.com"
        headers = {
            "User-Agent": "script:design_trends_public:v1.0 (by /u/anonymous)"
        }
    
    results = {}
    
    try:
        for topic, subreddits in TOPICS.items():
            logging.info(f"Processing topic: {topic}")
            topic_posts = []
            
            for sub_name in subreddits:
                logging.info(f"  Fetching top posts from r/{sub_name}...")
                try:
                    # Fetch 'top' posts of the week (User Business Rule: Top 100)
                    url = f"{base_url}/r/{sub_name}/top.json?t=week&limit=100"
                    response = requests.get(url, headers=headers)
                    
                    if response.status_code == 200:
                        data = response.json()
                        posts = data.get("data", {}).get("children", [])
                        
                        for post in posts:
                            p_data = post.get("data", {})
                            
                            # Extract best image
                            image_url = None
                            preview = p_data.get("preview", {})
                            images = preview.get("images", [])
                            media_metadata = p_data.get("media_metadata", {})

                            if media_metadata:
                                # Handle Reddit Gallery
                                first_id = list(media_metadata.keys())[0]
                                media = media_metadata[first_id]
                                if "s" in media and "u" in media["s"]:
                                    image_url = media["s"]["u"].replace("&amp;", "&")
                            
                            if not image_url and images:
                                image_url = images[0]["source"]["url"].replace("&amp;", "&")
                            elif not image_url and p_data.get("url", "").endswith((".jpg", ".jpeg", ".png", ".gif")):
                                image_url = p_data.get("url")
                            elif not image_url and p_data.get("thumbnail") and p_data.get("thumbnail").startswith("http"):
                                image_url = p_data.get("thumbnail")

                            topic_posts.append({
                                "title": p_data.get("title"),
                                "score": p_data.get("score"),
                                "url": p_data.get("url"),
                                "subreddit": sub_name,
                                "author": p_data.get("author"),
                                "num_comments": p_data.get("num_comments"),
                                "created_utc": p_data.get("created_utc"),
                                "permalink": f"https://www.reddit.com{p_data.get('permalink')}",
                                "image": image_url
                            })
                    elif response.status_code == 429:
                        logging.warning(f"    Rate limited on r/{sub_name}. Waiting 5 seconds...")
                        time.sleep(5)
                    else:
                        logging.error(f"    Failed to fetch r/{sub_name}: {response.status_code}")
                        
                    # Be nice to the API
                    time.sleep(1)
                    
                except Exception as e:
                    logging.error(f"    Error fetching r/{sub_name}: {e}")

            # Sort by score descending and take top 10
            topic_posts.sort(key=lambda x: x["score"], reverse=True)
            top_10 = topic_posts[:10]
            
            results[topic] = top_10
            
        # Validate that we actually got data
        total_posts = sum(len(posts) for posts in results.values())
        if total_posts == 0:
            raise Exception("No data fetched from Reddit! Possible IP block or API issue.")

        # Save results to .tmp (internal use)
        os.makedirs(".tmp", exist_ok=True)
        tmp_output_path = ".tmp/design_trends.json"
        with open(tmp_output_path, "w", encoding="utf-8") as f:
            json.dump(results, f, indent=2)
            
        # Save results to web-app public folder (for frontend)
        web_app_output_path = "web-app/public/design_trends.json"
        # Ensure directory exists just in case
        os.makedirs("web-app/public", exist_ok=True)
        with open(web_app_output_path, "w", encoding="utf-8") as f:
            json.dump(results, f, indent=2)

        logging.info(f"Successfully saved trends to {tmp_output_path} and {web_app_output_path}")
        
    except Exception as e:
        logging.critical(f"Critical error: {e}")

if __name__ == "__main__":
    fetch_design_trends()
