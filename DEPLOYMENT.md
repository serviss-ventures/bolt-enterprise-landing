# 🚀 Deployment Guide

> **Complete deployment instructions for Bolt.new Enterprise Landing Page**

## 🎯 Production Checklist

Before deploying to production, ensure:

- [ ] All environment variables are configured
- [ ] Analytics tracking is implemented
- [ ] SEO meta tags are optimized
- [ ] Performance is tested (Lighthouse score 90+)
- [ ] All forms are connected to backend services
- [ ] SSL certificates are configured
- [ ] CDN is set up for static assets

## 🌐 Vercel Deployment (Recommended)

### **1. Quick Deploy**
```bash
npm install -g vercel
vercel
```

### **2. Environment Variables**
Set these in Vercel dashboard:
```bash
NEXT_PUBLIC_SITE_URL=https://enterprise.bolt.new
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
CONTACT_FORM_ENDPOINT=your-form-endpoint
```

### **3. Custom Domain**
1. Add domain in Vercel dashboard
2. Configure DNS records:
   ```
   Type: CNAME
   Name: enterprise (or @)
   Value: cname.vercel-dns.com
   ```

### **4. Performance Optimization**
- **Edge Functions**: Enabled by default
- **Image Optimization**: Automatic
- **Static Generation**: Pre-built pages
- **CDN**: Global edge network

## 🔧 Alternative Platforms

### **Netlify**
```bash
# Build command
npm run build

# Publish directory
.next

# Environment variables
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### **AWS Amplify**
```yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### **Railway**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy
railway login
railway deploy
```

## 🔒 Security Configuration

### **Headers**
Configure security headers in `next.config.js`:
```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]
```

### **CSP (Content Security Policy)**
```javascript
{
  key: 'Content-Security-Policy',
  value: `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel-insights.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim()
}
```

## 📊 Analytics & Monitoring

### **Vercel Analytics**
```bash
npm install @vercel/analytics
```

```javascript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### **Google Analytics 4**
```javascript
// lib/gtag.js
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
```

### **Performance Monitoring**
- **Core Web Vitals**: Automatic with Vercel
- **Error Tracking**: Sentry integration
- **Uptime Monitoring**: Pingdom or StatusPage
- **Real User Monitoring**: Datadog or New Relic

## 🎯 SEO Configuration

### **Sitemap Generation**
```javascript
// app/sitemap.js
export default function sitemap() {
  return [
    {
      url: 'https://enterprise.bolt.new',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://enterprise.bolt.new/pricing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://enterprise.bolt.new/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
```

### **Robots.txt**
```javascript
// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://enterprise.bolt.new/sitemap.xml',
  }
}
```

## 🔄 CI/CD Pipeline

### **GitHub Actions**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build application
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🌍 CDN & Caching

### **Static Assets**
- **Images**: Optimized and served from CDN
- **Fonts**: Preloaded and cached
- **CSS/JS**: Minified and compressed
- **Cache Headers**: Long-term caching for static assets

### **Edge Caching**
```javascript
// Vercel edge config
export const config = {
  runtime: 'edge',
}

// Cache headers
export default function handler(req) {
  return new Response('Hello World', {
    status: 200,
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  })
}
```

## 📱 Mobile Optimization

### **PWA Configuration**
```javascript
// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // Next.js config
})
```

### **Responsive Images**
```javascript
// Automatic optimization
import Image from 'next/image'

<Image
  src="/hero-image.jpg"
  alt="Enterprise dashboard"
  width={800}
  height={600}
  priority
/>
```

## 🔍 Testing Before Deploy

### **Performance Tests**
```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun

# Web Vitals
npm run build
npm start
# Test with PageSpeed Insights
```

### **Cross-Browser Testing**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### **Load Testing**
```bash
# Apache Bench
ab -n 1000 -c 10 https://enterprise.bolt.new/

# Artillery
npm install -g artillery
artillery quick --count 10 --num 5 https://enterprise.bolt.new/
```

## 🆘 Troubleshooting

### **Common Issues**
1. **Build Failures**: Check Node.js version (18+)
2. **Missing Dependencies**: Run `npm ci`
3. **Environment Variables**: Verify all required vars are set
4. **404 Errors**: Check routing configuration
5. **Slow Loading**: Optimize images and code splitting

### **Support Contacts**
- **Technical**: dev-team@bolt.new
- **Infrastructure**: ops@bolt.new
- **Emergency**: +1-XXX-XXX-XXXX

---

**🚀 Ready to launch? Follow this guide step-by-step for a smooth deployment!** 