"use client"
import React, { useState } from "react";
import StoryViewer from "@/components/StoryViewer/StoryViewer";

export default function Wrap() {
    const [showViewer, setShowViewer] = useState(false);

    const handleCloseStory = () => {
        setShowViewer(false);
        console.log(showViewer);
    }

    return (

            <div className="flex flex-col justify-center items-center text-vary text-center text-black w-full h-full">
                <StoryViewer
                    onClose={handleCloseStory}
                    duration={50}
                >
                    <div>
                        Hey
                    </div>
                    <div>
                        Yo
                    </div>
                </StoryViewer>
            </div>
    );
}
