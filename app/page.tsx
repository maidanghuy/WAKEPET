import { Header } from "@/components/wakepet/header"
import { HeroSection } from "@/components/wakepet/hero-section"
import { ProblemSection } from "@/components/wakepet/problem-section"
import { ProductSection } from "@/components/wakepet/product-section"
import { ComponentsSection } from "@/components/wakepet/components-section"
import { FeaturesSection } from "@/components/wakepet/features-section"
import { HowItWorksSection } from "@/components/wakepet/how-it-works-section"
import { UseCasesSection } from "@/components/wakepet/use-cases-section"
import { VersionsSection } from "@/components/wakepet/versions-section"
import { PreorderSection } from "@/components/wakepet/preorder-section"
import { FAQSection } from "@/components/wakepet/faq-section"
import { Footer } from "@/components/wakepet/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ProductSection />
      <ComponentsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <VersionsSection />
      <PreorderSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
