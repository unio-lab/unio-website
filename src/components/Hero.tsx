import Container from "./Container";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
          Product Studio · Germany + France + Tunisia
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl text-balance">
          We build software products. Fast.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-grey-accent">
          UNIO Lab is a product studio that ships production-grade platforms in
          weeks, not months. We use AI coding agents as our primary development
          tool. Our portfolio is our proof.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact" variant="primary">
            Tell Us What You Need Built
          </Button>
          <Button href="/work" variant="outline">
            See Our Work
          </Button>
        </div>
      </Container>
    </section>
  );
}
