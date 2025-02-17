import React from "react";
import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps {
    label: ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // Correct type for onClick
    variant?: "primary" | "secondary" | "blackwhite" | "warning" | "blueboy" | "transparent"; // Restrict variants to valid strings
    className?: string;
    disabled?: boolean,
}

const Button = ({ label, onClick, variant = "primary", className, disabled = false }: ButtonProps) => {
    const baseClasses = "text-white py-3 px-8 rounded-lg shadow-md";
    const variantClasses = {
        primary: "bg-green hover:bg-darkgreen",
        secondary: "bg-lightgray hover:bg-black",
        warning: "bg-brightred hover:bg-darkred", 
        blackwhite: "bg-white text-black border hover:text-white hover:bg-black",
        blueboy: "bg-lightblue hover:bg-blue",
        transparent: "border bg-transparent hover:bg-gray-100 active:bg-gray-200"
    };

    return (
        <button
            onClick={onClick}
            className={cn(
                baseClasses,
                variantClasses[variant],
                className,
            )}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
