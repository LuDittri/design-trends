import requests
import concurrent.futures
import time
import json
from datetime import datetime

# Configuration
SITE_URL = "https://designtrends.ditr.studio"
JSON_URL = f"{SITE_URL}/design_trends.json"
NUM_REQUESTS = 50  # Total requests to JSON endpoint
CONCURRENT_USERS = 10  # Simultaneous threads

def check_json(session, request_id):
    start = time.time()
    try:
        response = session.get(JSON_URL, timeout=5)
        duration = time.time() - start
        if response.status_code == 200:
            try:
                data = response.json()
                return {"id": request_id, "status": "success", "duration": duration, "data": data}
            except json.JSONDecodeError:
                return {"id": request_id, "status": "failed", "error": "Invalid JSON", "duration": duration}
        else:
            return {"id": request_id, "status": "failed", "error": f"Status {response.status_code}", "duration": duration}
    except Exception as e:
        return {"id": request_id, "status": "failed", "error": str(e), "duration": time.time() - start}

def check_image(url):
    try:
        response = requests.head(url, timeout=3)
        return {"url": url, "status": response.status_code}
    except:
        return {"url": url, "status": "error"}

def run_stress_test():
    print(f"🔥 Starting Stress Test on {SITE_URL}")
    print(f"👥 Simulating {CONCURRENT_USERS} concurrent users making {NUM_REQUESTS} total requests...")
    
    session = requests.Session()
    results = []
    
    # 1. Stress Test JSON Endpoint
    start_time = time.time()
    with concurrent.futures.ThreadPoolExecutor(max_workers=CONCURRENT_USERS) as executor:
        futures = [executor.submit(check_json, session, i) for i in range(NUM_REQUESTS)]
        for future in concurrent.futures.as_completed(futures):
            results.append(future.result())
            
    total_time = time.time() - start_time
    
    # Analyze Results
    successes = [r for r in results if r['status'] == 'success']
    failures = [r for r in results if r['status'] == 'failed']
    avg_duration = sum(r['duration'] for r in successes) / len(successes) if successes else 0
    
    print(f"\n📊 JSON Endurance Results:")
    print(f"✅ Success Rate: {len(successes)}/{NUM_REQUESTS} ({len(successes)/NUM_REQUESTS*100:.1f}%)")
    print(f"❌ Failures: {len(failures)}")
    print(f"⏱️ Avg Latency: {avg_duration*1000:.2f}ms")
    print(f"🚀 Total Time: {total_time:.2f}s")
    
    if failures:
        print("\n⚠️ Failure Samples:")
        for f in failures[:3]:
            print(f"  - {f['error']}")

    # 2. Check Image Hotlinking (Crucial for this architecture)
    if successes:
        print("\n🖼️ Checking Image Hotlinking Resilience...")
        data = successes[0]['data']
        image_urls = []
        for category in data.values():
            for post in category:
                if post.get('image'):
                    image_urls.append(post['image'])
        
        # Deduplicate
        image_urls = list(set(image_urls))
        print(f"Found {len(image_urls)} unique images. Checking accessibility...")
        
        with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
            img_results = list(executor.map(check_image, image_urls))
            
        valid_images = [i for i in img_results if i['status'] == 200]
        blocked_images = [i for i in img_results if i['status'] in [403, 429]]
        
        print(f"✅ Accessible Images: {len(valid_images)}/{len(image_urls)}")
        if blocked_images:
            print(f"⚠️ BLOCKED Images (Hotlinking protection?): {len(blocked_images)}")
            print("  This suggests Reddit might limit traffic from this domain.")
        else:
            print("🎉 No hotlinking blocks detected (yet).")

if __name__ == "__main__":
    run_stress_test()
