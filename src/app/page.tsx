'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Users, Globe, Code, Lock, Check, Building2, Cloud, Sparkles, CheckCircle2, TrendingUp, Award, Timer, Server, GitBranch, Activity, Database, Cpu, Key, Palette, MousePointer2, Layers, Figma, Eye, Wand2, Gauge, Heart, BarChart3, Smartphone, Share2, MessageSquare } from 'lucide-react'

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
            <Zap className="w-7 h-7 text-blue-500 group-hover:text-blue-400 transition-colors" />
            <span className="text-xl font-bold text-white">bolt.new</span>
            <span className="text-xs text-blue-400 ml-2 px-2 py-0.5 bg-blue-500/10 rounded-full border border-blue-500/20">
              Enterprise
            </span>
          </div>
          <div className="text-xs text-gray-500">
            by StackBlitz
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      alert('Thank you for your interest! Our team will contact you within 24 hours to schedule your personalized demo.')
      setIsSubmitting(false)
      setFormData({ email: '', company: '', teamSize: '' })
    }, 2000)
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhMWExYSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Trust Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
              <Activity className="w-4 h-4 mr-2" />
              Trusted by 10,000+ product teams worldwide
            </div>

            {/* Headline with clear value prop */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Turn your ideas into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 block">
                working apps instantly
              </span>
            </h1>

            {/* Benefit-focused subheadline */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              No coding required. Design, prototype, and ship production-ready apps with AI. Perfect for product teams who want to move fast.
            </p>

            {/* Key Benefits with Icons */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>From idea to interactive prototype in minutes</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Beautiful, responsive designs out of the box</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Real-time collaboration with stakeholders</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Export to production code when ready</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-900 flex items-center justify-center text-xs text-gray-300">
                    {i === 1 && 'SJ'}
                    {i === 2 && 'MK'}
                    {i === 3 && 'AR'}
                    {i === 4 && 'TL'}
                    {i === 5 && '+'}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-white font-semibold">5,000+ PMs & designers</span> shipping products faster
              </div>
            </div>
          </div>

          {/* Right Side - Integrated Form */}
          <div className="lg:pl-12">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  See it in action
                </h3>
                <p className="text-gray-400">
                  Watch how teams ship 10× faster without developers
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
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Team Size
                  </label>
                  <select
                    required
                    value={formData.teamSize}
                    onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select team size</option>
                    <option value="1-10">1-10 people</option>
                    <option value="10-50">10-50 people</option>
                    <option value="50-200">50-200 people</option>
                    <option value="200+">200+ people</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Get Your Demo
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
                    Enterprise Security
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-3 h-3 mr-1" />
                    SOC 2 Compliant
                  </div>
                </div>
                <p className="text-center text-xs text-gray-500 mt-3">
                  30-day free trial • No credit card required
                </p>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-xs text-gray-400">
                  Looking to explore yourself? <a href="https://bolt.new" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Try Bolt free →</a>
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
  const companies = ['Airbnb', 'Spotify', 'Uber', 'Pinterest', 'Shopify', 'Slack', 'Notion', 'Figma']
  
  return (
    <section className="py-16 bg-black/50 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-wider">
          Product teams at these companies ship faster with Bolt
        </p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center">
          {companies.map((company) => (
            <div key={company} className="text-center text-gray-600 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-110">
              <div className="text-lg font-semibold">{company}</div>
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
            Stop waiting weeks for developers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Product teams waste months in development queues. With Bolt, you can validate ideas and ship features in hours, not weeks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Old Way */}
          <div className="bg-red-950/20 rounded-2xl p-8 border border-red-900/30 transform hover:scale-[1.02] transition-all">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                <span className="text-red-400 text-xl">✗</span>
              </div>
              <h3 className="text-xl font-semibold text-white ml-3">The Old Way</h3>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Create specs and mockups that sit in backlogs
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Wait weeks for dev resources to become available
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Lost in translation between design and development
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Slow iteration cycles kill momentum
              </li>
            </ul>
          </div>

          {/* New Way */}
          <div className="bg-green-950/20 rounded-2xl p-8 border border-green-900/30 transform hover:scale-[1.02] transition-all">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span className="text-green-400 text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-white ml-3">With Bolt Enterprise</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Turn ideas into working prototypes instantly
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Test with real users the same day
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Make changes in real-time during meetings
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Ship validated features without dev dependencies
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
  const [activeTab, setActiveTab] = useState('landing')

  const demos = [
    {
      id: 'landing',
      title: 'Marketing Landing Page',
      prompt: 'Create a modern landing page for our new product launch with hero section, features, and signup form',
      result: 'Beautiful, responsive page with animations',
      icon: <Layers className="w-5 h-5" />
    },
    {
      id: 'dashboard',
      title: 'Customer Dashboard',
      prompt: 'Design a customer portal where users can view their account, usage metrics, and billing information',
      result: 'Interactive dashboard with real data visualization',
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      id: 'mobile',
      title: 'Mobile App Prototype',
      prompt: 'Build a mobile app prototype for our food delivery service with browse, cart, and checkout flows',
      result: 'Fully interactive mobile experience',
      icon: <Smartphone className="w-5 h-5" />
    }
  ]

  return (
    <section id="demo" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
            <Wand2 className="w-4 h-4 mr-2" />
            See the Magic
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            From description to deployment in seconds
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Just describe what you want in plain English. Bolt handles the rest.
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-800">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveTab(demo.id)}
                className={`flex-1 px-6 py-4 text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                  activeTab === demo.id
                    ? 'bg-gray-800 text-white border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {demo.icon}
                <span className="hidden sm:inline">{demo.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {demos.map((demo) => (
              activeTab === demo.id && (
                <div key={demo.id} className="space-y-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-3">You type:</p>
                    <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                      <p className="text-white font-medium">
                        "{demo.prompt}"
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center py-4">
                    <div className="flex items-center space-x-2 text-blue-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-200"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-400"></div>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-3">Bolt creates:</p>
                    <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-lg p-6 border border-blue-700/30">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-white font-semibold">{demo.result}</p>
                        <div className="flex items-center space-x-2">
                          <Eye className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-400">Live preview</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-black/30 rounded-lg p-3">
                          <div className="text-2xl mb-1">🎨</div>
                          <div className="text-sm text-gray-400">Pixel Perfect</div>
                        </div>
                        <div className="bg-black/30 rounded-lg p-3">
                          <div className="text-2xl mb-1">📱</div>
                          <div className="text-sm text-gray-400">Responsive</div>
                        </div>
                        <div className="bg-black/30 rounded-lg p-3">
                          <div className="text-2xl mb-1">🚀</div>
                          <div className="text-sm text-gray-400">Deploy Ready</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Everything you need to ship products faster
          </p>
          <div className="inline-flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center text-gray-400">
              <MousePointer2 className="w-4 h-4 mr-2 text-blue-400" />
              Visual editing
            </div>
            <div className="flex items-center text-gray-400">
              <Share2 className="w-4 h-4 mr-2 text-blue-400" />
              Share instantly
            </div>
            <div className="flex items-center text-gray-400">
              <MessageSquare className="w-4 h-4 mr-2 text-blue-400" />
              Gather feedback
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Stats Section
const Stats = () => {
  const stats = [
    { value: '87%', label: 'Faster time to market', icon: <Gauge className="w-6 h-6" /> },
    { value: '3.2x', label: 'More experiments shipped', icon: <Sparkles className="w-6 h-6" /> },
    { value: '92%', label: 'Stakeholder satisfaction', icon: <Heart className="w-6 h-6" /> },
    { value: '60%', label: 'Less dev dependencies', icon: <TrendingUp className="w-6 h-6" /> }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 transition-all duration-300 group-hover:scale-110">
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 transition-all">
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

// Enterprise Features Section
const EnterpriseFeatures = () => {
  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Brand System Integration',
      description: 'Automatically applies your brand colors, fonts, and design system to every creation.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Real-time collaboration with commenting, version control, and approval workflows.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with SSO, role-based access, and audit logs for compliance.'
    },
    {
      icon: <Figma className="w-6 h-6" />,
      title: 'Design Tool Sync',
      description: 'Import from Figma, Sketch, or Adobe XD. Export back when developers are ready.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Multi-platform Export',
      description: 'Export to React, Vue, Angular, or plain HTML/CSS. Mobile-ready code included.'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Analytics & Testing',
      description: 'Built-in analytics, A/B testing, and user session recording for validation.'
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
            <Building2 className="w-4 h-4 mr-2" />
            Enterprise Ready
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Everything your product team needs
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From ideation to production, Bolt provides all the tools to ship products faster
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-[1.02]">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 transition-colors">
                <div className="text-blue-400 group-hover:text-blue-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
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
      quote: "Bolt transformed how we validate ideas. What used to take weeks of dev time now happens in hours. Our team ships 3x more experiments.",
      author: "Sarah Chen",
      role: "VP of Product",
      company: "Spotify",
      avatar: "SC"
    },
    {
      quote: "The ability to create working prototypes during stakeholder meetings has been game-changing. We get buy-in instantly and iterate in real-time.",
      author: "Michael Torres",
      role: "Senior Product Manager",
      company: "Airbnb",
      avatar: "MT"
    },
    {
      quote: "Our designers can now ship features directly to production. It's eliminated the handoff friction and made our whole team more productive.",
      author: "Emma Johnson",
      role: "Head of Design",
      company: "Notion",
      avatar: "EJ"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Loved by product teams everywhere
          </h2>
          <p className="text-xl text-gray-400">
            See why thousands of PMs and designers choose Bolt
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
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
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  const faqs = [
    {
      question: "Do I need to know how to code?",
      answer: "Not at all! Bolt is designed for non-technical users. Just describe what you want in plain English, and Bolt creates professional, production-ready applications. No coding knowledge required."
    },
    {
      question: "Can I use my existing design system?",
      answer: "Yes! Bolt can import your brand guidelines, component libraries, and design systems from tools like Figma. Every app you create will automatically follow your brand standards."
    },
    {
      question: "What happens when I need custom features?",
      answer: "Bolt generates clean, standard code that any developer can customize. You can also request specific features in natural language, and Bolt will implement them. For complex logic, you can hand off to your dev team anytime."
    },
    {
      question: "How does collaboration work?",
      answer: "Teams can work together in real-time, leave comments, and track changes. Stakeholders can preview and interact with prototypes via shareable links. Built-in approval workflows keep everyone aligned."
    },
    {
      question: "Is it really production-ready?",
      answer: "Absolutely. Bolt generates modern, optimized code following industry best practices. Apps are responsive, accessible, and performance-optimized. Many teams ship Bolt creations directly to production."
    },
    {
      question: "How secure is Bolt for enterprise use?",
      answer: "Bolt is SOC 2 Type II certified with enterprise-grade security. Features include SSO, role-based access control, audit logs, and dedicated cloud instances for complete data isolation."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about Bolt Enterprise
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors pr-4">
                  {faq.question}
                </h3>
                <div className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <p className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Have more questions?
          </p>
          <a href="#form" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            Talk to our team
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to ship products faster?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of product teams who are shipping better products, faster than ever before
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#form" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a href="https://bolt.new" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all">
            Explore Bolt
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
        <p className="text-sm text-white/70 mt-6">
          No credit card required • 30-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroWithForm />
      <TrustLogos />
      <ProblemSolution />
      <ProductDemo />
      <Stats />
      <EnterpriseFeatures />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  )
} 