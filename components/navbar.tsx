"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/products" },
  { label: "Processes", href: "/processes" },
  { label: "Specifications", href: "/specifications" },
  { label: "Blog", href: "/blog" },
  { label: "Clients", href: "/#clients" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md border-b border-foreground/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/balvi-logo.png"
            alt="Balvi Industrial Corporation"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-lg font-bold tracking-tight text-primary-foreground font-serif">
            BALVI INDUSTRIAL CORPORATION
          </span>
        </Link>
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <a
              href={`https://wa.me/919824248209?text=${encodeURIComponent(
                "Hello Balvi Industrial Corporation,%0A%0AI would like to request a quotation.%0APlease share pricing and details.%0A%0AThank you.",
              )}`}
              target="_blank"
            >
              Request Quote
            </a>
          </Button>
        </div>

        <button
          className="text-primary-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-foreground/10 bg-foreground/95 backdrop-blur-md lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-primary-foreground/70 transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/#contact" onClick={() => setMobileOpen(false)}>
                Request a Quote
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
