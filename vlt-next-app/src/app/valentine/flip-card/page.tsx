"use client";
import { useState } from "react";
import ProtectedRoute from "@/app/components/ProtectedRoute/ProtectedRoute";
import FlipCard from "@/app/components/FlipCard/FlipCard";
import Button from "@/app/components/Button/Button";

export default function FlipCardsPage() {
    const flipCardsData = [
        { imgSrc: "/images/h_1.jpg", text: "I" },
        { imgSrc: "/images/h_2.jpg", text: "Love" },
        { imgSrc: "/images/h_3.jpg", text: "You" },
        { imgSrc: "/images/h_4.jpg", text: "Ma jiw 🐶" },
    ];

    const [clicked, setClicked] = useState<Record<number, boolean>>(
        Object.fromEntries(flipCardsData.map((_, index) => [index, false])) // Dynamically initialize state
    );

    const allClicked = Object.values(clicked).every(Boolean);

    const handleUpdateClicked = (index: number) => {
        setClicked(prev => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <ProtectedRoute>
            <div
                className="grid grid-cols-2 gap-2 p-2 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px]"
            >
                {flipCardsData.map(({ imgSrc, text }, index) => (
                    <FlipCard
                        key={`${imgSrc}-${index}`}
                        imgSrc={imgSrc}
                        text={text}
                        onClick={() => handleUpdateClicked(index)}
                    />
                ))}
            </div>
            {allClicked && (
                <Button
                    label="Yes"
                    variant="blueboy"
                />
            )}
        </ProtectedRoute>
    );
}
