"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

const phaseKeys = ["specify", "plan", "build", "verify", "ship"] as const;

const phaseMeta: Record<string, { demoUrl: string; accentColor: string }> = {
  specify: { demoUrl: "https://app.unio-lab.com/demo/specify", accentColor: "#D97706" },
  plan: { demoUrl: "https://app.unio-lab.com/demo/plan", accentColor: "#F59E0B" },
  build: { demoUrl: "https://app.unio-lab.com/demo/build", accentColor: "#059669" },
  verify: { demoUrl: "https://app.unio-lab.com/demo/verify", accentColor: "#2563EB" },
  ship: { demoUrl: "https://app.unio-lab.com/demo/ship", accentColor: "#7C3AED" },
};

export default function ProcessSteps() {
  const [active, setActive] = useState(0);
  const t = useTranslations("methodology");
  const key = phaseKeys[active];
  const meta = phaseMeta[key];

  return (
    <section id="methodology" className="bg-navy/[0.02] py-20 sm:py-28">
      <Container>
        <SectionHeader
          label={t("label")}
          title={t("title")}
          description={t("description")}
        />

        {/* Stepper */}
        <div className="mt-16">
          {/* Step indicators */}
          <div className="flex items-center justify-between">
            {phaseKeys.map((pk, i) => (
              <button
                key={pk}
                onClick={() => setActive(i)}
                className="group relative flex flex-1 flex-col items-center cursor-pointer"
                aria-label={`Phase ${t(`phases.${pk}.number`)}: ${t(`phases.${pk}.phase`)}`}
              >
                {/* Connector line (before pill) */}
                {i > 0 && (
                  <div
                    className="absolute top-4 right-1/2 h-0.5 w-full -translate-y-1/2 transition-colors duration-300"
                    style={{ backgroundColor: i <= active ? "#0C1F3F" : "rgba(12,31,63,0.1)" }}
                  />
                )}
                {/* Pill with phase name */}
                <div
                  className="relative z-10 flex items-center justify-center rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 sm:text-xs sm:px-5 sm:py-2"
                  style={{
                    backgroundColor: i === active ? "#0C1F3F" : i < active ? "#0C1F3F" : "white",
                    color: i <= active ? "white" : "rgba(12,31,63,0.4)",
                    border: i <= active ? "2px solid #0C1F3F" : "2px solid rgba(12,31,63,0.15)",
                    transform: i === active ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  {t(`phases.${pk}.phase`)}
                </div>
              </button>
            ))}
          </div>

          {/* Active phase detail */}
          <div
            key={active}
            className="mt-10 animate-fadeIn rounded-xl border-t-[3px] border-navy border border-navy/10 bg-white p-8 sm:p-10"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
              {/* Left: big number + phase */}
              <div className="flex flex-shrink-0 flex-col items-start sm:w-32">
                <span
                  className="font-heading text-6xl font-bold text-navy/10 sm:text-7xl"
                >
                  {t(`phases.${key}.number`)}
                </span>
                <p
                  className="mt-1 text-xs font-bold uppercase tracking-widest text-navy"
                >
                  {t(`phases.${key}.phase`)}
                </p>
              </div>

              {/* Right: content */}
              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                  {t(`phases.${key}.title`)}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-grey-accent sm:text-base">
                  {t(`phases.${key}.description`)}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-navy/30">
                      {t("whoLabel")}
                    </p>
                    <p className="mt-1 text-sm font-medium text-navy/70">
                      {t(`phases.${key}.who`)}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-navy/30">
                      {t("artifactsLabel")}
                    </p>
                    <p className="mt-1 text-sm text-grey-accent/70">
                      {t(`phases.${key}.artifacts`)}
                    </p>
                  </div>
                  {meta.demoUrl && (
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-navy/30">
                        {t("exampleLabel")}
                      </p>
                      <a
                        href={meta.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm font-medium text-navy transition-colors hover:underline"
                      >
                        {t(`phases.${key}.demoLabel`)}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
