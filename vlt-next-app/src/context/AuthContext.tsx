"use client";
import { createContext, useState, useContext } from "react";
import RequestController from "../lib/RequestController";

interface AuthContextType {
    verifyPasscode: (code: string) => Promise<string | null>;
    authenticatedRoutes: string[] | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [authenticatedRoutes, setAuthenticatedRoutes] = useState<string[]>([]);

    // AuthContext
    const verifyPasscode = async (code: string): Promise<string | null> => {
        const response = await RequestController.validatePasscode(code);

        if (response.valid) {
            setAuthenticatedRoutes((prevRoutes) => {
                // Check if route is already in the array
                if (!prevRoutes.includes(response.route)) {
                    return [...prevRoutes, response.route]; // Add new route
                }
                return prevRoutes; // Return the same array if duplicate
            });
            return response.route;  // Return the valid route here
        }
        return null;  // Return null if the passcode is invalid
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