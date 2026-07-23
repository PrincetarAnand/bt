import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, ArrowRight, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BTech Aqua | Get an Industrial RO Plant Quote" },
      {
        name: "description",
        content:
          "Request a quote, technical proposal or AMC for industrial RO water purifiers. Call +91 97311 81694 or message us on WhatsApp — pan-India service.",
      },
      {
        name: "keywords",
        content:
          "RO plant quote, industrial RO price India, water purifier dealer, BTech Aqua contact, RO WhatsApp",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://btechaqua.com/contact" },
      { property: "og:title", content: "Contact BTech Aqua | Get an Industrial RO Plant Quote" },
      {
        property: "og:description",
        content: "Talk to our engineers for a custom RO water treatment proposal.",
      },
      { property: "og:image", content: "https://btechaqua.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact BTech Aqua" },
      { name: "twitter:description", content: "Get a custom RO plant proposal from our engineers." },
      { name: "twitter:image", content: "https://btechaqua.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://btechaqua.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact BTech Aqua",
          url: "https://btechaqua.com/contact",
          mainEntity: {
            "@type": "Organization",
            name: "BTech Aqua",
            telephone: "+91-97311-81694",
            email: "sales@btechaqua.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              addressCountry: "IN",
            },
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Consult with an Engineer
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Provide your feedwater parameters and capacity requirements for a
              detailed technical proposal and ROI analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Get in Touch
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Our technical team typically responds within one business day.
                For urgent service requests, please call our support line
                directly.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Headquarters
                    </span>
                    <address className="not-italic text-sm leading-relaxed text-foreground">
                      Industrial Estate Phase II, Plot 42
                      <br />
                      Ahmedabad, Gujarat 380001
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Technical Support
                    </span>
                    <p className="font-mono text-sm text-foreground">
                      +91 79 4402 1100
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/919731181694?text=Hi%20BTech%20Aqua%2C%20I'm%20interested%20in%20your%20RO%20water%20purifier%20systems.%20Please%20share%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5 transition-colors hover:bg-accent/30"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#25D366]/10">
                    <MessageCircle className="size-5 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      WhatsApp Sales
                    </span>
                    <p className="font-mono text-sm text-foreground">
                      +91 97311 81694
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Message us for instant quotes and support
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Email
                    </span>
                    <p className="text-sm text-foreground">info@btechaqua.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Clock className="size-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Business Hours
                    </span>
                    <p className="text-sm text-foreground">
                      Monday — Saturday, 9:00 AM — 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10">
                      <Send className="size-7 text-primary" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">
                      Request Received
                    </h3>
                    <p className="mx-auto mt-2 max-w-md text-muted-foreground">
                      Thank you for reaching out. Our engineering team will
                      review your requirements and respond within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Company Name
                        </label>
                        <input
                          id="company"
                          type="text"
                          required
                          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                          placeholder="Industrial Solutions Ltd."
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Corporate Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="inquiry"
                          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                        >
                          Inquiry Type
                        </label>
                        <select
                          id="inquiry"
                          className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                        >
                          <option>New System Installation</option>
                          <option>Maintenance & Service</option>
                          <option>Distributor Inquiry</option>
                          <option>Spare Parts</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="capacity"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Daily Capacity Requirement (Liters)
                      </label>
                      <input
                        id="capacity"
                        type="number"
                        min={0}
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="e.g. 5000"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="tds"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Feed Water TDS (ppm) — if known
                      </label>
                      <input
                        id="tds"
                        type="number"
                        min={0}
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="e.g. 1500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Project Brief
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="Describe your specific water purification needs, application, and site conditions..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      Submit Proposal Request
                      <ArrowRight className="size-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
