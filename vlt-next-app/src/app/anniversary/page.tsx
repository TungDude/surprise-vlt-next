"use client"
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute"

export default function Anniversary() {
    return (
        <ProtectedRoute>
            <div
                className="text-vary"
            >
                Anniversary page
            </div>
        </ProtectedRoute>   
    )
}