import React, { createContext, useContext, useState, useEffect } from 'react';
import { Post } from '../lib/data';
import { supabase } from '../lib/supabase';

interface WeekInfo {
    week_number: number;
    fetched_at: string;
}

interface SupabasePost {
    reddit_id: string;
    title: string;
    subreddit: string;
    category: string;
    image_url: string | null;
    created_utc: string;
    author: string;
    score: number;
    num_comments: number;
    ai_summary: string | null;
    ai_why_it_matters: string | null;
    ai_tags: string[] | null;
    permalink: string;
    featured: boolean;
    week_number: number;
    fetched_at: string;
}

interface DataContextType {
    posts: Post[];
    allPosts: Post[];
    loading: boolean;
    error: string | null;
    availableWeeks: WeekInfo[];
    selectedWeek: number | null;
    setSelectedWeek: (week: number) => void;
}

const DataContext = createContext<DataContextType>({
    posts: [],
    allPosts: [],
    loading: true,
    error: null,
    availableWeeks: [],
    selectedWeek: null,
    setSelectedWeek: () => { },
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [allPosts, setAllPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
    const [availableWeeks, setAvailableWeeks] = useState<WeekInfo[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                // Try Supabase first
                const { data: supabasePosts, error: supabaseError } = await supabase
                    .from('posts')
                    .select('*')
                    .order('score', { ascending: false });

                if (!supabaseError && supabasePosts && supabasePosts.length > 0) {
                    // Map Supabase data to Post interface
                    const mappedPosts: Post[] = supabasePosts.map((item: SupabasePost) => ({
                        id: item.reddit_id,
                        title: item.title,
                        subtitle: `r/${item.subreddit} • ${new Date(item.created_utc).toLocaleDateString()}`,
                        category: item.category,
                        image: item.image_url || '',
                        date: new Date(item.created_utc).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                        }),
                        tags: item.ai_tags || [item.subreddit, 'Design'],
                        content: {
                            intro: item.ai_summary || item.title,
                            whyItMatters: item.ai_why_it_matters || `Trending em r/${item.subreddit} com ${item.score} upvotes.`,
                            paragraphs: [
                                `Este post de u/${item.author} gerou ${item.num_comments} comentários.`,
                                'Clique no botão abaixo para ver a discussão completa no Reddit.',
                            ],
                        },
                        url: item.permalink?.startsWith('http') ? item.permalink : `https://www.reddit.com${item.permalink}`,
                        featured: item.featured || false,
                        week_number: item.week_number,
                        fetched_at: item.fetched_at,
                        num_comments: item.num_comments || 0,
                        score: item.score || 0,
                    }));

                    // Extract available weeks with their dates
                    const weeksMap = new Map<number, string>();
                    mappedPosts.forEach(p => {
                        if (p.week_number && p.fetched_at && !weeksMap.has(p.week_number)) {
                            weeksMap.set(p.week_number, p.fetched_at);
                        }
                    });

                    const weeks: WeekInfo[] = Array.from(weeksMap.entries())
                        .map(([week_number, fetched_at]) => ({ week_number, fetched_at }))
                        .sort((a, b) => b.week_number - a.week_number);

                    setAvailableWeeks(weeks);
                    setAllPosts(mappedPosts);

                    // Default to the latest week
                    if (weeks.length > 0) {
                        setSelectedWeek(weeks[0].week_number);
                    }

                    setLoading(false);
                    return;
                }

                // Fallback: local JSON file
                console.warn('Supabase empty or error, falling back to local JSON...', supabaseError?.message);
                await fetchLocalJSON();
            } catch (err) {
                console.error('Supabase fetch failed, trying local JSON...', err);
                await fetchLocalJSON();
            }
        }

        async function fetchLocalJSON() {
            try {
                const res = await fetch('/design_trends.json');
                if (!res.ok) throw new Error('Failed to fetch local data');
                const data = await res.json();
                const allLocalPosts: Post[] = [];

                interface LocalJsonPost {
                    permalink?: string;
                    title: string;
                    subreddit: string;
                    created_utc: number;
                    image?: string;
                    url?: string;
                    score: number;
                    num_comments: number;
                    author: string;
                }

                Object.entries(data).forEach(([category, items]) => {
                    (items as LocalJsonPost[]).forEach((item) => {
                        const post: Post = {
                            id: item.permalink?.split('/').slice(-2, -1)[0] || Math.random().toString(36).substr(2, 9),
                            title: item.title,
                            subtitle: `r/${item.subreddit} • ${new Date(item.created_utc * 1000).toLocaleDateString()}`,
                            category: category,
                            image: item.image || item.url || '',
                            date: new Date(item.created_utc * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                            tags: [item.subreddit, 'Design', 'Trend'],
                            content: {
                                intro: item.title,
                                whyItMatters: `Trending in r/${item.subreddit} with ${item.score} upvotes.`,
                                paragraphs: [
                                    `This post by u/${item.author} has generated ${item.num_comments} comments.`,
                                    'Click the button below to view the full discussion and image on Reddit.',
                                ],
                            },
                            url: item.permalink?.startsWith('http') ? item.permalink : `https://www.reddit.com${item.permalink}`,
                            week_number: 1,
                            fetched_at: new Date().toISOString(),
                        };
                        allLocalPosts.push(post);
                    });
                });

                setAllPosts(allLocalPosts);
                setAvailableWeeks([{ week_number: 1, fetched_at: new Date().toISOString() }]);
                setSelectedWeek(1);
                setLoading(false);
            } catch (err: any) {
                console.error(err);
                setError(err.message);
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    // Filter posts by selected week
    const posts = selectedWeek
        ? allPosts.filter(p => p.week_number === selectedWeek)
        : allPosts;

    return (
        <DataContext.Provider value={{ posts, allPosts, loading, error, availableWeeks, selectedWeek, setSelectedWeek }}>
            {children}
        </DataContext.Provider>
    );
};
