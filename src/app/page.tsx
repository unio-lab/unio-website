import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PortfolioCards from "@/components/PortfolioCards";
import ProcessSteps from "@/components/ProcessSteps";
import CapabilityGrid from "@/components/CapabilityGrid";
import BuiltWithAI from "@/components/BuiltWithAI";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://unio-lab.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PortfolioCards />
      <ProcessSteps />
      <CapabilityGrid />
      <BuiltWithAI />
      <CTASection
        title="Have something that needs building?"
        description="Tell us what you're trying to solve. We'll tell you honestly whether we can ship it — and how fast."
        buttonText="Tell Us What You Need Built"
        buttonHref="/contact"
      />
    </>
  );
}
