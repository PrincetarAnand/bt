import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Shield,
  Gauge,
  Cpu,
  Activity,
  Droplets,
  Factory,
} from "lucide-react";

import heroLine from "@/assets/hero-line.jpg";
import technicalDetail from "@/assets/machine-automatic-filling.jpg";
import { machines } from "@/data/machines";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "BTech Aqua | Industrial RO Water Purifier Manufacturer in India",
      },
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
      {
        name: "twitter:title",
        content: "BTech Aqua | Industrial RO Water Purifiers",
      },
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

const featured = machines.slice(0, 3);

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* Bento Hero */}
      <section className="px-4 pt-8 pb-16 md:px-8 md:pt-12 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            {/* Main headline card */}
            <div className="relative col-span-12 flex min-h-[520px] flex-col justify-between overflow-hidden rounded-3xl border border-secondary/40 bg-secondary p-8 text-secondary-foreground md:p-12 lg:col-span-8 lg:row-span-2">
              <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-primary/25 blur-[100px]" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(232,237,243,1) 1px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary-foreground/90">
                  <span className="size-1.5 animate-pulse rounded-full bg-primary" />
                  Series 7 · Industrial
                </span>
                <h1 className="font-display mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-secondary-foreground text-balance md:text-6xl lg:text-[68px]">
                  Pure intelligence,{" "}
                  <span className="text-primary">flowing daily.</span>
                </h1>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
                  BTech Aqua engineers modular reverse-osmosis systems from 250
                  LPH to 5000+ LPH — built for zero-downtime industrial
                  environments and validated at every weld.
                </p>
              </div>
              <div className="relative z-10 mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  Explore Systems
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-secondary-foreground/20 bg-transparent px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-all hover:bg-secondary-foreground/5"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* Analytics tile */}
            <div className="col-span-12 flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md sm:col-span-6 lg:col-span-4">
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-muted">
                  <Activity className="size-5 text-accent" strokeWidth={2} />
                </div>
                <h3 className="font-display mt-6 text-2xl font-semibold text-card-foreground">
                  Real-time Analytics
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Monitor flow rates, purity, and system health from anywhere
                  via BTech's PLC + IoT bridge.
                </p>
              </div>
              <div className="mt-6 rounded-2xl bg-muted p-4">
                <div className="flex h-16 items-end justify-between gap-1.5">
                  {[40, 65, 50, 90, 75, 60, 82].map((h, i) => (
                    <div
                      key={i}
                      className={`w-full rounded-t-sm ${
                        h === 90 ? "bg-secondary" : "bg-primary/70"
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span>Flow</span>
                  <span>Live</span>
                </div>
              </div>
            </div>

            {/* Stat: Purity */}
            <div className="col-span-6 flex flex-col justify-center rounded-3xl border border-accent/30 bg-accent p-6 text-accent-foreground sm:col-span-3 lg:col-span-2">
              <span className="font-display text-4xl font-semibold tracking-tight text-primary md:text-5xl">
                99.9%
              </span>
              <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-foreground/70">
                Purity Grade
              </span>
            </div>

            {/* Stat: 24/7 */}
            <div className="col-span-6 flex flex-col justify-center rounded-3xl border border-border bg-muted p-6 sm:col-span-3 lg:col-span-2">
              <span className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                24/7
              </span>
              <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Active Guard
              </span>
            </div>

            {/* Trust banner */}
            <div className="relative col-span-12 flex items-center justify-between overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground sm:col-span-6 lg:col-span-4">
              <div className="relative z-10">
                <h4 className="font-display text-xl font-semibold">
                  Trusted across India.
                </h4>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  Powering 450+ facilities.
                </p>
              </div>
              <div className="relative z-10 flex -space-x-2">
                {["P", "B", "F"].map((l) => (
                  <div
                    key={l}
                    className="grid size-10 place-items-center rounded-full border-2 border-primary bg-secondary font-mono text-xs font-semibold text-secondary-foreground"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-8 -right-8 size-32 rotate-45 bg-secondary/20" />
            </div>

            {/* Precision engineering */}
            <div className="group col-span-12 rounded-3xl border border-border bg-card p-8 shadow-sm sm:col-span-6 lg:col-span-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-card-foreground">
                    Precision Engineering
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Zero-leak performance under extreme industrial pressures.
                  </p>
                </div>
                <ArrowUpRight className="size-5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl bg-secondary">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(59,111,160,0.6) 1px, transparent 0)",
                    backgroundSize: "14px 14px",
                  }}
                />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid size-20 place-items-center rounded-full border border-primary/40">
                    <div className="grid size-12 place-items-center rounded-full border border-primary/60">
                      <div className="size-2 animate-ping rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero image tile */}
            <div className="col-span-12 overflow-hidden rounded-3xl border border-border bg-card lg:col-span-4">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                <img
                  src={heroLine}
                  alt="BTech Aqua automatic bottling and filling line in production"
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/70">
                    In production
                  </span>
                  <p className="font-display mt-1 text-xl font-semibold text-primary-foreground">
                    AutoLine AF-24 · Line #B-1140
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                / Portfolio
              </span>
              <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                Machines engineered for every line speed.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Choose a standard configuration or request custom engineering for
              your bottle format, output target, and floor space.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {featured.map((machine, i) => (
              <div
                key={machine.series}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl ${
                  i === 1 ? "md:-translate-y-4" : ""
                }`}
              >
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={machine.image}
                    alt={`${machine.series} by BTech Aqua`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-secondary/20 bg-background/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-secondary backdrop-blur">
                    {machine.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-card-foreground">
                      {machine.series}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {machine.name}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {machine.description}
                  </p>
                  <div className="mt-auto grid grid-cols-2 gap-4 border-t border-border pt-4">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Output
                      </span>
                      <p className="font-mono text-sm font-semibold text-foreground">
                        {machine.output}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Heads
                      </span>
                      <p className="font-mono text-sm font-semibold text-foreground">
                        {machine.heads}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              View Full Catalog
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Specs — bento */}
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <div className="relative col-span-12 overflow-hidden rounded-3xl bg-secondary lg:col-span-5 lg:row-span-2">
              <img
                src={technicalDetail}
                alt="Close-up of stainless steel RO valves and pressure gauges"
                loading="lazy"
                className="aspect-[4/5] size-full object-cover"
              />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-primary p-5 shadow-xl">
                <span className="font-display block text-3xl font-semibold tracking-tighter text-primary-foreground">
                  0.001µ
                </span>
                <span className="mt-1 block font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
                  Micron Filtration
                </span>
              </div>
            </div>

            <div className="col-span-12 rounded-3xl border border-border bg-card p-8 md:p-10 lg:col-span-7">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                / Engineering
              </span>
              <h2 className="font-display mt-3 text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
                Every weld tested. Every valve certified.
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground">
                Every BTech Aqua system undergoes a 48-hour stress test before
                dispatch. Our standards exceed ISO 9001, ensuring long-term
                reliability in the field.
              </p>
            </div>

            {[
              {
                icon: Shield,
                title: "Grade 316 Stainless",
                body: "Corrosion-resistant plumbing across every ultra-pure pathway.",
              },
              {
                icon: Cpu,
                title: "Smart PLC Control",
                body: "Real-time TDS monitoring with auto-shutdown safety protocols.",
              },
              {
                icon: Gauge,
                title: "Optimized Flow",
                body: "High-flux membranes reduce waste water and energy draw.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="col-span-12 rounded-3xl border border-border bg-card p-6 sm:col-span-6 lg:col-span-4"
              >
                <div className="flex items-start gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-card-foreground">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="px-4 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <Factory className="size-5 text-primary" />
                </div>
                <h2 className="font-display mt-6 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  Trusted by manufacturers across India.
                </h2>
                <p className="mt-3 text-muted-foreground">
                  From pharmaceutical clean rooms to beverage bottling plants,
                  our systems deliver consistent purity where it matters.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "ISO 9001:2015 Certified",
                  "NSF/ANSI Component Standards",
                  "In-House QA Lab",
                  "Pan-India Service Network",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4"
                  >
                    <div className="grid size-7 shrink-0 place-items-center rounded-full bg-primary/10">
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
      <section className="px-4 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-secondary px-6 py-16 text-secondary-foreground md:px-16 md:py-24">
            <div className="pointer-events-none absolute -right-24 top-1/2 size-96 -translate-y-1/2 rounded-full bg-primary/25 blur-[120px]" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(232,237,243,1) 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/20">
                  <Droplets className="size-5 text-primary" />
                </div>
                <h2 className="font-display mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                  Ready to engineer your water solution?
                </h2>
                <p className="mt-4 max-w-lg text-secondary-foreground/70">
                  Share your feedwater profile and capacity requirements. Our
                  team responds within 24 hours with a technical proposal.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Request a Proposal
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
