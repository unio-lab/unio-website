"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import Button from "./Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("nav");

  const navLinks = [
    { href: "/work" as const, label: t("work") },
    { href: "/about" as const, label: t("about") },
    { href: "/philosophy" as const, label: t("philosophy") },
    { href: "/contact" as const, label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-white/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Unio Lab home">
          <Image
            src="/logo-kit/wordmark/unio-navy.svg"
            alt="Unio Lab"
            width={100}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-grey-accent transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA + Language Switcher */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          {/* <Button href="/contact" variant="primary">
            {t("cta")}
          </Button> */}
          <LanguageSwitcher />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-navy/5 bg-white">
          <div className="space-y-1 px-6 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-grey-accent hover:bg-navy/5 hover:text-navy"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-2">
              {/* <Button href="/contact" variant="primary" className="flex-1 ml-3">
                {t("cta")}
              </Button> */}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
