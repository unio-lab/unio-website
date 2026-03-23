import type { Metadata } from "next";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { locales, defaultLocale, type Locale } from "@/i18n/config";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { OrganizationJsonLd, ProfessionalServiceJsonLd, FAQPageJsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://unio-lab.com";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] =
      loc === defaultLocale
        ? siteUrl
        : `${siteUrl}/${loc}`;
  }

  const canonical =
    locale === defaultLocale
      ? siteUrl
      : `${siteUrl}/${locale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("siteTitle"),
      template: `%s | ${t("siteTitle")}`,
    },
    description: t("siteDescription"),
    keywords: [
      "spec-driven development",
      "product lab",
      "specification engineering",
      "AI-implemented software",
      "human-governed engineering",
      "EU compliance platform",
      "Dativo",
      "open source",
      "fixed price software",
      "platform engineering",
    ],
    authors: [{ name: "Unio Lab" }],
    creator: "Unio Lab",
    openGraph: {
      type: "website",
      locale,
      alternateLocale: locales.filter((l) => l !== locale),
      url: canonical,
      siteName: "Unio Lab",
      title: t("siteTitle"),
      description: t("siteDescription"),
      images: [
        {
          url: "/opengraph/og-image.png",
          width: 1200,
          height: 630,
          alt: t("siteTitle"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("siteTitle"),
      description: t("siteDescription"),
      images: ["/opengraph/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical,
      languages,
    },
    icons: {
      icon: [
        { url: "/logo-kit/favicon/favicon-white-on-navy.svg", type: "image/svg+xml" },
        { url: "/logo-kit/png/favicon-white-on-navy-32.png", sizes: "32x32", type: "image/png" },
        { url: "/logo-kit/png/favicon-white-on-navy-16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: "/logo-kit/png/favicon-white-on-navy-180.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID && (
          <Script
            id="hs-script-loader"
            strategy="afterInteractive"
            src={`//js.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}.js`}
          />
        )}
      </head>
      <body className="font-body antialiased">
        <NextIntlClientProvider messages={messages}>
          <OrganizationJsonLd />
          <ProfessionalServiceJsonLd />
          <FAQPageJsonLd />
          <Navigation />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
