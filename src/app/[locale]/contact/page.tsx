import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.contact" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl">
          {/* Page header */}
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
              {t("label")}
            </p>
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-grey-accent">
              {t("description")}
            </p>
          </div>

          {/* Contact Form */}
          <div className="mt-12">
            <ContactForm />
          </div>

          {/* Direct contact */}
          <div className="mt-12 space-y-4 text-center text-sm text-grey-accent">
            <p>
              {t("emailLabel")}{" "}
              <a
                href="mailto:hello@unio-lab.com"
                className="text-navy underline hover:text-navy-mid"
              >
                hello@unio-lab.com
              </a>
            </p>
            <div className="flex flex-col items-center gap-1">
              <p>
                {t("germany")}:{" "}
                <a
                  href="tel:+4915251234567"
                  className="text-navy underline hover:text-navy-mid"
                >
                  +49 1525 123 4567
                </a>
              </p>
              <p>
                {t("france")}:{" "}
                <a
                  href="tel:+33123456789"
                  className="text-navy underline hover:text-navy-mid"
                >
                  +33 1 23 45 67 89
                </a>
              </p>
              <p>
                {t("tunisia")}:{" "}
                <a
                  href="tel:+2169912345678"
                  className="text-navy underline hover:text-navy-mid"
                >
                  +216 99 12 345 678
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
