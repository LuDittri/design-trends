import { useRef, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    className?: string;
}

export function Typewriter({ text, speed = 30, className = '' }: TypewriterProps) {
    const containerRef = useRef<HTMLSpanElement>(null);
    const cursorRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = containerRef.current;
        const cursor = cursorRef.current;
        if (!el || hasAnimated.current) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const startAnimation = () => {
            if (!el || hasAnimated.current) return;
            hasAnimated.current = true;

            // Lock current height to prevent any CLS when clearing text
            const rect = el.getBoundingClientRect();
            el.style.minHeight = `${rect.height}px`;

            // Show cursor
            if (cursor) cursor.style.display = 'inline-block';

            // Clear text and animate with direct DOM manipulation (zero React re-renders)
            el.childNodes.forEach(node => {
                if (node !== cursor) {
                    node.textContent = '';
                }
            });

            let i = 0;
            let lastTime = 0;
            const textNode = el.firstChild as Text;
            if (!textNode || textNode === cursor) {
                // Create a text node if needed
                const newNode = document.createTextNode('');
                el.insertBefore(newNode, cursor);
            }
            const targetNode = (el.firstChild as Text);

            const animate = (timestamp: number) => {
                if (!lastTime) lastTime = timestamp;
                if (timestamp - lastTime >= speed) {
                    if (i < text.length) {
                        targetNode.textContent = text.slice(0, i + 1);
                        i++;
                        lastTime = timestamp;
                    } else {
                        // Animation complete — hide cursor after 2s
                        setTimeout(() => {
                            if (cursor) cursor.style.display = 'none';
                        }, 2000);
                        return;
                    }
                }
                requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        };

        // Delay animation until well after page load (after LCP/CLS measurement window)
        const timeoutId = setTimeout(() => {
            if ('requestIdleCallback' in window) {
                (window as any).requestIdleCallback(startAnimation, { timeout: 5000 });
            } else {
                startAnimation();
            }
        }, 2500);

        return () => clearTimeout(timeoutId);
    }, [text, speed]);

    return (
        <span className={`block min-h-[5em] ${className}`} ref={containerRef}>
            {text}
            <span
                ref={cursorRef}
                className="w-[2px] h-[1em] bg-current opacity-50 ml-[2px] align-middle animate-pulse"
                style={{ display: 'none' }}
                aria-hidden="true"
            />
        </span>
    );
}
