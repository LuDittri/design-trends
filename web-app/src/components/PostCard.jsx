import React from 'react';
import { MessageSquare, ThumbsUp, User, Image as ImageIcon } from 'lucide-react';

const getFallbackStyle = (subreddit) => {
    const sub = subreddit.toLowerCase();
    if (sub.includes('ui') || sub.includes('ux')) {
        return { background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)' }; // Blue/Cyan
    } else if (sub.includes('figma')) {
        return { background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)' }; // Purple/Pink
    } else if (sub.includes('design') || sub.includes('graphic')) {
        return { background: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)' }; // Orange/Red
    }
    return { background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)' }; // Slate
};

const PostCard = ({ post }) => {
    return (
        <a href={post.permalink} target="_blank" rel="noopener noreferrer" className="post-link">
            <div className="post-card">
                {/* Image Section */}
                <div className="post-image-container">
                    {post.image ? (
                        <img
                            src={post.image}
                            alt={post.title}
                            className="post-image"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                    ) : null}

                    {/* Fallback (visible if no image or error) */}
                    <div
                        className="post-image-fallback"
                        style={{
                            display: post.image ? 'none' : 'flex',
                            ...getFallbackStyle(post.subreddit)
                        }}
                    >
                        <span className="fallback-text">r/{post.subreddit}</span>
                    </div>
                </div>

                <div className="post-content">
                    <div className="post-meta">
                        <span className="post-subtitle">r/{post.subreddit}</span>
                        <span>{new Date(post.created_utc * 1000).toLocaleDateString()}</span>
                    </div>

                    <h3 className="post-title">{post.title}</h3>

                    <div className="post-stats">
                        <div className="stat">
                            <ThumbsUp />
                            <span>{post.score > 999 ? (post.score / 1000).toFixed(1) + 'k' : post.score}</span>
                        </div>
                        <div className="stat">
                            <MessageSquare />
                            <span>{post.num_comments}</span>
                        </div>
                        <div className="stat" style={{ marginLeft: 'auto' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <User size={14} />
                                <span className="author-name">{post.author}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default PostCard;
