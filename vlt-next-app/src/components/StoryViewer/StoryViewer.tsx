"use client";
import React, { useState, useEffect, useCallback } from "react";
import Button from "@/components/Button/Button";

interface StoryViewerProps {
    children: React.ReactNode;
    onClose: () => void;
    duration: number;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ children, onClose, duration }) => {
    const totalStories = React.Children.count(children);
    const childrenArray = React.Children.toArray(children);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const handleNextStory = useCallback(() => {
        if (currentIndex < totalStories - 1) {
            setCurrentIndex(currentIndex + 1);
            setProgress(0);
        } else {
            onClose();
        }
    }, [currentIndex, totalStories, onClose]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => prev + 50 / (duration || 5));
        }, 50);

        if (progress >= 100) {
            clearInterval(interval);
            handleNextStory();
        }

        return () => clearInterval(interval);
    }, [progress, duration, handleNextStory]);

    const handlePreviousStory = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setProgress(0);
        }
    };

    return (
        <div className="relative flex items-center justify-center w-full h-full">
            <div className="w-full h-full flex items-center justify-center">
                {childrenArray[currentIndex]}
            </div>
            
            {/* Prev and Next Button */}
            <Button
                label=""
                className="absolute h-full left-0 top-1/2 -translate-y-1/2 text-white opacity-10"
                onClick={handlePreviousStory}
            />
            <Button
                label=""
                className="absolute h-full right-0 top-1/2 -translate-y-1/2 text-white opacity-10"
                onClick={handleNextStory}
            />

            {/* Progress Bar */}
            <div
                className="absolute top-0 left-0 w-full h-1 bg-lightgray"
            >
                <div
                    className="h-full bg-black transition-all"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default StoryViewer;