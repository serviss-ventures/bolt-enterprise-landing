export interface NavItem {
  title: string
  href: string
  description?: string
  external?: boolean
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  details?: string[]
}

export interface Testimonial {
  quote: string
  author: {
    name: string
    title: string
    company: string
    avatar?: string
  }
  featured?: boolean
}

export interface StatItem {
  value: string
  label: string
  description?: string
}

export interface PricingTier {
  name: string
  description: string
  price: {
    monthly: number
    annual: number
  }
  features: string[]
  highlighted?: boolean
  cta: {
    text: string
    href: string
  }
}

export interface ComplianceItem {
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  status: 'certified' | 'in-progress' | 'planned'
}

export interface SecurityFeature {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  details: string[]
}

export interface CaseStudy {
  company: string
  industry: string
  logo?: string
  challenge: string
  solution: string
  results: {
    metric: string
    improvement: string
  }[]
  quote?: Testimonial
}

export interface BlogPost {
  title: string
  excerpt: string
  slug: string
  publishedAt: Date
  author: {
    name: string
    avatar?: string
  }
  tags: string[]
  readTime: number
}

export interface ContactForm {
  firstName: string
  lastName: string
  email: string
  company: string
  jobTitle: string
  teamSize: string
  message: string
  consent: boolean
}

export interface CTASection {
  title: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
} 