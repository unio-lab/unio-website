import type { Metadata } from "next";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "We made a bet on the Jevons Paradox: AI making software cheaper doesn't shrink the market for engineering rigour — it expands it. UNIO Lab is built for exactly this moment.",
  alternates: {
    canonical: "https://unio-lab.com/about",
  },
};

const principles = [
  {
    title: "Specifications are the product",
    description:
      "We don\u2019t ship code — we ship specified systems. The specification suite is the primary deliverable. Code is a generated artifact that serves the spec. When the spec changes, the code regenerates. This is how we maintain architectural integrity across every iteration.",
  },
  {
    title: "Human architecture, agent implementation",
    description:
      "Every architecture decision is made by an engineer with domain knowledge. AI agents handle the implementation volume under contracts defined by the spec. We don\u2019t delegate thinking to AI — we delegate typing.",
  },
  {
    title: "Verifiable, not trustable",
    description:
      "We don\u2019t ask you to trust AI-generated output. We verify every component against its specification — automatically, continuously, before anything ships. Contract tests, acceptance tests, and architectural invariants are non-negotiable quality gates.",
  },
  {
    title: "Open by default",
    description:
      "Dativo\u2019s core is open source. Our specifications, agent configurations, and architecture decisions are transparent. We believe the best way to prove engineering quality is to make it inspectable.",
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
              We made a bet on a paradox.
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
                Seven years ago Unio Lab was a cloud-native consultancy — Kubernetes,
                CI/CD, event-driven architecture. We were good at it. But we were
                watching something happen in the market that most engineering firms
                were getting backwards.
              </p>
              <p>
                The common story was: AI will automate software, so engineers are
                finished. We thought the opposite. We thought the Jevons Paradox
                would apply — when something becomes dramatically more efficient,
                consumption rises faster than the efficiency saves. Make it cheap
                to start a software company and millions more software companies
                start. Each of those companies needs infrastructure that scales.
                Each of them eventually needs a human who understands what breaks
                at five hundred users that worked fine at fifty.
              </p>
              <p>
                So we pivoted — not away from engineering, but towards the part of
                it that matters most when AI does the implementation volume:{" "}
                <strong className="text-navy font-medium">
                  specification, architecture, and verification.
                </strong>{" "}
                The decisions that determine whether a system holds together in
                eighteen months are still made by humans with hard-won domain
                knowledge. We built a lab around exactly those decisions.
              </p>
              <p>
                Today Unio Lab operates across three locations. Every product we
                build goes through the same lifecycle: human-authored specification
                as the source of truth, AI agents handling implementation at scale,
                human engineers owning every architecture decision and quality gate.
                The result is production software shipped in weeks with the rigour
                of a team ten times our size.
              </p>
              <p>
                Dativo and Filahti are the proof. Both built by a two-person team.
                Both production platforms. Both delivered in weeks. We&apos;re not
                describing a methodology — we&apos;re running it.
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
                  Spec-driven development and delivery operations. Continuous
                  shipping across time zones.
                </p>
              </div>
            </div>
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
