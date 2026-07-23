import { Link } from "@tanstack/react-router";
import { Droplets, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary py-16 text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Droplets className="size-5" strokeWidth={2} />
              </div>
              <span className="text-lg font-semibold tracking-tight">BTech Aqua</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-secondary-foreground/70">
              Precision-engineered reverse osmosis water purification systems for
              industrial, commercial, and institutional applications.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/50">
              Production
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <Link
                  to="/products"
                  className="text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                >
                  RO Plants
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                >
                  Commercial Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                >
                  Custom Engineering
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                >
                  Spare Parts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/50">
              Contact
            </h4>
            <ul className="mt-6 space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  Industrial Estate Phase II, Plot 42
                  <br />
                  Ahmedabad, Gujarat 380001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-primary" />
                <span>+91 79 4402 1100</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-primary" />
                <span>info@btechaqua.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-secondary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} BTech Aqua Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-secondary-foreground/50">
            <Link to="/" className="transition-colors hover:text-secondary-foreground">
              Privacy Policy
            </Link>
            <Link to="/" className="transition-colors hover:text-secondary-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
