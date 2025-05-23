import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Users, Shield, Zap, Calendar, Phone, Star, Award, Clock, CreditCard } from 'lucide-react'

const pricingTiers = [
  {
    name: 'Team',
    description: 'Perfect for growing teams',
    price: 'Free',
    period: '14-day trial',
    originalPrice: '$49/user/month',
    savings: 'Then $49/user/month',
    features: [
      'Up to 50 developers',
      'Shared cloud workspace',
      'SSO integration (Google, GitHub)',
      'Priority email support',
      'Community templates library',
      '99.9% uptime SLA',
      'Basic usage analytics',
      'Standard security controls'
    ],
    highlighted: false,
    popularBadge: 'Most Popular for Teams',
    cta: {
      text: 'Start Free Trial',
      subtext: 'No credit card required',
      href: '/trial?plan=team'
    },
    trustSignals: [
      '✅ Cancel anytime',
      '✅ 30-day money back',
      '✅ Setup in 5 minutes'
    ]
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
      'Dedicated Customer Success Manager',
      'Advanced security & compliance',
      'Custom integrations & APIs',
      '24/7 priority support',
      'Advanced analytics & reporting',
      'Custom SLA (99.99% available)',
      'Professional services included'
    ],
    highlighted: true,
    popularBadge: 'Best Value for Enterprise',
    cta: {
      text: 'Talk to Sales',
      subtext: '30-min consultation',
      href: '#contact-form'
    },
    trustSignals: [
      '✅ SOC 2 Type II',
      '✅ GDPR compliant',
      '✅ 24/7 support'
    ]
  }
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
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6">
            <Star className="w-4 h-4 mr-2" />
            Join 10,000+ developers building 10× faster
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Start building faster
            <span className="block text-blue-500 mt-2">today</span>
          </h1>
          
          <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12">
            Join thousands of teams who've accelerated their development workflow. 
            <strong className="text-white"> Start your free trial in under 5 minutes.</strong>
          </p>

          {/* Social Proof - Customer Logos */}
          <div className="mb-16">
            <p className="text-white/50 text-sm uppercase tracking-wider mb-6">
              Trusted by enterprise teams at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {customerLogos.map((customer, index) => (
                <div key={customer.name} className="text-2xl">{customer.logo}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Pricing Toggle - Simple 2 options */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose your plan
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Start with a free trial. Upgrade anytime. Cancel anytime.
            </p>
            
            {/* Value Prop Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm">
                <Clock className="w-4 h-4 mr-2 text-green-400" />
                Setup in 5 minutes
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm">
                <CreditCard className="w-4 h-4 mr-2 text-green-400" />
                No credit card required
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                30-day money back
              </div>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                  tier.highlighted 
                    ? 'bg-gradient-to-b from-blue-500/20 to-purple-500/20 border-2 border-blue-400/50 shadow-2xl shadow-blue-500/20 scale-105' 
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {tier.popularBadge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide ${
                      tier.highlighted 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-green-600 text-white'
                    }`}>
                      {tier.popularBadge}
                    </span>
                  </div>
                )}

                {/* Tier Header */}
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
                    {tier.savings && (
                      <p className="text-sm text-white/50 mt-2">{tier.savings}</p>
                    )}
                  </div>
                </div>

                {/* CTA Button - Above features for better conversion */}
                <div className="mb-8">
                  <a
                    href={tier.cta.href}
                    className={`w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-all duration-200 group mb-3 ${
                      tier.highlighted 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-105' 
                        : 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
                    }`}
                  >
                    {tier.cta.text}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-center text-sm text-white/50">{tier.cta.subtext}</p>
                </div>

                {/* Trust Signals */}
                <div className="mb-8 space-y-2">
                  {tier.trustSignals.map((signal, idx) => (
                    <p key={idx} className="text-sm text-green-400 text-center">{signal}</p>
                  ))}
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-6 text-center">
                    Everything included
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
            ))}
          </div>

          {/* Additional CTA for hesitant users */}
          <div className="text-center mt-12">
            <p className="text-white/60 mb-4">Not sure which plan is right for you?</p>
            <a href="#contact-form" className="text-blue-400 hover:text-blue-300 font-semibold">
              Talk to our team →
            </a>
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

      {/* Contact Form Section - Streamlined */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-500/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Need a custom solution?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Let's discuss your specific requirements. Our team will design a solution that fits your needs perfectly.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Work Email *</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Company *</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Acme Corporation"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Team Size *</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="" className="bg-black">Select team size</option>
                  <option value="1-10" className="bg-black">1-10 developers</option>
                  <option value="11-50" className="bg-black">11-50 developers</option>
                  <option value="51-200" className="bg-black">51-200 developers</option>
                  <option value="200+" className="bg-black">200+ developers</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">What's your biggest development challenge?</label>
                <textarea 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none"
                  placeholder="Tell us about your workflow challenges, security requirements, or integration needs..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Custom Quote (30 min call)
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-white/50">
                  ✅ We'll respond within 4 hours • ✅ No spam, ever • ✅ SOC 2 Type II security
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