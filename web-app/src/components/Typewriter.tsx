import { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    className?: string;
}

export function Typewriter({ text, speed = 30, className = '' }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState(text); // Show full text immediately for LCP
    const [showCursor, setShowCursor] = useState(false);
    const hasAnimated = useRef(false);

    useEffect(() => {
        // Skip animation if already done or if user prefers reduced motion
        if (hasAnimated.current) return;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        // Defer animation until after page is fully interactive
        const startAnimation = () => {
            hasAnimated.current = true;
            setDisplayedText('');
            setShowCursor(true);
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    setDisplayedText(text.slice(0, i + 1));
                    i++;
                } else {
                    clearInterval(timer);
                    setTimeout(() => setShowCursor(false), 2000);
                }
            }, speed);
            return () => clearInterval(timer);
        };

        // Wait for browser to be idle before starting animation
        // This prevents blocking the main thread during page load
        const timeoutId = setTimeout(() => {
            if ('requestIdleCallback' in window) {
                (window as any).requestIdleCallback(startAnimation, { timeout: 3000 });
            } else {
                startAnimation();
            }
        }, 1500); // Delay 1.5s to ensure LCP/FCP are finished

        return () => clearTimeout(timeoutId);
    }, [text, speed]);

    return (
        <span className={`block min-h-[5em] ${className}`}>
            {displayedText.split('\n').map((line, i, arr) => (
                <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                </span>
            ))}
            {showCursor && (
                <span className="inline-block w-[2px] h-[1em] bg-current opacity-50 ml-[2px] align-middle animate-pulse" aria-hidden="true" />
            )}
        </span>
    );
}
