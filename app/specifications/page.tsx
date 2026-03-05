import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { PageBanner } from "@/components/page-banner"
import { Footer } from "@/components/footer"
import { SpecStandardCard } from "@/components/spec-standard-card"
import { ComparisonTable } from "@/components/comparison-table"
import { DownloadSpecButton } from "@/components/download-spec-button"
import { Badge } from "@/components/ui/badge"
import { standards, materialComparison } from "@/lib/specs-data"
import { ShieldCheck, Award, Cog, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Technical Specifications | Balvi Industrial Corporation",
  description:
    "Detailed technical specifications for our precision-engineered pipe fittings and components. Compliant with IS 1239 PT 2, BS 21:1985, and ASTM A865 standards.",
}

const highlights = [
  {
    icon: ShieldCheck,
    label: "Quality Assured",
    description: "Rigorous QC at every stage of production",
  },
  {
    icon: Award,
    label: "International Standards",
    description: "IS, BS, and ASTM compliant manufacturing",
  },
  {
    icon: Cog,
    label: "CNC Precision",
    description: "All threads machined on CNC equipment",
  },
]

export default function SpecificationsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <PageBanner
          title="Technical Specifications"
          subtitle="Detailed material properties and standards compliance for our precision-engineered industrial components."
          imageSrc="/images/specs-banner.jpg"
          imageAlt="Precision measuring instruments and technical blueprints"
        />

        {/* Highlights Bar */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
            <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <DownloadSpecButton />
          </div>
        </section>

        {/* Standards Navigation */}
        <section className="bg-background py-6">
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-6">
            <span className="text-sm font-medium text-muted-foreground">Jump to:</span>
            <div className="flex flex-wrap items-center gap-2">
              {standards.map((standard) => (
                <Badge key={standard.id} variant="outline" asChild>
                  <Link href={`#${standard.id}`} className="cursor-pointer transition-colors hover:bg-primary/10 hover:border-primary/30 hover:text-primary">
                    {standard.name}
                  </Link>
                </Badge>
              ))}
              <Badge variant="outline" asChild>
                <Link href="#comparison" className="cursor-pointer transition-colors hover:bg-primary/10 hover:border-primary/30 hover:text-primary">
                  Comparison
                </Link>
              </Badge>
            </div>
          </div>
        </section>

        {/* Specification Tables */}
        <section className="bg-background pb-16 pt-6">
          <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6">
            {standards.map((standard) => (
              <SpecStandardCard key={standard.id} spec={standard} />
            ))}

            <div id="comparison" className="scroll-mt-24">
              <ComparisonTable data={materialComparison} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-muted/50 py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl text-balance">
              Need Custom Specifications?
            </h2>
            <p className="max-w-xl text-muted-foreground text-pretty">
              We manufacture components to custom specifications and can accommodate
              special material grades, coatings, and tolerances. Contact our engineering
              team to discuss your requirements.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Contact Engineering Team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-card-foreground transition-colors hover:bg-muted"
              >
                View Products
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
