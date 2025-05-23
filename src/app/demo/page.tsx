import Link from 'next/link'
import { ArrowLeft, Calendar, Users, Zap, Shield, CheckCircle, Play, Clock, Globe } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'See AI in action',
    description: 'Watch as we build a complete React app from a simple prompt in under 5 minutes'
  },
  {
    icon: Shield,
    title: 'Enterprise security',
    description: 'Learn how StackBlitz WebContainer keeps your code secure in the browser sandbox'
  },
  {
    icon: Users,
    title: 'Team collaboration',
    description: 'Discover how your team can collaborate in real-time on enterprise applications'
  },
  {
    icon: Globe,
    title: 'Deploy anywhere',
    description: 'See deployment options for AWS, Azure, GCP, or your on-premises infrastructure'
  }
]

const stats = [
  { value: '14×', label: 'Faster prototyping' },
  { value: '<1s', label: 'Environment boot time' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '500+', label: 'Enterprise customers' }
]

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container-max section-padding py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-white transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to home
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-semibold text-white tracking-tight">bolt</span>
              <span className="text-2xl font-semibold text-white/60 tracking-tight">.new</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating VS Code Window */}
          <div className="absolute top-1/4 left-1/4 opacity-20 animate-float" style={{animationDelay: '0s'}}>
            <div className="bg-primary-500/10 backdrop-blur-sm border border-primary-500/20 rounded-lg p-4 w-64">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-white/60 ml-2 font-mono">app.tsx</span>
              </div>
              <div className="font-mono text-xs space-y-1">
                <div className="text-blue-400">import</div>
                <div className="text-yellow-400">function App() {'{{'}</div>
                <div className="text-green-400 ml-2">return &lt;Demo /&gt;</div>
                <div className="text-yellow-400">{'}'}</div>
              </div>
            </div>
          </div>

          {/* Floating Terminal */}
          <div className="absolute bottom-1/4 right-1/4 opacity-15 animate-float" style={{animationDelay: '-3s'}}>
            <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg p-4 w-72">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-white/60 ml-2">Terminal</span>
              </div>
              <div className="font-mono text-xs space-y-1">
                <div className="text-green-400">$ bolt create my-app</div>
                <div className="text-white/60">✓ Creating workspace...</div>
                <div className="text-white/60">✓ Installing dependencies...</div>
                <div className="text-primary-400">🚀 Ready in 847ms</div>
                <div className="text-white/40 animate-pulse">█</div>
              </div>
            </div>
          </div>

          {/* Floating Docker Container */}
          <div className="absolute top-32 right-16 opacity-25 animate-float" style={{animationDelay: '-1s'}}>
            <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="font-mono text-xs text-blue-400">container: ready</span>
              </div>
            </div>
          </div>

          {/* Tech Hexagon Grid */}
          <div className="absolute bottom-16 left-20 opacity-10 animate-float" style={{animationDelay: '-4s'}}>
            <svg width="100" height="100" viewBox="0 0 100 100" className="text-primary-400">
              <defs>
                <pattern id="hexPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <polygon points="10,2 18,7 18,13 10,18 2,13 2,7" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#hexPattern)"/>
            </svg>
          </div>
        </div>

        <div className="container-max section-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full glass-strong text-primary-400 text-sm font-medium mb-8 border border-primary-600/20">
                <Calendar className="w-4 h-4 mr-2" />
                Book your live demo
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                See Bolt.new
                <span className="block gradient-text text-glow">in action</span>
              </h1>

              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Watch our team build a complete enterprise application from a simple prompt. 
                See how AI-powered development can transform your workflow.
              </p>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit.title}
                    className="flex items-start space-x-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center mt-1">
                      <benefit.icon className="w-4 h-4 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{benefit.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="text-center p-4 glass rounded-2xl animate-fade-in"
                    style={{ animationDelay: `${index * 150 + 400}ms` }}
                  >
                    <div className="text-2xl font-bold text-primary-400 mb-1">{stat.value}</div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Form */}
            <div className="lg:pl-8">
              <div className="glass-strong rounded-3xl p-8 border border-white/20 shadow-glow-lg">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <Play className="w-8 h-8 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Schedule Your Demo</h2>
                  <p className="text-white/60">See a working app built in under 5 minutes</p>
                </div>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">First Name</label>
                      <input 
                        type="text"
                        className="input-glass w-full"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Last Name</label>
                      <input 
                        type="text"
                        className="input-glass w-full"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Work Email</label>
                    <input 
                      type="email"
                      className="input-glass w-full"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

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
                    <label className="block text-sm font-medium text-white mb-2">Team Size</label>
                    <select className="input-glass w-full">
                      <option value="">Select team size</option>
                      <option value="1-10">1-10 developers</option>
                      <option value="11-50">11-50 developers</option>
                      <option value="51-200">51-200 developers</option>
                      <option value="200+">200+ developers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">What would you like to see?</label>
                    <textarea 
                      className="input-glass w-full h-24 resize-none"
                      placeholder="Tell us about your use case or what you'd like to build..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full btn-large group"
                  >
                    Schedule Demo
                    <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </button>

                  <div className="text-center">
                    <p className="text-xs text-white/50">
                      By submitting, you agree to our{' '}
                      <Link href="/privacy" className="text-primary-400 hover:text-primary-300 transition-colors">
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                </form>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <Clock className="w-5 h-5 text-primary-400 mx-auto mb-2" />
                      <p className="text-xs text-white/60">30 min demo</p>
                    </div>
                    <div>
                      <Shield className="w-5 h-5 text-primary-400 mx-auto mb-2" />
                      <p className="text-xs text-white/60">Enterprise secure</p>
                    </div>
                    <div>
                      <CheckCircle className="w-5 h-5 text-primary-400 mx-auto mb-2" />
                      <p className="text-xs text-white/60">No commitment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Quote */}
              <div className="mt-8 p-6 glass rounded-2xl border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                  <div>
                    <p className="text-white/80 text-sm italic leading-relaxed">
                      "Cut our prototype time from two weeks to one day. Game changer for our platform team."
                    </p>
                    <p className="text-white/60 text-xs mt-2">— Engineering Lead, Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll See Section */}
      <section className="py-16 border-t border-white/10">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What you'll see in the demo
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A complete walkthrough of enterprise AI development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <div className="text-2xl font-bold text-primary-400">1</div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Prompt to App</h3>
              <p className="text-white/60 leading-relaxed">
                Watch us build a complete dashboard from a natural language prompt in real-time
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <div className="text-2xl font-bold text-primary-400">2</div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Features</h3>
              <p className="text-white/60 leading-relaxed">
                See security controls, team collaboration, and deployment options in action
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <div className="text-2xl font-bold text-primary-400">3</div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Your Use Case</h3>
              <p className="text-white/60 leading-relaxed">
                Discuss how Bolt.new can specifically address your team's development challenges
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 