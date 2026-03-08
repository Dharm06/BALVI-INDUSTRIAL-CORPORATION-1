import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

export function ProductCard({ name, description, image }: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg">
      <div className="relative flex h-48 items-center justify-center bg-muted overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/balvi-logo.png"
            alt="Balvi Industrial Corporation"
            className="h-24 w-auto opacity-10 pointer-events-none"
          />
        </div>
        <img
          src={image}
          alt={name || "Product"}
          className="relative h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 z-10"
        />
        <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/5 z-20" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 font-serif text-base font-bold text-foreground">
          {name}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <a
            href={`https://wa.me/919824248209?text=${encodeURIComponent(
              `Hello Balvi Industrial Corporation,%0A%0AI am interested in ${name}.%0APlease share more details.%0A%0AThank you.`,
            )}`}
            target="_blank"
          >
            Send Inquiry
          </a>
        </Button>
      </div>
    </div>
  );
}
