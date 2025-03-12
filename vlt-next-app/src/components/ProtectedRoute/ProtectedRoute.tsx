"use client";
import { useAuthContext } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { authenticatedRoutes } = useAuthContext();
    const pathName = usePathname();
    const isAuthenticated = authenticatedRoutes?.some(route => pathName.startsWith(`/${route}`));

    if (!isAuthenticated) {
        return (
            <div
                className="text-black text-vary"
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