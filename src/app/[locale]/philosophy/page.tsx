import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.philosophy" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PhilosophyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("philosophy");

  const examples = [
    {
      era: t("pattern.examples.excel.era"),
      automated: t("pattern.examples.excel.automated"),
      thing: t("pattern.examples.excel.thing"),
      grew: t("pattern.examples.excel.grew"),
      result: t("pattern.examples.excel.result"),
    },
    {
      era: t("pattern.examples.camera.era"),
      automated: t("pattern.examples.camera.automated"),
      thing: t("pattern.examples.camera.thing"),
      grew: t("pattern.examples.camera.grew"),
      result: t("pattern.examples.camera.result"),
    },
    {
      era: t("pattern.examples.youtube.era"),
      automated: t("pattern.examples.youtube.automated"),
      thing: t("pattern.examples.youtube.thing"),
      grew: t("pattern.examples.youtube.grew"),
      result: t("pattern.examples.youtube.result"),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
              {t("label")}
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl text-balance">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-grey-accent">
              {t("subtitle")}
            </p>
          </div>
        </Container>
      </section>

      {/* The Paradox */}
      <section className="bg-navy/[0.02] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {t("paradox.title")}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey-accent">
              <p>{t("paradox.p1")}</p>
              <p>{t("paradox.p2")}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* The pattern is older than software */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {t("pattern.title")}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey-accent">
              <p>{t("pattern.p1")}</p>
              <p>{t("pattern.p2")}</p>
            </div>

            {/* Examples grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {examples.map((ex) => (
                <div
                  key={ex.era}
                  className="rounded-lg bg-navy/[0.03] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-grey-accent/50">
                    {ex.era}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy">
                    <strong className="font-medium">{ex.automated}</strong>{" "}
                    {ex.thing} →{" "}
                    <strong className="font-medium">{ex.grew}</strong>{" "}
                    {ex.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Software is next */}
      <section className="bg-navy/[0.02] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {t("software.title")}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey-accent">
              <p>{t("software.p1")}</p>
              <p>{t("software.p2")}</p>
              <p>{t("software.p3")}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why this shapes how we build */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              {t("whyShapes.title")}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey-accent">
              <p>{t("whyShapes.p1")}</p>
              <p>{t("whyShapes.p2")}</p>
              <p>{t("whyShapes.p3")}</p>
              <p>{t("whyShapes.p4")}</p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
