import "server-only";
import type { Dictionary, Locale } from "@/types";
import { dictionaryLoaders } from "./config";
import { defaultLocale } from "@/lib/constants/locales";

/**
 * Server-only dictionary fetch (never shipped to the client bundle).
 * Deep-merges the requested locale over English so a partially
 * translated dictionary never renders a blank string — it renders the
 * English fallback for whatever key is missing.
 */
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const [base, requested] = await Promise.all([
    dictionaryLoaders[defaultLocale](),
    dictionaryLoaders[locale] ? dictionaryLoaders[locale]() : dictionaryLoaders[defaultLocale](),
  ]);

  const baseDict = base.default as Dictionary;
  const requestedDict = requested.default as Partial<Dictionary>;

  return {
    common: { ...baseDict.common, ...requestedDict.common },
    nav: { ...baseDict.nav, ...requestedDict.nav },
    home: { ...baseDict.home, ...requestedDict.home },
    footer: { ...baseDict.footer, ...requestedDict.footer },
    categories: { ...baseDict.categories, ...requestedDict.categories },
  };
}
