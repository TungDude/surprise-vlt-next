"use client"
import Button from "../Button";
import { useRouter } from "next/navigation";
import { House } from 'lucide-react';

function HomeButton() {
    const router = useRouter();

    const handleClickHome = () => {
        router.push("/");
    }

    return (
        <Button
            label={<House />}
            variant="blackwhite"
            className="h-full w-auto rounded-full"
            onClick={handleClickHome}
        />
    )
}

export default HomeButton;