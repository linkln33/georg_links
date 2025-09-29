"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Zap, 
  Database, 
  Network, 
  Cpu, 
  TrendingUp,
  Shield,
  Sparkles,
  Bot,
  MessageCircle
} from "lucide-react"

const innovations = [
  {
    icon: Brain,
    title: "AI-Powered Smart Contracts",
    description: "Self-optimizing contracts that adjust parameters based on market conditions and user behavior patterns.",
    tech: ["Machine Learning", "Solidity", "Python", "TensorFlow"],
    color: "text-neon-blue",
    borderColor: "border-neon-blue/30"
  },
  {
    icon: TrendingUp,
    title: "Predictive DeFi Analytics",
    description: "Advanced algorithms that predict yield farming opportunities and optimal liquidity provision strategies.",
    tech: ["Time Series Analysis", "Web3.py", "React", "D3.js"],
    color: "text-neon-green",
    borderColor: "border-neon-green/30"
  },
  {
    icon: Shield,
    title: "AI Security Auditing",
    description: "Automated smart contract vulnerability detection using neural networks trained on exploit patterns.",
    tech: ["Neural Networks", "Static Analysis", "Rust", "LLVM"],
    color: "text-neon-pink",
    borderColor: "border-neon-pink/30"
  },
  {
    icon: Network,
    title: "Cross-Chain AI Agents",
    description: "Intelligent agents that execute optimal transactions across multiple blockchain networks automatically.",
    tech: ["Multi-Agent Systems", "Layer Zero", "Wormhole", "Go"],
    color: "text-neon-purple",
    borderColor: "border-neon-purple/30"
  }
]

const stats = [
  { label: "AI Models Deployed", value: "15+", icon: Cpu },
  { label: "Smart Contracts Audited", value: "200+", icon: Shield },
  { label: "ML Algorithms Built", value: "25+", icon: Brain },
  { label: "Gas Optimized", value: "40%", icon: Zap }
]

export const AIWeb3 = () => {
  return (
    <section id="ai-web3" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-neon-pink animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue bg-clip-text text-transparent">
              AI × Web3 Innovation
            </h2>
            <Sparkles className="w-8 h-8 text-neon-blue animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Pioneering the convergence of artificial intelligence and blockchain technology 
            to create the next generation of intelligent decentralized systems
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-3"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-neon-blue" />
              </div>
              <div>
                <div className="text-2xl font-bold text-neon-green">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Innovations Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`card-hover h-full border-2 ${innovation.borderColor} group`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-card border border-current/20 group-hover:scale-110 transition-transform ${innovation.color}`}>
                      <innovation.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-neon-cyan transition-colors">
                        {innovation.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {innovation.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {innovation.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`border-current/50 ${innovation.color} hover:bg-current/10 text-xs`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive AI Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <Card className="max-w-4xl mx-auto card-hover border-2 border-neon-cyan/30">
            <CardHeader>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Bot className="w-8 h-8 text-neon-cyan animate-pulse" />
                <CardTitle className="text-2xl text-neon-cyan">
                  AI Assistant Demo
                </CardTitle>
              </div>
              <p className="text-muted-foreground">
                Experience the future of Web3 interactions with an AI assistant that understands blockchain operations
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Mock Chat Interface */}
              <div className="bg-background/50 rounded-lg p-6 space-y-4 max-w-2xl mx-auto">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-green flex items-center justify-center">
                    <span className="text-xs font-bold text-black">GL</span>
                  </div>
                  <div className="bg-muted rounded-lg p-3 flex-1">
                    <p className="text-sm">"Show me the best yield farming opportunities for USDC"</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple flex items-center justify-center">
                    <Bot className="w-4 h-4 text-black" />
                  </div>
                  <div className="bg-gradient-to-r from-neon-blue/20 to-neon-green/20 border border-neon-blue/30 rounded-lg p-3 flex-1">
                    <p className="text-sm">
                      "Based on current market analysis, here are the top 3 USDC yield opportunities:
                      <br />• Aave v3: 4.2% APY (Low risk)
                      <br />• Compound: 3.8% APY (Low risk)  
                      <br />• Curve USDC/USDT: 5.1% APY (Medium risk)
                      <br /><br />Would you like me to execute the optimal strategy?"
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="neon" className="group">
                  <MessageCircle className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Try AI Assistant
                </Button>
                <Button 
                  variant="outline" 
                  className="border-neon-purple text-neon-purple hover:bg-neon-purple/10"
                >
                  <Database className="w-4 h-4 mr-2" />
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-neon-green">
              Ready to Build the Future?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate on cutting-edge AI × Web3 projects that push the boundaries 
              of what's possible in decentralized technology.
            </p>
            <Button 
              variant="neon" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
              Start a Project
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
