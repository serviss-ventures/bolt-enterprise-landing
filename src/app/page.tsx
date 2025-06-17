'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Users, Globe, Code, Lock, Check, Building2, Cloud, Sparkles, CheckCircle2, TrendingUp, Award, Timer, Server, GitBranch, Activity, Database, Cpu, Key } from 'lucide-react'

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
      alert('Thank you for your interest! Our enterprise team will contact you within 24 hours to schedule your personalized demo.')
      setIsSubmitting(false)
      setFormData({ email: '', company: '', teamSize: '' })
    }, 2000)
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Trust Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6">
              <Activity className="w-4 h-4 mr-2" />
              Powering 50,000+ developers at Fortune 500 companies
            </div>

            {/* Headline with clear value prop */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build full-stack apps with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 block">
                AI in your browser
              </span>
            </h1>

            {/* Benefit-focused subheadline */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Deploy Bolt's AI development platform in your private cloud. Ship production apps 10× faster with enterprise-grade security and compliance.
            </p>

            {/* Key Benefits with Icons */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Secure cloud deployment with data isolation</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>Use your own LLM API keys (OpenAI, Anthropic, Azure)</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>WebContainers™ technology - no Docker required</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>SOC 2 Type II, HIPAA, and ISO 27001 compliant</span>
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
                <span className="text-white font-semibold">2,847 developers</span> from enterprise teams shipping faster
              </div>
            </div>
          </div>

          {/* Right Side - Integrated Form */}
          <div className="lg:pl-12">
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Request a Demo
                </h3>
                <p className="text-gray-400">
                  See how Bolt can transform your development workflow
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
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
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
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Request Demo
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
                    SOC 2 Type II
                  </div>
                  <div className="flex items-center">
                    <Key className="w-3 h-3 mr-1" />
                    HIPAA Compliant
                  </div>
                </div>
                <p className="text-center text-xs text-gray-500 mt-3">
                  Response within 24 hours • Custom pricing available
                </p>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-xs text-gray-400">
                  Looking for self-serve? <a href="https://bolt.new" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Try Bolt free →</a>
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
  const companies = ['Google', 'Microsoft', 'Amazon', 'Meta', 'Shopify', 'Netflix', 'Salesforce', 'Adobe']
  
  return (
    <section className="py-16 bg-black/50 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-wider">
          Trusted by engineering teams at
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
            Your developers deserve better
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stop wasting talent on boilerplate. Let AI handle the repetitive work while your team focuses on what matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Old Way */}
          <div className="bg-red-950/20 rounded-2xl p-8 border border-red-900/30 transform hover:scale-[1.02] transition-all">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                <span className="text-red-400 text-xl">✗</span>
              </div>
              <h3 className="text-xl font-semibold text-white ml-3">Without Bolt</h3>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Weeks spent on initial setup and configuration
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Senior devs stuck writing CRUD operations
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Complex local environment requirements
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Security reviews block every deployment
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
                Full-stack apps generated from descriptions
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Developers focus on business logic only
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Zero setup - runs entirely in the browser
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">•</span>
                Pre-approved, compliant deployments
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
  const [activeTab, setActiveTab] = useState('dashboard')

  const prompts = [
    {
      id: 'dashboard',
      title: 'Analytics Dashboard',
      prompt: 'Create a real-time analytics dashboard with charts, KPIs, and data filtering',
      tech: 'React • TypeScript • Recharts • Tailwind'
    },
    {
      id: 'api',
      title: 'REST API',
      prompt: 'Build a secure REST API with authentication, rate limiting, and PostgreSQL',
      tech: 'Node.js • Express • JWT • Prisma'
    },
    {
      id: 'app',
      title: 'Full-Stack App',
      prompt: 'Generate a complete SaaS application with billing, auth, and admin panel',
      tech: 'Next.js • Stripe • Supabase • shadcn/ui'
    }
  ]

  return (
    <section id="demo" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            How It Works
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Natural language to production code
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how Bolt transforms simple prompts into complete, deployable applications
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-800">
            {prompts.map((prompt) => (
              <button
                key={prompt.id}
                onClick={() => setActiveTab(prompt.id)}
                className={`flex-1 px-6 py-4 text-sm font-medium transition-all ${
                  activeTab === prompt.id
                    ? 'bg-gray-800 text-white border-b-2 border-blue-500'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {prompt.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {prompts.map((prompt) => (
              activeTab === prompt.id && (
                <div key={prompt.id} className="space-y-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-3">Prompt:</p>
                    <div className="bg-black/50 rounded-lg p-4 border border-gray-700">
                      <p className="text-white font-mono text-sm">
                        "{prompt.prompt}"
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="text-white font-semibold">0.8s</div>
                      <div className="text-gray-400 text-sm">Generation time</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50">
                      <div className="text-2xl mb-2">📁</div>
                      <div className="text-white font-semibold">Ready</div>
                      <div className="text-gray-400 text-sm">To deploy</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50">
                      <div className="text-2xl mb-2">🛠️</div>
                      <div className="text-white font-semibold">100%</div>
                      <div className="text-gray-400 text-sm">Customizable</div>
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-lg p-3 text-center">
                    <p className="text-sm text-gray-400">
                      Tech stack: <span className="text-blue-400">{prompt.tech}</span>
                    </p>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">
            All code runs in secure WebContainers™ - no local setup required
          </p>
          <div className="inline-flex items-center space-x-6 text-sm">
            <div className="flex items-center text-gray-400">
              <Server className="w-4 h-4 mr-2 text-green-400" />
              Node.js runtime
            </div>
            <div className="flex items-center text-gray-400">
              <Database className="w-4 h-4 mr-2 text-blue-400" />
              Database support
            </div>
            <div className="flex items-center text-gray-400">
              <GitBranch className="w-4 h-4 mr-2 text-purple-400" />
              Git integration
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
    { value: '10×', label: 'Faster deployment', icon: <TrendingUp className="w-6 h-6" /> },
    { value: '$2.3M', label: 'Average annual savings', icon: <Award className="w-6 h-6" /> },
    { value: '90%', label: 'Less time on boilerplate', icon: <Timer className="w-6 h-6" /> },
    { value: '100%', label: 'Code ownership', icon: <Shield className="w-6 h-6" /> }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300 group-hover:scale-110">
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
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
      icon: <Cloud className="w-6 h-6" />,
      title: 'Private Cloud Instance',
      description: 'Dedicated cloud instance with complete data isolation and control.'
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: 'Your Own LLM Keys',
      description: 'Use your existing OpenAI, Anthropic, or Azure OpenAI API keys.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II, HIPAA, and ISO 27001 compliant. SSO and RBAC included.'
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Git Integration',
      description: 'Direct integration with GitHub Enterprise, GitLab, and Bitbucket.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database Support',
      description: 'Connect to PostgreSQL, MySQL, MongoDB, Redis, and more.'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Custom Models',
      description: 'Fine-tune AI models on your codebase and coding standards.'
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
            Built for enterprise scale and security
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Deploy with confidence in your private cloud instance with complete data isolation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:transform hover:scale-[1.02]">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors">
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
      quote: "StackBlitz unlocks a true one-click startup experience with the full stack running in the browser—it's a game-changer for developer productivity.",
      author: "Ilya Grigorik",
      role: "Principal Engineer",
      company: "Shopify",
      avatar: "IG"
    },
    {
      quote: "Being able to instantly open and share environments has significantly reduced our team's support burden for bug reproductions and enabled rapid innovation.",
      author: "Stephen Fluin",
      role: "Developer Relations Lead",
      company: "Google",
      avatar: "SF"
    },
    {
      quote: "We were able to build and deploy a complete SaaS application in minutes instead of weeks. The productivity gains for our engineering team have been incredible.",
      author: "Marc Andre",
      role: "Senior Developer",
      company: "TechCorp",
      avatar: "MA"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Trusted by industry leaders
          </h2>
          <p className="text-xl text-gray-400">
            See why the world's best engineering teams choose Bolt
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
  const faqs = [
    {
      question: "How does Bolt Enterprise ensure our code stays secure?",
      answer: "Bolt Enterprise provides dedicated cloud instances with complete data isolation. No code, data, or prompts are shared between customers. You can use your own LLM API keys for complete control."
    },
    {
      question: "What makes Bolt different from GitHub Copilot or Cursor?",
      answer: "Unlike code completion tools, Bolt generates entire full-stack applications from natural language. It includes a complete browser-based development environment with WebContainers™ technology - no local setup required."
    },
    {
      question: "How quickly can we see ROI?",
      answer: "Most teams see 10× productivity gains within the first sprint. The average enterprise saves $2.3M annually through reduced development time, fewer bugs, and faster time-to-market."
    },
    {
      question: "Does Bolt work with our existing tech stack?",
      answer: "Yes. Bolt supports all major frameworks (React, Vue, Angular, Next.js, etc.) and can integrate with your existing APIs, databases, and design systems. It adapts to your coding standards automatically."
    },
    {
      question: "What kind of support do we get?",
      answer: "Enterprise customers receive 24/7 dedicated support, custom onboarding, a dedicated success manager, and priority feature requests. We also provide training for your entire engineering team."
    },
    {
      question: "Can we customize the AI models?",
      answer: "Yes. Enterprise customers can fine-tune models on their codebase, ensuring generated code follows your specific patterns, conventions, and best practices."
    }
  ]

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
            <div key={index} className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {faq.question}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Have more questions?
          </p>
          <a href="#form" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            Talk to our enterprise team
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
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to see Bolt in action?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Schedule a personalized demo to see how your team can ship 10× faster
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#form" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Schedule Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a href="https://bolt.new" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all">
            Try Bolt Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
        <p className="text-sm text-white/70 mt-6">
          Custom enterprise pricing • Dedicated support • Training included
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