import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Code2 } from "lucide-react"
import { AwardsSection } from "@/components/awards-section"
import { PressMediaSection } from "@/components/press-media-section"
import { ResumeDownloadButton } from "@/components/resume-download-button"

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
  { name: "Metabase", category: "Analytics" },
  { name: "Google AppsScript", category: "Automation" },
]

export default function Home() {
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
            <a
              href="mailto:jocelynemendezg@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              Hi, I'm Jocelyne
            </h1>
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                I'm an <span className="font-medium text-foreground">Automation & Operations Specialist</span> with a Master's in <span className="whitespace-nowrap">Molecular Science</span>.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Research taught me how to troubleshoot, design repeatable experiments, and persist when things break. 
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
            </div>
          </div>
        </section>

        {/* Automation Case Studies Section */}
        <section id="automation" className="px-4 sm:px-8 py-20">
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
              {automationCaseStudies.map((study, index) => (
                <Link
                  key={study.id}
                  href={`/automation/${study.id}`}
                  className="group block border-b border-border pb-8 hover:border-accent transition-colors duration-300"
                >
                  <div className="mb-4">
                    <span className="text-sm text-muted-foreground font-medium">Project {index + 1}</span>
                    <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors mt-2">
                      {study.title}
                    </h3>
                  </div>
                  <p className="text-sm text-accent font-medium mb-2">{study.metric}</p>
                  <p className="text-xs text-muted-foreground">View case study →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="px-4 sm:px-8 py-20 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-4">
                <span className="font-medium text-accent">Tech Stack</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
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
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-6">
              Let's <span className="font-medium text-accent">Connect</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
              Interested in discussing automation, AI workflows, or potential collaborations? I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background font-normal px-8 py-3 rounded-none">
                <a href="mailto:jocelynemendezg@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent font-normal px-8 py-3 rounded-none"
              >
                <a href="https://linkedin.com/in/jocelyne-mendez-guzman" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="px-4 sm:px-8 py-20 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-6">
                Professional <span className="font-medium text-accent">Summary</span>
              </h2>
              <div className="flex justify-center mb-12">
                <ResumeDownloadButton />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Experience */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-6 border-b border-border pb-2">
                    Experience
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-base font-medium text-foreground mb-1">BioRender</h4>
                      <p className="text-sm text-accent font-medium mb-1">Operations Specialist, Customer Experience</p>
                      <p className="text-xs text-muted-foreground mb-3">2021 - Present</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Built AI-powered automations that reduced resolution time by 69%, eliminated 400-550 hours of manual work, 
                        and automated $337K in sales pipeline. Maintained 90%+ uptime through systematic debugging and refinement.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-base font-medium text-foreground mb-1">Toronto Metropolitan University</h4>
                      <p className="text-sm text-accent font-medium mb-1">Graduate Educational Developer</p>
                      <p className="text-xs text-muted-foreground mb-3">2023 - 2024</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Designed and delivered 10 professional development workshops for 100+ graduate students, 
                        building frameworks for effective teaching and measurable outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education & Skills */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-6 border-b border-border pb-2">
                    Education
                  </h3>
                  <div>
                    <h4 className="text-base font-medium text-foreground mb-1">Toronto Metropolitan University</h4>
                    <p className="text-sm text-accent font-medium mb-1">Master of Science in Molecular Science</p>
                    <p className="text-xs text-muted-foreground mb-3">2024</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Completed 3-year research project, mastering new techniques independently and building resilience 
                      through systematic problem-solving and iterative improvement.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-6 border-b border-border pb-2">
                    Key Skills
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Automation & AI</h4>
                      <p className="text-sm text-muted-foreground">Zapier, OpenAI, Google Gemini, Anthropic Claude, Prompt Engineering</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Platforms & Tools</h4>
                      <p className="text-sm text-muted-foreground">Zendesk, Stripe, Metabase, Google AppsScript</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Operations</h4>
                      <p className="text-sm text-muted-foreground">Documentation, SOPs, Dashboard Creation, Process Optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
