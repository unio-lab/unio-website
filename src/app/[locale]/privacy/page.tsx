import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import { Link } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.privacy" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("privacy");

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-sm text-grey-accent">
            {t("lastUpdated")}
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-grey-accent">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                {t("controller.title")}
              </h2>
              <p className="mt-3">
                {t.rich("controller.text", {
                  link: (chunks) => (
                    <Link
                      href="/imprint"
                      className="text-navy underline hover:no-underline"
                    >
                      {chunks}
                    </Link>
                  ),
                })}
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                {t("dataCollected.title")}
              </h2>
              <p className="mt-3">{t("dataCollected.intro")}</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>{t("dataCollected.contactForm")}</strong>{" "}
                  {t("dataCollected.contactFormDetail")}
                </li>
                <li>
                  <strong>{t("dataCollected.technicalData")}</strong>{" "}
                  {t("dataCollected.technicalDataDetail")}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                {t("purpose.title")}
              </h2>
              <p className="mt-3">{t("purpose.intro")}</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>{t("purpose.inquiries")}</li>
                <li>{t("purpose.security")}</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                {t("sharing.title")}
              </h2>
              <p className="mt-3">{t("sharing.text")}</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                {t("retention.title")}
              </h2>
              <p className="mt-3">{t("retention.text")}</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                {t("rights.title")}
              </h2>
              <p className="mt-3">
                {t.rich("rights.text", {
                  email: (chunks) => (
                    <a
                      href="mailto:privacy@unio-lab.com"
                      className="text-navy underline hover:no-underline"
                    >
                      {chunks}
                    </a>
                  ),
                })}
              </p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                {t("cookies.title")}
              </h2>
              <p className="mt-3">{t("cookies.text")}</p>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                {t("changes.title")}
              </h2>
              <p className="mt-3">{t("changes.text")}</p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
