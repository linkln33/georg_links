import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Georg Links - Full Stack Web3 Developer',
  description: '5+ years building decentralized apps, smart contracts, and modern UIs using Solidity, Rust, Move, and AI-powered solutions.',
  keywords: ['Web3 Developer', 'Solidity', 'Rust', 'Move', 'Blockchain', 'Smart Contracts', 'DeFi', 'Full Stack Developer'],
  authors: [{ name: 'Georg Links' }],
  robots: 'index, follow',
  icons: {
    icon: '/george.jpeg',
    shortcut: '/george.jpeg',
    apple: '/george.jpeg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://georglinks.dev',
    title: 'Georg Links - Full Stack Web3 Developer',
    description: '5+ years building decentralized apps, smart contracts, and modern UIs using Solidity, Rust, Move, and AI-powered solutions.',
    siteName: 'Georg Links Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Georg Links - Full Stack Web3 Developer',
    description: '5+ years building decentralized apps, smart contracts, and modern UIs using Solidity, Rust, Move, and AI-powered solutions.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  )
}
