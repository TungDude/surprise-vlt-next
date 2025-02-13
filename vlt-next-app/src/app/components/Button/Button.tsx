import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps {
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>; // Correct type for onClick
    variant?: "primary" | "secondary" | "blackwhite" | "warning" | "blueboy"; // Restrict variants to valid strings
    className?: string;
}

const Button = ({ label, onClick, variant = "primary", className }: ButtonProps) => {
    const baseClasses = "text-white py-3 px-8 rounded-lg";
    const variantClasses = {
        primary: "bg-green hover:bg-darkgreen",
        secondary: "bg-lightgray hover:bg-black",
        warning: "bg-brightred hover:bg-darkred", 
        blackwhite: "bg-black",
        blueboy: "bg-lightblue hover:bg-blue",
    };

    return (
        <button
            onClick={onClick}
            className={cn(
                baseClasses,
                variantClasses[variant],
                className,
            )}
        >
            {label}
        </button>
    );
};

export default Button;
