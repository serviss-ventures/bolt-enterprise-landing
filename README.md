# Bolt.new Enterprise Landing Page

> **Premium enterprise landing page for Bolt.new's B2B offering featuring AI-powered development tools**

## 🚀 Overview

A modern, high-converting enterprise landing page built with Next.js 14, featuring:

- **AI-Powered Messaging**: Positioned as the future of internal app development
- **Enterprise-Grade Design**: Professional aesthetics with premium animations
- **Conversion-Optimized**: Strategic CTAs and social proof placement
- **Mobile-First**: Fully responsive across all devices
- **Performance-Focused**: Optimized for speed and SEO

## ✨ Key Features

### 🎨 **Premium Design System**
- **Dark Theme**: Sophisticated black background with subtle gradients
- **Lightning Animations**: Custom hover effects on customer logos
- **Glassmorphism**: Modern blur effects and transparency layers
- **Micro-interactions**: Smooth hover states and transitions

### 🏢 **Enterprise Positioning**
- **StackBlitz WebContainer Badge**: Subtle technical credibility indicator
- **Social Proof**: Trusted by Google, IBM, Salesforce, Porsche, VMware, Allianz
- **Security Focus**: "Behind your firewall" messaging for enterprise concerns
- **Scalability Promise**: "10× faster" development speed claims

### 📱 **Interactive Elements**
- **Browser Mockup**: Realistic bolt.new interface demonstration
- **Animated CTAs**: "Request Demo" and "View Pricing" buttons
- **Import Options**: Figma and GitHub integration showcase
- **Real-time Status**: "Ready" indicator for platform availability

### 🎯 **Conversion Optimization**
- **Clear Value Props**: Immediate benefit communication
- **Social Proof**: Enterprise customer logos with animations
- **Multiple CTAs**: Demo requests and pricing inquiries
- **Reduced Friction**: Streamlined user journey

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom components
- **Animations**: CSS transitions and keyframe animations
- **Icons**: Lucide React
- **Typography**: Inter + JetBrains Mono
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage (Hero + sections)
│   ├── pricing/           # Pricing page
│   ├── contact/           # Contact page
│   └── demo/              # Demo request page
├── components/
│   ├── navigation/        # Header and navigation
│   └── sections/          # Page sections (Hero, Pricing, etc.)
└── lib/                   # Utilities and helpers
```

## 🎨 Design Features

### **Hero Section**
- Split-screen layout with messaging and browser mockup
- StackBlitz badge positioning (top-left, non-intrusive)
- "Build secure internal apps 10× faster" headline
- Proper spacing from header logo
- Interactive browser demonstration

### **Customer Logos**
- Lightning border animation on hover
- Scale transforms and glow effects
- Staggered animation delays
- Enterprise-grade social proof

### **Browser Mockup**
- Realistic Chrome-style interface
- Animated prompt typing
- Import integration showcase
- Status indicators and micro-interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd bolt.new-enterprise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

## 🎯 Key Pages

### **Homepage** (`/`)
- Hero section with value proposition
- Interactive browser mockup
- Customer social proof
- Clear call-to-actions

### **Pricing** (`/pricing`)
- Compact layout (no excessive whitespace)
- Transparent pricing structure
- Enterprise plan details
- Contact options

### **Contact** (`/contact`)
- Enterprise inquiry form
- Contact information
- Support channels

### **Demo** (`/demo`)
- Demo request form
- Use case selection
- Lead qualification

## 🎨 Brand Guidelines

### **Colors**
- **Primary**: Blue (#3B82F6)
- **Background**: Pure Black (#000000)
- **Text**: White with opacity variants
- **Accents**: Purple gradients for animations

### **Typography**
- **Headings**: Inter (Bold, 600-900 weight)
- **Body**: Inter (Regular, 400-500 weight)  
- **Code**: JetBrains Mono (Monospace)

### **Animations**
- **Lightning Border**: Blue-to-purple gradient on customer logos
- **Hover States**: Scale transforms (1.05x) with smooth transitions
- **Micro-interactions**: Button hovers and focus states

## 🔧 Customization

### **Content Updates**
- Edit messaging in `src/components/sections/Hero.tsx`
- Update pricing in `src/app/pricing/page.tsx`
- Modify customer logos in Hero section

### **Styling Changes**
- Global styles: `src/app/globals.css`
- Component styles: Tailwind classes in TSX files
- Custom animations: CSS keyframes in globals.css

### **Adding Pages**
- Create new directory in `src/app/`
- Add `page.tsx` for route component
- Update navigation if needed

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic with App Router

## 🔍 SEO Optimization

- **Meta Tags**: Comprehensive title and description
- **Structured Data**: Enterprise software schema
- **Open Graph**: Social media preview optimization
- **Sitemap**: Automatic generation

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

### **Other Platforms**
- Build: `npm run build`
- Start: `npm start`
- Static export: `npm run export`

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 Changelog

### **v1.0.0** - Initial Release
- ✅ Hero section with browser mockup
- ✅ Customer logo animations
- ✅ Pricing page optimization
- ✅ Mobile responsiveness
- ✅ Performance optimization

## 👥 Team

- **Design**: Premium enterprise aesthetics
- **Development**: Next.js 14 + Tailwind CSS
- **Content**: Enterprise-focused messaging
- **UX**: Conversion-optimized flow

## 📄 License

Proprietary - Bolt.new Enterprise

---

**Built with ⚡ by the Bolt.new team**

*Empowering enterprises to build internal apps 10× faster* 