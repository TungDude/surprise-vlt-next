"use client";
import { Check } from "lucide-react";

interface CheckboxProps {
    checked: boolean,
    onCheck: () => void,
}

function Checkbox({ checked, onCheck }: CheckboxProps) {
    return (
        <div className="flex items-center">
            <div
                onClick={onCheck}
                className={`w-6 h-6 flex items-center justify-center border-2 rounded cursor-pointer ${checked ? "bg-purple-700 border-purple-700" : "bg-white border-darkred"}`}
            >
                {checked && (
                    <Check
                        className="text-white w-4 h-4"
                    />
                )}
            </div>
        </div>
    );
}

export default Checkbox;