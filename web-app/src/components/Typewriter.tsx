import { useRef, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    className?: string;
}

export function Typewriter({ text, speed = 30, className = '' }: TypewriterProps) {
    const textRef = useRef<HTMLSpanElement>(null);
    const cursorRef = useRef<HTMLSpanElement>(null);
    const wrapperRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const textEl = textRef.current;
        const cursorEl = cursorRef.current;
        const wrapperEl = wrapperRef.current;
        if (!textEl || !wrapperEl || hasAnimated.current) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const timeoutId = setTimeout(() => {
            if (hasAnimated.current) return;
            hasAnimated.current = true;

            // Lock wrapper height to prevent any CLS
            const rect = wrapperEl.getBoundingClientRect();
            wrapperEl.style.minHeight = `${rect.height}px`;

            // Show cursor
            if (cursorEl) cursorEl.style.display = 'inline-block';

            // Clear text and animate via direct DOM (zero React re-renders)
            textEl.textContent = '';
            let i = 0;
            let lastTime = 0;

            const animate = (timestamp: number) => {
                if (!lastTime) lastTime = timestamp;
                if (timestamp - lastTime >= speed) {
                    if (i < text.length) {
                        i++;
                        textEl.textContent = text.slice(0, i);
                        lastTime = timestamp;
                    } else {
                        // Animation done — hide cursor after 2s
                        setTimeout(() => {
                            if (cursorEl) cursorEl.style.display = 'none';
                        }, 2000);
                        return;
                    }
                }
                requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        }, 2500);

        return () => clearTimeout(timeoutId);
    }, [text, speed]);

    return (
        <span className={`block min-h-[5em] ${className}`} ref={wrapperRef}>
            <span ref={textRef}>{text}</span>
            <span
                ref={cursorRef}
                className="inline-block w-[2px] h-[1em] bg-current opacity-50 ml-[2px] align-middle animate-pulse"
                style={{ display: 'none' }}
                aria-hidden="true"
            />
        </span>
    );
}
