import type { Locale } from "@/types";

/**
 * Maps a locale to its dictionary loader. Only `en` has real copy today.
 * When a translator delivers e.g. src/i18n/dictionaries/es.json with the
 * same shape as en.json, flip its `enabled` flag in constants/locales.ts
 * and add the import here — get-dictionary.ts handles the rest,
 * including falling back to English for any key a translation misses.
 */
export const dictionaryLoaders: Record<Locale, () => Promise<{ default: unknown }>> = {
  en: () => import("./dictionaries/en.json"),
  ur: () => import("./dictionaries/en.json"), // TODO: replace with ur.json once translated
  hi: () => import("./dictionaries/en.json"), // TODO: replace with hi.json once translated
  es: () => import("./dictionaries/en.json"), // TODO: replace with es.json once translated
  fr: () => import("./dictionaries/en.json"), // TODO: replace with fr.json once translated
  ar: () => import("./dictionaries/en.json"), // TODO: replace with ar.json once translated
};
