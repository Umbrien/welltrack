import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return Math.round(sum / numbers.length);
}
