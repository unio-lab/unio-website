import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import WhyThisMoment from "@/components/WhyThisMoment";
import ProcessSteps from "@/components/ProcessSteps";
import PortfolioCards from "@/components/PortfolioCards";
import CapabilityGrid from "@/components/CapabilityGrid";
import CTASection from "@/components/CTASection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ProcessSteps />
      <WhyThisMoment />
      <PortfolioCards />
      <CapabilityGrid />
      <CTASection />
    </>
  );
}
