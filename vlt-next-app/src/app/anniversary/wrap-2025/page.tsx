"use client"
import React from "react"
import ProtectedRoute from "@/app/components/ProtectedRoute/ProtectedRoute"

export default function Wrap() {
  return (
    <ProtectedRoute>
        <div
          className="text-vary text-center text-black"
        >
            Wrap 2025
        </div>
    </ProtectedRoute>
  )
}