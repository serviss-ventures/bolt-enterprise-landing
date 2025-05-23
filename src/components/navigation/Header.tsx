'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Shield, Zap, Users, Phone } from 'lucide-react'
import type { NavItem, NavSection } from '@/types'

const navigation: NavSection[] = [
  {
    title: 'Solutions',
    items: [
      {
        title: 'Enterprise Platform',
        href: '/enterprise',
        description: 'Advanced AI development tools for large organizations'
      },
      {
        title: 'Team Collaboration',
        href: '/collaboration',
        description: 'Seamless teamwork and code sharing capabilities'
      },
      {
        title: 'Security & Compliance',
        href: '/security',
        description: 'Enterprise-grade security and compliance features'
      },
      {
        title: 'API Integration',
        href: '/api',
        description: 'Flexible APIs and integration options'
      }
    ]
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'Documentation',
        href: '/docs',
        description: 'Complete guides and API references'
      },
      {
        title: 'Case Studies',
        href: '/case-studies',
        description: 'Success stories from enterprise customers'
      },
      {
        title: 'Blog',
        href: '/blog',
        description: 'Latest insights and best practices'
      },
      {
        title: 'Support Center',
        href: '/support',
        description: '24/7 enterprise support and training'
      }
    ]
  }
]

const simpleNavItems: NavItem[] = [
  { title: 'Pricing', href: '/pricing' },
  { title: 'Contact', href: '/contact' }
]

// Clean, Minimal Bolt.new Logo Component with Lightning Accent
const BoltLogo = () => {
  return (
    <Link href="/" className="flex items-center group">
      <div className="relative flex items-center">
        {/* Logo text with improved sizing */}
        <span className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-white tracking-tight group-hover:text-primary-400 transition-colors">
          bolt
        </span>
        <span className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-white/60 tracking-tight">
          .new
        </span>
        
        {/* SICK LIGHTNING ACCENT LINE */}
        <div className="absolute -right-3 xl:-right-4 2xl:-right-5 top-1/2 w-6 xl:w-8 2xl:w-10 h-0.5 xl:h-1 2xl:h-1 bg-gradient-to-r from-accent-blue via-accent-blue to-transparent opacity-80 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#3b82f6] transition-all duration-300"></div>
      </div>
    </Link>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleDropdownToggle = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 xl:py-8 2xl:py-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <BoltLogo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 2xl:space-x-12">
            <div className="relative group">
              <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors text-base xl:text-lg 2xl:text-xl">
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4 xl:w-5 xl:h-5" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors text-base xl:text-lg 2xl:text-xl">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 xl:w-5 xl:h-5" />
              </button>
            </div>
            
            <Link href="/pricing" className="text-white/80 hover:text-white transition-colors text-base xl:text-lg 2xl:text-xl px-2">
              Pricing
            </Link>
            
            <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-base xl:text-lg 2xl:text-xl px-2">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <Link href="/demo" className="text-white/80 hover:text-white transition-colors text-base xl:text-lg 2xl:text-xl px-3 py-2">
              Request Demo
            </Link>
            <Link href="/pricing" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 rounded-lg text-base xl:text-lg 2xl:text-xl font-medium transition-all hover:scale-105">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 border-t border-white/20 bg-white/5 backdrop-blur-md rounded-b-xl">
            <nav className="mt-6 space-y-2">
              {navigation.map((section) => (
                <div key={section.title}>
                  <div className="px-4 py-2 text-sm font-semibold text-white uppercase tracking-wider">
                    {section.title}
                  </div>
                  {section.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-4 py-3 text-white/70 hover:text-primary-400 hover:bg-white/10 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}

              {simpleNavItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-4 py-3 text-white/70 hover:text-primary-400 hover:bg-white/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

              <div className="px-4 pt-6 space-y-3">
                <Link 
                  href="/demo" 
                  className="btn-secondary w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Request Demo
                </Link>
                <Link 
                  href="/contact" 
                  className="btn-primary w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  )
} 