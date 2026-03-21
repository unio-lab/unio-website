import type { Metadata } from "next";
import Container from "@/components/Container";
import CaseStudy from "@/components/CaseStudy";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Small teams. Precise specifications. Production platforms shipped in weeks. The evidence that spec-driven, AI-augmented engineering works at scale.",
  alternates: {
    canonical: "https://unio-lab.com/work",
  },
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
              Our Work
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl text-balance">
              This is what the next generation of software companies looks like.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-grey-accent">
              Small teams. Precise specifications. Production platforms shipped in
              weeks. These are not demos or prototypes — they are the evidence that
              spec-driven, AI-augmented engineering works at a scale that used to
              require organisations ten times our size.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-base text-grey-accent/80">
              Every product below was built using our full lifecycle: human
              architecture, AI-augmented implementation, human verification,
              deployed in production.
            </p>
          </div>
        </Container>
      </section>

      {/* Dativo Case Study */}
      <CaseStudy
        id="dativo"
        tag="Data Act Compliance · EU"
        title="Dativo"
        problem="The EU Data Act (Regulation 2023/2854) is in force since September 2025. Manufacturers of connected products must share product-generated data with customers and authorized third parties — or face penalties of up to 4% of global annual turnover. Most manufacturers have equipment data scattered across silos with conflicting identifiers, no customer-facing access layer, and no audit trail."
        solution="Dativo is an operational compliance platform for connected product manufacturers navigating the EU Data Act. Equipment registry, smart data matching, customer self-service portal, fulfillment engine with SLA tracking, trade secret classification, compliance audit trail. Open-core — Community Edition on GitHub, Commercial Edition for enterprise."
        howBuilt="Built by a two-person team in weeks. This is what becomes possible when AI handles implementation volume and senior engineers govern every architecture decision. The economics of building a platform like Dativo changed dramatically. The bar for what it needs to do didn't."
        links={[
          { label: "dativo.dev", href: "https://dativo.dev" },
          { label: "GitHub", href: "https://github.com/unio-lab/dativo" },
        ]}
      />

      {/* Filahti Case Study */}
      <CaseStudy
        id="filahti"
        tag="Agricultural Advisory · Tunisia"
        title="Filahti"
        problem="Tunisia has 516,000 farms, 87% under 20 hectares. Public agricultural extension services are functionally dead — offices can't cover fuel for field visits. No private advisory market exists. Pesticide dealers fill the vacuum, diagnosing and selling with a conflict of interest and credit terms reaching 50% interest. Climate conditions are changing fast, with prolonged drought since 2017, and inherited farming knowledge is no longer enough."
        solution="Filahti connects Tunisian farmers with vetted agricultural experts, government extension agents, and certified input suppliers. Hybrid WhatsApp bot and companion mobile app. Credit-based consultations, AI-assisted diagnostics, digital prescriptions, on-site visit booking — in Tunisian Arabic, Modern Standard Arabic, and French."
        howBuilt="A product that would have taken a funded team of eight a year to build. Specified and shipped by two engineers. The Jevons Paradox applies here too: AI making agricultural software viable for niche markets means the farmers who needed expertise the most can now access it. Launching 2026."
      />

      {/* What's Next */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy">
              What&apos;s next
            </h2>
            <p className="mt-4 text-lg text-grey-accent">
              We&apos;re always scoping the next product. If you have a problem that
              needs a platform — not just a feature — we should talk.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a system that needs engineering?"
        description="Describe the problem. We'll assess whether it's a good fit for spec-driven delivery and scope it within a week."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
