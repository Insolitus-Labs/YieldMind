import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Additional filler functions for future enhancements
export function addPrefix(prefix: string, ...inputs: ClassValue[]) {
  return twMerge(clsx(inputs.map(input => `${prefix}-${input}`)));
}

export function addSuffix(suffix: string, ...inputs: ClassValue[]) {
  return twMerge(clsx(inputs.map(input => `${input}-${suffix}`)));
}

// Example usage
const buttonClass = cn("bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded");
const prefixedClass = addPrefix("custom", "bg-red-500", "text-lg");
const suffixedClass = addSuffix("dark", "text-gray-500", "border-gray-300");

console.log(buttonClass);
console.log(prefixedClass);
console.log(suffixedClass);
