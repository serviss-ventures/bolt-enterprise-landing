import { Clock, Shield, DollarSign, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Speed vs backlog',
    description: 'New product ideas wait weeks for scarce dev cycles.',
    color: 'text-red-500'
  },
  {
    icon: Shield,
    title: 'Security vs shadow IT',
    description: 'Teams spin up unsanctioned tools to move faster.',
    color: 'text-yellow-500'
  },
  {
    icon: DollarSign,
    title: 'Talent vs budget',
    description: 'Hiring full-stack engineers is expensive and slow.',
    color: 'text-blue-500'
  }
]

const solutions = [
  {
    need: 'Instant environments',
    solution: 'WebContainer boots Node in-browser in <1s, so prototypes appear while competitors are still cloning repos.',
    icon: Zap
  },
  {
    need: 'AI acceleration',
    solution: 'Plain-English prompts generate React, Next.js or Expo code that your devs can inspect and extend.',
    icon: Users
  },
  {
    need: 'Full control',
    solution: 'Self-hosted StackBlitz Enterprise Server keeps source and packages behind your VPN.',
    icon: Shield
  },
  {
    need: 'Compliance ready',
    solution: 'SSO / SAML, audit logs and VPC deployment options meet enterprise security teams where they are.',
    icon: CheckCircle
  },
  {
    need: 'Seamless hand-off',
    solution: 'Export projects to GitHub or open them in the StackBlitz IDE for deeper engineering work.',
    icon: ArrowRight
  },
  {
    need: 'Predictable cost',
    solution: 'Single Kubernetes cluster, browser-side compute, no runaway VM bills.',
    icon: DollarSign
  }
]

export default function Problems() {
  return (
    <section className="py-16 lg:py-24 bg-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            The Enterprise Problem
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Modern enterprises face a critical tension between speed, security, and resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Speed vs Backlog</h3>
            <p className="text-white/70">
              Development teams can't keep up with business demands. Internal tools take months to build.
            </p>
          </div>

          <div className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
              <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Security vs Shadow IT</h3>
            <p className="text-white/70">
              Teams resort to unauthorized tools when official solutions are too slow or complex.
            </p>
          </div>

          <div className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-6">
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Talent vs Budget</h3>
            <p className="text-white/70">
              Skilled developers are expensive and hard to find. Simple tools shouldn't require full teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 