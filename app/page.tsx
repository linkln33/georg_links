"use client"

import { Navbar } from "@/components/navigation/navbar"
import { Footer } from "@/components/navigation/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { GlobalBackground } from "@/components/background/global-background"
import { structuredData } from "@/components/seo/structured-data"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      {/* Global animated background for entire page */}
      <GlobalBackground variant="nebula" density="medium" />
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Navbar />
        
        <Hero />
        
        <About />
        
        <Skills />
        
        <Projects />
        
        <Contact />
        
        <Footer />
      </div>
    </main>
  )
}
