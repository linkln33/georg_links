"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code, 
  Coins, 
  Gamepad2, 
  Palette, 
  Zap,
  Award,
  Globe,
  Users
} from "lucide-react"

const highlights = [
  {
    icon: Code,
    title: "Smart Contract Expert",
    description: "Architecting secure, gas-optimized contracts across multiple blockchains",
    color: "text-neon-blue"
  },
  {
    icon: Coins,
    title: "DeFi Specialist",
    description: "Building yield farming, AMMs, and advanced financial protocols",
    color: "text-neon-green"
  },
  {
    icon: Gamepad2,
    title: "GameFi Developer",
    description: "Creating immersive blockchain games with player-owned economies",
    color: "text-neon-pink"
  },
  {
    icon: Palette,
    title: "UI/UX Designer",
    description: "Crafting beautiful, intuitive interfaces that users love",
    color: "text-neon-cyan"
  }
]

const achievements = [
  { icon: Award, text: "Top 1% Blockchain Developer", color: "text-neon-blue" },
  { icon: Globe, text: "50+ Deployed Smart Contracts", color: "text-neon-green" },
  { icon: Users, text: "10M+ Users Served", color: "text-neon-pink" },
  { icon: Zap, text: "$100M+ TVL Managed", color: "text-neon-cyan" }
]

export const About = () => {
  return (
    <section id="about" className="pt-16 lg:pt-20 pb-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about building the future of decentralized technology with clean code and innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Left Column - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start pt-12 lg:pt-8 lg:ml-8"
          >
            <div className="relative">
              <div className="w-96 h-96 rounded-3xl overflow-hidden border-4 border-neon-blue/50 shadow-2xl">
                <img 
                  src="https://github.com/linkln33.png" 
                  alt="Georg Links - Full Stack Web3 Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue/20 via-neon-green/20 to-neon-pink/20 blur-xl scale-110 -z-10"></div>
              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-neon-green rounded-full border-4 border-background animate-pulse"></div>
            </div>
          </motion.div>

          {/* Right Column - Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-semibold text-neon-blue leading-tight">
                Full Stack Web3 Developer
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 5 years of experience in blockchain development, I specialize in creating 
                <span className="text-neon-cyan font-semibold"> production-ready decentralized applications</span> 
                that push the boundaries of what&apos;s possible in Web3.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across multiple blockchain ecosystems, from 
                <span className="text-neon-green font-semibold"> Ethereum and Solana</span> to emerging 
                platforms like <span className="text-neon-pink font-semibold">Sui and Aptos</span>. 
                I&apos;m passionate about building secure, scalable solutions that deliver real value to users.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I&apos;m not coding smart contracts, you&apos;ll find me exploring the intersection of 
                <span className="text-neon-purple font-semibold"> AI and blockchain technology</span>, 
                always looking for innovative ways to enhance user experiences and create more 
                intelligent decentralized systems.
              </p>
            </div>

            {/* Key Technologies */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-foreground">Core Technologies</h4>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {[
                  "Move", "Solidity", "Rust", "TypeScript", "React", "Next.js", 
                  "Node.js", "Python", "Sui", "Aptos", "Ethereum", "Solana"
                ].map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 px-2 py-1 text-xs whitespace-nowrap"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-neon-purple">
            What I Do Best
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-hover group h-full">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`p-4 rounded-lg bg-card border border-current/20 group-hover:scale-110 transition-transform ${highlight.color}`}>
                        <highlight.icon className="w-8 h-8" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {highlight.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-neon-purple">
            Key Achievements
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-3"
              >
                <div className={`w-16 h-16 mx-auto rounded-full border-2 border-current/20 flex items-center justify-center group-hover:scale-110 transition-transform ${achievement.color}`}>
                  <achievement.icon className="w-8 h-8" />
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {achievement.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
