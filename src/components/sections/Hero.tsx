'use client'

import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  // Typing animation state
  const [typedText, setTypedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  
  const fullText = "Create an inventory dashboard with charts and dark mode"
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      // Variable typing speed for more natural feel
      const char = fullText[typedText.length]
      const baseDelay = 60
      const extraDelay = char === ' ' ? 100 : char === ',' ? 200 : 0
      
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, baseDelay + extraDelay + Math.random() * 40) // Add some randomness
      
      return () => clearTimeout(timeout)
    } else {
      // Finished typing, pause then continue cursor blinking
      setTimeout(() => {
        setIsTyping(false)
      }, 500)
    }
  }, [typedText, fullText])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, isTyping ? 400 : 600) // Faster blink while typing
    
    return () => clearInterval(cursorInterval)
  }, [isTyping])

  // Function to render text with colors
  const renderColoredText = (text: string) => {
    const words = text.split(' ')
    const result = []
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      let className = "text-white/90"
      
      // Color coding for different parts
      if (word === "Create") className = "text-green-400"
      else if (word === "inventory" || word === "dashboard") className = "text-blue-400"
      else if (word === "charts") className = "text-purple-400"
      else if (word === "dark" || word === "mode") className = "text-yellow-400"
      
      result.push(
        <span key={i} className={className}>
          {word}
        </span>
      )
      
      // Add space between words (except for the last word)
      if (i < words.length - 1) {
        result.push(' ')
      }
    }
    
    return result
  }

  return (
    <section className="relative pt-20 lg:pt-28 pb-16 lg:pb-24 overflow-hidden">
      {/* Clean minimal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to side-by-side layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* StackBlitz Badge - Back at the top where it was dope! */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm mb-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 group relative overflow-hidden">
              {/* SUBTLE OUTER GLOW - Just a gentle effect around the border */}
              <div className="absolute -inset-px rounded-full border border-blue-400/30 opacity-0 animate-subtle-border-glow"></div>
              
              <span className="relative z-10 mr-2">⚡</span>
              <span className="relative z-10 font-medium">
                StackBlitz <span className="text-blue-400">WebContainer</span> Powered
              </span>
            </div>

            {/* Main Headline - Clean Typography with proper spacing from logo */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Build secure internal apps
              <br />
              <span className="text-blue-500">10× faster</span>
            </h1>

            {/* Clean Subheadline */}
            <p className="text-xl lg:text-2xl text-white/70 mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              AI prompt-to-app creation, backed by the StackBlitz WebContainer engine and deployable on your own cloud or behind your firewall.
            </p>

            {/* Clean CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
              <Link 
                href="/demo" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
              >
                Request a demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              
              <Link 
                href="/pricing" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg border border-white/20 hover:border-white/30 transition-all duration-200 backdrop-blur-sm"
              >
                View pricing
              </Link>
            </div>

            {/* Clean Trusted Companies with cool animations */}
            <div className="lg:text-left">
              <p className="text-white/50 text-sm uppercase tracking-wider mb-6">
                Trusted by enterprise teams
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 max-w-4xl">
                {['Google', 'IBM', 'Salesforce', 'Porsche', 'VMware', 'Allianz'].map((company, index) => (
                  <div
                    key={company}
                    className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-white/70 font-medium hover:border-white/30 hover:text-white hover:scale-105 hover:bg-white/10 transition-all duration-300 text-sm cursor-pointer group relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="group-hover:text-shadow-glow transition-all duration-300">
                      {company}
                    </span>
                    {/* Lightning Border Animation on Hover */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-border animate-lightning-border"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Browser Mockup */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
              {/* Enhanced Browser Chrome */}
              <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-white/10 to-white/5 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-sm hover:scale-110 transition-transform cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-sm hover:scale-110 transition-transform cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-sm hover:scale-110 transition-transform cursor-pointer"></div>
                  </div>
                </div>
                
                <div className="flex-1 max-w-md mx-6">
                  <div className="relative">
                    <div className="bg-black/20 rounded-xl px-4 py-2.5 text-sm text-white/80 border border-white/10 backdrop-blur-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-mono">bolt.new/enterprise</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-md bg-white/10 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"></div>
                  <div className="w-6 h-6 rounded-md bg-white/10 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"></div>
                </div>
              </div>

              {/* Enhanced Interface Content */}
              <div className="p-6 lg:p-8">
                {/* Cleaner Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    What do you want to build?
                  </h3>
                  <p className="text-white/60 text-sm">
                    Prompt, run, edit, and deploy full-stack apps
                  </p>
                </div>

                {/* Much Cleaner Prompt Interface */}
                <div className="relative mb-6">
                  <div className="bg-black/30 rounded-xl border border-white/20 overflow-hidden backdrop-blur-sm">
                    {/* Simplified toolbar */}
                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-white/50 font-mono">new prompt</span>
                      </div>
                      <div className="text-xs text-white/40">⌘K</div>
                    </div>
                    
                    {/* Clean prompt content */}
                    <div className="p-4">
                      <div className="text-white/90 text-base leading-relaxed">
                        {renderColoredText(typedText)}
                        <span className={`text-white ml-1 transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Clean action button */}
                  <div className="flex justify-end mt-4">
                    <button className="group px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 flex items-center space-x-2">
                      <span>Generate</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Cleaner Import Options */}
                <div className="text-center">
                  <p className="text-white/40 text-xs mb-4">or import from</p>
                  <div className="flex justify-center space-x-3">
                    <div className="px-3 py-2 bg-white/10 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-200 cursor-pointer text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-purple-500 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">F</span>
                        </div>
                        <span className="text-white/80">Figma</span>
                      </div>
                    </div>
                    
                    <div className="px-3 py-2 bg-white/10 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-200 cursor-pointer text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-gray-800 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">G</span>
                        </div>
                        <span className="text-white/80">GitHub</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simple status */}
                <div className="mt-6 flex justify-center">
                  <div className="flex items-center space-x-2 px-3 py-1 bg-white/5 rounded-full text-xs">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span className="text-white/60">Ready</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg animate-pulse"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl backdrop-blur-sm border border-white/10 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 