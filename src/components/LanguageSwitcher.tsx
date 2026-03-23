"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { locales, type Locale } from "@/i18n/config";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: e.target.value as Locale });
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      aria-label="Select language"
      className="appearance-none rounded-md border border-navy/20 bg-transparent px-2 py-1 text-sm font-medium text-navy cursor-pointer hover:border-navy/40 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
