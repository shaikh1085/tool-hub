import {
  Type,
  Image as ImageIcon,
  FileText,
  Search,
  Code2,
  Braces,
  Palette,
  ArrowLeftRight,
  Calculator,
  Youtube,
  Sparkles,
  ListChecks,
} from "lucide-react";
import type { Category } from "@/types";

/**
 * ─────────────────────────────────────────────────────────────────────
 * CATEGORY REGISTRY — the single list every part of the UI reads from.
 * ─────────────────────────────────────────────────────────────────────
 * `accent` is the index into the --cat-1 … --cat-12 tokens in
 * globals.css (12 categories, 12 hues, 30° apart — see that file's
 * header comment for the reasoning). `key` is the dictionary lookup
 * used for translated labels/descriptions; `slug` is the URL segment:
 * /en/<slug>. To add a 13th category later, extend both this array and
 * the tailwind `cat` color scale together.
 * ───────────────────────────────────────────────────────────────────── */
export const categories: Category[] = [
  { slug: "text-tools", icon: Type, accent: 1, key: "textTools" },
  { slug: "image-tools", icon: ImageIcon, accent: 2, key: "imageTools" },
  { slug: "pdf-tools", icon: FileText, accent: 3, key: "pdfTools" },
  { slug: "seo-tools", icon: Search, accent: 4, key: "seoTools" },
  { slug: "developer-tools", icon: Code2, accent: 5, key: "developerTools" },
  { slug: "css-tools", icon: Braces, accent: 6, key: "cssTools" },
  { slug: "color-tools", icon: Palette, accent: 7, key: "colorTools" },
  { slug: "unit-converters", icon: ArrowLeftRight, accent: 8, key: "unitConverters" },
  { slug: "calculators", icon: Calculator, accent: 9, key: "calculators" },
  { slug: "youtube-tools", icon: Youtube, accent: 10, key: "youtubeTools" },
  { slug: "ai-tools", icon: Sparkles, accent: 11, key: "aiTools" },
  { slug: "productivity-tools", icon: ListChecks, accent: 12, key: "productivityTools" },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
