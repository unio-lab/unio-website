import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.imprint" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("imprint");

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-sm text-grey-accent">
            {t("legalNote")}
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-grey-accent">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                {t("company")}
              </h2>
              <div className="mt-3 space-y-1">
                <p>{t("companyName")}</p>
                <p>{t("companyAddress")}</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                {t("contact")}
              </h2>
              <div className="mt-3 space-y-1">
                <p>
                  {t("emailLabel")}:{" "}
                  <a
                    href="mailto:hello@unio-lab.com"
                    className="text-navy underline hover:no-underline"
                  >
                    hello@unio-lab.com
                  </a>
                </p>
                <p>{t("phone")}</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                {t("register")}
              </h2>
              <div className="mt-3 space-y-1">
                <p>{t("registerLocation")}</p>
                <p>{t("registerNumber")}</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                {t("director")}
              </h2>
              <p className="mt-3">{t("directorName")}</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                {t("dispute")}
              </h2>
              <p className="mt-3">
                {t.rich("disputeText", {
                  link: (chunks) => (
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy underline hover:no-underline"
                    >
                      {chunks}
                    </a>
                  ),
                })}
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
