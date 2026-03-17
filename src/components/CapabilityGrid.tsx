import Container from "./Container";
import SectionHeader from "./SectionHeader";

const capabilities = [
  {
    title: "Spec-Driven Engineering",
    description:
      "Specifications are our source of truth — not prompts, not conversations, not tickets. Every system starts as a structured, machine-readable spec. Implementation is generated from it, tested against it, and regenerated when it changes. This is how we deliver with architectural precision at implementation speed.",
  },
  {
    title: "Verifiable by Design",
    description:
      "Every output — code, API, deployment — is validated against its specification before it ships. Contract tests, acceptance tests, and architectural invariants run automatically. We don\u2019t trust AI-generated code. We verify it.",
  },
  {
    title: "You Own Everything",
    description:
      "When we hand over a product, you get the source code, the complete specification suite, and the agent configuration. You can maintain, extend, or rebuild the system without us. We deliver capability, not dependency.",
  },
  {
    title: "Senior Engineers, Not Prompt Operators",
    description:
      "Our engineers have 7+ years of experience in cloud-native architecture, industrial digitalization, and platform engineering. AI agents amplify that expertise — they don\u2019t substitute for it. The architecture decisions that determine whether your system scales in 18 months are made by humans with domain knowledge.",
  },
];

export default function CapabilityGrid() {
  return (
    <section className="bg-navy/[0.02] py-20 sm:py-24">
      <Container>
        <SectionHeader
          label="Why UNIO Lab"
          title="What makes this work"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-xl border border-navy/10 bg-white p-8 transition-shadow duration-200 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold text-navy">
                {cap.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-grey-accent">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
