import { clsx, type ClassValue } from "clsx";
import { useCallback, useRef } from "react";
import { twMerge } from "tailwind-merge";

import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';

dayjs.extend(duration);
dayjs.extend(utc);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useDebouncedCallback = (callback: Function, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (value: string) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        callback(value);
      }, delay);
    },
    [callback, delay]
  );
};

/**
 * Utility function to format a given date string to the requested format.
 * @param dateValue - The date string to be formatted (in ISO format or another recognized format).
 * @param format - The desired format string (e.g., "YYYY-MM-DD", "MM/DD/YYYY", etc.).
 * @returns The formatted date string, or an error message if the date is invalid.
 */
export function formatDate(dateValue: string, format: string): string {
  const date = dayjs(dateValue);

  if (!date.isValid()) {
    return "Invalid date";
  }

  return date.format(format);
}

export function daysLeft(targetDate: string): number {
  const now = dayjs().utc();
  const target = dayjs(targetDate).utc();

  if (!target.isValid()) {
    throw new Error("Invalid date format provided.");
  }

  const difference = target.diff(now, 'day'); // Difference in days

  return difference >= 0 ? difference : 0;
}
