import type { Metadata } from "next";
import Container from "@/components/Container";
import CaseStudy from "@/components/CaseStudy";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Products we've built at UNIO Lab. From EU regulatory compliance platforms to agricultural tech — shipped fast, built to last.",
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
              Products we've shipped
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-grey-accent">
              We don't just build for clients — we build our own products too.
              Here's what we've shipped.
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
        solution="Dativo is the operational platform that makes EU Data Act compliance auditable and scalable. Equipment identity resolution with smart matching, automated data mapping, a customer self-service portal for data access requests, a fulfillment engine with SLA tracking, trade secret classification with Article 4(3) compliance, and a full audit trail ready for supervisory review. Open-core model — the Community Edition is genuinely useful, not a lead-gen trap."
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
        solution="Filahti connects farmers with vetted agricultural experts, government extension agents, and certified input suppliers through a hybrid WhatsApp bot and companion mobile app. Credit-based consultations with AI-assisted diagnostics, digital prescriptions with QR codes for dealer fulfillment, and on-site visit booking. Full support for Tunisian Arabic, Modern Standard Arabic, and French — designed for voice-first interaction and low-bandwidth use."
        extra={{ heading: "What we're building next", text: "Filahti is in active development. Covering all major Tunisian crops — olives, cereals, citrus, livestock, and vegetables — with sponsor-funded credit programs for smallholder farmers." }}
      />

      {/* What's Next */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy">
              What's next
            </h2>
            <p className="mt-4 text-lg text-grey-accent">
              We're always scoping the next product. If you have a problem that
              needs a platform — not just a feature — we should talk.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a product that needs building?"
        description="Tell us the problem. We'll tell you if we can ship it — and how fast."
        buttonText="Tell Us What You Need Built"
        buttonHref="/contact"
      />
    </>
  );
}
