import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import Pricing from '@/components/sections/Pricing'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Consistent Header with logo and lightning accent */}
      <Header />

      {/* Hero Section - Much more compact */}
      <section className="py-6 lg:py-8 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
            Simple, transparent
            <span className="block text-blue-500 mt-1">pricing</span>
          </h1>
          <p className="text-base lg:text-lg text-white/70 leading-relaxed max-w-xl mx-auto">
            Choose the plan that fits your team size and security requirements. 
            Scale with confidence as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Component */}
      <Pricing />
      
      {/* Footer for consistency */}
      <Footer />
    </main>
  )
} 