import type { Metadata } from "next"
import {
  Scissors,
  Flame,
  Wind,
  Cpu,
  Thermometer,
  ShieldCheck,
  Layers,
  CircleDot,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { PageBanner } from "@/components/page-banner"
import { ProcessCard } from "@/components/process-card"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Machining Processes | Balvi Industrial Corporation",
  description:
    "Discover our end-to-end machining processes including CNC machining, forging, heat treatment, galvanizing, plating, blackening, and more. Precision manufacturing from raw material to finished product.",
}

const processes = [
  {
    title: "Cutting",
    description:
      "High-precision raw material cutting using advanced band saws and shearing machines, ensuring accurate dimensions and minimal material waste from the very first step.",
    icon: Scissors,
  },
  {
    title: "Forging",
    description:
      "Heavy-duty forging operations shape heated metal billets under extreme pressure, producing components with superior grain structure and exceptional mechanical strength.",
    icon: Flame,
  },
  {
    title: "Shot Blasting",
    description:
      "Industrial shot blasting removes surface impurities, scale, and rust to prepare components for subsequent finishing processes, ensuring optimal surface adhesion.",
    icon: Wind,
  },
  {
    title: "CNC / VMC Machining",
    description:
      "State-of-the-art CNC and VMC centers deliver micron-level precision turning, milling, and drilling operations with consistent repeatability across high-volume production runs.",
    icon: Cpu,
  },
  {
    title: "Heat Treatment",
    description:
      "Controlled heating and cooling cycles including hardening, tempering, and annealing to achieve the desired metallurgical properties, hardness, and durability for each component.",
    icon: Thermometer,
  },
  {
    title: "Galvanizing",
    description:
      "Hot-dip and electro-galvanizing processes apply a protective zinc coating to steel components, providing long-lasting corrosion resistance for demanding industrial environments.",
    icon: ShieldCheck,
  },
  {
    title: "Plating",
    description:
      "Electroplating with chrome, nickel, or zinc provides a high-quality surface finish that enhances corrosion resistance, wear performance, and visual appearance of finished parts.",
    icon: Layers,
  },
  {
    title: "Blackening",
    description:
      "Chemical blackening (black oxide) treatment provides a dark, uniform finish that offers mild corrosion protection, reduces light reflection, and adds an aesthetic industrial appearance.",
    icon: CircleDot,
  },
]

export default function ProcessesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <PageBanner
          title="Machining Processes"
          subtitle="End-to-end manufacturing capabilities from raw material processing to precision finishing, ensuring the highest quality at every stage."
          imageSrc="/images/processes-banner.jpg"
          imageAlt="Industrial machining and manufacturing processes"
        />

        {/* Process Grid */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 text-center">
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Our Capabilities
              </span>
              <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance">
                From Raw Material to Finished Product
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
                Every component passes through a carefully controlled sequence of processes, each optimized for precision, durability, and surface quality.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processes.map((process, index) => (
                <ProcessCard
                  key={process.title}
                  title={process.title}
                  description={process.description}
                  icon={process.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Industrial Background CTA */}
        <section className="relative py-20 bg-foreground">
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)",
            }} />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 font-serif text-2xl font-bold tracking-tight text-primary-foreground md:text-3xl text-balance">
              Need Custom Processing Solutions?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-primary-foreground/70 text-pretty">
              Our engineering team works closely with clients to tailor machining processes
              for specific material grades, tolerances, and surface finish requirements.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/#contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
