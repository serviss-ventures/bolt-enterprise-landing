import Header from '@/components/navigation/Header'
import Hero from '@/components/sections/Hero'
import Problems from '@/components/sections/Problems'
import CaseStudy from '@/components/sections/CaseStudy'
import Pricing from '@/components/sections/Pricing'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/navigation/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <CaseStudy />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
} 