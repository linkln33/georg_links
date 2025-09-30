"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, Code, Terminal } from "lucide-react"

const codeSnippet = `const developer = {
  name: "Georg Links",
  role: "Full Stack Web3 Developer",
  experience: "5+ years",
  specialties: [
    "Smart Contracts",
    "DeFi Protocols", 
    "Move Language",
    "Solidity & Rust",
    "Modern UI/UX"
  ],
  currentFocus: "Building the future of Web3",
  availability: "Open for opportunities"
};`

export const Hero = () => {
  const [displayedCode, setDisplayedCode] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(codeSnippet.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(!showCursor)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [showCursor])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-[75vh] lg:h-[75vh] relative flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-background/10 to-slate-900/20 z-10" />

      <div className="container mx-auto px-4 z-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 lg:space-y-6 -mt-8 lg:-mt-16 text-center lg:text-left"
            >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-1"
            >
              <p className="text-neon-green text-lg sm:text-xl font-medium">
                👋 Hello, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-green bg-clip-text text-transparent leading-tight lg:leading-relaxed py-1 lg:py-2">
                George
              </h1>
              <div className="mt-8 lg:mt-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neon-purple">
                  Full Stack Web3 Developer
                </h2>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              5+ years building{" "}
              <span className="text-neon-cyan font-semibold">decentralized apps</span>,{" "}
              <span className="text-neon-pink font-semibold">smart contracts</span>, and{" "}
              <span className="text-neon-green font-semibold">modern UIs</span> using
              Solidity, Rust, Move, and AI-powered solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="neon"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group w-full sm:w-auto"
              >
                <Play className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:border-neon-cyan w-full sm:w-auto"
              >
                <Terminal className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-6 lg:gap-8 justify-center lg:justify-start"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-neon-green">5+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-neon-blue">50+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-neon-pink">10+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Technologies</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="terminal p-5 sm:p-7 relative overflow-hidden min-w-[360px] w-full max-w-[600px]">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neon-blue/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Code className="w-4 h-4 text-neon-blue" />
                  <span className="text-sm text-neon-blue font-mono">
                    developer.js
                  </span>
                </div>
              </div>

              {/* Code Content */}
              <div className="font-mono text-sm sm:text-base leading-relaxed">
                <pre className="text-gray-300">
                  <code dangerouslySetInnerHTML={{
                    __html: displayedCode
                      .replace(/const|let|var/g, '<span class="text-neon-purple">$&</span>')
                      .replace(/"/g, '<span class="text-neon-green">"</span>')
                      .replace(/:/g, '<span class="text-neon-blue">:</span>')
                      .replace(/\[|\]/g, '<span class="text-neon-cyan">$&</span>')
                      .replace(/{|}/g, '<span class="text-neon-pink">$&</span>')
                      .replace(/developer/g, '<span class="text-neon-yellow">$&</span>')
                      .replace(/true|false/g, '<span class="text-neon-orange">$&</span>')
                  }} />
                  <span className={`inline-block w-2 h-5 ml-1 ${showCursor && currentIndex >= codeSnippet.length ? 'bg-neon-blue animate-pulse' : 'bg-transparent'}`}></span>
                </pre>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-green/5 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
