import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { blogPosts } from "@/lib/blog-data"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} | Balvi Industrial Corporation Blog`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) notFound()

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Image */}
        <div className="relative h-72 md:h-96">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>

        {/* Article Content */}
        <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          {/* Meta */}
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Tag className="h-4 w-4" />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-8 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl text-balance">
            {post.title}
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground text-pretty">
            {post.description}
          </p>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="leading-relaxed text-foreground/80 text-pretty">
              {post.content}
            </p>
          </div>

          {/* Back Link */}
          <div className="mt-12 border-t border-border pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Articles
            </Link>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-border bg-muted/30 py-16">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="mb-8 font-serif text-2xl font-bold text-foreground">
                Related Articles
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
