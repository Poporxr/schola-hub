import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Role = 'admin' | 'teacher' | 'student' | 'parent'
export const role: Role = 'teacher';
