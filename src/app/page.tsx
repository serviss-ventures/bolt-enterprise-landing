'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Users, Globe, Code, Cpu, Lock, Play, ChevronRight, Check, Building2, Cloud } from 'lucide-react'

// Minimal Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <Zap className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-white">bolt.new</span>
            <span className="text-2xl text-white/60">/enterprise</span>
          </div>

          {/* Simple CTAs */}
          <div className="flex items-center space-x-6">
            <Link href="mailto:enterprise@bolt.new" className="hidden sm:block text-white/80 hover:text-white transition-colors">
              Contact Sales
            </Link>
            <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all hover:scale-105">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

// Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Powered by StackBlitz WebContainers
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Ship AI-powered apps
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              10× faster
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Turn prompts into production-ready applications. Deploy securely on your infrastructure. No VMs, no containers, just pure browser-based development magic.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all hover:scale-105 flex items-center justify-center">
              Schedule Enterprise Demo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 hover:border-white/30 transition-all backdrop-blur-sm">
              Watch 2-min Overview
            </button>
          </div>

          {/* Trusted By */}
          <div>
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">
              Trusted by engineering teams at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Google', 'Meta', 'Shopify', 'Cloudflare', 'Salesforce', 'Intel'].map((company) => (
                <div key={company} className="text-white text-lg font-medium hover:opacity-100 transition-opacity cursor-pointer">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  )
}

// Key Features Section
const Features = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Development",
      description: "Zero setup. Open browser, start coding. WebContainers run Node.js instantly without VMs."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Deploy on-premise or in your private cloud. Full data isolation and compliance."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "AI That Understands",
      description: "Natural language to full-stack apps. Our AI handles complex enterprise requirements."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "No Network Latency",
      description: "Everything runs locally in the browser. Millisecond response times, always."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Air-Gapped Option",
      description: "Run completely offline behind your firewall. Perfect for sensitive environments."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Real-time collaboration with enterprise SSO, SAML, and granular permissions."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why enterprises choose Bolt
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The only AI development platform that runs entirely in your browser while meeting enterprise security requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-blue-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Demo Section
const DemoSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            See it in action
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch how Fortune 500 companies build internal tools 10× faster
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center space-x-3 transition-all hover:scale-110">
              <Play className="w-6 h-6 text-white" />
              <span className="text-white font-medium">Watch Demo</span>
            </button>
          </div>
          
          {/* Fake UI elements for visual interest */}
          <div className="absolute top-4 left-4 flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">90%</div>
            <div className="text-gray-400">Faster development</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">0ms</div>
            <div className="text-gray-400">Network latency</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">100%</div>
            <div className="text-gray-400">Browser-based</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Enterprise Benefits
const Benefits = () => {
  const benefits = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "On-Premise Deployment",
      description: "Run Bolt entirely within your infrastructure. Single Kubernetes cluster supports unlimited users.",
      features: ["Air-gapped deployment", "Private cloud ready", "No external dependencies"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with full compliance support. Your code never leaves your environment.",
      features: ["SOC 2 Type II", "HIPAA compliant", "End-to-end encryption"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Zero Infrastructure",
      description: "No VMs to manage. No containers to orchestrate. Just one simple deployment.",
      features: ["No compute costs", "Instant scaling", "Browser sandboxed"]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Enterprise-grade from day one
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built for the security, compliance, and scale requirements of the world's largest organizations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-blue-400">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {benefit.description}
              </p>
              <ul className="space-y-3">
                {benefit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to transform your development?
        </h2>
        <p className="text-xl text-white/80 mb-12">
          Join Fortune 500 companies using Bolt to ship faster and more securely than ever before.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group px-8 py-4 bg-white text-blue-600 font-medium rounded-lg transition-all hover:scale-105 flex items-center justify-center">
            Schedule Enterprise Demo
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-medium rounded-lg border border-white/30 transition-all backdrop-blur-sm">
            Download Security Whitepaper
          </button>
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
            <Zap className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-bold text-white">bolt.new</span>
            <span className="text-lg text-white/60">/enterprise</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <Link href="mailto:enterprise@bolt.new" className="hover:text-white transition-colors">
              Contact Sales
            </Link>
            <Link href="/security" className="hover:text-white transition-colors">
              Security
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span>© 2024 StackBlitz</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Features />
      <DemoSection />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  )
} 