import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Bolt Enterprise - Build secure internal apps 10× faster',
  description: 'AI prompt-to-app creation, backed by the StackBlitz WebContainer engine and deployable on your own cloud or behind your firewall.',
  keywords: [
    'AI development platform',
    'enterprise coding tools',
    'AI-powered development',
    'team collaboration',
    'enterprise security',
    'compliance',
    'full-stack development',
    'code generation'
  ],
  authors: [{ name: 'Bolt.new' }],
  creator: 'Bolt.new',
  publisher: 'Bolt.new',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://enterprise.bolt.new'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://enterprise.bolt.new',
    title: 'Bolt Enterprise - Build secure internal apps 10× faster',
    description: 'AI prompt-to-app creation, backed by the StackBlitz WebContainer engine and deployable on your own cloud or behind your firewall.',
    siteName: 'Bolt Enterprise',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bolt Enterprise - Build secure internal apps 10× faster',
    description: 'AI prompt-to-app creation, backed by the StackBlitz WebContainer engine and deployable on your own cloud or behind your firewall.',
    creator: '@bolt_new',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 