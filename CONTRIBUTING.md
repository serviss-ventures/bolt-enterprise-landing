# 🤝 Contributing to Bolt.new Enterprise Landing Page

> **Guidelines for contributing to our premium enterprise landing page**

## 🎯 Project Vision

We're building a **world-class enterprise landing page** that:
- Converts enterprise prospects into qualified leads
- Showcases Bolt.new's technical sophistication
- Maintains premium brand standards
- Delivers exceptional performance (90+ Lighthouse)

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+
- Git experience
- Understanding of Next.js and React
- Familiarity with Tailwind CSS
- Enterprise UX/UI design principles

### **Setup Development Environment**
```bash
# Clone repository
git clone [repository-url]
cd bolt.new-enterprise

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Check code quality
npm run lint
```

## 📋 Development Guidelines

### **🎨 Design Principles**
1. **Enterprise-First**: Professional, sophisticated aesthetics
2. **Performance**: Fast loading, smooth animations
3. **Accessibility**: WCAG 2.1 AA compliance
4. **Mobile-First**: Responsive across all devices
5. **Conversion-Focused**: Clear CTAs and user journey

### **🛠 Technical Standards**
- **TypeScript**: All new code must be fully typed
- **Components**: Modular, reusable, well-documented
- **Performance**: Core Web Vitals optimization
- **SEO**: Proper meta tags and semantic HTML
- **Testing**: Unit tests for components and utilities

