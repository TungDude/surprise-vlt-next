"use client";
import { createContext, useState, useContext } from "react";
import RequestController from "../lib/RequestController";

interface AuthContextType {
    verifyPasscode: (code: string) => void;
    authenticatedRoutes: string[] | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [authenticatedRoutes, setAuthenticatedRoutes] = useState<string[]>([]);

    const verifyPasscode = async (code: string) => {
        const response = await RequestController.validatePasscode(code);

        if (response.valid) {
            setAuthenticatedRoutes((prevRoutes) => {
                // Check if route is already in the array
                if (!prevRoutes.includes(response.route)) {
                    return [...prevRoutes, response.route]; // Add new route
                }
                return prevRoutes; // Return same array if duplicate
            });
        }

        console.log(authenticatedRoutes);
    };


    return (
        <AuthContext.Provider value={{ verifyPasscode, authenticatedRoutes }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}