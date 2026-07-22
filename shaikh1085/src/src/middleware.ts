import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { localeCodes, defaultLocale } from "@/lib/constants/locales";

/**
 * Every real page lives under /[lang]/... . This middleware's only job
 * is: if a request arrives WITHOUT a locale prefix (e.g. "/pdf-tools" or
 * "/"), figure out the best-matching locale and redirect into it (e.g.
 * "/en/pdf-tools"). Once the prefix exists, Next's own [lang] segment
 * routing takes over — this file never touches those requests.
 */

function getLocaleFromAcceptLanguage(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  // Parse "en-US,en;q=0.9,ur;q=0.8" into an ordered list of language tags.
  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean) as string[];

  for (const tag of preferred) {
    const short = tag.split("-")[0];
    if (short && localeCodes.includes(short as never)) {
      return short;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API routes, static files, and Next internals entirely.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // e.g. /favicon.ico, /robots.txt, /sitemap.xml
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = localeCodes.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = getLocaleFromAcceptLanguage(request);
  const redirectUrl = new URL(
    `/${locale}${pathname === "/" ? "" : pathname}${request.nextUrl.search}`,
    request.url
  );

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static, _next/image (Next internals)
     * - favicon.ico, and any path containing a file extension
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
