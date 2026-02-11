import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  intensity?: number;
}

export function ParallaxImage({ src, alt, className = "", intensity = 0.3 }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${intensity * 100}%`]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.div 
        style={{ y, scale }}
        className="w-full h-[120%] absolute top-0 left-0"
      >
        <ImageWithFallback 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
