export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UNIO Lab",
    url: "https://unio-lab.com",
    logo: "https://unio-lab.com/logo-kit/png/wordmark-navy-512.png",
    description:
      "Product studio that ships complete software platforms in weeks. Fixed scope, fixed price, AI-augmented delivery.",
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
      "Product studio that builds and ships complete software platforms — from scoping to production deployment — using AI-augmented development. Fixed scope, fixed price.",
    areaServed: ["EU", "Tunisia"],
    serviceType: "Software Product Development",
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
          text: "UNIO Lab is a product studio that builds and ships complete software platforms. We scope the problem, agree on a fixed price and timeline, and deliver a production-ready product — not a prototype or wireframe.",
        },
      },
      {
        "@type": "Question",
        name: "How does UNIO Lab use AI in development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI coding agents (Claude Code, Cursor, GitHub Copilot) are our primary development tools. Senior engineers make architecture decisions and review all output. AI handles implementation throughput, allowing a small team to ship at the speed of a much larger organization.",
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
          text: "UNIO Lab operates from three locations: Mönchengladbach (Germany) for engineering leadership, Paris (France) for product strategy, and Tunis (Tunisia) for AI-augmented development and delivery operations.",
        },
      },
      {
        "@type": "Question",
        name: "How does pricing work at UNIO Lab?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fixed price, fixed scope. We agree upfront on what gets built, what it costs, and when it ships. No hourly billing, no open-ended retainers, no scope creep.",
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
