import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Check, Download } from "lucide-react";

import productLite from "@/assets/product-lite.jpg";
import productProflow from "@/assets/product-proflow.jpg";
import productTitan from "@/assets/product-titan.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Industrial RO Plants & Water Purifiers | BTech Aqua Products" },
      {
        name: "description",
        content:
          "Browse BTech Aqua's RO product range: Aqua-Lite 250 LPH, Pro-Flow 1000 LPH, and Titan-X 5000+ LPH industrial reverse osmosis systems with full specs.",
      },
      {
        name: "keywords",
        content:
          "250 LPH RO plant, 1000 LPH RO plant, 5000 LPH RO plant, industrial RO price, commercial RO water purifier",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://btechaqua.com/products" },
      { property: "og:title", content: "Industrial RO Plants & Water Purifiers | BTech Aqua" },
      {
        property: "og:description",
        content: "Industrial RO water purifiers from 250 LPH to 5000+ LPH.",
      },
      { property: "og:image", content: "https://btechaqua.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BTech Aqua Product Range" },
      { name: "twitter:description", content: "RO systems from 250 LPH to 5000+ LPH." },
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
            { "@type": "ListItem", position: 1, name: "Home", item: "https://btechaqua.com/" },
            { "@type": "ListItem", position: 2, name: "Products", item: "https://btechaqua.com/products" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "Product",
              name: "Aqua-Lite 250",
              category: "Industrial RO Water Purifier",
              brand: { "@type": "Brand", name: "BTech Aqua" },
              description: "250 LPH compact RO system for commercial kitchens, labs and clinics.",
              image: "https://btechaqua.com/og-image.jpg",
              offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "INR", url: "https://btechaqua.com/products" },
            },
            {
              "@type": "Product",
              name: "Pro-Flow 1000",
              category: "Industrial RO Water Purifier",
              brand: { "@type": "Brand", name: "BTech Aqua" },
              description: "1000 LPH heavy-duty RO with PLC monitoring for continuous industrial demand.",
              image: "https://btechaqua.com/og-image.jpg",
              offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "INR", url: "https://btechaqua.com/products" },
            },
            {
              "@type": "Product",
              name: "Titan-X 5000",
              category: "Industrial RO Water Purifier",
              brand: { "@type": "Brand", name: "BTech Aqua" },
              description: "5000+ LPH multi-stage skid engineered for beverage and process water lines.",
              image: "https://btechaqua.com/og-image.jpg",
              offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "INR", url: "https://btechaqua.com/products" },
            },
          ],
        }),
      },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    name: "Aqua-Lite 250",
    series: "Lite-Series RO",
    capacity: "250 LPH",
    recovery: "65%",
    pressure: "150 PSI",
    stages: ["Sediment Filter", "Activated Carbon", "RO Membrane", "UV Polishing"],
    applications: ["Commercial Kitchens", "Small Labs", "Cafes", "Clinics"],
    description:
      "A compact yet powerful RO system designed for small-scale operations that demand consistent purity without occupying floor space.",
    image: productLite,
  },
  {
    name: "Pro-Flow 1000",
    series: "Pro-Flow Module",
    capacity: "1000 LPH",
    recovery: "75%",
    pressure: "220 PSI",
    stages: [
      "Dual Media Filter",
      "Activated Carbon",
      "Anti-Scalant Dosing",
      "RO Membrane Array",
      "Post-Carbon Polish",
    ],
    applications: ["Manufacturing", "Hospitality", "Educational Institutes", "Hotels"],
    description:
      "The workhorse of the BTech lineup. A fully skid-mounted module with PLC control and remote monitoring capabilities.",
    image: productProflow,
  },
  {
    name: "Titan-X 5000",
    series: "Titan-X Skid",
    capacity: "5000+ LPH",
    recovery: "82%",
    pressure: "400 PSI",
    stages: [
      "Multi-Media Filtration",
      "Carbon Towers",
      "Water Softener",
      "Dual-Stage RO",
      "Ozonation / UV",
    ],
    applications: [
      "Beverage Plants",
      "Pharmaceuticals",
      "Large Institutions",
      "Textile Processing",
    ],
    description:
      "Enterprise-grade purification for high-TDS feed water and continuous production lines requiring maximum uptime.",
    image: productTitan,
  },
];

function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Industrial RO Systems
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              From compact commercial units to heavy-duty enterprise skids, every
              BTech Aqua system is built around the same principle: reliable
              purity, engineered for your specific feedwater profile.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card"
              >
                <div className="overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                        {product.name}
                      </p>
                      <h2 className="mt-1 text-xl font-semibold text-foreground">
                        {product.series}
                      </h2>
                    </div>
                    <span className="shrink-0 rounded bg-muted px-2 py-1 font-mono text-xs text-muted-foreground">
                      {product.capacity}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4 border-y border-border/60 py-4">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Recovery
                      </span>
                      <p className="font-mono text-sm text-foreground">
                        {product.recovery}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Max Pressure
                      </span>
                      <p className="font-mono text-sm text-foreground">
                        {product.pressure}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Filtration Stages
                    </span>
                    <ul className="mt-3 space-y-2">
                      {product.stages.map((stage) => (
                        <li key={stage} className="flex items-center gap-2 text-sm text-foreground">
                          <Check className="size-3.5 text-primary" />
                          {stage}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Common Applications
                    </span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {product.applications.map((app) => (
                        <span
                          key={app}
                          className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                    <Link
                      to="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Request Technical Specs
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="border-y border-border/60 bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-border/60 bg-card p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Need help choosing the right capacity?
              </h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                Our engineers can size a system based on your daily demand, TDS
                levels, and available footprint.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Talk to an Engineer
                <ArrowRight className="size-4" />
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
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
