import Link from 'next/link'
import { ArrowLeft, Calendar, CheckCircle, Zap, Users, Shield } from 'lucide-react'

export default function TrialPage() {
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
      <section className="py-16 lg:py-24">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-strong text-primary-400 text-sm font-medium mb-8 border border-primary-600/20">
              <Zap className="w-4 h-4 mr-2" />
              Team Plan Trial
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Start your free
              <span className="block gradient-text">14-day trial</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Perfect for teams of 10-50 builders. No credit card required.
              Cancel anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Trial Signup Form */}
            <div className="glass-strong rounded-3xl p-8 border border-white/20">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Start your trial</h2>
                <p className="text-white/60">Get up and running in under 5 minutes</p>
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
                  <select className="input-glass w-full" required>
                    <option value="">Select team size</option>
                    <option value="1-10">1-10 developers</option>
                    <option value="11-25">11-25 developers</option>
                    <option value="26-50">26-50 developers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">What are you planning to build?</label>
                  <textarea 
                    className="input-glass w-full h-24 resize-none"
                    placeholder="Tell us about your project or what you'd like to explore..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full btn-large group"
                >
                  Start free trial
                  <Calendar className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </button>

                <div className="text-center">
                  <p className="text-xs text-white/50">
                    14 days free, then plans start at $29/month per seat.{' '}
                    <Link href="/privacy" className="text-primary-400 hover:text-primary-300 transition-colors">
                      Terms & Privacy
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            {/* What's Included */}
            <div className="space-y-8">
              {/* Features */}
              <div className="glass rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">What's included in your trial</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Shared cloud workspace</h4>
                      <p className="text-sm text-white/60">Collaborative development environment for your entire team</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">SSO integration</h4>
                      <p className="text-sm text-white/60">Connect with Google, GitHub, or your corporate identity provider</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Priority support</h4>
                      <p className="text-sm text-white/60">Get help from our team when you need it most</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Basic analytics</h4>
                      <p className="text-sm text-white/60">Track your team's development velocity and insights</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Community templates</h4>
                      <p className="text-sm text-white/60">Access to our library of pre-built application templates</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="glass rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Trial benefits</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Users className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-white">Up to 50 seats</div>
                    <div className="text-xs text-white/60">Full team access</div>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-white">Enterprise security</div>
                    <div className="text-xs text-white/60">SOC 2 compliant</div>
                  </div>
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-white">Instant setup</div>
                    <div className="text-xs text-white/60">Ready in minutes</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                    <div className="text-sm font-medium text-white">14 days free</div>
                    <div className="text-xs text-white/60">No credit card</div>
                  </div>
                </div>
              </div>

              {/* Support */}
              <div className="glass rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Need help getting started?</h3>
                <p className="text-white/60 mb-4">
                  Our team is here to help you succeed. Schedule a quick onboarding call 
                  or reach out anytime during your trial.
                </p>
                <Link href="/contact" className="btn-outline w-full">
                  Schedule onboarding call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 