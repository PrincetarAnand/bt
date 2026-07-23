import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Check, Shield, Gauge, Cpu } from "lucide-react";

import heroSystem from "@/assets/hero-system.jpg";
import productLite from "@/assets/product-lite.jpg";
import productProflow from "@/assets/product-proflow.jpg";
import productTitan from "@/assets/product-titan.jpg";
import technicalDetail from "@/assets/technical-detail.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BTech Aqua | Industrial RO Water Purifier Manufacturer in India" },
      {
        name: "description",
        content:
          "Leading manufacturer of industrial & commercial RO water purifiers in India. Capacities from 250 LPH to 5000+ LPH. Get a custom quote from BTech Aqua today.",
      },
      {
        name: "keywords",
        content:
          "industrial RO plant, RO water purifier manufacturer, commercial RO system, water treatment India, 1000 LPH RO plant",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://btechaqua.com/" },
      {
        property: "og:title",
        content: "BTech Aqua | Industrial RO Water Purifier Manufacturer",
      },
      {
        property: "og:description",
        content:
          "High-capacity reverse osmosis systems engineered for 24/7 industrial reliability.",
      },
      { property: "og:image", content: "https://btechaqua.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BTech Aqua | Industrial RO Water Purifiers" },
      {
        name: "twitter:description",
        content: "Industrial RO systems from 250 LPH to 5000+ LPH.",
      },
      { name: "twitter:image", content: "https://btechaqua.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://btechaqua.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "BTech Aqua",
          url: "https://btechaqua.com/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://btechaqua.com/products?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What capacities of RO plants does BTech Aqua manufacture?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "BTech Aqua manufactures industrial and commercial RO water purifiers from 250 LPH up to 5000+ LPH, including custom skid-mounted systems.",
              },
            },
            {
              "@type": "Question",
              name: "Do you offer installation and AMC service across India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We provide pan-India installation, commissioning, and annual maintenance contracts with 24/7 support.",
              },
            },
            {
              "@type": "Question",
              name: "Are BTech Aqua RO plants ISO certified?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, our manufacturing facility is ISO 9001:2015 certified and every system undergoes multi-stage quality inspection.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

const products = [
  {
    name: "Aqua-Lite 250",
    series: "Lite-Series RO",
    capacity: "250 LPH",
    recovery: "65%",
    pressure: "150 PSI",
    description:
      "Optimal for small-scale laboratories, commercial kitchens, and boutique manufacturing with automated membrane flushing.",
    image: productLite,
  },
  {
    name: "Pro-Flow 1000",
    series: "Pro-Flow Module",
    capacity: "1000 LPH",
    recovery: "75%",
    pressure: "220 PSI",
    description:
      "Heavy-duty stainless steel frame with integrated PLC monitoring for continuous 24/7 industrial demand.",
    image: productProflow,
  },
  {
    name: "Titan-X 5000",
    series: "Titan-X Skid",
    capacity: "5000+ LPH",
    recovery: "82%",
    pressure: "400 PSI",
    description:
      "Multi-stage purification skid engineered for high-TDS feed water and large beverage production lines.",
    image: productTitan,
  },
];

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-primary/10 px-3 py-1">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-primary">
                Series 7 Industrial
              </span>
            </div>
            <h1 className="max-w-[20ch] text-4xl font-semibold leading-tight text-balance text-foreground md:text-6xl">
              High-Performance Water Purification for Industrial Scale
            </h1>
            <p className="max-w-[56ch] text-lg leading-relaxed text-balance text-muted-foreground">
              Engineered to meet global purity standards, BTech Aqua provides
              modular RO systems designed for zero-downtime manufacturing
              environments.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground ring-1 ring-primary transition-colors hover:bg-primary/90"
              >
                View Product Lineup
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-xl border border-border/60 bg-card">
            <img
              src={heroSystem}
              alt="BTech Aqua industrial RO water purification system"
              width={1280}
              height={640}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product Portfolio Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col gap-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              System Portfolio
            </h2>
            <p className="max-w-[56ch] text-pretty text-muted-foreground">
              Select from our standardized industrial configurations or request a
              custom engineering consultation for specific TDS requirements.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="group flex flex-col rounded-xl border border-border/60 bg-card"
              >
                <div className="overflow-hidden rounded-t-xl bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-medium text-foreground">
                      {product.series}
                    </h3>
                    <span className="shrink-0 rounded bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                      {product.capacity}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mt-auto border-t border-border/60 pt-4">
                    <div className="flex gap-6">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Recovery
                        </span>
                        <span className="font-mono text-sm text-foreground">
                          {product.recovery}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          Pressure
                        </span>
                        <span className="font-mono text-sm text-foreground">
                          {product.pressure}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              View All Systems
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Specs */}
      <section className="bg-secondary py-24 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-xl bg-secondary-foreground/5">
                <img
                  src={technicalDetail}
                  alt="Close-up of stainless steel RO valves and pressure gauges"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute -bottom-6 -left-6 hidden rounded-lg bg-primary p-6 md:block">
                  <span className="block font-mono text-3xl font-medium tracking-tighter text-primary-foreground">
                    0.001
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-primary-foreground/80">
                    Micron Filtration
                  </span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold leading-tight text-balance text-secondary-foreground">
                Precision-Engineered Integrity
              </h2>
              <p className="mt-6 max-w-[56ch] text-pretty leading-relaxed text-secondary-foreground/70">
                Every BTech Aqua system undergoes a 48-hour rigorous stress test
                before dispatch. Our engineering standards exceed ISO 9001
                requirements, ensuring long-term reliability in the field.
              </p>

              <ul className="mt-10 space-y-6">
                <li className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/20">
                    <Shield className="size-5 text-primary" />
                  </div>
                  <div>
                    <span className="block font-medium text-secondary-foreground">
                      Grade 316 Stainless Steel
                    </span>
                    <span className="text-sm text-secondary-foreground/60">
                      Corrosion-resistant plumbing for ultra-pure water pathways.
                    </span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/20">
                    <Cpu className="size-5 text-primary" />
                  </div>
                  <div>
                    <span className="block font-medium text-secondary-foreground">
                      Smart Control Interface
                    </span>
                    <span className="text-sm text-secondary-foreground/60">
                      Real-time TDS monitoring and auto-shutdown safety protocols.
                    </span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/20">
                    <Gauge className="size-5 text-primary" />
                  </div>
                  <div>
                    <span className="block font-medium text-secondary-foreground">
                      Optimized Flow Dynamics
                    </span>
                    <span className="text-sm text-secondary-foreground/60">
                      High-flux membranes reduce waste water and energy
                      consumption.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Certifications */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-border/60 bg-card p-8 md:p-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Trusted by Manufacturers Across India
                </h2>
                <p className="mt-4 text-muted-foreground">
                  From pharmaceutical clean rooms to beverage bottling plants, our
                  systems deliver consistent purity where it matters most.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  "ISO 9001:2015 Certified",
                  "NSF/ANSI Component Standards",
                  "In-House QA Lab",
                  "Pan-India Service Network",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="size-3.5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to Engineer Your Water Solution?
          </h2>
          <p className="mx-auto mt-4 max-w-[56ch] text-primary-foreground/80">
            Share your feedwater profile and capacity requirements. Our team will
            respond with a detailed technical proposal within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary ring-1 ring-primary-foreground transition-colors hover:bg-primary-foreground/90"
          >
            Request a Proposal
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
