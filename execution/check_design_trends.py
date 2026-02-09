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

TOPICS = {
    "UI/UX": ["UIUX", "UXDesign", "UI_Design"],
    "Figma": ["FigmaDesign"],
    "Graphic Design": ["graphic_design", "Design"]
}

def fetch_design_trends():
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
                    url = f"https://www.reddit.com/r/{sub_name}/top.json?t=week&limit=100"
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
                            
                            if images:
                                image_url = images[0]["source"]["url"].replace("&amp;", "&")
                            elif p_data.get("url", "").endswith((".jpg", ".jpeg", ".png", ".gif")):
                                image_url = p_data.get("url")
                            elif p_data.get("thumbnail") and p_data.get("thumbnail").startswith("http"):
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

            # Sort by score descending and take top 5
            topic_posts.sort(key=lambda x: x["score"], reverse=True)
            top_5 = topic_posts[:5]
            
            results[topic] = top_5

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
