import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'George - Full Stack Web3 Developer | Blockchain & Smart Contracts Expert',
    template: '%s | George - Web3 Developer'
  },
  description: 'Expert Full Stack Web3 Developer with 5+ years experience in Solidity, Rust, Move, and blockchain technologies. Specializing in DeFi protocols, smart contracts, and AI-powered Web3 solutions.',
  keywords: [
    'Web3 Developer',
    'Blockchain Developer', 
    'Solidity Developer',
    'Rust Developer',
    'Move Developer',
    'Smart Contracts',
    'DeFi Developer',
    'Full Stack Developer',
    'Ethereum Developer',
    'Solana Developer',
    'Sui Developer',
    'Aptos Developer',
    'AI Web3',
    'Decentralized Applications',
    'George Links',
    'Web3 Portfolio'
  ],
  authors: [{ name: 'George Links', url: 'https://georglinks.dev' }],
  creator: 'George Links',
  publisher: 'George Links',
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
  icons: {
    icon: '/geo-favi.png',
    shortcut: '/geo-favi.png',
    apple: '/geo-favi.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://georglinks.dev',
    title: 'George - Full Stack Web3 Developer | Blockchain Expert',
    description: 'Expert Full Stack Web3 Developer with 5+ years experience in Solidity, Rust, Move, and blockchain technologies. Specializing in DeFi protocols, smart contracts, and AI-powered Web3 solutions.',
    siteName: 'George Links Portfolio',
    images: [
      {
        url: '/george1.space.logo.jpg',
        width: 1200,
        height: 630,
        alt: 'George - Full Stack Web3 Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'George - Full Stack Web3 Developer | Blockchain Expert',
    description: 'Expert Full Stack Web3 Developer with 5+ years experience in Solidity, Rust, Move, and blockchain technologies.',
    images: ['/george1.space.logo.jpg'],
    creator: '@georgelinks',
  },
  alternates: {
    canonical: 'https://georglinks.dev',
  },
  category: 'technology',
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
