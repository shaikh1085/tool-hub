import type { Metadata, Viewport } from "next";
import { fontDisplay, fontBody, fontMono } from "@/lib/fonts";
import { siteConfig } from "@/lib/constants/site";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "@/styles/globals.css";

/**
 * This is the ONE place <html> and <body> are rendered (Next.js requires
 * exactly one root layout). It intentionally knows nothing about locale —
 * middleware.ts guarantees every real request already carries a /[lang]
 * prefix, and app/[lang]/layout.tsx (nested inside this one) is
 * responsible for setting the correct `lang`/`dir` attributes on
 * <html> at runtime. Keeping this layer locale-agnostic is what lets a
 * single root layout serve six (and eventually more) languages without
 * duplicating the <head> / font / theme wiring per locale.
 */

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F8FA" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0E14" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <body className="min-h-screen bg-background font-body text-ink">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
