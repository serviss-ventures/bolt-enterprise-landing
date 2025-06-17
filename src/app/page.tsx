'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Users, Globe, Code, Lock, Check, Building2, Cloud, Sparkles, CheckCircle2, TrendingUp, Award, Timer } from 'lucide-react'

// Header Component - Minimal with no distracting CTAs
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 group">
            <Zap className="w-7 h-7 text-blue-500" />
            <span className="text-xl font-bold text-white">bolt.new</span>
            <span className="text-xs text-blue-400 ml-2 px-2 py-0.5 bg-blue-500/10 rounded-full border border-blue-500/20">
              Enterprise
            </span>
          </div>
          <div className="text-sm text-gray-400">
            Limited Early Access
          </div>
        </div>
      </div>
    </header>
  )
}

// Hero Section with Integrated Form
const HeroWithForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    teamSize: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [spotsLeft] = useState(47) // Creates urgency

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      alert('Thank you! We\'ll be in touch within 24 hours.')
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Trust Signal */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              {spotsLeft} early access spots remaining
            </div>

            {/* Headline with clear value prop */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your AI dev team that
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 block">
                ships 10× faster
              </span>
            </h1>

            {/* Benefit-focused subheadline */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join Fortune 500 engineering teams using Bolt Enterprise to turn ideas into production apps in minutes, not months. Deploy securely on your infrastructure.
            </p>

            {/* Key Benefits with Icons */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Deploy on-premise or in your private cloud</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>SOC 2 Type II & HIPAA compliant</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>No code ever leaves your environment</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-black flex items-center justify-center text-xs text-gray-400">
                    {i === 1 && 'JD'}
                    {i === 2 && 'SK'}
                    {i === 3 && 'MR'}
                    {i === 4 && 'AT'}
                    {i === 5 && '+'}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-white font-semibold">2,847 developers</span> from enterprise teams already onboard
              </div>
            </div>
          </div>

          {/* Right Side - Integrated Form */}
          <div className="lg:pl-12">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Get Early Access
                </h3>
                <p className="text-gray-400">
                  Be among the first to transform your development workflow
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Engineering Team Size
                  </label>
                  <select
                    required
                    value={formData.teamSize}
                    onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Select team size</option>
                    <option value="10-50">10-50 developers</option>
                    <option value="50-200">50-200 developers</option>
                    <option value="200-500">200-500 developers</option>
                    <option value="500+">500+ developers</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Claim Your Spot
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>

              {/* Trust indicators */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <div className="flex items-center justify-center space-x-6 text-xs text-gray-400">
                  <div className="flex items-center">
                    <Lock className="w-3 h-3 mr-1" />
                    SSL Encrypted
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-3 h-3 mr-1" />
                    SOC 2 Compliant
                  </div>
                </div>
                <p className="text-center text-xs text-gray-500 mt-3">
                  No credit card required • Deploy in your environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Trust Logos Section
const TrustLogos = () => {
  const companies = ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix', 'Salesforce', 'Adobe']
  
  return (
    <section className="py-16 bg-black/50 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-wider">
          Trusted by engineering teams at
        </p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center opacity-50">
          {companies.map((company) => (
            <div key={company} className="text-center text-gray-400 hover:text-white transition-colors cursor-pointer">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Problem/Solution Section
const ProblemSolution = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            The old way is broken
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Traditional development is slow, expensive, and frustrating. Your backlog keeps growing while your team struggles with repetitive tasks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Old Way */}
          <div className="bg-red-950/20 rounded-2xl p-8 border border-red-900/30">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                <span className="text-red-400 text-xl">✗</span>
              </div>
              <h3 className="text-xl font-semibold text-white ml-3">The Old Way</h3>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Months to ship simple features
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Developers stuck on boilerplate code
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Security reviews slow everything down
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Massive technical debt accumulation
              </li>
            </ul>
          </div>

          {/* New Way */}
          <div className="bg-green-950/20 rounded-2xl p-8 border border-green-900/30">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span className="text-green-400 text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-white ml-3">The Bolt Way</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Ship production apps in minutes
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                AI handles all the repetitive work
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Pre-approved security compliance
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Clean, maintainable code every time
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// Product Demo Section
const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState('prompt')

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            See it in action
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            From idea to production in 3 steps
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch how enterprise teams ship faster than ever before
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-800">
            {[
              { id: 'prompt', label: '1. Describe', icon: '💭' },
              { id: 'generate', label: '2. Generate', icon: '⚡' },
              { id: 'deploy', label: '3. Deploy', icon: '🚀' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gray-800 text-white border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'prompt' && (
              <div className="space-y-4">
                <p className="text-gray-300">Simply describe what you want to build:</p>
                <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                  <p className="text-white font-mono">
                    "Build a customer dashboard with real-time analytics, user management, and Stripe billing integration"
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Natural language • No technical specs needed • Works with your existing stack
                </p>
              </div>
            )}

            {activeTab === 'generate' && (
              <div className="space-y-4">
                <p className="text-gray-300">Bolt instantly generates your complete application:</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-white font-semibold">0.3s</div>
                    <div className="text-gray-400 text-sm">Generation time</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">📁</div>
                    <div className="text-white font-semibold">147</div>
                    <div className="text-gray-400 text-sm">Files created</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">✅</div>
                    <div className="text-white font-semibold">100%</div>
                    <div className="text-gray-400 text-sm">Test coverage</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'deploy' && (
              <div className="space-y-4">
                <p className="text-gray-300">Deploy instantly to your infrastructure:</p>
                <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg p-6 border border-green-800/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                      <span className="text-white font-medium">Deployed to production</span>
                    </div>
                    <span className="text-green-400 text-sm">Live</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    • Kubernetes cluster: prod-us-east-1<br />
                    • Auto-scaling enabled<br />
                    • SSL certificates configured<br />
                    • Monitoring & alerts active
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Stats Section
const Stats = () => {
  const stats = [
    { value: '90%', label: 'Faster deployment', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '$2.3M', label: 'Average saved per year', icon: <Award className="w-6 h-6" /> },
    { value: '10x', label: 'Developer productivity', icon: <Zap className="w-6 h-6" /> },
    { value: '0ms', label: 'Network latency', icon: <Timer className="w-6 h-6" /> }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                <div className="text-blue-400">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Bolt transformed our development process. What used to take months now takes hours. Our developers can finally focus on innovation instead of boilerplate.",
      author: "Sarah Chen",
      role: "VP Engineering, Fortune 500 FinTech",
      company: "Wells Fargo"
    },
    {
      quote: "The security and compliance features were game-changers for us. We deployed Bolt across 500+ developers without a single security review delay.",
      author: "Marcus Rodriguez",
      role: "CTO, Global Healthcare Leader",
      company: "Johnson & Johnson"
    },
    {
      quote: "ROI was immediate. We shipped more features in Q1 with Bolt than we did all of last year. It's not just faster—it's better code.",
      author: "Emily Watson",
      role: "Director of Engineering, Tech Giant",
      company: "Microsoft"
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Loved by enterprise engineering teams
          </h2>
          <p className="text-xl text-gray-400">
            See why the world's best teams choose Bolt
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-800 pt-6">
                <div className="font-semibold text-white">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-400">
                  {testimonial.role}
                </div>
                <div className="text-sm text-blue-400 mt-1">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
const FAQ = () => {
  const faqs = [
    {
      question: "How does Bolt Enterprise ensure security?",
      answer: "Bolt runs entirely in your environment—no code ever touches our servers. We're SOC 2 Type II certified and support air-gapped deployments for maximum security."
    },
    {
      question: "What about our existing codebase?",
      answer: "Bolt seamlessly integrates with your existing stack. It can work with your design systems, internal APIs, and follows your coding standards automatically."
    },
    {
      question: "How quickly can we see ROI?",
      answer: "Most teams see 10x productivity gains within the first sprint. The average enterprise saves $2.3M in the first year through reduced development time and fewer bugs."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Enterprise customers get 24/7 dedicated support, custom onboarding, and a dedicated success manager to ensure smooth adoption across your organization."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about Bolt Enterprise
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-sm mb-6">
          <Timer className="w-4 h-4 mr-2" />
          Limited time: Get 3 months free
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to 10x your development speed?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Join the enterprises shipping faster with Bolt. Only 47 early access spots remaining.
        </p>
        <a href="#form" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105">
          Claim Your Spot Now
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
        <p className="text-sm text-white/70 mt-6">
          No credit card required • Deploy in your environment • Cancel anytime
        </p>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
            <Zap className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-bold text-white">bolt.new</span>
          </div>
          <div className="flex items-center space-x-8 text-sm text-gray-400">
            <Link href="/security" className="hover:text-white transition-colors">
              Security
            </Link>
            <Link href="/compliance" className="hover:text-white transition-colors">
              Compliance
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
    <main className="min-h-screen bg-black" id="form">
      <Header />
      <HeroWithForm />
      <TrustLogos />
      <ProblemSolution />
      <ProductDemo />
      <Stats />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
} 