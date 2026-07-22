/**
 * ─────────────────────────────────────────────────────────────────────
 * SHARED DOMAIN TYPES
 * ─────────────────────────────────────────────────────────────────────
 * These types are the contract every tool, category, and page template
 * is built against. Because they're centralized, adding tool #21 or
 * tool #500 never requires touching layout, nav, or page-template code —
 * it only requires a new object that satisfies `Tool`.
 * ───────────────────────────────────────────────────────────────────── */

import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

/** The locales the platform is architected for. Only `en` ships with real
 *  copy today — the rest are wired end-to-end and ready for translation. */
export type Locale = "en" | "ur" | "hi" | "es" | "fr" | "ar";

export interface LocaleMeta {
  code: Locale;
  /** Name of the language, written in that language (for the switcher UI). */
  nativeName: string;
  /** English name, used in <html lang> comments / admin contexts. */
  englishName: string;
  dir: "ltr" | "rtl";
  /** Whether translated content actually exists yet, vs. falling back to English. */
  enabled: boolean;
}

/** One of the 12 top-level tool categories. `accent` indexes into the
 *  --cat-1 … --cat-12 design tokens defined in globals.css. */
export interface Category {
  slug: string;
  icon: LucideIcon;
  accent: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /** Translation key namespace, e.g. dictionary.categories["text-tools"] */
  key: string;
}

/** A single FAQ entry rendered on every tool page and emitted as
 *  FAQPage schema markup for SEO. */
export interface ToolFaq {
  question: string;
  answer: string;
}

/** A single numbered "How to use" instruction. */
export interface ToolHowToStep {
  title: string;
  description: string;
}

/** The full definition of one tool. Every tool folder under
 *  src/tools/<category>/<tool-slug>/ exports a `meta: Tool` object that
 *  the generic ToolPageTemplate consumes — no per-tool page scaffolding
 *  required. This is the piece that lets the catalog scale from 20 to
 *  500+ tools without touching routing, layout, or SEO code. */
export interface Tool {
  /** URL slug, unique within its category: /en/text-tools/<slug> */
  slug: string;
  categorySlug: string;
  icon: LucideIcon;
  /** Short label used in cards, nav, breadcrumbs. */
  name: string;
  /** One-line summary used on cards and as a fallback meta description. */
  shortDescription: string;
  /** Longer marketing/explainer copy shown at the top of the tool page. */
  longDescription: string;
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
  howTo: ToolHowToStep[];
  faqs: ToolFaq[];
  /** Slugs of related tools, resolved against the global tool registry. */
  relatedToolSlugs: string[];
  /** Marks a tool as launched vs. reserved-but-not-yet-built. Lets the
   *  catalog list future tools ("Coming soon") without 404ing. */
  status: "live" | "coming-soon";
  /** Lazily-loaded interactive widget for a live tool. Optional so
   *  "coming-soon" tools can omit it entirely. */
  loadWidget?: () => Promise<{ default: ComponentType }>;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/** Minimal shape returned by src/i18n/get-dictionary.ts — extend as real
 *  copy is added per section. Kept flat and serializable (JSON-backed). */
export interface Dictionary {
  common: Record<string, string>;
  nav: Record<string, string>;
  home: Record<string, string>;
  footer: Record<string, string>;
  categories: Record<string, string>;
}
