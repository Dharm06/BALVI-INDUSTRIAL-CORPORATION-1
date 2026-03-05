import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { PageBanner } from "@/components/page-banner"
import { ProductCategorySection } from "@/components/product-category-section"
import { Footer } from "@/components/footer"
import { productCategories } from "@/lib/products-data"
import { CategoryNav } from "@/components/category-nav"

export const metadata: Metadata = {
  title: "Products | Balvi Industrial Corporation",
  description:
    "Explore our comprehensive range of precision-engineered automobile components, machine tool components, pipe fittings and pump parts. CNC machined to international standards.",
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <PageBanner
          title="Our Products"
          subtitle="Comprehensive range of precision-engineered industrial components manufactured with state-of-the-art CNC machining technology and rigorous quality control."
          imageSrc="/images/products-banner.jpg"
          imageAlt="Industrial precision machined components"
        />

        <CategoryNav categories={productCategories} />

        {productCategories.map((category, index) => (
          <ProductCategorySection
            key={category.id}
            category={category}
            alternate={index % 2 === 1}
          />
        ))}
      </main>
      <Footer />
    </>
  )
}
