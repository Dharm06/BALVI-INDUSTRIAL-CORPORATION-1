import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description: string;
}

export function ProductCard({ name, description }: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg">
      <div className="relative flex h-48 items-center justify-center bg-muted">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xs font-medium">Product Image</span>
        </div>
        <div className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/5" />
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
