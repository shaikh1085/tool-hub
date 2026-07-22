import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names and resolve Tailwind conflicts
 *  (e.g. `cn("p-2", condition && "p-4")` → "p-4"). Used everywhere
 *  instead of raw template strings so components stay composable. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formats a slug ("text-tools") into a human label ("Text Tools").
 *  Used as a fallback when a dictionary key hasn't been translated yet. */
export function slugToLabel(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Builds an absolute canonical URL for metadata / schema markup. */
export function absoluteUrl(path: string, baseUrl: string): string {
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
