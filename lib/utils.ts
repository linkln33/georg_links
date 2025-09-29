import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const skillsData = [
  { name: "Move", level: 100, color: "linear-gradient(to right, #ef4444, #f97316)" },
  { name: "TypeScript / JavaScript", level: 95, color: "linear-gradient(to right, #f97316, #eab308)" },
  { name: "React / Next.js", level: 95, color: "linear-gradient(to right, #eab308, #22c55e)" },
  { name: "Solidity", level: 90, color: "linear-gradient(to right, #22c55e, #06b6d4)" },
  { name: "UI/UX", level: 90, color: "linear-gradient(to right, #06b6d4, #3b82f6)" },
  { name: "Rust", level: 85, color: "linear-gradient(to right, #3b82f6, #6366f1)" },
  { name: "Game Dev", level: 80, color: "linear-gradient(to right, #6366f1, #a855f7)" },
  { name: "AI for Web3", level: 75, color: "linear-gradient(to right, #a855f7, #ec4899)" },
]

export const projectsData = [
  {
    id: 1,
    title: "DeFi Yield Farming Protocol",
    description: "A decentralized yield farming platform built with Solidity smart contracts, featuring automated liquidity provision and reward distribution.",
    image: "/api/placeholder/400/250",
    tech: ["Solidity", "React", "Web3.js", "Hardhat", "TypeScript"],
    github: "https://github.com/georglinks/defi-yield-farm",
    demo: "https://defi-yield-farm.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "Move-based Gaming Platform",
    description: "A blockchain gaming ecosystem using Move language for secure in-game asset management and player-owned economies.",
    image: "/api/placeholder/400/250",
    tech: ["Move", "Sui", "React", "Next.js", "Rust"],
    github: "https://github.com/georglinks/move-gaming",
    demo: "https://move-gaming.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "AI-Powered Portfolio Optimizer",
    description: "Machine learning algorithms integrated with blockchain data to optimize DeFi portfolio allocations and risk management.",
    image: "/api/placeholder/400/250",
    tech: ["Python", "TensorFlow", "Solidity", "React", "FastAPI"],
    github: "https://github.com/georglinks/ai-portfolio",
    demo: "https://ai-portfolio.vercel.app",
    featured: false
  },
  {
    id: 4,
    title: "Rust-based DEX Aggregator",
    description: "High-performance decentralized exchange aggregator built with Rust for optimal trade execution across multiple DEXs.",
    image: "/api/placeholder/400/250",
    tech: ["Rust", "Solana", "React", "TypeScript", "WebAssembly"],
    github: "https://github.com/georglinks/rust-dex",
    demo: "https://rust-dex.vercel.app",
    featured: false
  },
  {
    id: 5,
    title: "NFT Marketplace with Royalties",
    description: "Full-featured NFT marketplace with automated royalty distribution, lazy minting, and cross-chain compatibility.",
    image: "/api/placeholder/400/250",
    tech: ["Solidity", "Next.js", "IPFS", "The Graph", "Tailwind"],
    github: "https://github.com/georglinks/nft-marketplace",
    demo: "https://nft-marketplace.vercel.app",
    featured: false
  },
  {
    id: 6,
    title: "Web3 Social Platform",
    description: "Decentralized social media platform with tokenized content, DAO governance, and user-owned data sovereignty.",
    image: "/api/placeholder/400/250",
    tech: ["Move", "React", "Node.js", "MongoDB", "IPFS"],
    github: "https://github.com/georglinks/web3-social",
    demo: "https://web3-social.vercel.app",
    featured: false
  }
]

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/georglinks",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/georglinks",
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
