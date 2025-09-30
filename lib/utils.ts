import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const skillsData = [
  { name: "Move", level: 100, color: "linear-gradient(to right, #a855f7, #ec4899)" },
  { name: "TypeScript / JavaScript", level: 95, color: "linear-gradient(to right, #6366f1, #a855f7)" },
  { name: "React / Next.js", level: 95, color: "linear-gradient(to right, #3b82f6, #6366f1)" },
  { name: "Solidity", level: 90, color: "linear-gradient(to right, #06b6d4, #3b82f6)" },
  { name: "UI/UX", level: 90, color: "linear-gradient(to right, #22c55e, #06b6d4)" },
  { name: "Rust", level: 85, color: "linear-gradient(to right, #eab308, #22c55e)" },
  { name: "Game Dev", level: 80, color: "linear-gradient(to right, #f97316, #eab308)" },
  { name: "AI for Web3", level: 75, color: "linear-gradient(to right, #ef4444, #f97316)" },
]

export const projectsData = [
  {
    id: 1,
    title: "ChadEmpire - Web3 Gaming Platform",
    description: "A cutting-edge Web3 gaming platform featuring blockchain integration, NFT assets, and immersive gaming experiences. Built with modern technologies for the next generation of gaming.",
    image: "/chadempire.png",
    tech: ["Next.js", "TypeScript", "Web3", "Blockchain", "Gaming"],
    github: "https://github.com/linkln33/ChadEmpire",
    demo: "https://chadempire.wtf",
    featured: true
  },
  {
    id: 2,
    title: "PalmHeist - Web3 Gaming Experience",
    description: "An immersive Web3 gaming platform featuring palm tree-themed adventures, blockchain integration, and unique gaming mechanics. Experience the future of decentralized gaming.",
    image: "/palmheist.png",
    tech: ["Next.js", "TypeScript", "Web3", "Gaming", "Blockchain"],
    github: "https://github.com/linkln33/palmheist",
    demo: "https://www.palmheist.com",
    featured: true
  },
  {
    id: 3,
    title: "BuzzLinks - Creator Monetization Platform",
    description: "An all-in-one platform for creators to build, grow, and monetize their audience. Features digital product sales, bio links, booking systems, and analytics dashboard.",
    image: "/bazz-links.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    github: "https://github.com/linkln33/buzzlinks",
    demo: "https://buzzlinks.netlify.app",
    featured: true
  },
  {
    id: 4,
    title: "Brander - AI-Powered Branding Platform",
    description: "Advanced branding and design platform powered by AI to help businesses create compelling visual identities, logos, and marketing materials.",
    image: "/brander.png",
    tech: ["React", "Node.js", "AI/ML", "Canvas API", "Figma API"],
    github: "https://github.com/linkln33/brander",
    demo: "https://brander.netlify.app",
    featured: true
  },
  {
    id: 5,
    title: "DeFi Yield Farming Protocol",
    description: "A decentralized yield farming platform built with Solidity smart contracts, featuring automated liquidity provision and reward distribution.",
    image: "/api/placeholder/400/250",
    tech: ["Solidity", "React", "Web3.js", "Hardhat", "TypeScript"],
    github: "https://github.com/linkln33/defi-yield-farm",
    demo: "https://defi-yield-farm.vercel.app",
    featured: false
  },
  {
    id: 6,
    title: "Move-based Gaming Platform",
    description: "A blockchain gaming ecosystem using Move language for secure in-game asset management and player-owned economies.",
    image: "/api/placeholder/400/250",
    tech: ["Move", "Sui", "React", "Next.js", "Rust"],
    github: "https://github.com/linkln33/move-gaming",
    demo: "https://move-gaming.vercel.app",
    featured: false
  },
  {
    id: 7,
    title: "AI-Powered Portfolio Optimizer",
    description: "Machine learning algorithms integrated with blockchain data to optimize DeFi portfolio allocations and risk management.",
    image: "/api/placeholder/400/250",
    tech: ["Python", "TensorFlow", "Solidity", "React", "FastAPI"],
    github: "https://github.com/linkln33/ai-portfolio",
    demo: "https://ai-portfolio.vercel.app",
    featured: false
  },
  {
    id: 8,
    title: "Rust-based DEX Aggregator",
    description: "High-performance decentralized exchange aggregator built with Rust for optimal trade execution across multiple DEXs.",
    image: "/api/placeholder/400/250",
    tech: ["Rust", "Solana", "React", "TypeScript", "WebAssembly"],
    github: "https://github.com/linkln33/rust-dex",
    demo: "https://rust-dex.vercel.app",
    featured: false
  }
]

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/linkln33",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/george-yovchev-27163837b",
    icon: "linkedin"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/georglinks",
    icon: "twitter"
  },
  {
    name: "Email",
    url: "mailto:hello@georglinks.dev",
    icon: "mail"
  }
]
