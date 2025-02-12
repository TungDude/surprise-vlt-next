"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Button from "../components/Button/Button";
import Image from "next/image";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

export default function Valentine() {
    const router = useRouter();
    const pathname = usePathname();
    const [wrongCount, setWrongCount] = useState(0);
    const textSize = [
        'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl',
        'text-3xl', 'text-4xl', 'text-5xl'
    ];

    const incrementWrongCount = () => setWrongCount(prev => prev + 1);
    
    const handleCorrectChoice = () => {
        router.push(`${pathname}/flip-card`);
    }

    const getButtonSizeClass = (count: number, isGood: boolean) => {
        const index = isGood ? (4 - count) : (4 + count);
        return textSize[index % textSize.length];
    };

    return (
        <ProtectedRoute>
            <div className="flex flex-col items-center justify-center text-black gap-16 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                <Image
                    src={`/images/wrong_${wrongCount}.jpg`}
                    alt="Image"
                    width={144}
                    height={144}
                    className="w-full"
                />
                <p>รู้รหัสได้ไง?!?!</p>
                <div className="flex gap-4">
                    <Button
                        label="โกง"
                        variant="warning"
                        onClick={handleCorrectChoice}
                        className={wrongCount < 5 ? getButtonSizeClass(wrongCount, false) : "text-8xl"}
                    />
                    {wrongCount < 5 && (
                        <Button
                            label="เก่ง"
                            onClick={incrementWrongCount}
                            className={getButtonSizeClass(wrongCount, true)}
                        />
                    )}
                </div>
            </div>
        </ProtectedRoute>
    );
}