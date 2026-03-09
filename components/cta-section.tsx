import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-foreground py-24 lg:py-32">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Get Started
        </p>
        <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
          Partner with a Trusted Industrial Manufacturer in India
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
          From prototype to production, we deliver precision-engineered
          components that meet international quality standards. Let us power
          your next project.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base"
          >
            <a href="mailto:info@balviindustrialcorporation.com">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8 py-6 text-base"
          >
            <Link href="tel:+918866048209">
              <Phone className="mr-2 h-4 w-4" />
              Call Us Now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
