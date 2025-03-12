"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import RequestController from "@/lib/RequestController";
import { cn } from "../../lib/utils";

export default function Anniversary() {
    const router = useRouter();
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [currentText, setCurrentText] = useState(0);
    const [texts, setTexts] = useState<string[]>([]);

    useEffect(() => {
        fetchMessages();
    }, [])

    const fetchMessages = () => {
        RequestController.fetchAnniversaryClockPageMessage()
            .then(response => {
                setTexts(response.data);
            });
    }

    const handleClickStopwatch = () => {
        if (currentText === texts.length - 1) {
            setIsFadingOut(true);
            setTimeout(() => {
                router.push("/anniversary/pre-quiz");
            }, 2000); // Duration of the fade-out animation
            return;
        }

        setCurrentText((prev) => (prev + 1) % texts.length);
    };

    return (
        <ProtectedRoute>
            <div
                className="flex flex-col justify-center items-center text-vary text-center text-black"
            >
                <Image
                    src="/images/stopwatch.png"
                    width={280}
                    height={280}
                    alt="stopwatch"
                    className={cn(
                        "cursor-pointer",
                        isFadingOut ? "animate-fadeout" : "animate-wiggle-rotate",
                    )}
                    onClick={handleClickStopwatch}
                />
                <div
                    className={cn(
                        "animate-fadein",
                        isFadingOut && "animate-fadeout",
                    )}
                    key={currentText}
                >
                    {texts[currentText]}
                </div>
            </div>

        </ProtectedRoute>
    );
}
