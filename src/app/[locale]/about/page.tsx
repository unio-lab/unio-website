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
  const t = await getTranslations({ locale, namespace: "metadata.about" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("about");
  const tPrinciples = await getTranslations("about.principles");
  const tLocations = await getTranslations("about.locations");

  const principles = [
    { title: tPrinciples("specs.title"), description: tPrinciples("specs.description") },
    { title: tPrinciples("humanAi.title"), description: tPrinciples("humanAi.description") },
    { title: tPrinciples("verifiable.title"), description: tPrinciples("verifiable.description") },
    { title: tPrinciples("open.title"), description: tPrinciples("open.description") },
  ];

  const locations = [
    { title: tLocations("mg.title"), description: tLocations("mg.description") },
    { title: tLocations("paris.title"), description: tLocations("paris.description") },
    { title: tLocations("tunis.title"), description: tLocations("tunis.description") },
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
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="bg-navy/[0.02] py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4 text-base leading-relaxed text-grey-accent">
              <p>{t("story.p1")}</p>
              <p>{t("story.p2")}</p>
              <p>
                {t("story.p3Start")}
                <strong className="text-navy font-medium">
                  {t("story.p3Emphasis")}
                </strong>
                {t("story.p3End")}
              </p>
              <p>{t("story.p4")}</p>
              <p>{t("story.p5")}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy">
              {tPrinciples("title")}
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle.title}>
                  <h3 className="font-heading text-lg font-semibold text-navy">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey-accent">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Locations */}
      <section className="bg-navy/[0.02] py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy">
              {tLocations("title")}
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {locations.map((loc) => (
                <div key={loc.title}>
                  <h3 className="font-heading text-lg font-semibold text-navy">
                    {loc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey-accent">
                    {loc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
