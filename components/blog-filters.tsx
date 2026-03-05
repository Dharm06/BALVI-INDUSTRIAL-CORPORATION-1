"use client"

import { Search } from "lucide-react"
import { categories } from "@/lib/blog-data"

interface BlogFiltersProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function BlogFilters({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: BlogFiltersProps) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Blog categories">
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => onCategoryChange(category)}
            className={`rounded-sm px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:max-w-xs">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-10 w-full rounded-md border border-input bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
          aria-label="Search blog articles"
        />
      </div>
    </div>
  )
}
