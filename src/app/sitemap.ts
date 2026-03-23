import { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unio-lab.com";

  const pages = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/work", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/philosophy", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.7 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.2 },
    { path: "/imprint", changeFrequency: "yearly" as const, priority: 0.2 },
  ];

  return pages.flatMap((page) =>
    locales.map((locale) => {
      const prefix = locale === defaultLocale ? "" : `/${locale}`;
      const alternates: Record<string, string> = {};
      for (const l of locales) {
        const lPrefix = l === defaultLocale ? "" : `/${l}`;
        alternates[l] = `${baseUrl}${lPrefix}${page.path}`;
      }

      return {
        url: `${baseUrl}${prefix}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages: alternates },
      };
    })
  );
}
