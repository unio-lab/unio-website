import Container from "./Container";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    number: "01",
    title: "Scope",
    description:
      "You describe the business problem. We ask hard questions, cut scope to what actually matters, and agree on a fixed price and timeline. No ambiguity, no open-ended retainers.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Our engineer builds with AI coding agents from Tunisia. Architecture decisions, code review, and client communication happen from Germany and France. We ship working increments — not status reports.",
  },
  {
    number: "03",
    title: "Ship",
    description:
      "You get a deployed, production-ready product with documentation, source code, and a clean handoff. Not a prototype. Not a wireframe. Software that works.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-navy/[0.02] py-20 sm:py-24">
      <Container>
        <SectionHeader
          label="Our Process"
          title="From problem to product in weeks"
        />

        <div className="mt-16 space-y-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid gap-6 sm:grid-cols-[80px_1fr] sm:items-start"
            >
              <span className="font-heading text-4xl font-bold text-navy/15">
                {step.number}
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-grey-accent">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
