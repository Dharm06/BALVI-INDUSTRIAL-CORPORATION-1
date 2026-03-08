import Link from "next/link";
import { Factory, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Products", href: "/products" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Clients", href: "/#clients" },
  { label: "Contact", href: "/#contact" },
];

const products = [
  { label: "Automobile Components", href: "/products#automobile-components" },
  {
    label: "Machine Tool Components",
    href: "/products#machine-tool-components",
  },
  {
    label: "Pipe Fittings & Pump Parts",
    href: "/products#pipe-fittings-pump-parts",
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <Image
                src="/balvi-logo.png"
                alt="Balvi Industrial Corporation"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-lg font-bold text-primary-foreground font-serif">
                Balvi Industrial Corporation
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-primary-foreground/60">
              Where innovation meets excellence. A trusted manufacturer of
              precision industrial components serving clients across India and
              the Middle East.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-primary">
              Quick Links
            </h4>
            <nav
              className="flex flex-col gap-3"
              aria-label="Footer quick links"
            >
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-primary">
              Products
            </h4>
            <nav
              className="flex flex-col gap-3"
              aria-label="Product categories"
            >
              {products.map((product) => (
                <Link
                  key={product.label}
                  href={product.href}
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary"
                >
                  {product.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-primary">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-primary-foreground/60">
                  GIDC Lodhika, Metoda,
                  <br />
                  Rajkot, Gujarat, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:info@balviindustrial.com"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary"
                >
                  info@balviindustrial.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919876543211"
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary"
                  >
                    +91 998242 48209
                  </a>
                  <a
                    href="tel:+919876543211"
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary"
                  >
                    +91 9898 048209
                  </a>
                  <a
                    href="tel:+919876543211"
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary"
                  >
                    +91 88660 48209
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-primary-foreground/40">
              {"© 2026 Balvi Industrial Corporation. All rights reserved."}
            </p>
            <p className="text-xs text-primary-foreground/40">
              GIDC Lodhika, Metoda, Rajkot, Gujarat, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
