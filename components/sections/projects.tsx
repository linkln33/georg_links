"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projectsData } from "@/lib/utils"
import { ExternalLink, Github, Star, Eye } from "lucide-react"
import { useState } from "react"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    tech: string[]
    github: string
    demo: string
    featured: boolean
  }
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="card-hover h-full overflow-hidden">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <div className="h-64 relative">
            {project.image && project.image !== '/api/placeholder/400/250' ? (
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 flex items-center justify-center">
                <div className="text-6xl opacity-50">{project.featured ? '🚀' : '💎'}</div>
              </div>
            )}
            
            {/* Overlay on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4"
            >
              <Button
                variant="neon"
                size="sm"
                asChild
                className="transform hover:scale-105 transition-transform"
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Eye className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 transform hover:scale-105 transition-transform"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            </motion.div>

            {/* Custom Blockchain Badge */}
            {project.id === 1 && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-blue-600 text-white font-semibold">
                  Sui Blockchain
                </Badge>
              </div>
            )}
            {project.id === 2 && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-gradient-to-r from-purple-500 to-teal-500 text-white font-semibold">
                  Solana
                </Badge>
              </div>
            )}

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-neon-pink to-neon-purple text-black font-semibold">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              </div>
            )}
          </div>
        </div>

        <CardHeader className="pb-1">
          <CardTitle className="text-base group-hover:text-neon-cyan transition-colors">
            {project.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <p className="text-muted-foreground leading-snug text-xs">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Project Links - Always visible on mobile */}
          <div className="flex gap-2 pt-0 lg:opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-neon-green hover:text-neon-cyan hover:bg-neon-green/10"
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-neon-blue hover:text-neon-cyan hover:bg-neon-blue/10"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all')
  
  const filteredProjects = filter === 'featured' 
    ? projectsData.filter(project => project.featured)
    : projectsData

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-green to-neon-cyan bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            A showcase of production-ready Web3 applications and smart contracts
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={filter === 'all' ? 'neon' : 'outline'}
              onClick={() => setFilter('all')}
              className={filter === 'all' ? '' : 'border-neon-blue text-neon-blue hover:bg-neon-blue/10'}
            >
              All Projects
            </Button>
            <Button
              variant={filter === 'featured' ? 'neon' : 'outline'}
              onClick={() => setFilter('featured')}
              className={filter === 'featured' ? '' : 'border-neon-green text-neon-green hover:bg-neon-green/10'}
            >
              Featured Only
            </Button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-neon-purple">
              Want to see more?
            </h3>
            <p className="text-muted-foreground">
              Check out my GitHub for additional projects and contributions
            </p>
            <Button
              variant="neon"
              size="lg"
              asChild
              className="group"
            >
              <a 
                href="https://github.com/linkln33" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                View All Projects
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
