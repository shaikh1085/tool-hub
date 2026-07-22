import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLocale, locales, defaultLocale } from "@/lib/constants/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import { HtmlAttributes } from "@/components/layout/html-attributes";
import { siteConfig } from "@/lib/constants/site";
import type { Locale } from "@/types";

/**
 * Everything under /[lang]/ is the real, indexable site. This layout:
 *  1. Validates the incoming segment against our locale registry
 *     (unknown locale → real 404, not a silent English fallback).
 *  2. Loads that locale's dictionary once and hands it down — Header,
 *     Footer, and page components all receive translated strings as
 *     props/context rather than each importing their own copy of i18n.
 *  3. Syncs <html lang/dir> via the client-only HtmlAttributes helper.
 *
 * Header/MegaNav/SearchBar/Footer are composed here once built (Part 2)
 * so every localized route automatically gets them for free.
 */

export function generateStaticParams() {
  return locales.map((l) => ({ lang: l.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : defaultLocale;
  return {
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [l.code, `${siteConfig.url}/${l.code}`])
      ),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const localeMeta = locales.find((l) => l.code === locale)!;
  const dictionary = await getDictionary(locale);

  // Dictionary + locale are threaded through context in Part 2 once
  // Header/Footer exist. Kept as plain props here to avoid an unused
  // "dictionary" build warning in this foundation-only layout.
  void dictionary;

  return (
    <>
      <HtmlAttributes lang={locale} dir={localeMeta.dir} />
      <div className="flex min-h-screen flex-col">{children}</div>
    </>
  );
}
