import { Globe, MapPin } from "lucide-react";

const internationalClients = [
  { name: "Al Jazeera Steel Products", location: "Oman" },
  { name: "Ajmal Pipes", location: "Dubai" },
  { name: "TSI Metal Industries", location: "Abu Dhabi" },
];

const domesticClients = [
  { name: "Jyoti CNC Automation Ltd." },
  { name: "Surya Roshni Ltd." },
  { name: "Bajrang Power & Ispat Ltd." },
  { name: "Apollo Pipes Ltd." },
];

export function ClientsSection() {
  return (
    <section id="clients" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Clients
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We are proud to serve leading enterprises across India and the
            Middle East with precision-engineered components.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* International Clients */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground font-serif">
                International Clients
              </h3>
            </div>
            <div className="space-y-4">
              {internationalClients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-between rounded-lg border border-border bg-card px-6 py-4 transition-colors hover:border-primary/30"
                >
                  <span className="font-medium text-foreground">
                    {client.name}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {client.location}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Domestic Clients */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground font-serif">
                Domestic Clients
              </h3>
            </div>
            <div className="space-y-4">
              {domesticClients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center rounded-lg border border-border bg-card px-6 py-4 transition-colors hover:border-primary/30"
                >
                  <span className="font-medium text-foreground">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
