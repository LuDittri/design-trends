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
                // Try Supabase first (only if client is configured)
                if (supabase) {
                    const { data: supabasePosts, error: supabaseError } = await supabase
                        .from('posts')
                        .select('reddit_id,title,subreddit,category,image_url,created_utc,author,score,num_comments,ai_summary,ai_why_it_matters,ai_tags,permalink,featured,week_number,fetched_at')
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
                    console.warn('Supabase empty or error, falling back to local JSON...', supabaseError?.message);
                } else {
                    console.warn('Supabase client not configured, falling back to local JSON...');
                }

                await fetchLocalJSON();
            } catch (err) {
                console.error('Supabase fetch failed, trying local JSON...', err);
                await fetchLocalJSON();
            }
        }

        async function fetchLocalJSON() {
            try {
                if (!supabase) {
                    const errorMessage = 'Supabase client not configured. Cannot fetch posts.';
                    console.error(errorMessage);
                    setError(errorMessage);
                    return;
                }

            } catch (err: any) {
                console.error('Error fetching posts:', err);
                setError(err.message || 'An unexpected error occurred while fetching posts.');
            } finally {
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
