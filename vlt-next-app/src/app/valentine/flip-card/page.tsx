"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import FlipCard from "@/components/FlipCard/FlipCard";
import Button from "@/components/Button/Button";
import Checkbox from "@/components/Checkbox/Checkbox";
import { cn } from "@/lib/utils";

export default function FlipCardsPage() {
    const router = useRouter();
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
    const [checked, setChecked] = useState(false);
    const [shake, setShake] = useState(false);

    const handleCheckboxClick = () => {
        setChecked(prev => !prev);
    }

    const handleUpdateClicked = (index: number) => {
        setClicked(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const handleClickContinue = () => {
        if (!checked) {
            setShake(true);
            setTimeout(() => {
                setShake(false);
            }, 820);

            return;
        }

        router.push('message');
    }

    return (
        <ProtectedRoute>
            <div
                className="flex flex-col justify-center items-center gap-4"
            >
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
                <>
                    <div
                        className={cn(
                            "flex justify-center items-center gap-2",
                            shake && "animate-shake",
                        )}
                    >
                        <Checkbox
                            checked={checked}
                            onCheck={handleCheckboxClick}
                        />
                        <span
                            className="break-words text-black"
                        >
                            ฉันยอมรับ ว่าฉันเป็นหมาจิ๋ว 🐕‍🦺
                        </span>
                    </div>
                    <Button
                        label="ไปต่อเลยยย"
                        variant="blueboy"
                        onClick={handleClickContinue}
                        disabled={shake}
                        className="text-white"
                    />
                </>
            )}
            </div>
        </ProtectedRoute>
    );
}
