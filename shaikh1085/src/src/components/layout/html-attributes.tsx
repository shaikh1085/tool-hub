"use client";

import { useEffect } from "react";

interface HtmlAttributesProps {
  lang: string;
  dir: "ltr" | "rtl";
}

/**
 * The root <html> tag lives in app/layout.tsx, which sits above the
 * [lang] segment and therefore never receives the locale param. This
 * component syncs `lang`/`dir` onto document.documentElement as soon as
 * a localized layout mounts. It renders nothing — it's a side-effect
 * only — so it never contributes to layout shift or hydration diffs.
 */
export function HtmlAttributes({ lang, dir }: HtmlAttributesProps) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return null;
}
