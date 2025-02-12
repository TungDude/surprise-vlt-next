"use client";
import { useAuthContext } from "@/app/context/AuthContext";
import { usePathname } from "next/navigation";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { authenticatedRoutes } = useAuthContext();
    const pathName = usePathname();
    const isAuthenticated = authenticatedRoutes?.some(route => pathName.startsWith(`/${route}`));

    if (!isAuthenticated) {
        return (
            <div
                className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            >
                Enter the Passcode first
            </div>
        );
    }

    return (
        <>
            {children}
        </>
    );
};

export default ProtectedRoute;