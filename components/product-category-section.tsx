import { ProductCard } from "@/components/product-card";
import type { ProductCategory } from "@/lib/products-data";

interface ProductCategorySectionProps {
  category: ProductCategory;
  alternate?: boolean;
}

export function ProductCategorySection({
  category,
  alternate = false,
}: ProductCategorySectionProps) {
  return (
    <section
      id={category.id}
      className={`py-16 lg:py-20 ${alternate ? "bg-muted" : "bg-background"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {category.title}
          </p>
          <h2 className="mb-3 font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl text-balance">
            {category.title}
          </h2>
          <p className="max-w-3xl text-base text-muted-foreground leading-relaxed">
            {category.description}
          </p>

          {category.specifications && (
            <ul className="mt-4 max-w-3xl text-sm text-muted-foreground space-y-1">
              {category.specifications.map((spec, index) => (
                <li key={index}>• {spec}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {category.products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
