"use client";
import { createContext, useState, useContext } from "react";
import RequestController from "../lib/RequestController";

interface AuthContextType {
    verifyPasscode: (code: string) => void;
    authenticatedRoute: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [authenticatedRoute, setAuthenticatedRoute] = useState<string | null>(null);

    const verifyPasscode = async (code: string) => {
        const response = await RequestController.validatePasscode(code);
        
        if (response.valid) {
            setAuthenticatedRoute(response.route);
        }
    };

    return (
        <AuthContext.Provider value={{ verifyPasscode, authenticatedRoute }}>
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