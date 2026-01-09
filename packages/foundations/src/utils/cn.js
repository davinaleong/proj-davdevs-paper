import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
/**
 * Utility function to concatenate class names with Tailwind CSS conflict resolution
 * @param inputs - Class values to merge
 * @returns Merged class string
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
