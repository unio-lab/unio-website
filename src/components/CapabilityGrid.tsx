"use client";

import { useTranslations } from "next-intl";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

const capabilityKeys = ["architecture", "verified", "shipped", "ownership"] as const;

export default function CapabilityGrid() {
  const t = useTranslations("capabilities");

  return (
    <section className="bg-navy/[0.02] py-20 sm:py-24">
      <Container>
        <SectionHeader
          label={t("label")}
          title={t("title")}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {capabilityKeys.map((key) => (
            <div
              key={key}
              className="rounded-xl border border-navy/10 bg-white p-8 transition-shadow duration-200 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold text-navy">
                {t(`items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-grey-accent">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
