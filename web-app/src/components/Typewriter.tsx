import { useState, useEffect } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    className?: string;
}

export function Typewriter({ text, speed = 30, className = '' }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
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
