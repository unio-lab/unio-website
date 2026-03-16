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
    default: "UNIO Lab — We build software products. Fast.",
    template: "%s | UNIO Lab",
  },
  description:
    "UNIO Lab is a product studio that ships complete software platforms in weeks. Fixed scope, fixed price, AI-augmented delivery.",
  keywords: [
    "product studio",
    "software development",
    "ship fast",
    "AI-augmented development",
    "EU compliance platform",
    "Dativo",
    "open source",
    "fixed price software",
    "platform engineering",
    "Next.js",
  ],
  authors: [{ name: "UNIO Lab" }],
  creator: "UNIO Lab",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "UNIO Lab",
    title: "UNIO Lab — We build software products. Fast.",
    description:
      "Product studio that ships complete software platforms in weeks. Fixed scope, fixed price, AI-augmented delivery.",
    images: [
      {
        url: "/opengraph/og-image.png",
        width: 1200,
        height: 630,
        alt: "UNIO Lab — We build software products. Fast.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UNIO Lab — We build software products. Fast.",
    description:
      "Product studio that ships complete software platforms in weeks. Fixed scope, fixed price, AI-augmented delivery.",
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
