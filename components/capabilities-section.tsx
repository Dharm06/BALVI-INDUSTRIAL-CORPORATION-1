import { Cog, Flame, Thermometer, Shield, Zap, Layers } from "lucide-react"

const capabilities = [
  {
    icon: Cog,
    title: "CNC/VMC Machining",
    description: "Advanced multi-axis CNC and VMC machining for complex, high-tolerance components.",
  },
  {
    icon: Flame,
    title: "Forging",
    description: "Hot and cold forging processes for durable, high-strength industrial parts.",
  },
  {
    icon: Thermometer,
    title: "Heat Treatment",
    description: "Controlled heat treatment to enhance material hardness, strength, and resilience.",
  },
  {
    icon: Shield,
    title: "Galvanizing",
    description: "Hot-dip and electro-galvanizing for superior corrosion protection and longevity.",
  },
  {
    icon: Zap,
    title: "Shot Blasting",
    description: "Surface preparation and finishing for improved adhesion and coating performance.",
  },
  {
    icon: Layers,
    title: "Plating",
    description: "Chrome, zinc, and nickel plating for enhanced surface properties and aesthetics.",
  },
]

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Capabilities
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Machining {"&"} Processing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            End-to-end manufacturing capabilities under one roof, delivering
            consistent quality from raw material to finished product.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <cap.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-bold text-foreground font-serif">{cap.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
