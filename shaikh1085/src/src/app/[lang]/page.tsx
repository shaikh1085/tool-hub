import { getDictionary } from "@/i18n/get-dictionary";
import { isValidLocale, defaultLocale } from "@/lib/constants/locales";
import type { Locale } from "@/types";

/**
 * PLACEHOLDER — intentionally minimal.
 * This proves the locale routing, dictionary loading, theming, and
 * font/token system all wire up end-to-end. It will be replaced in
 * Part 3 with the full Header/MegaNav/Hero/CategoryGrid/Footer homepage.
 */
export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (isValidLocale(lang) ? lang : defaultLocale) as Locale;
  const dict = await getDictionary(locale);

  return (
    <main className="flex flex-1 items-center justify-center bg-grid bg-grid-fade px-6 py-30">
      <div className="text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-brand">
          {dict.home.eyebrow}
        </p>
        <h1 className="text-balance font-display text-4xl font-semibold sm:text-5xl">
          {dict.home.heroTitle}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-ink-muted">{dict.home.heroSubtitle}</p>
        <p className="mt-8 text-xs text-ink-faint">
          Foundation build — Part 1 of the project. Homepage UI lands in Part 3.
        </p>
      </div>
    </main>
  );
}
