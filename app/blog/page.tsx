"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageBanner } from "@/components/page-banner"
import { FeaturedBlogCard } from "@/components/featured-blog-card"
import { BlogCard } from "@/components/blog-card"
import { BlogFilters } from "@/components/blog-filters"
import { blogPosts } from "@/lib/blog-data"
import { ChevronLeft, ChevronRight } from "lucide-react"

const POSTS_PER_PAGE = 4

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const featuredPost = blogPosts.find((post) => post.featured)

  const filteredPosts = useMemo(() => {
    let posts = blogPosts.filter((post) => !post.featured)

    if (activeCategory !== "All") {
      posts = posts.filter((post) => post.category === activeCategory)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query)
      )
    }

    return posts
  }, [activeCategory, searchQuery])

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  function handleCategoryChange(category: string) {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  function handleSearchChange(query: string) {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  return (
    <>
      <Navbar />
      <main>
        <PageBanner
          title="Industry Insights & Blog"
          subtitle="Expert articles on manufacturing processes, engineering standards, and industry trends from Balvi Industrial Corporation."
          imageSrc="/images/blog-banner.jpg"
          imageAlt="Industrial blog and insights"
        />

        <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          {/* Featured Post */}
          {featuredPost && activeCategory === "All" && !searchQuery.trim() && (
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-2xl font-bold text-foreground">
                Featured Article
              </h2>
              <FeaturedBlogCard post={featuredPost} />
            </div>
          )}

          {/* Filters */}
          <div className="mb-10">
            <BlogFilters
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
            />
          </div>

          {/* Blog Grid */}
          {paginatedPosts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-muted/30 py-20">
              <p className="text-lg font-medium text-muted-foreground">
                No articles found
              </p>
              <p className="mt-1 text-sm text-muted-foreground/70">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Blog pagination">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-card text-foreground hover:bg-muted"
                  }`}
                  aria-label={`Page ${page}`}
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
