import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

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
      text: 'Start trial',
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
      href: '/contact'
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
      href: '/contact'
    }
  }
]

export default function Pricing() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Packages Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Packages
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Choose the right plan for your team size and security requirements.
          </p>
        </div>

        {/* Pricing Cards - Clean StackBlitz Style */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative bg-white/5 backdrop-blur-sm rounded-2xl border transition-all duration-300 hover:scale-105 ${
                tier.highlighted 
                  ? 'border-primary-400 shadow-lg shadow-primary-500/20' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Most Popular Badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Tier Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-white/60">
                    {tier.description}
                  </p>
                </div>

                {/* Key Inclusions */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-6">
                    Key Inclusions
                  </h4>
                  <ul className="space-y-4">
                    {tier.keyInclusions.map((inclusion, inclusionIndex) => (
                      <li key={inclusionIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 mr-3" />
                        <span className="text-white/80 text-sm leading-relaxed">{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  href={tier.cta.href}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 group ${
                    tier.highlighted 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl hover:scale-105' 
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30'
                  }`}
                >
                  {tier.cta.text}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mb-16">
          <p className="text-white/60 mb-6 text-lg">
            Talk to sales – we'll scope your pilot in 30 minutes.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Schedule consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Developer Peace of Mind Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Developer peace of mind
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary-500" />
              </div>
              <p className="text-white/80 leading-relaxed">
                Your code stays in the browser sandbox, never on shared VMs.
              </p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary-500" />
              </div>
              <p className="text-white/80 leading-relaxed">
                Works with private NPM registries and existing CI pipelines.
              </p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-primary-500" />
              </div>
              <p className="text-white/80 leading-relaxed">
                Deploy anywhere: AWS, Azure, GCP or on-prem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 