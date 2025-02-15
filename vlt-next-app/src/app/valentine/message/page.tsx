"use client"
import { useState, useEffect } from "react";
import RequestController from "@/app/lib/RequestController";
import ProtectedRoute from "@/app/components/ProtectedRoute/ProtectedRoute"
import TypingText from "@/app/components/TypingText/TypingText";

export default function MessagePage() {
    const [done, setDone] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchMessage();
    }, []);

    const fetchMessage = async () => {
        RequestController.fetchVltMessage()
            .then(response => {
                setMessage(response.message);
            });
    }

    const handleDone = () => {
        setDone(true);
    }

    return (
        <ProtectedRoute>
            <div
                className="flex flex-col justify-center items-center gap-4"
            >
                {message !== "" && (
                    <TypingText
                        message={message}
                        onDone={handleDone}
                    />
                )}
                {done && (
                    <span
                        className="text-vary text-darkred font-semibold animate-fadein animate-pulse"
                    >
                        Will you be my Valentine?
                    </span>
                )}
            </div>
        </ProtectedRoute>
    )
}