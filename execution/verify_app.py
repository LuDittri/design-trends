from playwright.sync_api import sync_playwright
import time
import os

def verify_app():
    print("Starting verification..." )
    try:
        with sync_playwright() as p:
            print("Launching browser...")
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            
            print("Navigating to http://localhost:5173...")
            page.goto("http://localhost:5173")
            
            # Wait for content to load
            print("Waiting for content...")
            page.wait_for_selector(".post-card", timeout=10000)
            
            # Check title
            title = page.title()
            print(f"Page Title: {title}")
            
            # Check tabs
            tabs = page.query_selector_all(".tab-btn")
            print(f"Found {len(tabs)} tabs")
            
            # Check active tab content
            cards = page.query_selector_all(".post-card")
            print(f"Found {len(cards)} post cards in current tab")
            
            # Take screenshot
            os.makedirs(".tmp", exist_ok=True)
            screenshot_path = ".tmp/app_verification.png"
            page.screenshot(path=screenshot_path)
            print(f"Screenshot saved to {screenshot_path}")
            
            # Specific checks
            first_card_title = cards[0].query_selector(".post-title").inner_text()
            print(f"First card title: {first_card_title}")
            
            browser.close()
            print("Verification successful!")
            
    except Exception as e:
        print(f"Verification failed: {e}")

if __name__ == "__main__":
    verify_app()
