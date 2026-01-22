import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { DemoSection } from "@/components/demo-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <UseCasesSection />
      <DemoSection />
      <CTASection />
      <Footer />
    </main>
  )
}
