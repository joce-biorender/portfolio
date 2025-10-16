"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Code2 } from "lucide-react"
import { AwardsSection } from "@/components/awards-section"
import { PressMediaSection } from "@/components/press-media-section"
import { ResumeDownloadButton } from "@/components/resume-download-button"
import { ContactForm } from "@/components/contact-form"
import { TimelineSection } from "@/components/timeline-section"
import { useState, useEffect } from "react"

const automationCaseStudies = [
  {
    id: "ar-triager",
    title: "AR Triager System",
    metric: "69% faster resolution time",
  },
  {
    id: "refund-eligibility",
    title: "Refund Eligibility Assessment System",
    metric: "Eliminated 400-550 hours of manual work",
  },
  {
    id: "lead-qualifier",
    title: "Lead Gen AI Qualifier + Rotator",
    metric: "Automated intake for ~$337K in Sales Pipeline",
  },
]

const techStack = [
  { name: "Zapier", category: "Automation" },
  { name: "OpenAI", category: "AI/ML" },
  { name: "Zendesk", category: "Platform" },
  { name: "N8N", category: "Automation" },
  { name: "Google Gemini", category: "AI/ML" },
  { name: "Anthropic Claude", category: "AI/ML" },
  { name: "Google AppsScript", category: "Automation" },
]

export default function Home() {
  const [showStamp, setShowStamp] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const triggerPoint = 10 // Trigger on the slightest scroll
      
      if (scrollPosition > triggerPoint && !showStamp) {
        setShowStamp(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showStamp])

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="text-base sm:text-lg text-foreground font-semibold font-sans">Jocelyne Mendez-Guzman</span>
            <div className="hidden md:flex items-center gap-6 font-sans font-medium">
              <a href="#automation" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Work
              </a>
              <a href="#awards" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Awards
              </a>
              <a
                href="#press-media"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Press
              </a>
              <a href="#resume" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Resume
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/jocelyne-mendez-guzman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/headshot.png"
                  alt="Jocelyne Mendez-Guzman headshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              Hi, I'm Jocelyne
            </h1>
            
            
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                I'm an <span className="font-medium text-foreground">Automation & Operations Specialist</span> with a Master's in <span className="whitespace-nowrap">Molecular Science</span>.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Research taught me how to troubleshoot systematically and persist when things break. 
                <span className="block mt-2 text-accent font-medium">That rhythm still guides every system I build today.</span>
              </p>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background font-normal px-8 py-3 rounded-none">
                <a href="#automation">
                  View My Work
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent font-normal px-8 py-3 rounded-none"
              >
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
              <ResumeDownloadButton />
            </div>
            
            {/* Scroll-triggered Stamp Animation */}
            {showStamp && (
              <div className="mt-12 flex justify-center">
                <div className="animate-stamp-down">
                  <div className="inline-flex items-center gap-3 bg-accent/10 px-8 py-4 rounded-full border-2 border-accent/30 shadow-xl transition-all duration-300 hover:scale-105">
                    <span className="text-base font-semibold text-accent">🏆 Zapier's 2025 Operations Automator of the Year</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Automation Case Studies Section */}
        <section id="automation" className="px-4 sm:px-8 py-20 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-6">
                Featured <span className="font-medium text-accent">Automation Projects</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                AI-powered automations that have transformed operations at BioRender, delivering measurable business impact.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationCaseStudies.map((study, index) => {
                // Define visual elements for each project
                const projectData = {
                  'ar-triager': {
                    icon: '⚡',
                    badge: '9,000+ tickets',
                    description: 'AI-powered ticket routing'
                  },
                  'refund-eligibility': {
                    icon: '💰',
                    badge: '400-550 hours saved',
                    description: 'Automated refund assessment'
                  },
                  'lead-qualifier': {
                    icon: '🎯',
                    badge: '$337K pipeline',
                    description: 'AI lead qualification system'
                  }
                }
                
                const data = projectData[study.id as keyof typeof projectData]
                
                return (
                  <Link
                    key={study.id}
                    href={`/automation/${study.id}`}
                    className="group block relative overflow-hidden rounded-2xl border border-border/50 hover:border-accent/30 transition-all duration-500 cursor-pointer transform hover:scale-[1.03] hover:shadow-2xl"
                  >
                    {/* Background Gradient - Consistent theme colors */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* Border Gradient - Theme accent color */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative p-8">
                      {/* Icon and Badge */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="text-4xl">{data.icon}</div>
                        <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50">
                          <span className="text-xs font-semibold text-accent">{data.badge}</span>
                        </div>
                      </div>
                      
                      {/* Title and Description */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
                          {study.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {data.description}
                        </p>
                      </div>
                      
                      {/* Hover Arrow */}
                      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline & Tech Stack Section */}
        <section id="resume" className="px-4 sm:px-8 py-20 border-t border-border">
          <TimelineSection />
          
          {/* Tech Stack */}
          <div className="border-t border-border pt-16 mt-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-xl font-light text-foreground mb-4">
                  <span className="font-medium text-accent">Tech Stack</span>
                </h3>
                <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  Tools and technologies I use to build robust automation systems
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="text-center py-4 border-b border-border hover:border-accent transition-colors duration-300"
                  >
                    <span className="text-sm font-medium text-foreground block">{tech.name}</span>
                    <span className="text-xs text-muted-foreground mt-1 block">{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="px-4 sm:px-8 py-20 border-t border-border">
          <AwardsSection />
        </section>

        {/* Press & Media Section */}
        <section id="press-media" className="px-4 sm:px-8 py-20 border-t border-border">
          <PressMediaSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-4 sm:px-8 py-20 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-6">
                Let's <span className="font-medium text-accent">Connect</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
                Interested in discussing automation, AI workflows, or potential collaborations? I'd love to hear from you.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Contact Form */}
              <div className="mb-12">
                <h3 className="text-lg font-medium text-foreground mb-6 text-center">Send me a message</h3>
                <ContactForm />
              </div>

              {/* LinkedIn Connection */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Or connect with me on LinkedIn</p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent font-normal px-8 py-3 rounded-none"
                >
                  <a href="https://www.linkedin.com/in/jocelyne-mendez-guzman/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
