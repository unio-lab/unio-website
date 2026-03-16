import Container from "./Container";

export default function BuiltWithAI() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
            How We Build
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            AI agents do the throughput. Our engineers make the decisions.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-grey-accent">
            Every product we ship is built with AI coding agents handling the
            implementation work — code generation, test writing, refactoring,
            documentation. Our engineers focus on what AI can&apos;t do:
            understanding your problem, making architecture decisions, and
            ensuring the product actually solves what it needs to solve.
          </p>

          {/* Workflow diagram */}
          <div className="mt-12" aria-hidden="true">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0">
              {[
                { label: "Problem", sub: "You" },
                { label: "Architecture", sub: "Human" },
                { label: "Implementation", sub: "AI + Human" },
                { label: "Review", sub: "Human" },
                { label: "Ship", sub: "Together" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center sm:flex-1">
                  <div className="flex-1 rounded-lg border border-navy/10 bg-white px-4 py-3 text-center">
                    <p className="text-sm font-semibold text-navy">
                      {step.label}
                    </p>
                    <p className="text-xs text-grey-accent/60">{step.sub}</p>
                  </div>
                  {i < 4 && (
                    <span className="hidden px-2 text-navy/20 sm:block">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
