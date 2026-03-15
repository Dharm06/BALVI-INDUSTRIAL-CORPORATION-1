import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    title: "Automobile Components",
    description:
      "High-precision engine parts, transmission components, suspension elements, and custom auto parts manufactured to exacting OEM standards.",
    image: "/images/mtc-bg.png",
  },
  {
    title: "Machinery Components",
    description:
      "CNC machined tool holders, spindle parts, jigs, fixtures, and precision components for industrial machinery and equipment.",
    image: "/images/auto.png",
  },
  {
    title: "Pipe Fittings & Pump Parts",
    description:
      "Industrial-grade pipe fittings, flanges, valve bodies, pump impellers, and custom cast components for fluid handling systems.",
    image: "/images/pp-bg.png",

    specifications: [
      "Standard: IS 1239 PT 2 & BS 21:1985",
      "Standard: ASTM A865",
      "Thread Quality: CNC Machining",
      "Steel Grade: As specified by standard",
      "Zinc Coating: As specified by standard",
      "Tensile Strength: 320 / 450 MPa",
      "Hardness: 100 / 140 VPN",
      "Material: Welded / Seamless",
    ],
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Products
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Product Categories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive range of industrial components manufactured with
            state-of-the-art technology and rigorous quality control.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/20 transition-opacity group-hover:bg-foreground/10" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground font-serif">
                    {product.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
