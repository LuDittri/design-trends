import React, { createContext, useContext, useState, useEffect } from 'react';
import { Post } from '../lib/data';

interface DataContextType {
    posts: Post[];
    loading: boolean;
    error: string | null;
}

const DataContext = createContext<DataContextType>({
    posts: [],
    loading: true,
    error: null,
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/design_trends.json')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch data');
                return res.json();
            })
            .then((data) => {
                const allPosts: Post[] = [];

                Object.entries(data).forEach(([category, items]: [string, any[]]) => {
                    items.forEach((item) => {
                        // Map JSON to Post interface
                        // Clean up title (remove emoji if wanted, or keep)
                        const title = item.title;

                        // Generate basic content from metadata since backend doesn't provide body
                        const intro = item.title;
                        const whyItMatters = `Trending in r/${item.subreddit} with ${item.score} upvotes.`;
                        const paragraphs = [
                            `This post by u/${item.author} has generated ${item.num_comments} comments.`,
                            "Click the button below to view the full discussion and image on Reddit."
                        ];

                        const post: Post = {
                            id: item.permalink.split('/').slice(-2, -1)[0] || Math.random().toString(36).substr(2, 9),
                            title: title,
                            subtitle: `r/${item.subreddit} • ${new Date(item.created_utc * 1000).toLocaleDateString()}`,
                            category: category,
                            image: item.image || item.url || '', // Fallback to url if image is null (might be a direct link image)
                            date: new Date(item.created_utc * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                            readTime: '5 min read', // Default
                            tags: [item.subreddit, 'Design', 'Trend'],
                            content: {
                                intro,
                                whyItMatters,
                                paragraphs
                            },
                            url: item.permalink,
                            // Persist original url for "Read on Reddit"
                            // We might need to extend Post interface if we want to store the raw URL strictly, 
                            // but for now we can maybe map it? 
                            // Wait, the Post interface doesn't have 'url'. 
                            // I should probably add it or use a trick.
                            // But I can't change the interface per "strict" rules? 
                            // Actually, adding an optional field to interface in data.ts is probably safe/necessary 
                            // if I want to use it in the Post component without breaking types.
                            // OR I can overload one of the existing fields? No, that's bad.
                            // I will add optional `url?: string` to Post interface in data.ts as a justified minimal change.
                        };
                        allPosts.push(post);
                    });
                });

                // Sort by date or score? Backend sorts by score within categories.
                // Let's shuffle or just keep them? The prompt implies "Top 5".
                // Flattened list might need sorting if we want a global "Latest" feed.
                // But the Home page slices them. 
                // Let's just set them.
                setPosts(allPosts);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <DataContext.Provider value={{ posts, loading, error }}>
            {children}
        </DataContext.Provider>
    );
};
