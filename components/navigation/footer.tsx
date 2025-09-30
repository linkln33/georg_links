"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { socialLinks } from "@/lib/utils"
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart, 
  ArrowUp,
  Code,
  Zap
} from "lucide-react"

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail
}

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
]

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-t from-background to-background/80 border-t border-neon-blue/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Brand Only */}
          <div>
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Georg Links"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                  Georg Links
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full Stack Web3 Developer specializing in smart contracts, 
                DeFi protocols, and AI-powered blockchain solutions.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-neon-green font-medium">Available for projects</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Quick Links & Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* UI/UX */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-neon-purple">UI/UX</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "Figma",
                  "Blender",
                  "Adobe XD",
                  "Sketch",
                  "Principle",
                  "Framer",
                  "Photoshop",
                  "Illustrator"
                ].map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <Zap className="w-3 h-3 text-neon-purple" />
                    <span className="text-muted-foreground">{tool}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-neon-pink">#</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "Move Language",
                  "Solidity",
                  "Rust",
                  "TypeScript",
                  "React / Next.js",
                  "AI / ML",
                  "Sui & Aptos",
                  "Ethereum"
                ].map((tech) => (
                  <div key={tech} className="flex items-center gap-2">
                    <Zap className="w-3 h-3 text-neon-pink" />
                    <span className="text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-neon-blue/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Georg Links. Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Scroll to top
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-neon-blue hover:text-neon-cyan hover:bg-neon-blue/10 group"
              >
                <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
              </Button>
            </div>
          </div>
            </motion.div>
          </div>

      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/5 via-transparent to-transparent pointer-events-none" />
    </footer>
  )
}
