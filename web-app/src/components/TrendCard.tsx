import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight, MessageSquare, ThumbsUp } from 'lucide-react';

interface TrendCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  date: string;
  className?: string;
  size?: 'small' | 'large';
  hideArrow?: boolean;
}

export function TrendCard({ 
  id, 
  title, 
  category, 
  image, 
  date,
  className = '',
  size = 'small',
  hideArrow = false
}: TrendCardProps) {
  
  return (
    <Link to={`/post/${id}`} className={`group relative block overflow-hidden rounded-[24px] ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
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
                  <span>4.0k</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-white/90 font-medium border-l border-white/20 pl-2">
                  <ThumbsUp className="w-3 h-3" />
                  <span>85</span>
                </div>
             </div>
          </div>

          {/* Title and Meta */}
          <div className="flex items-end justify-between">
             <h3 className={`text-white font-bold leading-tight ${size === 'large' ? 'text-2xl' : 'text-xl'}`}>
               {title}
             </h3>
             
             <div className="flex items-center gap-2">
                <span className="text-xs text-white/80">{date}</span>
             </div>
          </div>

        </div>
      </div>
    </Link>
  );
}
