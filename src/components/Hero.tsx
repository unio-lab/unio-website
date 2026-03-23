import { useTranslations } from "next-intl";
import Container from "./Container";
import Button from "./Button";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="py-24 sm:py-32">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
          {t("label")}
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl text-balance">
          {t("title")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg italic text-grey-accent/80">
          {t("tagline")}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-grey-accent">
          {t("description")}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/#methodology" variant="primary">
            {t("ctaPrimary")}
          </Button>
          <Button href="/work" variant="outline">
            {t("ctaSecondary")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
