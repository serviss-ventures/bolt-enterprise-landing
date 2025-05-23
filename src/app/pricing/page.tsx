import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Pricing from '@/components/sections/Pricing'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to home
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-semibold text-white tracking-tight">bolt</span>
              <span className="text-2xl font-semibold text-white/60 tracking-tight">.new</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Much more compact */}
      <section className="py-6 lg:py-8">
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
    </main>
  )
} 