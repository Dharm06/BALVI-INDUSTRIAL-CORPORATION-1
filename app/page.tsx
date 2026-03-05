import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { ClientsSection } from "@/components/clients-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <CapabilitiesSection />
        <ClientsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
