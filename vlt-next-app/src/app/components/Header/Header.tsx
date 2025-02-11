"use client";
import { useState, useEffect } from "react";
import { cn } from "@/app/lib/utils";

function Header() {
    const [Play, setPlay] = useState(true);
    const text = "❤️ Happy Valentine's Day ❤️";

    // Start the animation after 8 seconds
    useEffect(() => {
        const interval = setInterval(() => setPlay(true), 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-700 cursor-pointer">
            {text.split("").map((char, index) => {
                return (
                    <span
                        key={index}
                        className={cn(
                            "inline-block", 
                            Play && "animate-jump-sequence",
                            char === " " && "w-2", 
                            index % 25 === 0 && "text-red-600", 
                            char === "❤️" && "text-inherit",
                        )}
                        style={{
                            animationDelay: `${index * 0.1}s`, 
                        }}
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
