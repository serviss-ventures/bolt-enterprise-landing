import Link from 'next/link'
import { Zap, Twitter, Linkedin, Github, Youtube, Mail, MapPin, Phone } from 'lucide-react'

const footerNavigation = {
  solutions: [
    { name: 'Enterprise Platform', href: '/enterprise' },
    { name: 'Team Collaboration', href: '/collaboration' },
    { name: 'Security & Compliance', href: '/security' },
    { name: 'API Integration', href: '/api' },
    { name: 'Custom Solutions', href: '/custom' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Webinars', href: '/webinars' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Support', href: '/support' },
    { name: 'System Status', href: '/status' },
    { name: 'Training', href: '/training' },
    { name: 'Community', href: '/community' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' },
    { name: 'Investors', href: '/investors' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Data Processing', href: '/data-processing' },
    { name: 'Compliance', href: '/compliance' },
  ],
}

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/bolt_new', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/bolt-new', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/bolt-new', icon: Github },
  { name: 'YouTube', href: 'https://youtube.com/@bolt-new', icon: Youtube },
]

const complianceCertifications = [
  'SOC 2 Type II',
  'ISO 27001',
  'GDPR Compliant',
  'HIPAA Ready',
  'PCI DSS'
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white/5 text-white border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-8 h-8 bg-primary-600 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Bolt <span className="text-primary-400">Enterprise</span>
              </span>
            </Link>
            
            <p className="text-base lg:text-lg text-white/70 mb-6 max-w-md">
              The AI-powered development platform trusted by enterprises worldwide. 
              Build faster, deploy securely, and scale with confidence.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-base text-white/70">
                <Mail className="w-4 h-4 mr-3 text-primary-400" />
                enterprise@bolt.new
              </div>
              <div className="flex items-center text-base text-white/70">
                <Phone className="w-4 h-4 mr-3 text-primary-400" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-base text-white/70">
                <MapPin className="w-4 h-4 mr-3 text-primary-400" />
                San Francisco, CA
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors group"
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="w-5 h-5 text-white/60 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-white mb-3">
              Stay Updated
            </h3>
            <p className="text-sm text-white/70 mb-4">
              Get the latest enterprise development insights and product updates.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Copyright and Legal */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-sm text-white/60">
                © {currentYear} Bolt Enterprise. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4">
                {footerNavigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-white/60 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Compliance Certifications */}
            <div className="flex flex-wrap gap-4">
              {complianceCertifications.map((cert) => (
                <div
                  key={cert}
                  className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white/70 border border-white/20"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 