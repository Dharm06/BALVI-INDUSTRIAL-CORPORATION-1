"use client"

import type { ProductCategory } from "@/lib/products-data"

interface CategoryNavProps {
  categories: ProductCategory[]
}

export function CategoryNav({ categories }: CategoryNavProps) {
  return (
    <div className="sticky top-[72px] z-40 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex items-center gap-1 overflow-x-auto py-3" aria-label="Product categories">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="shrink-0 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {category.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
