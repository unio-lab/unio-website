export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UNIO Lab",
    url: "https://unio-lab.com",
    logo: "https://unio-lab.com/logo-kit/png/wordmark-navy-512.png",
    description:
      "Spec-driven product lab. We author specifications, AI agents implement under contract, human engineers govern every decision. Production platforms shipped in weeks.",
    sameAs: [
      "https://github.com/unio-lab",
      "https://linkedin.com/company/unio-lab",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProfessionalServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "UNIO Lab",
    url: "https://unio-lab.com",
    description:
      "Spec-driven product lab that engineers production software platforms using structured specifications, agent-based implementation, and human-governed quality gates.",
    areaServed: ["EU", "Tunisia"],
    serviceType: "Spec-Driven Software Engineering",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "Dativo",
            url: "https://dativo.dev",
            applicationCategory: "BusinessApplication",
            description:
              "Open-core EU Data Act compliance platform for connected product manufacturers.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "Filahti",
            applicationCategory: "BusinessApplication",
            description:
              "Digital platform connecting Tunisian farmers with vetted agricultural experts via WhatsApp and companion mobile app.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQPageJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does UNIO Lab do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UNIO Lab is a spec-driven product lab. We engineer production software platforms using structured specifications as the source of truth, AI agents as the implementation layer, and human engineers governing every architectural and quality decision.",
        },
      },
      {
        "@type": "Question",
        name: "What is the Spec → Agent → Ship lifecycle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spec → Agent → Ship is our five-phase engineering lifecycle: Specify (human-authored specifications), Plan (AI-generated implementation plan, human-validated), Build (agentic implementation with continuous spec validation), Verify (autonomous quality gates), and Ship (deployed product with specification suite). Every product we build follows this lifecycle.",
        },
      },
      {
        "@type": "Question",
        name: "What is Dativo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dativo is an open-core compliance platform that enables manufacturers of connected products to share product-generated data with customers and authorized third parties, as required by the EU Data Act (Regulation (EU) 2023/2854). The Community Edition is available on GitHub.",
        },
      },
      {
        "@type": "Question",
        name: "What is Filahti?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Filahti is a digital platform connecting Tunisian farmers with vetted agricultural experts, government extension agents, and certified input suppliers through a hybrid WhatsApp bot and companion mobile app. It supports Tunisian Arabic, Modern Standard Arabic, and French.",
        },
      },
      {
        "@type": "Question",
        name: "Where is UNIO Lab based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UNIO Lab operates from three locations: Mönchengladbach (Germany) for engineering leadership, Paris (France) for product strategy, and Tunis (Tunisia) for spec-driven development and delivery operations.",
        },
      },
      {
        "@type": "Question",
        name: "What do I receive when UNIO Lab delivers a product?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You receive the production system, the complete specification suite, agent configuration, and a handoff guide. You can maintain, extend, or rebuild the system without us. The spec outlives the code.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
