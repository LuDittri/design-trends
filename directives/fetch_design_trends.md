# Directive: Fetch Design Trends

**Goal**: Fetch the top design-related posts from Reddit, grouped by topic, focusing on high engagement from the current week.

**Topics & Subreddits**:
1.  **UI/UX**: `r/UIUX`, `r/UXDesign`, `r/UI_Design`
2.  **Figma**: `r/FigmaDesign`
3.  **Graphic Design**: `r/graphic_design`, `r/Design`

**Process**:
1.  For each topic, iterate through its subreddits.
2.  Use the public Reddit JSON API (`https://www.reddit.com/r/{subreddit}/top.json?t=week&limit=100`).
    *   *Note*: This avoids authentication but is subject to stricter rate limits.
3.  Consolidate posts per topic.
4.  Sort consolidated list by score (descending).
5.  Extract the top 5 posts for each topic.

**Output**:
- JSON file: `.tmp/design_trends.json`
- Structure:
  ```json
  {
    "UI/UX": [ ...top 5 posts... ],
    "Figma": [ ...top 5 posts... ],
    "Graphic Design": [ ...top 5 posts... ]
  }
  ```
