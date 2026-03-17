import type { Metadata } from "next";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { OrganizationJsonLd, ProfessionalServiceJsonLd, FAQPageJsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://unio-lab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "UNIO Lab — Spec-Driven Product Lab",
    template: "%s | UNIO Lab — Spec-Driven Product Lab",
  },
  description:
    "Spec-driven product lab. We author specifications, AI agents implement under contract, human engineers govern every decision. Production platforms shipped in weeks.",
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
  authors: [{ name: "UNIO Lab" }],
  creator: "UNIO Lab",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "UNIO Lab",
    title: "UNIO Lab — Spec-Driven Product Lab",
    description:
      "Spec-driven product lab. We author specifications, AI agents implement under contract, human engineers govern every decision. Production platforms shipped in weeks.",
    images: [
      {
        url: "/opengraph/og-image.png",
        width: 1200,
        height: 630,
        alt: "UNIO Lab — Spec-Driven Product Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNIO Lab — Spec-Driven Product Lab",
    description:
      "Spec-driven product lab. We author specifications, AI agents implement under contract, human engineers govern every decision. Production platforms shipped in weeks.",
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
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/logo-kit/favicon/favicon-white-on-navy.svg", type: "image/svg+xml" },
      { url: "/logo-kit/png/favicon-white-on-navy-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-kit/png/favicon-white-on-navy-16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/logo-kit/png/favicon-white-on-navy-180.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* HubSpot tracking script (optional — only loads if portal ID is set) */}
        {process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID && (
          <Script
            id="hs-script-loader"
            strategy="afterInteractive"
            src={`//js.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}.js`}
          />
        )}
      </head>
      <body className="font-body antialiased">
        <OrganizationJsonLd />
        <ProfessionalServiceJsonLd />
        <FAQPageJsonLd />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
