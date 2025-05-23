import { 
  Shield, 
  Users, 
  Zap, 
  Database, 
  GitBranch, 
  Code2, 
  Lock, 
  Clock, 
  BarChart3,
  Workflow,
  FileCheck,
  Headphones
} from 'lucide-react'
import type { Feature } from '@/types'

const features: Feature[] = [
  {
    icon: Zap,
    title: 'AI-Powered Code Generation',
    description: 'Generate full-stack applications from natural language prompts with advanced AI models.',
    details: [
      'GPT-4 powered code generation',
      'Multi-language support (React, Vue, Angular, etc.)',
      'Smart context awareness',
      'Automatic code optimization'
    ]
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with SOC 2 Type II compliance, encryption, and advanced access controls.',
    details: [
      'SOC 2 Type II certified',
      'End-to-end encryption',
      'SSO/SAML integration',
      'Role-based access control'
    ]
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless collaboration tools for distributed teams with real-time editing and sharing.',
    details: [
      'Real-time collaborative editing',
      'Team workspaces',
      'Comment and review system',
      'Activity tracking'
    ]
  },
  {
    icon: Database,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure with automatic scaling and global deployment options.',
    details: [
      'Auto-scaling infrastructure',
      'Global CDN distribution',
      '99.9% uptime SLA',
      'Disaster recovery'
    ]
  },
  {
    icon: GitBranch,
    title: 'Version Control Integration',
    description: 'Seamless integration with GitHub, GitLab, and other version control systems.',
    details: [
      'Git integration',
      'Automated deployments',
      'Branch management',
      'Merge conflict resolution'
    ]
  },
  {
    icon: Code2,
    title: 'Custom Templates',
    description: 'Create and share custom templates across your organization for consistent development.',
    details: [
      'Custom template library',
      'Organization-wide sharing',
      'Template versioning',
      'Best practice enforcement'
    ]
  },
  {
    icon: Lock,
    title: 'Compliance & Governance',
    description: 'Meet regulatory requirements with comprehensive audit trails and compliance reporting.',
    details: [
      'GDPR compliance',
      'Audit trail logging',
      'Compliance reporting',
      'Data retention policies'
    ]
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Comprehensive analytics dashboard with team productivity and project insights.',
    details: [
      'Team productivity metrics',
      'Project timeline tracking',
      'Resource utilization',
      'Performance analytics'
    ]
  },
  {
    icon: Workflow,
    title: 'CI/CD Integration',
    description: 'Integrate with your existing CI/CD pipeline for automated testing and deployment.',
    details: [
      'Pipeline integration',
      'Automated testing',
      'Deployment automation',
      'Quality gates'
    ]
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock enterprise support with dedicated account management.',
    details: [
      'Dedicated account manager',
      '24/7 technical support',
      'Priority response times',
      'Training and onboarding'
    ]
  },
  {
    icon: FileCheck,
    title: 'API Documentation',
    description: 'Comprehensive API documentation with SDKs for seamless integrations.',
    details: [
      'RESTful API access',
      'SDK libraries',
      'Webhook support',
      'Rate limiting'
    ]
  },
  {
    icon: Headphones,
    title: 'Training & Onboarding',
    description: 'Comprehensive training programs and onboarding support for your teams.',
    details: [
      'Live training sessions',
      'Documentation portal',
      'Best practice guides',
      'Certification programs'
    ]
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-secondary-50">
      <div className="container-max section-padding">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Everything Your Enterprise
            <span className="block gradient-text">Needs to Scale</span>
          </h2>
          <p className="text-lg lg:text-xl text-secondary-600 max-w-3xl mx-auto text-balance">
            From AI-powered development to enterprise security and compliance, 
            Bolt Enterprise provides all the tools your organization needs to 
            accelerate development while maintaining the highest standards.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-200 transition-colors">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600 mb-4 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Details */}
              {feature.details && (
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-secondary-500">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a 
              href="/demo" 
              className="btn-primary btn-large"
            >
              Schedule Demo
            </a>
            <a 
              href="/features" 
              className="btn-outline btn-large"
            >
              View All Features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 