import type { Metadata } from "next";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "UNIO Lab is a product studio that ships complete software platforms in weeks. Two continents, one studio — Mönchengladbach, Paris, and Tunis.",
  alternates: {
    canonical: "https://unio-lab.com/about",
  },
};

const principles = [
  {
    title: "Products, not projects",
    description:
      "We don't sell hours or staff augmentation. We take ownership of a problem and ship a product that solves it. Fixed scope, fixed price, shipped fast.",
  },
  {
    title: "AI does the throughput",
    description:
      "Our senior engineers direct AI coding agents to handle implementation at scale. The humans make architecture decisions, review output, and own quality. AI handles volume.",
  },
  {
    title: "Honest about scope",
    description:
      "We'll tell you what we can build, what it will cost, and when you'll have it. If it's not something we can ship well, we'll say so upfront.",
  },
  {
    title: "Open by default",
    description:
      "Dativo's core is open source. We ship in the open because transparency builds trust — and because good software should be accessible.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
              About
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl text-balance">
              Two continents. One studio.
            </h1>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="bg-navy/[0.02] py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4 text-base leading-relaxed text-grey-accent">
              <p>
                UNIO Lab started seven years ago as a cloud-native consulting
                firm — Kubernetes, CI/CD, event-driven architecture. We were
                good at it. But consulting has a ceiling: you're always selling
                time, never building equity.
              </p>
              <p>
                So we pivoted. Today UNIO Lab is a product studio. We build
                complete software platforms — our own and for clients who need
                something shipped fast and built right. Dativo (EU Data Act
                compliance for connected product manufacturers) and Filahti
                (agricultural advisory for Tunisian farmers) are the proof that
                this model works.
              </p>
              <p>
                What changed? AI coding agents made it possible for a small team
                of senior engineers to ship at the speed of a much larger
                organization. We don't use AI as a gimmick — it's how we build.
                Every product goes through the same pipeline: human architecture,
                AI-augmented implementation, human review, shipped together.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy">
              How we work
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle.title}>
                  <h3 className="font-heading text-lg font-semibold text-navy">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey-accent">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Locations */}
      <section className="bg-navy/[0.02] py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy">
              Where we are
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">
                  Mönchengladbach
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-grey-accent">
                  Engineering leadership and product architecture. German
                  business hours, EU compliance expertise.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">
                  Paris
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-grey-accent">
                  Product strategy and client-facing work. French market and
                  European partnerships.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">
                  Tunis
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-grey-accent">
                  AI-augmented development and delivery operations. Continuous
                  shipping across time zones.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a product that needs building?"
        description="We're always looking for the next platform to ship. Tell us what you need."
        buttonText="Tell Us What You Need Built"
        buttonHref="/contact"
      />
    </>
  );
}
