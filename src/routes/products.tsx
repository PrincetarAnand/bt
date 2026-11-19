import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Check, Download } from "lucide-react";
import { machines } from "@/data/machines";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Bottle Filling, Soda & Jar Rinsing Machines | BTech Aqua" },
      {
        name: "description",
        content:
          "Explore BTech Aqua's machine range: water bottle filling machines, automatic & manual fillers, soda and goli soda filling machines, and 20 L jar rinsing machines.",
      },
      {
        name: "keywords",
        content:
          "water bottle filling machine, manual bottle filling machine, soda machine, automatic filling machine, goli soda filling machine, manual filling machine, soda filling machine, jar rinsing machine",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://btechaqua.com/products" },
      {
        property: "og:title",
        content: "Bottle Filling, Soda & Jar Rinsing Machines | BTech Aqua",
      },
      {
        property: "og:description",
        content:
          "Automatic and manual filling machines, soda and goli soda fillers, and jar rinsing machines built for Indian bottling plants.",
      },
      { property: "og:image", content: "https://btechaqua.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BTech Aqua Machine Range" },
      {
        name: "twitter:description",
        content:
          "Filling, carbonation and jar washing machines for bottling plants.",
      },
      { name: "twitter:image", content: "https://btechaqua.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://btechaqua.com/products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://btechaqua.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Machines",
              item: "https://btechaqua.com/products",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: machines.map((m, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: m.series,
              category: "Bottling & Filling Machinery",
              brand: { "@type": "Brand", name: "BTech Aqua" },
              description: m.description,
              image: "https://btechaqua.com/og-image.jpg",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "INR",
                url: "https://btechaqua.com/products",
              },
            },
          })),
        }),
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* Header */}
      <section className="px-4 pt-8 pb-12 md:px-8 md:pt-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-secondary px-8 py-16 text-secondary-foreground md:px-14 md:py-20">
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
            <div className="relative z-10 max-w-3xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                / Machine Range
              </span>
              <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-balance md:text-6xl">
                Filling, carbonation & jar washing machines.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
                Eight production-ready configurations — from a bench-top manual
                filler to a 24-head automatic monobloc — each fabricated in SS
                304 and commissioned at your site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Machine grid */}
      <section className="px-4 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-2">
            {machines.map((machine) => (
              <article
                key={machine.series}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={machine.image}
                    alt={`${machine.series} manufactured by BTech Aqua`}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-secondary/20 bg-background/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-secondary backdrop-blur">
                    {machine.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <h2 className="font-display text-xl font-semibold text-card-foreground md:text-2xl">
                    {machine.series}
                  </h2>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-primary">
                    {machine.name}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {machine.description}
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-4 rounded-2xl bg-muted p-4">
                    {[
                      { label: "Output", value: machine.output },
                      { label: "Heads", value: machine.heads },
                      { label: "Power", value: machine.power },
                    ].map((spec) => (
                      <div key={spec.label}>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {spec.label}
                        </span>
                        <p className="mt-1 font-mono text-xs font-semibold text-foreground">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {machine.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <Check className="size-3.5 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {machine.applications.map((app) => (
                      <span
                        key={app}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-7">
                    <Link
                      to="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                    >
                      Request Price & Specs
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-border bg-card p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Not sure which machine fits your plant?
              </h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Tell us your daily output target, bottle size, and floor space —
                we will recommend the right configuration and share a quote.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Talk to an Engineer
                <ArrowRight className="size-4" />
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Download className="size-4" />
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
