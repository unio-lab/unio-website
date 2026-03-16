import Container from "./Container";
import SectionHeader from "./SectionHeader";

const capabilities = [
  {
    title: "AI-Native Development",
    description:
      "We don't use AI as an add-on. AI coding agents are our primary development tool — Claude Code, Cursor, GitHub Copilot. This is how we deliver in weeks what traditional teams quote months for.",
  },
  {
    title: "Two Products as Proof",
    description:
      "Dativo handles EU Data Act compliance for industrial manufacturers. Filahti connects Tunisian farmers with agricultural experts via WhatsApp. Both built by our team. Both production-grade.",
  },
  {
    title: "Fixed Price, Fixed Scope",
    description:
      'No hourly billing. No scope creep disguised as "agile." We agree on what gets built, what it costs, and when it ships. If we can\'t scope it clearly, we\'ll tell you.',
  },
  {
    title: "Two Continents, One Team",
    description:
      "Engineering from Tunisia, architecture and client communication from Germany and France. Not nearshoring — a product studio that happens to operate across time zones.",
  },
];

export default function CapabilityGrid() {
  return (
    <section className="py-20 sm:py-24">
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
