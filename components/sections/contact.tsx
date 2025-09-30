"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { socialLinks } from "@/lib/utils"
import { 
  Mail, 
  Send, 
  MapPin, 
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Clock,
  Star,
  MessageSquare
} from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Get in touch for project inquiries",
    value: "hello@georglinks.dev",
    action: "mailto:hello@georglinks.dev",
    color: "text-neon-blue",
    borderColor: "border-neon-blue/30"
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a free consultation",
    value: "30 min discovery call",
    action: "https://calendly.com/georglinks",
    color: "text-neon-green",
    borderColor: "border-neon-green/30"
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in",
    value: "San Francisco, CA",
    action: "",
    color: "text-neon-pink",
    borderColor: "border-neon-pink/30"
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "Typical response within",
    value: "< 24 hours",
    action: "",
    color: "text-neon-purple",
    borderColor: "border-neon-purple/30"
  }
]

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail
}

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        budget: ""
      })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent leading-relaxed py-2">
            Let&apos;s Build Together
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Ready to bring your Web3 vision to life? Let&apos;s discuss your project and create something amazing.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Send Message */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col lg:block"
            >
              <Card className="card-hover border-2 border-neon-blue/30 flex-1 flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-neon-blue flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <div className="space-y-6 flex-1 flex flex-col">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">
                        Have a Web3 project in mind? Fill out the form below and I&apos;ll get back to you within 24 hours with a detailed proposal.
                      </p>
                    </div>
                    
                    {!submitted ? (
                      <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium mb-1 text-foreground">
                              Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3 py-2 bg-background border border-neon-blue/30 rounded-md focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20 transition-colors text-foreground text-sm"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium mb-1 text-foreground">
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-3 py-2 bg-background border border-neon-blue/30 rounded-md focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20 transition-colors text-foreground text-sm"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium mb-1 text-foreground">
                            Project Type
                          </label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-background border border-neon-blue/30 rounded-md focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20 transition-colors text-foreground text-sm"
                          >
                            <option value="">Select project type</option>
                            <option value="smart-contract">Smart Contract Development</option>
                            <option value="dapp">DApp Development</option>
                            <option value="defi">DeFi Protocol</option>
                            <option value="nft">NFT Marketplace</option>
                            <option value="gamefi">GameFi Platform</option>
                            <option value="consulting">Technical Consulting</option>
                            <option value="audit">Security Audit</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-medium mb-1 text-foreground">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 bg-background border border-neon-blue/30 rounded-md focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20 transition-colors text-foreground text-sm"
                          >
                            <option value="">Select budget range</option>
                            <option value="5k-15k">$5,000 - $15,000</option>
                            <option value="15k-50k">$15,000 - $50,000</option>
                            <option value="50k-100k">$50,000 - $100,000</option>
                            <option value="100k+">$100,000+</option>
                            <option value="equity">Equity/Token Deal</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-medium mb-1 text-foreground">
                            Project Details *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={3}
                            className="w-full px-3 py-2 bg-background border border-neon-blue/30 rounded-md focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/20 transition-colors text-foreground resize-none text-sm"
                            placeholder="Tell me about your project, timeline, and any specific requirements..."
                          />
                        </div>


                        <div className="mt-auto">
                          <Button
                            type="submit"
                            variant="neon"
                            size="sm"
                            disabled={isSubmitting}
                            className="w-full group text-sm"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-3 h-3 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="w-3 h-3 mr-2 group-hover:animate-pulse" />
                                Send Message
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-6 space-y-2"
                      >
                        <div className="w-8 h-8 mx-auto rounded-full bg-gradient-to-r from-neon-green to-neon-cyan flex items-center justify-center">
                          <Star className="w-4 h-4 text-black" />
                        </div>
                        <h3 className="text-lg font-semibold text-neon-green">
                          Message Sent!
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right: Book a Call */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col lg:block"
            >
              <Card className="card-hover border-2 border-neon-green/30 flex-1 flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-neon-green flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Book a Call
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex-1 flex flex-col">
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                        <Badge className="bg-gradient-to-r from-neon-green to-neon-cyan text-black font-semibold">
                          Available for New Projects
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Ready to discuss your Web3 project? Let&apos;s schedule a discovery call to explore how I can help bring your vision to life.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-center">
                        <h4 className="font-semibold text-foreground mb-2">30-Minute Discovery Call</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Free consultation to understand your project requirements and discuss potential solutions.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-neon-green/20">
                          <Clock className="w-4 h-4 text-neon-green" />
                          <div className="text-sm">
                            <div className="font-medium">Response Time</div>
                            <div className="text-xs text-muted-foreground">&lt; 24 hours</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-neon-blue/20">
                          <MapPin className="w-4 h-4 text-neon-blue" />
                          <div className="text-sm">
                            <div className="font-medium">Location</div>
                            <div className="text-xs text-muted-foreground">San Francisco, CA</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-neon-purple/20">
                          <Calendar className="w-4 h-4 text-neon-purple" />
                          <div className="text-sm">
                            <div className="font-medium">Availability</div>
                            <div className="text-xs text-muted-foreground">Monday - Friday, 9 AM - 6 PM PST</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Button
                          variant="neon"
                          asChild
                          className="group w-full"
                        >
                          <a href="https://calendly.com/georglinks" target="_blank" rel="noopener noreferrer">
                            <Calendar className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                            Schedule Your Call
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Social Links - Centered Below */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-16 text-center"
          >
            <h3 className="text-lg lg:text-xl font-semibold text-neon-purple mb-4 lg:mb-6">
              Connect With Me
            </h3>
            <div className="flex flex-wrap gap-3 lg:gap-4 justify-center">
              {socialLinks.map((social, index) => {
                const IconComponent = socialIcons[social.icon as keyof typeof socialIcons]
                return (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      variant="outline"
                      asChild
                      className="h-auto p-2 lg:p-3 border-neon-blue/30 hover:border-neon-cyan hover:bg-neon-blue/10 group"
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-4 h-4 text-neon-blue group-hover:text-neon-cyan transition-colors" />
                          <span className="text-xs lg:text-sm font-medium">{social.name}</span>
                        </div>
                      </a>
                    </Button>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}