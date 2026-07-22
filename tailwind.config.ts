import type { Config } from "tailwindcss";

/**
 * ─────────────────────────────────────────────────────────────────────────
 * DESIGN SYSTEM — ToolHub
 * ─────────────────────────────────────────────────────────────────────────
 * Concept: a digital "toolbox index". 12 real categories map to 12 evenly
 * spaced hues (30° apart) around the color wheel — literally the tab
 * colors on a binder/toolbox, generated systematically rather than picked
 * arbitrarily. The category accent (--cat-1 … --cat-12) is defined once in
 * globals.css and consumed everywhere: nav, cards, breadcrumbs, tool pages.
 *
 * Type system: Space Grotesk (display, geometric + technical) paired with
 * IBM Plex Sans (body, humane + highly legible) and IBM Plex Mono
 * (utility — code, data, tool inputs). All three are loaded as CSS
 * variables via next/font in src/lib/fonts.ts and referenced below.
 * ─────────────────────────────────────────────────────────────────────────
 */

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/tools/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // Base surfaces — sourced from CSS variables so dark mode is a
        // single class toggle, not a duplicated color system.
        background: "hsl(var(--background) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        "surface-raised": "hsl(var(--surface-raised) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        ink: {
          DEFAULT: "hsl(var(--ink) / <alpha-value>)",
          muted: "hsl(var(--ink-muted) / <alpha-value>)",
          faint: "hsl(var(--ink-faint) / <alpha-value>)",
        },
        brand: {
          DEFAULT: "hsl(var(--brand) / <alpha-value>)",
          hover: "hsl(var(--brand-hover) / <alpha-value>)",
          ink: "hsl(var(--brand-ink) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          hover: "hsl(var(--accent-hover) / <alpha-value>)",
        },
        danger: "hsl(var(--danger) / <alpha-value>)",
        warning: "hsl(var(--warning) / <alpha-value>)",
        success: "hsl(var(--success) / <alpha-value>)",
        // 12 category accents — cat-1 … cat-12, mapped in src/lib/constants/categories.ts
        cat: {
          1: "hsl(var(--cat-1) / <alpha-value>)",
          2: "hsl(var(--cat-2) / <alpha-value>)",
          3: "hsl(var(--cat-3) / <alpha-value>)",
          4: "hsl(var(--cat-4) / <alpha-value>)",
          5: "hsl(var(--cat-5) / <alpha-value>)",
          6: "hsl(var(--cat-6) / <alpha-value>)",
          7: "hsl(var(--cat-7) / <alpha-value>)",
          8: "hsl(var(--cat-8) / <alpha-value>)",
          9: "hsl(var(--cat-9) / <alpha-value>)",
          10: "hsl(var(--cat-10) / <alpha-value>)",
          11: "hsl(var(--cat-11) / <alpha-value>)",
          12: "hsl(var(--cat-12) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Fluid-ish type scale, tuned for a premium SaaS density.
        xs: ["0.75rem", { lineHeight: "1.1rem" }],
        sm: ["0.875rem", { lineHeight: "1.35rem" }],
        base: ["1rem", { lineHeight: "1.6rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.85rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.01em" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "-0.015em" }],
        "4xl": ["2.375rem", { lineHeight: "2.6rem", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "3.25rem", letterSpacing: "-0.025em" }],
        "6xl": ["3.75rem", { lineHeight: "3.9rem", letterSpacing: "-0.03em" }],
      },
      borderRadius: {
        // Large, rounded, unmistakably "premium SaaS" — never sharp corners.
        sm: "0.5rem",
        DEFAULT: "0.875rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
      },
      boxShadow: {
        xs: "0 1px 2px 0 hsl(var(--ink) / 0.04)",
        sm: "0 2px 8px -2px hsl(var(--ink) / 0.06)",
        card: "0 4px 20px -6px hsl(var(--ink) / 0.08)",
        raised: "0 12px 32px -8px hsl(var(--ink) / 0.14)",
        glow: "0 0 0 1px hsl(var(--brand) / 0.16), 0 8px 24px -8px hsl(var(--brand) / 0.35)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        content: "1280px",
        prose: "72ch",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out both",
        "fade-in-up": "fade-in-up 0.5s cubic-bezier(0.16,1,0.3,1) both",
        "scale-in": "scale-in 0.25s ease-out both",
        shimmer: "shimmer 2.4s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
