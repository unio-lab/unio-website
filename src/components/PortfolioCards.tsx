import Container from "./Container";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

interface PortfolioLink {
  label: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
}

interface PortfolioItem {
  tag: string;
  title: string;
  description: string;
  teamLine?: string;
  links: PortfolioLink[];
}

const portfolioItems: PortfolioItem[] = [
  {
    tag: "Data Act Compliance · EU",
    title: "Dativo",
    description:
      "Operational platform for connected product manufacturers to comply with the EU Data Act. Equipment registry with smart matching, automated data mapping, customer self-service portal, fulfillment engine with SLA tracking, trade secret classification, and compliance audit trail. Open-core — Community Edition on GitHub, Commercial Edition for enterprise.",
    teamLine: "Specified, built, and shipped by a 2-person team in weeks.",
    links: [
      { label: "dativo.dev →", href: "https://dativo.dev", external: true },
      {
        label: "GitHub →",
        href: "https://github.com/unio-lab/dativo",
        external: true,
      },
    ],
  },
  {
    tag: "Agricultural Advisory · Tunisia",
    title: "Filahti",
    description:
      "Digital platform connecting Tunisian farmers with vetted agricultural experts, government extension agents, and certified input suppliers. Hybrid WhatsApp bot and companion mobile app with credit-based consultations, AI-assisted diagnostics, digital prescriptions, and on-site visit booking — in Tunisian Arabic, Modern Standard Arabic, and French.",
    teamLine: "Specified and built by a 2-person team. Launching 2026.",
    links: [{ label: "Coming Soon", href: "#", disabled: true }],
  },
];

export default function PortfolioCards() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeader
          label="Our Work"
          title="Production Software Platforms, Built with Our Spec-Driven Approach"
          description="Every product below was built using our spec-driven lifecycle. The specifications, agent configurations, and source code are real — not marketing demos."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-navy/10 bg-white p-8 transition-shadow duration-200 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-grey-accent">
                {item.tag}
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-grey-accent">
                {item.description}
              </p>
              {item.teamLine && (
                <p className="mt-4 text-xs text-grey-accent/60 italic">
                  {item.teamLine}
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-4">
                {item.links.map((link) =>
                  link.disabled ? (
                    <span
                      key={link.label}
                      className="text-sm font-medium text-grey-accent/50"
                    >
                      {link.label}
                    </span>
                  ) : (
                    <Button
                      key={link.label}
                      href={link.href}
                      variant="outline"
                      external={link.external}
                      className="text-sm px-4 py-2"
                    >
                      {link.label}
                    </Button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
