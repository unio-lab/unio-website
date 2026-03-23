import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import CaseStudy from "@/components/CaseStudy";
import CTASection from "@/components/CTASection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.work" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("work");
  const tCta = await getTranslations("cta");

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
            <p className="mx-auto mt-6 max-w-2xl text-lg text-grey-accent">
              {t("description")}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-base text-grey-accent/80">
              {t("subdescription")}
            </p>
          </div>
        </Container>
      </section>

      {/* Dativo Case Study */}
      <CaseStudy
        id="dativo"
        tag={t("dativo.tag")}
        title={t("dativo.title")}
        problem={t("dativo.problem")}
        solution={t("dativo.solution")}
        howBuilt={t("dativo.howBuilt")}
        links={[
          { label: "dativo.dev", href: "https://dativo.dev" },
          { label: "GitHub", href: "https://github.com/unio-lab/dativo" },
        ]}
      />

      {/* Filahti Case Study */}
      <CaseStudy
        id="filahti"
        tag={t("filahti.tag")}
        title={t("filahti.title")}
        problem={t("filahti.problem")}
        solution={t("filahti.solution")}
        howBuilt={t("filahti.howBuilt")}
        extra={{
          heading: t("filahti.specHeading"),
          text: t("filahti.specText"),
        }}
        links={[
          { label: t("filahti.specLink"), href: "https://app.unio-lab.com/demo", external: true },
        ]}
      />

      {/* What's Next */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy">
              {t("whatsNext.title")}
            </h2>
            <p className="mt-4 text-lg text-grey-accent">
              {t("whatsNext.description")}
            </p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
