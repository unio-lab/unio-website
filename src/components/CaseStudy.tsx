import Container from "./Container";
import Button from "./Button";

interface CaseStudyLink {
  label: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
}

interface CaseStudyProps {
  id?: string;
  tag: string;
  title: string;
  problem: string;
  solution: string;
  howBuilt?: string;
  extra?: { heading: string; text: string };
  links?: CaseStudyLink[];
}

export default function CaseStudy({
  id,
  tag,
  title,
  problem,
  solution,
  howBuilt,
  extra,
  links,
}: CaseStudyProps) {
  return (
    <section id={id} className="py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-grey-accent">
            {tag}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {title}
          </h2>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-navy">
                The Problem
              </h3>
              <p className="mt-2 text-base leading-relaxed text-grey-accent">
                {problem}
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-navy">
                What We Built
              </h3>
              <p className="mt-2 text-base leading-relaxed text-grey-accent">
                {solution}
              </p>
            </div>

            {howBuilt && (
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">
                  How We Built It
                </h3>
                <p className="mt-2 text-base leading-relaxed text-grey-accent">
                  {howBuilt}
                </p>
              </div>
            )}

            {extra && (
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">
                  {extra.heading}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-grey-accent">
                  {extra.text}
                </p>
              </div>
            )}
          </div>

          {links && links.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-4">
            {links.map((link) =>
              link.disabled ? (
                <span
                  key={link.label}
                  className="inline-flex items-center justify-center rounded-md border border-navy/10 px-6 py-3 text-sm font-medium text-grey-accent/50"
                >
                  {link.label}
                </span>
              ) : (
                <Button
                  key={link.label}
                  href={link.href}
                  variant="outline"
                  external={link.external}
                >
                  {link.label}
                </Button>
              )
            )}
          </div>
          )}
        </div>
      </Container>
    </section>
  );
}
