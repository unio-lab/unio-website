import Container from "./Container";

export default function WhyThisMoment() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
            Why now
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl text-balance">
            AI makes software cheaper.{" "}
            <span className="block sm:inline">
              That makes the market for software{" "}
              <em className="not-italic font-bold">bigger.</em>
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-grey-accent">
            The Jevons Paradox: when something becomes dramatically more
            efficient, consumption doesn&apos;t fall — it multiplies. Software is
            next.
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-grey-accent">
            <p>
              When the cost of starting a software company drops from €500K to
              €5K, millions of teams who couldn&apos;t previously afford to
              build, will build. Each of them needs production-quality
              infrastructure. Each of them needs someone who can make an
              architecture decision that will still hold in eighteen months.
            </p>
            <p>
              AI does the implementation volume. Human engineers — the kind who
              have seen what breaks at scale — become{" "}
              <strong className="text-navy font-medium">more</strong> valuable,
              not less. We built Unio Lab for exactly this moment: senior
              engineering judgement, delivered at the speed that a post-AI market
              demands.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
