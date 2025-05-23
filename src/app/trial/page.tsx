import Header from '@/components/navigation/Header'
import Footer from '@/components/navigation/Footer'
import { CheckCircle, ArrowRight, Shield, Zap, Users } from 'lucide-react'

export default function TrialPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6">
            <Shield className="w-4 h-4 mr-2" />
            No credit card required
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Start your free
            <span className="block text-blue-500 mt-2">14-day trial</span>
          </h1>
          
          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
            Join thousands of developers building 10× faster. Get instant access to bolt.new enterprise features.
          </p>
        </div>
      </section>

      {/* Trial Signup Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Get started in under 2 minutes
              </h2>
              <p className="text-white/70">
                We'll set up your team workspace instantly
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">First Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Last Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Work Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Company</label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Acme Corporation"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Team Size</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="" className="bg-black">Select team size</option>
                  <option value="1-5" className="bg-black">1-5 developers</option>
                  <option value="6-10" className="bg-black">6-10 developers</option>
                  <option value="11-25" className="bg-black">11-25 developers</option>
                  <option value="26-50" className="bg-black">26-50 developers</option>
                </select>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  Start My Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-white/50">
                  ✅ 14-day free trial • ✅ No credit card required • ✅ Cancel anytime
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-white/5">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-white text-center mb-16">
            What you get with your trial
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Instant Setup</h4>
              <p className="text-white/80 leading-relaxed">
                Your team workspace is ready in under 5 minutes. No complex setup or IT involvement needed.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Full Team Access</h4>
              <p className="text-white/80 leading-relaxed">
                Invite up to 50 developers. Everyone gets access to all premium features during the trial.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Priority Support</h4>
              <p className="text-white/80 leading-relaxed">
                Get help when you need it. Our team will ensure your trial is successful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 