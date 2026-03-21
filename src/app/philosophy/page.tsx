import type { Metadata } from "next";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Philosophy",
  description:
    "The Jevons Paradox and the coming shortage of engineers. AI will not reduce demand for software engineers. It will create a shortage of them.",
  alternates: {
    canonical: "https://unio-lab.com/philosophy",
  },
};

const examples = [
  {
    era: "Excel · 1985",
    automated: "Automated",
    thing: "core accounting functions",
    grew: "grew",
    result: "demand for accountants",
  },
  {
    era: "Smartphone cameras · 2007",
    automated: "Democratised",
    thing: "photography",
    grew: "grew",
    result: "demand for professional operators",
  },
  {
    era: "YouTube · 2005",
    automated: "Collapsed",
    thing: "TV production costs",
    grew: "grew",
    result: "demand for video production talent",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
              Point of view
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl text-balance">
              The Jevons Paradox and the coming shortage of engineers
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-grey-accent">
              AI will not reduce demand for software engineers. It will create a
              shortage of them. Here is why we believe that — and why it shapes
              everything we build at Unio Lab.
            </p>
          </div>
        </Container>
      </section>

      {/* The Paradox */}
      <section className="bg-navy/[0.02] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              The paradox
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey-accent">
              <p>
                In 1865, the economist William Stanley Jevons observed something
                counterintuitive: as steam engines became more efficient, coal
                consumption went up, not down. More efficient machines
                didn&apos;t reduce demand for the resource — they made the
                resource economically viable for more applications, which
                multiplied consumption faster than efficiency could save it.
              </p>
              <p>
                This is the Jevons Paradox. And it applies, with striking
                regularity, every time a technology dramatically lowers the cost
                of entry to a market.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The pattern is older than software */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              The pattern is older than software
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey-accent">
              <p>
                When smartphones put a production-quality camera into every
                pocket, the global market for professional camera operators and
                editors grew. When Excel automated accounting functions, demand
                for accountants and analysts increased. When YouTube collapsed
                the economics of television — from €5M per episode to a man
                cleaning rusty tools in his shed with 200K subscribers — it
                created an enormous new market for video producers, editors, and
                directors.
              </p>
              <p>
                The same logic applies every time. Chefs who publish their
                recipes free online find their restaurants fully booked.
                Consultants who give away their best ideas in books get hired at
                higher rates. Making something cheap doesn&apos;t destroy the
                market. It expands it.
              </p>
            </div>

            {/* Examples grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {examples.map((ex) => (
                <div
                  key={ex.era}
                  className="rounded-lg bg-navy/[0.03] p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-grey-accent/50">
                    {ex.era}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy">
                    <strong className="font-medium">{ex.automated}</strong>{" "}
                    {ex.thing} →{" "}
                    <strong className="font-medium">{ex.grew}</strong>{" "}
                    {ex.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Software is next */}
      <section className="bg-navy/[0.02] py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Software is next
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey-accent">
              <p>
                What used to cost €500,000 and six months of a dedicated
                engineering team now costs €5,000 and two weeks. That cost
                collapse means the number of viable software companies
                isn&apos;t staying flat — it is growing by orders of magnitude.
                Ideas that previously needed 100,000 users to break even now
                need 1,000. The total addressable market for software is
                expanding faster than AI can displace the engineers inside it.
              </p>
              <p>
                Each of those new companies — every one of the millions who will
                now build what they previously couldn&apos;t afford to —
                eventually faces the same problem: the codebase that worked at
                fifty users breaks at five hundred. The schema that made sense
                in week two creates a migration crisis in month eight. The
                architecture that shipped fast becomes the liability that
                prevents the next feature from shipping at all.
              </p>
              <p>
                That&apos;s not a problem AI agents solve. That&apos;s a problem
                senior engineers solve. And there are now far more companies who
                need that expertise than there are engineers who have it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why this shapes how we build */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Why this shapes how we build
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey-accent">
              <p>
                At Unio Lab, we believe the value of engineering rigour
                doesn&apos;t fall as AI lowers implementation costs — it rises.
                When AI does the volume, what remains scarce is the human
                judgement that determines whether a system will hold together at
                scale.
              </p>
              <p>
                That&apos;s why our methodology puts specification first: a
                precise, machine-readable definition of the system before a line
                of code is written. It&apos;s why our engineers have seven or
                more years of experience in cloud-native architecture and
                industrial platform engineering. And it&apos;s why we verify
                every AI-generated output against a contract before it ships.
              </p>
              <p>
                We&apos;re not using AI to replace engineering. We&apos;re using
                it to make the parts of engineering that matter most available to
                the teams who need them right now — fast, rigorously, without the
                overhead of a twenty-person agency.
              </p>
              <p>
                The Jevons Paradox has surprised us before. We think it&apos;s
                about to surprise the software industry. We built Unio Lab to be
                on the right side of it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a system that needs engineering?"
        description="Describe the problem. We'll assess whether it's a good fit for spec-driven delivery and scope it within a week. If it's not right for our methodology, we'll tell you."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
