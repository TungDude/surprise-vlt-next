"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";

function Header() {
    const pathName = usePathname();
    const [Play, setPlay] = useState(true);

    const getText = () => {
        if (pathName === "/") {
            return "❤️ Welcome!!! ❤️";
        } else if (pathName.startsWith("/valentine")) {
            return "❤️ Happy Valentine's day ❤️";
        } else {
            return `❤️ ${pathName} ❤️`;
        }
    };

    const text = getText();

    // Start the animation after 8 seconds
    useEffect(() => {
        const interval = setInterval(() => setPlay(true), 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <p className="text-vary font-semibold text-purple-700 cursor-pointer">
            {text.split("").map((char, index) => {
                return (
                    <span
                        key={index}
                        className={cn(
                            "inline-block", 
                            Play && "animate-jump-sequence",
                            char === " " && "w-2", 
                            (index === 0 || index === text.length - 2) && "text-red-600", 
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
