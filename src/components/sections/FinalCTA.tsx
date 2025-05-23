import Link from 'next/link'
import { ArrowRight, FileText, Shield } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-16 lg:py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to unblock
            <span className="block gradient-text">innovation?</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Book a live demo and see a working app in under five minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/demo" 
              className="btn-primary btn-large group"
            >
              Book live demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Secondary Links */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link 
              href="/pricing" 
              className="glass rounded-2xl p-6 border border-white/10 hover:border-primary-400/30 transition-all duration-300 group"
            >
              <FileText className="w-8 h-8 text-primary-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">View pricing</h3>
              <p className="text-white/60 text-sm">
                Transparent pricing for teams of all sizes
              </p>
            </Link>
            
            <Link 
              href="/contact" 
              className="glass rounded-2xl p-6 border border-white/10 hover:border-primary-400/30 transition-all duration-300 group"
            >
              <Shield className="w-8 h-8 text-primary-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise sales</h3>
              <p className="text-white/60 text-sm">
                Custom solutions for large organizations
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 