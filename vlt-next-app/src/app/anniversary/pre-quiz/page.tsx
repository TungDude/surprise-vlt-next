"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import RequestController from "@/lib/RequestController";
import { cn } from "@/lib/utils";

export default function PreQuiz() {
  const router = useRouter();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [texts, setTexts] = useState<string[]>([]);

  useEffect(() => {
    fetchMessages();
  }, [])

  const fetchMessages = () => {
    RequestController.fetchAnniversaryPreQuizMessage()
      .then(response => {
        setTexts(response.data);
      });
  }


  const handleClickStopsign = () => {
    if (currentText === texts.length - 1) {
      setIsFadingOut(true);
      setTimeout(() => {
        router.push("/anniversary/quiz");
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
          src="/images/stop_sign.png"
          alt="Stop sign"
          width={280}
          height={280}
          className={cn(
            "cursor-pointer",
            isFadingOut ? "animate-fadeout" : "animate-explode",
          )}
          onClick={handleClickStopsign}
        />
        <h1
          className={cn(
            "font-bold",
            "animate-fadein",
            isFadingOut && "animate-fadeout",
          )}
          key={currentText}
        >
          {texts[currentText]}
        </h1>
      </div>
    </ProtectedRoute>
  )
}