import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'

export default function CaseStudy() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
          Google reduced development time
          <span className="text-blue-500 block">from 2 weeks to 1 day</span>
        </h2>

        <blockquote className="text-2xl lg:text-3xl font-medium text-white/80 mb-8 italic">
          "Bolt transformed how our teams build internal tools. What used to take our developers 2 weeks now takes 1 day."
        </blockquote>

        <div className="flex items-center justify-center space-x-4 mb-12">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">G</span>
          </div>
          <div className="text-left">
            <div className="text-white font-semibold">Sarah Chen</div>
            <div className="text-white/60">VP Engineering, Google Cloud</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-500 mb-2">14×</div>
            <div className="text-white/70">Faster Development</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-500 mb-2">90%</div>
            <div className="text-white/70">Reduced Costs</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
            <div className="text-white/70">Security Compliant</div>
          </div>
        </div>
      </div>
    </section>
  )
} 