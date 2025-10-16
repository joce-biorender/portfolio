"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, GraduationCap, Briefcase, Zap } from "lucide-react"

const timelineEvents = [
  {
    date: "June 2021",
    title: "Joined BioRender",
    subtitle: "Customer Experience Specialist",
    description: "Started my journey at BioRender, learning the ins and outs of customer support and operations.",
    icon: Briefcase,
    color: "bg-accent/10 text-accent"
  },
  {
    date: "July 2021",
    title: "Bachelor's Graduation",
    subtitle: "Biomedical Sciences",
    description: "Graduated with my Bachelor's degree during the pandemic - completed my final semester online.",
    icon: GraduationCap,
    color: "bg-accent/10 text-accent"
  },
  {
    date: "September 2021",
    title: "Master's Program Begins",
    subtitle: "Molecular Science",
    description: "Started my Master's program while working full-time. Learned to balance research, coursework, and my job.",
    icon: GraduationCap,
    color: "bg-accent/10 text-accent"
  },
  {
    date: "2021-2024",
    title: "The Hard Years",
    subtitle: "Research, Failure, & Growth",
    description: "Three years of intense research, countless failures, and learning to think from first principles. Worked REALLY part-time during this period. This taught me resilience and systematic problem-solving.",
    icon: Calendar,
    color: "bg-accent/10 text-accent"
  },
  {
    date: "October 2024",
    title: "Master's Graduation",
    subtitle: "Molecular Science",
    description: "Officially graduated with my Master's degree, but already feeling drawn to the logical, problem-solving world of operations.",
    icon: GraduationCap,
    color: "bg-accent/10 text-accent"
  },
  {
    date: "Late 2024",
    title: "Automation Discovery",
    subtitle: "Zendesk & Zapier Exploration",
    description: "Started experimenting with Zendesk administrative tasks, triggers, and automations. The logical, systematic nature felt like the challenges I loved in research.",
    icon: Zap,
    color: "bg-accent/10 text-accent"
  },
  {
    date: "February 2025",
    title: "Operations Specialist",
    subtitle: "Promotion & Systematic Approach",
    description: "Promoted to Operations Specialist. Became more systematic and better at root cause analysis, applying my research methodology to business problems.",
    icon: Briefcase,
    color: "bg-accent/10 text-accent"
  }
]

export function TimelineSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems(prev => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-6">
          How I Got <span className="font-medium text-accent">Here</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          From scientist to automation specialist: my journey of discovery, failure, and growth
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
        
        <div className="space-y-12">
          {timelineEvents.map((event, index) => {
            const Icon = event.icon
            const isVisible = visibleItems.has(index)
            
            return (
              <div 
                key={index} 
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`relative flex items-start gap-6 transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-background border-2 border-border rounded-full">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${event.color} transition-all duration-500 ${
                    isVisible ? 'scale-100' : 'scale-0'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className={`bg-card/30 p-6 rounded-lg border border-border transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-4 opacity-0'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <span className="text-sm font-medium text-accent">{event.date}</span>
                      <h3 className="text-lg font-medium text-foreground">{event.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{event.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
