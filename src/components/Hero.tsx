import Container from "./Container";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
          Spec-Driven Product Lab
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl text-balance">
          Software engineered from specification. Implemented by AI. Governed by humans.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg italic text-grey-accent/80">
          Because AI making software cheaper doesn&apos;t shrink the market for rigour — it expands it.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-grey-accent">
          We author precise, machine-readable specifications for every system we build.
          AI agents implement under contract. Human engineers own every architecture
          decision and quality gate. The result: production platforms shipped in
          weeks — with the rigor of a team ten times our size.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/#methodology" variant="primary">
            See How We Work
          </Button>
          <Button href="/work" variant="outline">
            View Our Portfolio
          </Button>
        </div>
      </Container>
    </section>
  );
}
