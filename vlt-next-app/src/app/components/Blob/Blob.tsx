import { cn } from "@/app/lib/utils";

function Blob() {
    const baseClass = "fixed overflow-hidden rounded-full mix-blend-multiply filter blur-lg opacity-20";

    return (
        <>
            <div
                className={cn(
                    baseClass,
                    "bg-lightblue",
                    "w-56 h-56",
                    "top-[40%] -left-4",
                    "animate-blob-1-slow"
                )}
            />
            <div
                className={cn(
                    baseClass,
                    "bg-yellow",
                    "w-72 h-72",
                    "bottom-2 left-24",
                    "animate-blob-1-normal"
                )}
            />
            <div
                className={cn(
                    baseClass,
                    "bg-pink",
                    "w-72 h-72",
                    "top-12 left-4",
                    "animate-blob-1-fast"
                )}
            />
            <div
                className={cn(
                    baseClass,
                    "bg-pink",
                    "w-72 h-72",
                    "bottom-12 -right-8",
                    "animate-blob-2-slow"
                )}
            />
            <div
                className={cn(
                    baseClass,
                    "bg-yellow",
                    "w-56 h-56",
                    "top-[50%] right-[50%]",
                    "animate-blob-2-normal"
                )}
            />
            <div
                className={cn(
                    baseClass,
                    "bg-lightpurple",
                    "w-72 h-72",
                    "top-12 -right-36",
                    "animate-blob-2-fast"
                )}
            />
        </>
    );
}

export default Blob;