"use client";

import { useTranslations } from "next-intl";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

interface PortfolioLink {
  label: string;
  href: string;
  external?: boolean;
}

export default function PortfolioCards() {
  const t = useTranslations("portfolio");

  const portfolioItems = [
    {
      tag: t("dativo.tag"),
      title: t("dativo.title"),
      description: t("dativo.description"),
      teamLine: t("dativo.teamLine"),
      links: [
        { label: "dativo.dev →", href: "https://dativo.dev", external: true },
        { label: "GitHub →", href: "https://github.com/unio-lab/dativo", external: true },
      ] as PortfolioLink[],
    },
    {
      tag: t("filahti.tag"),
      title: t("filahti.title"),
      description: t("filahti.description"),
      teamLine: t("filahti.teamLine"),
      links: [
        { label: t("filahti.linkLabel"), href: "https://app.unio-lab.com/demo", external: true },
      ] as PortfolioLink[],
    },
  ];

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          label={t("label")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-navy/10 bg-white p-8 transition-shadow duration-200 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-grey-accent">
                {item.tag}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-grey-accent">
                {item.description}
              </p>
              {item.teamLine && (
                <p className="mt-4 text-xs text-grey-accent/60 italic">
                  {item.teamLine}
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-4">
                {item.links.map((link) => (
                  <Button
                    key={link.label}
                    href={link.href}
                    variant="outline"
                    external={link.external}
                    className="text-sm px-4 py-2"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
