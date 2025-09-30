"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { skillsData } from "@/lib/utils"

interface SkillProgressProps {
  skill: {
    name: string
    level: number
    color: string
  }
  index: number
}

const SkillProgress = ({ skill, index }: SkillProgressProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="space-y-3"
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold text-foreground">{skill.name}</h4>
        <span className="text-sm font-medium text-muted-foreground">
          {skill.level}%
        </span>
      </div>
      
      <div className="relative">
        {/* Background Bar */}
        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-full rounded-full relative overflow-hidden"
            style={{ background: skill.color }}
          >
          </motion.div>
        </div>
        
      </div>
    </motion.div>
  )
}

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proficiency levels across cutting-edge technologies and frameworks
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Skills List */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-neon-cyan">
                Technical Proficiency
              </h3>
              <div className="space-y-6">
                {skillsData.map((skill, index) => (
                  <SkillProgress key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6 text-neon-green">
              What I Bring
            </h3>

            <div className="space-y-6">
              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-neon-blue group-hover:text-neon-cyan transition-colors">
                      🚀 Move Language Expert
                    </h4>
                    <p className="text-muted-foreground">
                      Deep expertise in Move programming for Sui and Aptos ecosystems. 
                      Building secure, efficient smart contracts with advanced Move patterns.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-neon-green group-hover:text-neon-cyan transition-colors">
                      ⚡ Full-Stack Mastery
                    </h4>
                    <p className="text-muted-foreground">
                      From smart contract architecture to responsive React UIs. 
                      End-to-end development with modern TypeScript and Next.js.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-neon-pink group-hover:text-neon-cyan transition-colors">
                      🎨 UI/UX Excellence
                    </h4>
                    <p className="text-muted-foreground">
                      Creating beautiful, intuitive interfaces that make complex Web3 
                      interactions feel simple and delightful for users.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover group">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-neon-purple group-hover:text-neon-cyan transition-colors">
                      🤖 AI Integration
                    </h4>
                    <p className="text-muted-foreground">
                      Pioneering the integration of AI with blockchain technology. 
                      Building intelligent DApps that adapt and learn from user behavior.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

          </motion.div>
        </div>

        {/* Certifications & Recognition - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-neon-purple">
              Certifications & Recognition
            </h3>
            <p className="text-muted-foreground">
              Professional certifications and industry recognition
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Certified Solidity Developer",
              "Move Language Specialist", 
              "AWS Solutions Architect",
              "React Expert Certification",
              "Blockchain Security Expert",
              "DeFi Protocol Specialist"
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-3 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-lg text-sm font-medium text-neon-blue hover:border-neon-cyan/50 hover:bg-gradient-to-r hover:from-neon-cyan/20 hover:to-neon-purple/20 transition-all duration-300"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
