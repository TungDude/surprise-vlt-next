"use client"
import { useEffect, useState } from 'react';

interface TypingTextProps {
    message: string,
    onDone: () => void,
}

const TypingText = ({ message, onDone }: TypingTextProps) => {
    const speed = 100;
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < message.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + message[index]);
                setIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }

        onDone();
    }, [index, message, speed]);

    return (
        <div
            className="text-vary text-black bg-white rounded-md p-4 w-full max-w-2xl">
            <span
                className="whitespace-pre-wrap break-words"
            >
                {displayedText}
            </span>
            <span
                className="animate-blinker"
            >
                |
            </span>
        </div>

    );
};

export default TypingText;