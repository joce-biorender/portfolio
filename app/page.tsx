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
  { name: "Stripe", category: "Platform" },
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
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-16 font-sans bg-gradient-to-br from-background via-background to-card/30">
          <div className="max-w-5xl mx-auto text-center font-sans">
            <div className="mb-8 sm:mb-12 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-accent/30 shadow-2xl">
                <Image
                  src="/headshot.png"
                  alt="Jocelyne Mendez-Guzman headshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 sm:mb-8 font-sans leading-tight">
              Hi, I'm <span className="text-accent">Jocelyne!</span>
            </h1>
            <div className="max-w-4xl mx-auto px-4">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 font-sans">
                I'm an <strong className="text-foreground">Automation & Operations Specialist</strong> with a Master's in Molecular Science.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-sans">
                Research taught me how to troubleshoot, design repeatable experiments, and persist when things break. 
                <br className="hidden sm:block" />
                <span className="text-accent font-medium">That rhythm still guides every system I build today.</span>
              </p>
            </div>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-sans px-6 sm:px-8 py-3 w-full sm:w-auto">
                <a href="#automation">
                  View My Work
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white bg-transparent font-sans px-6 sm:px-8 py-3 w-full sm:w-auto"
              >
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Automation Case Studies Section */}
        <section id="automation" className="px-4 sm:px-8 py-16 sm:py-20 bg-card/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-sans">
                Featured <span className="text-accent">Automation Projects</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed px-4">
                AI-powered automations that have transformed operations at BioRender, delivering measurable business impact.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {automationCaseStudies.map((study, index) => (
                <Link
                  key={study.id}
                  href={`/automation/${study.id}`}
                  className="group block bg-background border-2 border-border rounded-xl p-6 sm:p-8 hover:border-accent hover:shadow-2xl transition-all duration-300 min-h-[240px] sm:min-h-[280px] flex flex-col justify-between font-sans"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                        <span className="text-accent font-bold text-sm">{index + 1}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-accent transition-colors font-sans">
                        {study.title}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <p className="text-base sm:text-lg font-semibold text-accent font-sans">{study.metric}</p>
                    <p className="text-sm text-muted-foreground mt-2 font-sans">View case study →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="px-4 sm:px-8 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans">Tech Stack</h2>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-sans px-4">
                Tools and technologies I use to build robust automation systems
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 font-sans">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-6 py-3 sm:py-4 bg-card border-2 border-border rounded-xl hover:border-accent hover:shadow-lg transition-all duration-300 text-center"
                >
                  <span className="text-xs sm:text-sm font-semibold text-foreground block">{tech.name}</span>
                  <span className="text-xs text-muted-foreground mt-1 block">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="px-4 sm:px-8 py-16 sm:py-20 bg-card/20">
          <AwardsSection />
        </section>

        {/* Press & Media Section */}
        <section id="press-media" className="px-4 sm:px-8 py-16 sm:py-20">
          <PressMediaSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-4 sm:px-8 py-16 sm:py-20 bg-card/20">
          <div className="max-w-4xl mx-auto text-center font-sans">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-sans">
              Let's <span className="text-accent">Connect</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 font-sans max-w-2xl mx-auto leading-relaxed px-4">
              Interested in discussing automation, AI workflows, or potential collaborations? I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-sans px-6 sm:px-8 py-3 w-full sm:w-auto">
                <a href="mailto:jocelynemendezg@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white bg-transparent font-sans px-6 sm:px-8 py-3 w-full sm:w-auto"
              >
                <a href="https://linkedin.com/in/jocelyne-mendez-guzman" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="px-4 sm:px-8 py-16 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-sans">
                Professional <span className="text-accent">Summary</span>
              </h2>
              <div className="flex justify-center mb-6 sm:mb-8">
                <ResumeDownloadButton />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Experience */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 border-b-2 border-accent pb-2 font-sans">
                    Experience
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-card/50 p-4 sm:p-6 rounded-xl border border-border">
                      <h4 className="text-base sm:text-lg font-bold text-foreground mb-1">BioRender</h4>
                      <p className="text-sm text-accent font-medium mb-2">Operations Specialist, Customer Experience</p>
                      <p className="text-sm text-muted-foreground mb-3">2021 - Present</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Built AI-powered automations that reduced resolution time by 69%, eliminated 400-550 hours of manual work, 
                        and automated $337K in sales pipeline. Maintained 90%+ uptime through systematic debugging and refinement.
                      </p>
                    </div>
                    
                    <div className="bg-card/50 p-4 sm:p-6 rounded-xl border border-border">
                      <h4 className="text-base sm:text-lg font-bold text-foreground mb-1">Toronto Metropolitan University</h4>
                      <p className="text-sm text-accent font-medium mb-2">Graduate Educational Developer</p>
                      <p className="text-sm text-muted-foreground mb-3">2023 - 2024</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Designed and delivered 10 professional development workshops for 100+ graduate students, 
                        building frameworks for effective teaching and measurable outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education & Skills */}
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 border-b-2 border-accent pb-2 font-sans">
                    Education
                  </h3>
                  <div className="bg-card/50 p-4 sm:p-6 rounded-xl border border-border">
                    <h4 className="text-base sm:text-lg font-bold text-foreground mb-1">Toronto Metropolitan University</h4>
                    <p className="text-sm text-accent font-medium mb-2">Master of Science in Molecular Science</p>
                    <p className="text-sm text-muted-foreground mb-3">2024</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Completed 3-year research project, mastering new techniques independently and building resilience 
                      through systematic problem-solving and iterative improvement.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 border-b-2 border-accent pb-2 font-sans">
                    Key Skills
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-card/50 p-3 sm:p-4 rounded-xl border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Automation & AI</h4>
                      <p className="text-sm text-muted-foreground">Zapier, OpenAI, Google Gemini, Anthropic Claude, Prompt Engineering</p>
                    </div>
                    <div className="bg-card/50 p-3 sm:p-4 rounded-xl border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Platforms & Tools</h4>
                      <p className="text-sm text-muted-foreground">Zendesk, Stripe, Metabase, Google AppsScript</p>
                    </div>
                    <div className="bg-card/50 p-3 sm:p-4 rounded-xl border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Operations</h4>
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
