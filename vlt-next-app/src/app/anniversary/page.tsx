"use client"
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import { cn } from "../lib/utils";

export default function Anniversary() {
    const router = useRouter();
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [currentText, setCurrentText] = useState(0);
    const texts = [
        "กริ๊ง กริ๊ง กริ๊ง",
        "กริ๊งงงงง",
        "กริ๊งงงงงงงงงง",
        "กริ๊งงงงงงงงงงงงงงง",
        "กริ๊งงงงงงงงงงงงงงงงงงงง",
        "กริ๊งงงงงงงงงงงงงงงงงงงงงงงงง",
        "กดปิดช้าจัง พวกจิว นอนขี้เซา",
        "สวัสดี เราคือนากาปุก",
        "เราโดนตั้งเวลาไว้ตั้งแต่ปีที่แล้ว",
        "โดยเฮียตั๋งสุดโหด ให้มาปลุกน้องธาร",
        "จิ๋วธารรู้มั้ย นี่เวลาอะไร ?!",
        "วันครบรอบไง!",
        "เราได้รวบรวมข้อมูลของปีนี้มาประมวลผล",
        "และสรุปทุกอย่างออกมาเป็น...",
        "Anniversary Wrap 2025 !!",
        "อยากดูละสิ",
        "พร้อมดูยัง",
        "ไม่ให้ดู ^^",
        "ล้อเล่นน้าาาา",
        "ไปดูกันเลยดีกว่า ตามมาเลย !!"
    ];

    const handleClickStopwatch = () => {
        if (currentText === texts.length - 1) {
            setIsFadingOut(true);
            setTimeout(() => {
                router.push("/anniversary/wrap-2025");
            }, 2000); // Duration of the fade-out animation
            return;
        }

        setCurrentText((prev) => (prev + 1) % texts.length);
    };

    return (
        <ProtectedRoute>
            <Image
                src="/images/stopwatch.png"
                width={280}
                height={280}
                alt="stopwatch"
                className={cn(
                    "animate-wiggle-rotate cursor-pointer",
                    isFadingOut && "animate-fadeout",
                )}
                onClick={handleClickStopwatch}
            />
            <div
                className={cn(
                    "text-vary text-center",
                    "animate-fadein",
                    isFadingOut && "animate-fadeout",
                )}
                key={currentText}
            >
                {texts[currentText]}
            </div>
        </ProtectedRoute>
    );
}
