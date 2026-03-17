import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about the system you need engineered. We'll assess fit, scope the specification work, and give you a clear timeline and fixed price within a week.",
  alternates: {
    canonical: "https://unio-lab.com/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl">
          {/* Page header */}
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-grey-accent">
              Contact
            </p>
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Start a conversation
            </h1>
            <p className="mt-4 text-lg text-grey-accent">
              Tell us about the system you need engineered. We&apos;ll assess fit,
              scope the specification work, and give you a clear timeline and
              fixed price within a week.
            </p>
          </div>

          {/* Contact Form */}
          <div className="mt-12">
            <ContactForm />
          </div>

          {/* Direct contact */}
          <div className="mt-12 space-y-4 text-center text-sm text-grey-accent">
            <p>
              Prefer email? Reach us at{" "}
              <a
                href="mailto:hello@unio-lab.com"
                className="text-navy underline hover:text-navy-mid"
              >
                hello@unio-lab.com
              </a>
            </p>
            <div className="flex flex-col items-center gap-1">
              <p>
                Germany:{" "}
                <a
                  href="tel:+4915251234567"
                  className="text-navy underline hover:text-navy-mid"
                >
                  +49 1525 123 4567
                </a>
              </p>
              <p>
                France:{" "}
                <a
                  href="tel:+33123456789"
                  className="text-navy underline hover:text-navy-mid"
                >
                  +33 1 23 45 67 89
                </a>
              </p>
              <p>
                Tunisia:{" "}
                <a
                  href="tel:+2169912345678"
                  className="text-navy underline hover:text-navy-mid"
                >
                  +216 99 12 345 678
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
