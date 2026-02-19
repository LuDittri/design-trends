import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { UpvoteIcon } from './Icons';

// 12 gradient patterns for visual variety
const GRADIENT_PATTERNS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
  'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  'linear-gradient(135deg, #0c3483 0%, #a2b6df 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
  'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
];

function getGradient(id: string): string {
  // Deterministic gradient based on post id hash
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return GRADIENT_PATTERNS[Math.abs(hash) % GRADIENT_PATTERNS.length];
}

function extractCommunity(subtitle?: string): string {
  if (!subtitle) return 'Design';
  const match = subtitle.match(/r\/([^\s•]+)/);
  return match ? `r/${match[1]}` : 'Design';
}

interface TrendCardProps {
  id: string;
  title: string;
  category: string;
  image: string;

  subtitle?: string;
  numComments?: number;
  score?: number;
  className?: string;
  size?: 'small' | 'large';
  hideArrow?: boolean;
}

export function TrendCard({
  id,
  title,
  category,
  image,

  subtitle,
  numComments,
  score,
  className = '',
  size = 'small',
  hideArrow = false
}: TrendCardProps) {

  const hasImage = image && image.trim() !== '' && !image.startsWith('https://www.reddit.com') && !image.endsWith('.com') && !image.endsWith('.com/');
  const community = extractCommunity(subtitle);

  return (
    <Link to={`/post/${id}`} className={`group relative block overflow-hidden rounded-[24px] ${className}`}>
      {/* Background: Image or Gradient */}
      <div className="absolute inset-0 z-0">
        {hasImage ? (
          <>
            <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
          </>
        ) : (
          <div
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
            style={{ background: getGradient(id) }}
          >
            {/* Decorative pattern overlay */}
            <div className="absolute inset-0 opacity-[0.08]" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                radial-gradient(circle at 80% 20%, white 1px, transparent 1px),
                                radial-gradient(circle at 60% 80%, white 1px, transparent 1px)`,
              backgroundSize: '60px 60px, 80px 80px, 40px 40px',
            }} />
            {/* Community name - top center */}
            <div
              className={`absolute top-6 left-0 right-0 w-full z-[1] font-bold tracking-tight select-none text-center ${size === 'large' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}
              style={{ color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.45), 0 0 12px rgba(0,0,0,0.2)' }}
            >
              {community}
            </div>
          </div>
        )}
      </div>

      {/* Top Right Arrow */}
      {!hideArrow && (
        <div className="absolute top-6 right-6 z-10">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 shadow-sm">
            <ArrowUpRight className="w-4 h-4 text-black" />
          </div>
        </div>
      )}

      {/* Bottom Content / Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="bg-black/40 backdrop-blur-md rounded-[16px] p-4 border border-white/10">

          {/* Header of card content */}
          <div className="flex items-center justify-between mb-3">
            <div className="px-3 py-1 rounded-full bg-white/20 border border-white/20 text-xs font-medium text-white backdrop-blur-sm">
              {category}
            </div>

            {/* Fake stats mimicking the screenshot */}
            <div className="flex items-center gap-2 bg-white/20 border border-white/20 rounded-md px-2 py-1">
              <div className="flex items-center gap-1 text-[10px] text-white/90 font-medium">
                <MessageSquare className="w-3 h-3" />
                <span>{numComments != null ? (numComments >= 1000 ? `${(numComments / 1000).toFixed(1)}k` : numComments) : '—'}</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-white/90 font-medium border-l border-white/20 pl-2">
                <UpvoteIcon className="w-3 h-3" />
                <span>{score != null ? (score >= 1000 ? `${(score / 1000).toFixed(1)}k` : score) : '—'}</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <div>
            <h3 className={`text-white font-bold leading-tight ${size === 'large' ? 'text-2xl' : 'text-xl'}`}>
              {title}
            </h3>
          </div>

        </div>
      </div>
    </Link>
  );
}
