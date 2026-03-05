import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Star } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

interface FeaturedBlogCardProps {
  post: BlogPost
}

export function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-border bg-card">
      <div className="grid gap-0 md:grid-cols-2">
        <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[340px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
              <Star className="h-3 w-3" />
              Featured
            </span>
            <span className="rounded-sm bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {post.category}
            </span>
          </div>
          <h2 className="font-serif text-2xl font-bold leading-tight text-card-foreground md:text-3xl text-balance">
            {post.title}
          </h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-border">|</span>
            <span>{post.author}</span>
          </div>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            {post.description}
          </p>
          <Link
            href={`/blog/${post.slug}`}
            className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Read Full Article
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  )
}
