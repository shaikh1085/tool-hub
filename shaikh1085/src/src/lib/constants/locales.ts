import type { LocaleMeta } from "@/types";

/**
 * Single source of truth for every locale the platform routes.
 * Adding a language later is: (1) add a row here, (2) add a dictionary
 * JSON file under src/i18n/dictionaries/. Nothing else in the app needs
 * to change — layout, middleware, and the language switcher all read
 * from this list.
 */
export const locales: LocaleMeta[] = [
  { code: "en", nativeName: "English", englishName: "English", dir: "ltr", enabled: true },
  { code: "ur", nativeName: "اردو", englishName: "Urdu", dir: "rtl", enabled: false },
  { code: "hi", nativeName: "हिन्दी", englishName: "Hindi", dir: "ltr", enabled: false },
  { code: "es", nativeName: "Español", englishName: "Spanish", dir: "ltr", enabled: false },
  { code: "fr", nativeName: "Français", englishName: "French", dir: "ltr", enabled: false },
  { code: "ar", nativeName: "العربية", englishName: "Arabic", dir: "rtl", enabled: false },
];

export const defaultLocale = "en" as const;

export const localeCodes = locales.map((l) => l.code);

export function isValidLocale(value: string): value is (typeof locales)[number]["code"] {
  return localeCodes.includes(value as never);
}

export function getLocaleMeta(code: string): LocaleMeta {
  return locales.find((l) => l.code === code) ?? locales[0]!;
}
