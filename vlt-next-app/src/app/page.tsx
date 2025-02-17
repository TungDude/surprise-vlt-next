"use client"
import { useState, useEffect } from "react";
import { Delete } from 'lucide-react';
import { cn } from "./lib/utils";
import { useAuthContext } from "./context/AuthContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const { verifyPasscode } = useAuthContext();

  useEffect(() => {
    const handleVerifyPasscode = async () => {
      if (input.length === 6) {
        const route = await verifyPasscode(input);  // Await the result here
        if (route) {
          router.push(route);
        }
      }
    };

    handleVerifyPasscode();  // Call the async function
  }, [input, verifyPasscode, router]);

  const handleButtonClick = (value: string) => {
    if (input.length < 6) {
      setInput(input + value);
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-black text-vary font-semibold">Enter Passcode</div>
      <div className="flex my-8 space-x-2">
        {[...Array(6)].map((_, index) => (
          <div
            key={`passcode-${index}`}  // Unique key for passcode indicators
            className={cn(
              "w-4 h-4",
              index < input.length ? "flex justify-center items-center" : "rounded-full bg-lightgray",
            )}
          >
            {index < input.length && "❤️"}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "delete"].map((value, index) => (
          <button
            key={`button-${index}`}  // Unique key for each button
            onClick={() =>
              value === "delete" ? handleDelete() : handleButtonClick(value.toString())
            }
            className={cn(
              value === "" ? "cursor-default" : "flex items-center justify-center w-16 h-16 text-black text-xl font-semibold rounded-full bg-white border shadow-md hover:bg-gray-100 active:bg-gray-200"
            )}
          >
            {value === "delete" ? <Delete /> : value}
          </button>
        ))}
      </div>
    </div>
  );
}
