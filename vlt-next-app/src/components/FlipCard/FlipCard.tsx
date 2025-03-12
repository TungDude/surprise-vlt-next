"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FlipCardProps {
    imgSrc: string;
    text?: string;
    onClick?: () => void;
}

function FlipCard({ imgSrc, text, onClick }: FlipCardProps) {
    const [clicked, setClicked] = useState(false);

    const handleCardClick = () => {
        setClicked(prev => !prev);
        if (onClick) {
            onClick();
        }
    };

    return (
        <div
            onClick={handleCardClick}
            className="w-full aspect-w-4 aspect-h-5 bg-transparent cursor-pointer group rounded-2xl perspective-[1000px] hover:shadow-xl"
        >
            <div className={cn(
                "w-full h-full transform-3d transition-transform duration-600",
                clicked ? "animate-flip" : "animate-unflip",
            )}>
                <div
                    className="w-full h-full absolute rounded-2xl overflow-hidden backface-hidden"
                >
                    <Image
                        src={imgSrc}
                        alt="Image"
                        width={288}
                        height={288}
                        className="w-full h-auto"
                    />
                </div>
                <div
                    className="flex justify-center items-center absolute w-full h-full bg-black text-white rounded-2xl overflow-hidden backface-hidden rotate-y-180"
                >
                    <span
                        className="text-vary"
                    >
                        {text}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;