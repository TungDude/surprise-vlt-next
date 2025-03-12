import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Type for the cn function
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}
