import { CalendarDays, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: CalendarDays,
    value: "2012",
    label: "Established",
    description: "Over a decade of industrial excellence",
  },
  {
    icon: Award,
    title: "ISO",
    label: "Certified",
    description:
      "Balvi Industrial Corporation follows strict quality standards and manufacturing processes to ensure precision, reliability, and consistency in every product we deliver.",
  },
  {
    icon: Award,
    value: "100+",
    label: "Products",
    description: "Wide range of precision components",
  },
];

const offerings = [
  "Automobile Components",
  "Machine Tool Components",
  "Pipe Fittings & Pump Parts",
];

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Us
            </p>
            <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              Engineering Precision,{" "}
              <span className="text-primary">Delivering Trust</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              Established in 2012, Balvi Industrial Corporation has grown into a
              trusted name in precision manufacturing. With state-of-the-art
              facilities and a skilled workforce, we serve clients across India
              and the Middle East with unmatched quality and commitment.
            </p>
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
                What We Manufacture
              </p>
              {offerings.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-base font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-start gap-5 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground font-serif">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
