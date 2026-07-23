import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Award, Users, Factory, Globe, Check } from "lucide-react";

import facility from "@/assets/facility.jpg";
import technicalDetail from "@/assets/technical-detail.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BTech Aqua | ISO-Certified RO Plant Manufacturer" },
      {
        name: "description",
        content:
          "BTech Aqua is an ISO 9001:2015-certified RO water purifier manufacturer in Ahmedabad, India, serving industrial and institutional clients since 2015.",
      },
      {
        name: "keywords",
        content:
          "RO manufacturer Ahmedabad, water treatment company India, ISO certified RO plant, BTech Aqua about",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://btechaqua.com/about" },
      { property: "og:title", content: "About BTech Aqua | ISO-Certified RO Plant Manufacturer" },
      {
        property: "og:description",
        content: "ISO-certified manufacturer of industrial RO systems, based in Ahmedabad, India.",
      },
      { property: "og:image", content: "https://btechaqua.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About BTech Aqua" },
      { name: "twitter:description", content: "ISO-certified industrial RO manufacturer in India." },
      { name: "twitter:image", content: "https://btechaqua.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://btechaqua.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About BTech Aqua",
          url: "https://btechaqua.com/about",
        }),
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Factory,
    title: "Manufacturing Excellence",
    description:
      "Our facility combines precision fabrication with rigorous quality control at every assembly stage.",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description:
      "ISO 9001:2015 certified processes and components tested against NSF/ANSI standards where applicable.",
  },
  {
    icon: Users,
    title: "Engineering-First Team",
    description:
      "A dedicated team of process engineers, fabricators, and field service technicians supports every project.",
  },
  {
    icon: Globe,
    title: "Pan-India Reach",
    description:
      "From Gujarat to Tamil Nadu, our service network ensures rapid commissioning and after-sales support.",
  },
];

const milestones = [
  { year: "2010", event: "BTech Aqua founded in Ahmedabad" },
  { year: "2014", event: "First 1000 LPH commercial RO system shipped" },
  { year: "2018", event: "ISO 9001:2015 certification achieved" },
  { year: "2022", event: "Launched Titan-X enterprise skid line" },
  { year: "2024", event: "Expanded service network to 12 states" },
];

function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              About BTech Aqua
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We are a team of engineers and manufacturers committed to solving
              water purity challenges at industrial scale. Based in Ahmedabad,
              Gujarat, BTech Aqua designs and builds reverse osmosis systems that
              keep production lines running and communities healthy.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Image */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
            <img
              src={facility}
              alt="BTech Aqua manufacturing facility interior"
              width={1280}
              height={640}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Built on Engineering, Not Marketing
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                BTech Aqua began with a simple belief: industrial water
                purification should be reliable, measurable, and built to last.
                Over the last decade, we have grown from a small fabrication shop
                into a trusted supplier of RO plants for manufacturing,
                pharmaceuticals, hospitality, and educational institutions across
                India.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every system that leaves our facility is bench-tested for 48
                hours, calibrated to the client's feedwater profile, and backed by
                a dedicated service team. We do not sell promises — we ship
                performance.
              </p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-muted">
                <img
                  src={technicalDetail}
                  alt="Close-up of precision RO system components"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-24 text-secondary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-secondary-foreground">
              What We Stand For
            </h2>
            <p className="mt-4 text-secondary-foreground/70">
              Our values guide every design decision, fabrication step, and
              customer conversation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-6"
              >
                <div className="flex size-10 items-center justify-center rounded-md bg-primary/20">
                  <value.icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-4 font-medium text-secondary-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Our Journey
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="flex gap-4 rounded-xl border border-border/60 bg-card p-6"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded bg-primary/10">
                  <Check className="size-4 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-sm font-medium text-primary">
                    {milestone.year}
                  </span>
                  <p className="mt-1 text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-y border-border/60 bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-border/60 bg-card p-8 md:p-12">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Certifications & Compliance
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "ISO 9001:2015 Quality Management",
                "CE Marked Electrical Panels",
                "NSF/ANSI Standard Components",
                "BIS Compliant Pressure Vessels",
                "RoHS Compliant Electronics",
                "In-House Water Testing Lab",
              ].map((cert) => (
                <div key={cert} className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="size-3.5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
