import { NextRequest } from "next/server";

export const locales = ["en", "de", "bs"];
export const defaultLocale = "en";

export function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language");
  if (!acceptLang) return defaultLocale;
  const found = locales.find((loc) => acceptLang.includes(loc));
  return found || defaultLocale;
}

export async function getTranslations(locale: string) {
  try {
    const data = await import(`../locales/${locale}.json`);
    return data.default;
  } catch {
    const data = await import(`../locales/${defaultLocale}.json`);
    return data.default;
  }
}
