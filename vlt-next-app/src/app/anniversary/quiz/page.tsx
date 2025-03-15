"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import RequestController from "@/lib/RequestController";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface QuizProps {
    question: string;
    answer: number;
}

const avatars: string[] = [
    "/images/avatar_tung.png",
    "/images/avatar_tarn.png",
];

const triggerAnimation = (
    setAnimation: React.Dispatch<React.SetStateAction<boolean[]>>,
    index: number,
    timeout: number
) => {
    setAnimation((prev) => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
    });

    setTimeout(() => {
        setAnimation((prev) => {
            const updated = [...prev];
            updated[index] = false;
            return updated;
        });
    }, timeout);
};

export default function Quiz() {
    const router = useRouter();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [shake, setShake] = useState<boolean[]>([false, false]);
    const [explode, setExplode] = useState<boolean[]>([false, false]);
    const [quizData, setQuizData] = useState<QuizProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showWin, setShowWin] = useState(false);

    useEffect(() => {
        fetchQuizData();
    }, [])

    const fetchQuizData = async () => {
        try {
            const response = await RequestController.fetchAnniversaryQuizAnswerKeys();
            setQuizData(response.data);
        } catch (error) {
            console.error("Error fetching quiz data:", error);
            setError("Failed to load quiz data.");
        } finally {
            setIsLoading(false);
        }
    }

    const handleCheckAnswer = (key: number) => {
        if (key === quizData[currentQuestion].answer) {
            setCurrentQuestion((prev) => (prev + 1) % quizData.length);
            // Update explode state only for the correct answer
            triggerAnimation(setExplode, key, 1000);

            if (currentQuestion === quizData.length - 1) {
                setShowWin(true);
                setTimeout(() => {
                    router.push("/anniversary/wrap-2025");
                }, 2000);
                return;
            }
        } else {
            // Update shake state only for the wrong answer
            triggerAnimation(setShake, key, 820);
        }
    };

    if (isLoading) return null;  // Do nothing until data is loaded
    if (error) return <div>{error}</div>;  // Show error if it occurs

    return (
        <ProtectedRoute>
            <div
                className="flex flex-col justify-center items-center gap-8 text-vary text-center text-pink"
            >
                <div
                    className="w-full p-4 bg-black rounded-lg"
                >
                    {!showWin ? quizData[currentQuestion].question : "เก่งมากกกกกก 😎"}
                </div>
                <div
                    className="flex justify-center items-center gap-4"
                >
                    {avatars.map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            alt={src}
                            width={200}
                            height={200}
                            onClick={() => handleCheckAnswer(index)}
                            className={cn(
                                "cursor-pointer",
                                shake[index] ? "animate-shake" : "",
                                explode[index] ? "animate-explode" : "",
                                shake[index] || explode[index] || showWin ? "pointer-events-none" : "",
                            )}
                        />
                    ))}
                </div>
            </div>
        </ProtectedRoute>
    )
};