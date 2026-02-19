interface TypewriterProps {
    text: string;
    speed?: number;
    className?: string;
}

export function Typewriter({ text, className = '' }: TypewriterProps) {
    // Render full text immediately — no JS animation to avoid CLS and forced reflows
    return (
        <span className={`block min-h-[5em] ${className}`}>
            {text.split('\n').map((line, i, arr) => (
                <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                </span>
            ))}
        </span>
    );
}
