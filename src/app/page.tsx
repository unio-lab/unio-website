import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProcessSteps from "@/components/ProcessSteps";
import PortfolioCards from "@/components/PortfolioCards";
import CapabilityGrid from "@/components/CapabilityGrid";
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
      <ProcessSteps />
      <PortfolioCards />
      <CapabilityGrid />
      <CTASection
        title="Have a system that needs engineering?"
        description="Describe the problem. We'll assess whether it's a good fit for spec-driven delivery and scope it within a week. If it's not right for our methodology, we'll tell you."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
