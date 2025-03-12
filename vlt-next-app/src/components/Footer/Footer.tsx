"use client"
import { useRouter } from "next/navigation";
import HomeButton from "../Button/HomeButton/HomeButton";
import { useAuthContext } from "@/context/AuthContext";
import { Heart, Gift } from 'lucide-react';
import { cn } from "@/lib/utils";

function Footer () {
    const router = useRouter();
    const { authenticatedRoutes } = useAuthContext();
    const vAllowed = authenticatedRoutes?.some(route => route.startsWith(`valentine`));
    const aAllowed = authenticatedRoutes?.some(route => route.startsWith(`anniversary`));

    const handleClickHeart = () => {
        if (!vAllowed) {
            return;
        }

        router.push("/valentine");
    }

    const handleClickGift = () => {
        if (!aAllowed) {
            return;
        }

        router.push("/anniversary");
    }

    return (
        <>
            <div
                className={cn(
                    vAllowed ? "text-brightred hover:text-black" : "text-gray-400"
                )}
                onClick={handleClickHeart}
            >
                <Heart 
                    strokeWidth={2}
                    className="w-12 h-12 cursor-pointer"
                />
                {/* ❤️❤️❤️ */}
            </div>
            <div>
                <HomeButton />
            </div>
            <div
                className={cn(
                    aAllowed ? "text-pink hover:text-black" : "text-gray-400"
                )}
                onClick={handleClickGift}
            >
                <Gift 
                    strokeWidth={2}
                    className="w-12 h-12 cursor-pointer"
                />
                {/* ❤️❤️❤️ */}
            </div>
        </>
    )
}

export default Footer;