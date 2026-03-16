import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Imprint",
  description:
    "Legal imprint (Impressum) for UNIO Lab as required by German law.",
  alternates: {
    canonical: "https://unio-lab.com/imprint",
  },
};

export default function ImprintPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Imprint
          </h1>
          <p className="mt-4 text-sm text-grey-accent">
            Angaben gemäß § 5 TMG
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-grey-accent">
            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                Company
              </h2>
              <div className="mt-3 space-y-1">
                <p>UNIO Lab SARL</p>
                <p>Tunis, Tunisia</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                Contact
              </h2>
              <div className="mt-3 space-y-1">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:hello@unio-lab.com"
                    className="text-navy underline hover:no-underline"
                  >
                    hello@unio-lab.com
                  </a>
                </p>
                <p>Phone: +49 2161 123 4567</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                Commercial Register
              </h2>
              <div className="mt-3 space-y-1">
                <p>Registered at: Tunis, Tunisia</p>
                <p>Registration number: 1641895Z</p>
              </div>
            </section>

            {/* <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                VAT ID
              </h2>
              <p className="mt-3">
                VAT identification number pursuant to § 27a of the German VAT
                Act (UStG): [VAT ID to be added]
              </p>
            </section> */}

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                Managing Director
              </h2>
              <p className="mt-3">Haroun Afdhal</p>
            </section>

            {/* <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                Responsible for Content
              </h2>
              <p className="mt-3">
                Responsible for content pursuant to § 55 Abs. 2 RStV:
                [Name and address to be added]
              </p>
            </section> */}

            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">
                Dispute Resolution
              </h2>
              <p className="mt-3">
                The European Commission provides a platform for online dispute
                resolution (ODR):{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy underline hover:no-underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                . We are not willing or obliged to participate in dispute
                resolution proceedings before a consumer arbitration board.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
