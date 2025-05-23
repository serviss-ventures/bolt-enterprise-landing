import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Users, Shield, Zap, Calendar, Phone } from 'lucide-react'

const pricingTiers = [
  {
    name: 'Team',
    description: '10–50 builders',
    keyInclusions: [
      'Shared cloud workspace',
      'SSO integration',
      'Priority support',
      'Basic analytics',
      'Community templates',
      'Standard SLA'
    ],
    cta: {
      text: 'Start 14-day trial',
      href: '/trial'
    }
  },
  {
    name: 'Enterprise',
    description: '50+ builders',
    keyInclusions: [
      'Bolt AI builder',
      'StackBlitz Enterprise Server',
      'Self-host or VPC deployment',
      'Dedicated Customer Success Manager',
      'Advanced security controls',
      'Custom integrations',
      'Priority support',
      'Advanced analytics'
    ],
    highlighted: true,
    cta: {
      text: 'Talk to sales',
      href: '#contact-form'
    }
  },
  {
    name: 'Premier',
    description: 'Regulated & on-prem',
    keyInclusions: [
      'On-premises installation',
      'Custom SLAs',
      'Annual security review',
      'Dedicated technical support',
      'Custom compliance reporting',
      'Professional services',
      'White-glove onboarding',
      'Custom feature development'
    ],
    cta: {
      text: 'Contact us',
      href: '#contact-form'
    }
  }
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <Header />

      {/* Hero Section - Fixed header overlap */}
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Simple, transparent
            <span className="block text-blue-500 mt-2">pricing</span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
            Choose the plan that fits your team size and security requirements. 
            Scale with confidence as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section - Properly spaced */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Packages
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Choose the right plan for your team size and security requirements.
            </p>
          </div>

          {/* Pricing Grid - Clean layout */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                  tier.highlighted 
                    ? 'bg-gradient-to-b from-blue-500/10 to-purple-500/10 border-2 border-blue-400/50 shadow-2xl shadow-blue-500/20' 
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Most Popular Badge */}
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Tier Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-white/60 text-lg">
                    {tier.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-6">
                    Key Inclusions
                  </h4>
                  <ul className="space-y-4">
                    {tier.keyInclusions.map((inclusion, inclusionIndex) => (
                      <li key={inclusionIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 mr-3" />
                        <span className="text-white/80 leading-relaxed">{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={tier.cta.href}
                  className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-semibold transition-all duration-200 group ${
                    tier.highlighted 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105' 
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30'
                  }`}
                >
                  {tier.cta.text}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Developer peace of mind
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-white/80 leading-relaxed">
                Your code stays in the browser sandbox, never on shared VMs.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-white/80 leading-relaxed">
                Works with private NPM registries and existing CI pipelines.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <p className="text-white/80 leading-relaxed">
                Deploy anywhere: AWS, Azure, GCP or on-premises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Conversion focused */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-500/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to transform your development workflow?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Talk to our team. We'll scope your pilot in 30 minutes and get you running in days, not months.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">First Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Last Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Work Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Company</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Acme Corporation"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Team Size</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="" className="bg-black">Select team size</option>
                  <option value="1-10" className="bg-black">1-10 developers</option>
                  <option value="11-50" className="bg-black">11-50 developers</option>
                  <option value="51-200" className="bg-black">51-200 developers</option>
                  <option value="200+" className="bg-black">200+ developers</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Tell us about your needs</label>
                <textarea 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none"
                  placeholder="What are your biggest development workflow challenges?"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link 
                  href="/demo"
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 border border-white/20 hover:border-white/30 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Request demo
                </Link>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-white/50">
                  We'll follow up within 4 hours during business hours. No spam, ever.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 