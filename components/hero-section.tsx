import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="Industrial CNC machining factory floor"
        fill
        className="object-cover"
        priority
        quality={75}
      />
      <div className="absolute inset-0 bg-foreground/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-lg font-bold uppercase tracking-[0.2em] text-primary">
          Where Innovation Meets Excellence
        </p>
        <h1 className="mb-6 text-balance font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
          Precision Engineering{" "}
          <span className="text-primary">{"&"} Manufacturing</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
          Delivering world-class automobile components, machine tool parts, and
          industrial solutions with cutting-edge CNC machining technology since
          2012.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base"
          >
            <Link href="#contact">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8 py-6 text-base"
          >
            <Link href="/products">
              <Eye className="mr-2 h-4 w-4" />
              View Products
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
