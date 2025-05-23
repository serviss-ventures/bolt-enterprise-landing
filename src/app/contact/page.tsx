import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import Link from 'next/link'
import { Code, Slack, Github, Terminal, Zap, Shield, Globe, ArrowRight, Bot, Users, Layers } from 'lucide-react'

const integrationMethods = [
  {
    icon: Code,
    title: 'Live technical demo',
    description: 'Interactive demo tailored to your stack',
    action: 'Book technical session',
    type: 'technical'
  },
  {
    icon: Slack,
    title: 'Slack Connect',
    description: 'Direct channel with our engineering team',
    action: 'Connect Slack workspace',
    type: 'async'
  },
  {
    icon: Terminal,
    title: 'API integration workshop',
    description: 'Hands-on session with your DevOps team',
    action: 'Schedule workshop',
    type: 'integration'
  },
  {
    icon: Bot,
    title: 'AI-powered needs assessment',
    description: 'Smart intake that understands your architecture',
    action: 'Start assessment',
    type: 'smart'
  }
]

const useCases = [
  {
    icon: Zap,
    title: 'Accelerate development velocity',
    problems: ['Long environment setup times', 'Dependency conflicts', 'Developer productivity bottlenecks'],
    outcome: '14× faster prototyping'
  },
  {
    icon: Shield,
    title: 'Secure development environments',
    problems: ['Shadow IT concerns', 'Code security in browser', 'Compliance requirements'],
    outcome: 'SOC 2 + GDPR compliant'
  },
  {
    icon: Globe,
    title: 'Scale development teams',
    problems: ['Remote team collaboration', 'Onboarding new developers', 'Standardizing workflows'],
    outcome: 'Instant team alignment'
  }
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Consistent Header with logo and lightning accent */}
      <Header />

      {/* Hero Section with proper top padding */}
      <section className="py-16 lg:py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's integrate
              <span className="block gradient-text">bolt.new into your workflow</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Modern enterprises don't just "talk to sales" — they integrate, collaborate, and build together. 
              Choose how you want to engage with our platform.
            </p>
          </div>

          {/* Integration Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {integrationMethods.map((method, index) => (
              <div
                key={method.title}
                className="glass-strong rounded-3xl p-6 border border-white/20 hover:border-primary-400/50 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <method.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-white/60 text-sm mb-4">{method.description}</p>
                <button className="text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors flex items-center group">
                  {method.action}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What are you trying to solve?
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={useCase.title}
                  className="glass rounded-2xl p-8 border border-white/10 hover:border-primary-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-white/80 mb-3">Common challenges:</h4>
                    <ul className="space-y-2">
                      {useCase.problems.map((problem, idx) => (
                        <li key={idx} className="text-sm text-white/60 flex items-start">
                          <span className="w-1 h-1 bg-white/40 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="text-sm text-white/60">Typical outcome:</div>
                    <div className="text-lg font-semibold text-primary-400">{useCase.outcome}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modern Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-strong rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Tell us about your environment</h2>
                <p className="text-white/60">Help us understand your technical needs so we can provide the most relevant guidance</p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Company</label>
                    <input 
                      type="text"
                      className="input-glass w-full"
                      placeholder="Acme Corporation"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Engineering contact</label>
                    <input 
                      type="email"
                      className="input-glass w-full"
                      placeholder="tech-lead@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Team size</label>
                    <select className="input-glass w-full">
                      <option value="">Select team size</option>
                      <option value="startup">10-50 engineers</option>
                      <option value="growth">50-200 engineers</option>
                      <option value="enterprise">200+ engineers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Primary stack</label>
                    <select className="input-glass w-full">
                      <option value="">Select primary stack</option>
                      <option value="react">React/Next.js</option>
                      <option value="vue">Vue/Nuxt</option>
                      <option value="angular">Angular</option>
                      <option value="fullstack">Full-stack (Node + Frontend)</option>
                      <option value="mixed">Mixed technologies</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Current development workflow</label>
                  <textarea 
                    className="input-glass w-full h-24 resize-none"
                    placeholder="How do your teams currently set up dev environments? What's slowing you down? Any specific compliance or security requirements?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">What's your biggest pain point?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Environment setup time', 'Developer onboarding', 'Security & compliance', 'Team collaboration', 'Deployment pipeline', 'Other'].map((pain) => (
                      <label key={pain} className="flex items-center space-x-2 p-3 glass rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                        <input type="checkbox" className="text-primary-500 rounded border-white/20 bg-transparent" />
                        <span className="text-sm text-white/80">{pain}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full btn-large group"
                >
                  Get technical recommendations
                  <Code className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </button>

                <div className="text-center">
                  <p className="text-xs text-white/50">
                    We'll route this to the right technical specialist and follow up within 4 hours during business hours.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Alternative Engagement */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-white mb-8">Prefer a different approach?</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="glass rounded-2xl p-6 border border-white/10">
                <Github className="w-8 h-8 text-primary-400 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Explore on GitHub</h4>
                <p className="text-sm text-white/60 mb-4">Check out our open source examples and integrations</p>
                <Link href="#" className="text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors">
                  View repositories →
                </Link>
              </div>
              
              <div className="glass rounded-2xl p-6 border border-white/10">
                <Users className="w-8 h-8 text-primary-400 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Join developer community</h4>
                <p className="text-sm text-white/60 mb-4">Connect with other teams using Bolt.new in production</p>
                <Link href="#" className="text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors">
                  Join Discord →
                </Link>
              </div>

              <div className="glass rounded-2xl p-6 border border-white/10">
                <Layers className="w-8 h-8 text-primary-400 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Browse integration docs</h4>
                <p className="text-sm text-white/60 mb-4">Technical guides for CI/CD, SSO, and infrastructure setup</p>
                <Link href="#" className="text-primary-400 text-sm font-medium hover:text-primary-300 transition-colors">
                  Read docs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer for consistency */}
      <Footer />
    </main>
  )
} 