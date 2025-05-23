import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Users, Shield, Zap, Calendar, Star, Award, Clock } from 'lucide-react'

const pricingTiers = [
  {
    name: 'Team',
    description: 'Perfect for growing teams',
    price: 'Free',
    period: '14-day trial',
    afterTrial: 'Then $49/user/month',
    features: [
      'Up to 50 developers',
      'Shared cloud workspace',
      'SSO integration',
      'Priority email support',
      'Community templates',
      '99.9% uptime SLA'
    ],
    popular: true,
    cta: {
      text: 'Start Free Trial',
      href: '/trial?plan=team'
    }
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    period: 'pricing',
    features: [
      'Unlimited developers',
      'StackBlitz Enterprise Server',
      'Self-host or VPC deployment',
      'Dedicated Customer Success',
      'Advanced security & compliance',
      'Custom integrations & APIs',
      '24/7 priority support',
      'Custom SLA (99.99%)'
    ],
    enterprise: true,
    cta: {
      text: 'Talk to Sales',
      href: '#contact-form'
    }
  }
]

const features = [
  'No credit card required',
  'Cancel anytime',
  '30-day money back guarantee',
  'Setup in 5 minutes'
]

const customerLogos = [
  { name: 'Google', logo: '🔵' },
  { name: 'IBM', logo: '🔷' },
  { name: 'Salesforce', logo: '🔵' },
  { name: 'Porsche', logo: '🏎️' },
  { name: 'VMware', logo: '🔶' },
  { name: 'Allianz', logo: '🔷' }
]

const testimonials = [
  {
    quote: "We reduced our development setup time from 2 hours to 5 minutes. Game changer.",
    author: "Sarah Chen",
    role: "VP Engineering",
    company: "TechCorp",
    rating: 5
  },
  {
    quote: "Our team productivity increased 3x after switching to bolt.new enterprise.",
    author: "Mike Rodriguez", 
    role: "CTO",
    company: "StartupXYZ",
    rating: 5
  }
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Clean Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Simple, transparent
            <span className="block text-blue-500 mt-2">pricing</span>
          </h1>
          
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
            Start building faster today. <strong className="text-white">No hidden fees, no surprises.</strong>
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-green-400 text-sm">
                <CheckCircle className="w-4 h-4 mr-2" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                  tier.enterprise 
                    ? 'bg-gradient-to-b from-blue-500/10 to-purple-500/10 border-2 border-blue-400/30 scale-105' 
                    : 'bg-white/5 border border-white/20 hover:border-white/30'
                }`}
              >
                {/* Clean Badge */}
                {tier.popular && (
                  <div className="absolute -top-3 left-8 right-8">
                    <div className="bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold text-center">
                      Most Popular
                    </div>
                  </div>
                )}
                
                {tier.enterprise && (
                  <div className="absolute -top-3 left-8 right-8">
                    <div className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold text-center">
                      Best Value
                    </div>
                  </div>
                )}

                {/* Content with proper spacing */}
                <div className={tier.popular || tier.enterprise ? 'pt-4' : ''}>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-white/60 text-lg mb-6">
                      {tier.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">{tier.price}</span>
                        <span className="text-white/60 ml-2">/{tier.period}</span>
                      </div>
                      {tier.afterTrial && (
                        <p className="text-sm text-white/50 mt-2">{tier.afterTrial}</p>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mb-8">
                    <a
                      href={tier.cta.href}
                      className={`w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-200 group ${
                        tier.enterprise 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-green-600 hover:bg-green-700 text-white'
                      } hover:scale-105 shadow-lg`}
                    >
                      {tier.cta.text}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-6 text-center">
                      What's included
                    </h4>
                    <ul className="space-y-4">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 mr-3" />
                          <span className="text-white/80 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Clean bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-white/60 mb-4">Questions about which plan is right for you?</p>
            <a href="#contact-form" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center">
              Contact our team
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Simple Contact Form */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a custom solution?
            </h2>
            <p className="text-xl text-white/70">
              Let's discuss your specific requirements.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Work Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Company</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Acme Corporation"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Team Size</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="" className="bg-black">Select team size</option>
                  <option value="1-10" className="bg-black">1-10 developers</option>
                  <option value="11-50" className="bg-black">11-50 developers</option>
                  <option value="51-200" className="bg-black">51-200 developers</option>
                  <option value="200+" className="bg-black">200+ developers</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center group"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-16">
            Loved by developers worldwide
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-white/90 text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-white/60">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-16">
            Enterprise-grade security & reliability
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Bank-level Security</h4>
              <p className="text-white/80 leading-relaxed">
                SOC 2 Type II certified. Your code stays in the browser sandbox, never on shared infrastructure.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">99.9% Uptime</h4>
              <p className="text-white/80 leading-relaxed">
                Built on enterprise infrastructure with automatic failover and 24/7 monitoring.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">GDPR Compliant</h4>
              <p className="text-white/80 leading-relaxed">
                Full compliance with GDPR, CCPA, and other privacy regulations worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 