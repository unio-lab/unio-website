import Container from "./Container";
import SectionHeader from "./SectionHeader";

const capabilities = [
  {
    title: "Human architecture",
    description:
      "Every system starts with a senior engineer-authored specification. AI implements against it.",
  },
  {
    title: "Verified, not trusted",
    description:
      "AI-generated code is validated against its specification before it ships. Always.",
  },
  {
    title: "Shipped in weeks",
    description:
      "Not because corners were cut. Because specification eliminates rework.",
  },
  {
    title: "You own everything",
    description:
      "Source code, specifications, agent configuration. No lock-in.",
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
