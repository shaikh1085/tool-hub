import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

/**
 * Loaded once, centrally, as CSS variables — every layout imports these
 * variables (never the font objects directly) so there's exactly one
 * network request per weight across the whole app, self-hosted and
 * subset automatically by next/font for zero layout shift.
 */

export const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const fontBody = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