### **🎨 Brand Guidelines**
- **Colors**: Blue primary (#3B82F6), pure black background
- **Typography**: Inter for UI, JetBrains Mono for code
- **Spacing**: Consistent with Tailwind scale
- **Animations**: Subtle, purposeful, <300ms duration
- **Voice**: Professional, confident, technical

## 🔧 Code Standards

### **File Structure**
```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── navigation/        # Header, footer, nav components
│   ├── sections/          # Page sections (Hero, Pricing, etc.)
│   └── ui/               # Reusable UI components
├── lib/                   # Utilities and helpers
└── types/                # TypeScript definitions
```

### **Naming Conventions**
- **Components**: PascalCase (`Hero.tsx`, `PricingCard.tsx`)
- **Files**: kebab-case (`hero-section.tsx`, `pricing-utils.ts`)
- **Variables**: camelCase (`isLoading`, `customerLogos`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRIES`, `API_BASE_URL`)

### **Component Structure**
```typescript
// components/sections/Hero.tsx
interface HeroProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

export default function Hero({ title, subtitle, children }: HeroProps) {
  return (
    <section className="hero-section">
      {/* Component implementation */}
    </section>
  )
}
```

### **Styling Guidelines**
- **Tailwind First**: Use utility classes whenever possible
- **Custom CSS**: Only for complex animations or unique designs
- **Responsive**: Mobile-first approach with `sm:`, `md:`, `lg:` breakpoints
- **Performance**: Use `will-change` sparingly, prefer `transform` for animations

## 🎯 Content Guidelines

### **Copy Writing**
- **Tone**: Professional, confident, technical
- **Length**: Concise, scannable, action-oriented
- **Enterprise Focus**: Security, scalability, compliance
- **Benefits**: Lead with outcomes, not features

### **CTAs (Call-to-Actions)**
- **Primary**: "Request Demo" (blue button)
- **Secondary**: "View Pricing" (outline button)
- **Tertiary**: "Learn More" (link style)
- **Language**: Action-oriented ("Get Started", "Schedule Demo")

### **Social Proof**
- **Customer Logos**: Enterprise brands (Google, IBM, Salesforce)
- **Testimonials**: C-level executives, technical leaders
- **Stats**: Usage numbers, performance metrics
- **Case Studies**: ROI and efficiency gains

## 🚦 Pull Request Process

### **Before Submitting**
1. **Test Locally**: Ensure everything works perfectly
2. **Run Linting**: `npm run lint` must pass
3. **Performance Check**: Lighthouse score 90+
4. **Mobile Testing**: Test on multiple devices
5. **Accessibility**: Check with screen reader

### **PR Requirements**
- **Descriptive Title**: Clear, action-oriented
- **Detailed Description**: What, why, how
- **Screenshots**: Before/after for visual changes
- **Testing Notes**: How to test the changes
- **Performance Impact**: Any performance considerations

### **PR Template**
```markdown
## 🎯 What
Brief description of changes

## 🚀 Why
Business/technical justification

## 🔧 How
Implementation approach

## 📸 Screenshots
[Include screenshots for visual changes]

## ✅ Testing
- [ ] Desktop testing
- [ ] Mobile testing  
- [ ] Performance check
- [ ] Accessibility check

## 📊 Performance Impact
- Lighthouse score: [before] → [after]
- Bundle size impact: +/- [size]
```

## 🎨 Design Review Process

### **Visual Changes**
1. **Design Review**: Get design team approval
2. **Brand Compliance**: Ensure brand guideline adherence
3. **Accessibility**: Color contrast and usability
4. **Responsive**: Test across all breakpoints

### **Animation Guidelines**
- **Duration**: 150-300ms for micro-interactions
- **Easing**: Use CSS `ease-out` or custom bezier curves
- **Performance**: Use `transform` and `opacity` when possible
- **Accessibility**: Respect `prefers-reduced-motion`

## 📈 Performance Standards

### **Core Web Vitals Targets**
- **LCP (Largest Contentful Paint)**: <2.5s
- **FID (First Input Delay)**: <100ms
- **CLS (Cumulative Layout Shift)**: <0.1

### **Lighthouse Targets**
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### **Optimization Checklist**
- [ ] Images optimized (WebP, proper sizing)
- [ ] Fonts preloaded and optimized
- [ ] Code splitting implemented
- [ ] Unused CSS removed
- [ ] JavaScript bundle analyzed

## 🔍 Review Criteria

### **Code Quality**
- [ ] TypeScript types are comprehensive
- [ ] Components are properly documented
- [ ] Error handling is implemented
- [ ] Performance is optimized
- [ ] Tests are included

### **Design Quality**
- [ ] Matches design specifications
- [ ] Brand guidelines followed
- [ ] Responsive across devices
- [ ] Accessibility standards met
- [ ] Animation performance optimized

### **Content Quality**
- [ ] Copy is enterprise-appropriate
- [ ] CTAs are clear and compelling
- [ ] SEO meta tags optimized
- [ ] Social proof is credible
- [ ] Value propositions are clear

## 🚨 Emergency Fixes

### **Hotfix Process**
1. **Create hotfix branch**: `hotfix/critical-fix`
2. **Minimal changes**: Only fix the immediate issue
3. **Fast review**: Expedited review process
4. **Immediate deploy**: Deploy to production ASAP
5. **Follow-up PR**: Comprehensive fix if needed

### **Critical Issues**
- **Site Down**: Production deployment failures
- **Security Vulnerabilities**: Data or system security
- **Performance Degradation**: >50% performance drop
- **Conversion Impact**: CTA or form failures

## 📚 Resources

### **Documentation**
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### **Tools**
- **Design**: Figma (brand assets and mockups)
- **Performance**: Lighthouse, WebPageTest
- **Analytics**: Vercel Analytics, Google Analytics
- **Testing**: Jest, React Testing Library

### **Team Communication**
- **Slack**: `#enterprise-landing` channel
- **Design Reviews**: Weekly Wednesday meetings
- **Technical Reviews**: Daily standups
- **Stakeholder Updates**: Bi-weekly progress reports

## 🎖 Recognition

### **Contribution Types**
- **🎨 Design**: UI/UX improvements and brand compliance
- **⚡ Performance**: Speed and optimization improvements
- **📱 Mobile**: Responsive design and mobile experience
- **♿ Accessibility**: Accessibility improvements and compliance
- **📝 Content**: Copy writing and content optimization
- **🔧 Technical**: Code quality and architecture improvements

### **High-Impact Contributions**
- Conversion rate improvements
- Performance optimizations
- Accessibility enhancements
- Mobile experience improvements
- Brand compliance excellence

---

## 🤝 Questions?

**Technical Questions**: `@dev-team` in Slack
**Design Questions**: `@design-team` in Slack  
**Content Questions**: `@marketing-team` in Slack
**Process Questions**: Check this guide or ask in `#enterprise-landing`

---

**Thank you for contributing to our enterprise success! 🚀** 