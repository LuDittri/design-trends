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
                // Use BASE_URL to correctly fetch relative to the app root
                const baseUrl = import.meta.env.BASE_URL;
                const jsonPath = `${baseUrl}design_trends.json`.replace('//', '/'); // Avoid double slashes if base is './'
                const res = await fetch(jsonPath);
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
                        const numComments = Number(item.num_comments) || 0;
                        const score = Number(item.score) || 0;
                        const subreddit = item.subreddit || 'Design';

                        // Generate synthetic "AI" content since local JSON doesn't have it
                        const engagementLevel = score > 500 ? 'viral' : score > 100 ? 'popular' : 'de nicho';
                        const summary = `Uma discussão ${engagementLevel} no r/${subreddit} sobre "${item.title}". A comunidade de design reagiu com ${score} upvotes e ${numComments} comentários.`;
                        const whyItMatters = `Este tópico reflete tendências atuais em ${category}. A alta taxa de engajamento (${score} pontos) sugere que é um ponto de dor ou interesse comum entre profissionais da área.`;

                        const post: Post = {
                            id: item.permalink?.split('/').filter(Boolean).slice(-2, -1)[0] || Math.random().toString(36).substr(2, 9),
                            title: item.title,
                            subtitle: `r/${subreddit} • ${new Date(item.created_utc * 1000).toLocaleDateString()}`,
                            category: category,
                            image: item.image || item.url || '',
                            date: new Date(item.created_utc * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                            tags: [subreddit, category, 'Design Trend'],
                            content: {
                                intro: summary,
                                whyItMatters: whyItMatters,
                                paragraphs: [
                                    `A discussão original foi iniciada por u/${item.author} e rapidamente ganhou tração.`,
                                    `Com ${numComments} comentários, designers estão debatendo ativamente sobre o tema.`,
                                    'Para entender todos os detalhes e participar, acesse a thread original no Reddit clicando abaixo.',
                                ],
                            },
                            url: item.permalink?.startsWith('http') ? item.permalink : `https://www.reddit.com${item.permalink}`,
                            featured: score > 300,
                            week_number: 1,
                            fetched_at: new Date().toISOString(),
                            num_comments: numComments,
                            score: score,
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
