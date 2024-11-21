import { clsx, type ClassValue } from "clsx";
import { useCallback, useRef } from "react";
import { twMerge } from "tailwind-merge";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";

import { CurrencyListEnum } from "../enum/currency.enum";

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

  const difference = target.diff(now, "day"); // Difference in days

  return difference >= 0 ? difference : 0;
}

export function timeLeft(targetDate: string): string {
  const now = dayjs().utc();
  const target = dayjs(targetDate).utc();

  if (!target.isValid()) {
    throw new Error("Invalid date format provided.");
  }

  if (target.isBefore(now)) {
    return "Time has passed.";
  }

  const years = target.diff(now, "year");
  const months = target.diff(now.add(years, "year"), "month");
  const days = target.diff(now.add(years, "year").add(months, "month"), "day");
  const hours = target.diff(
    now.add(years, "year").add(months, "month").add(days, "day"),
    "hour"
  );
  const minutes = target.diff(
    now
      .add(years, "year")
      .add(months, "month")
      .add(days, "day")
      .add(hours, "hour"),
    "minute"
  );
  const seconds = target.diff(
    now
      .add(years, "year")
      .add(months, "month")
      .add(days, "day")
      .add(hours, "hour")
      .add(minutes, "minute"),
    "second"
  );

  const parts = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);
  if (days > 0) parts.push(`${days} day${days > 1 ? "s" : ""}`);
  if (hours > 0) parts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
  if (minutes > 0) parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);
  if (seconds > 0) parts.push(`${seconds} second${seconds > 1 ? "s" : ""}`);

  return parts.slice(0, 2).join(" ");
}

export function clippedText(string: string, threshold: number): string {
  const isStrExceedLength = string.length > threshold;
  return isStrExceedLength ? `${string.slice(0, threshold)}...` : string;
}

export function MultiplierFn(numerator: number, denominator: number) {
  return Number((numerator * denominator).toFixed(2));
}

export function currencyConverter({
  baseValue,
  Multiplier,
  currency,
}: {
  baseValue: number;
  Multiplier: number;
  currency: CurrencyListEnum;
}) {
  const currencySymbol =
    currency === CurrencyListEnum.INR
      ? "₹"
      : currency === CurrencyListEnum.USD
      ? "$"
      : "$";
  return `${currencySymbol}${(baseValue * Multiplier).toFixed(0)}`;
}
