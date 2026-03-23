"use client";

import { useTranslations } from "next-intl";
import Container from "./Container";

export default function WhyThisMoment() {
  const t = useTranslations("whyNow");

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
            {t("label")}
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl text-balance">
            {t("title")}{" "}
            <span className="block sm:inline">
              {t("titleContinuation")}{" "}
              <em className="not-italic font-bold">{t("titleEmphasis")}</em>
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-grey-accent">
            {t("subtitle")}
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-grey-accent">
            <p>{t("paragraph1")}</p>
            <p>
              {t("paragraph2Start")}{" "}
              <strong className="text-navy font-medium">{t("paragraph2Emphasis")}</strong>{" "}
              {t("paragraph2End")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
