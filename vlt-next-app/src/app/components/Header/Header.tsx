"use client";
import { useState, useEffect } from "react";

function Header() {
    const [Play, setPlay] = useState(true);
    const text = "❤️ Happy Valentine's Day ❤️";

    // Start the animation after 5 seconds
    useEffect(() => {
        const interval = setInterval(() => setPlay(true), 8000);
        return () => clearInterval(interval);
    }, []);

    // Function to add specific styles for spaces
    const getCharacterStyle = (char: string, index: number) => {
        const isSpace = char === " ";
        const isHeart = char === "❤️";
        const isRedHeart = index % 25 === 0;

        return {
            className: `inline-block ${Play ? "animate-jump-sequence" : ""} ${isSpace ? "w-2" : ""} ${isRedHeart ? "text-red-600" : ""} ${isHeart ? "text-inherit" : ""}`,
            style: { animationDelay: `${index * 0.1}s` },
        };
    };

    return (
        <p className="text-4xl font-semibold text-purple-700 cursor-pointer">
            {text.split("").map((char, index) => {
                const { className, style } = getCharacterStyle(char, index);
                return (
                    <span
                        key={index}
                        className={className}
                        style={style}
                        onAnimationEnd={() => index === text.length - 1 && setPlay(false)}
                    >
                        {char}
                    </span>
                );
            })}
        </p>
    );
}

export default Header;
