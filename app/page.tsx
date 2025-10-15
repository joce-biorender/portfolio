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
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-lg text-foreground font-semibold font-sans">Jocelyne Mendez-Guzman</span>
            <div className="flex items-center gap-6 font-sans font-medium">
              <a href="#home" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Home
              </a>
              <a href="#awards" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Awards
              </a>
              <a
                href="#press-media"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                Press & Media
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Contact
              </a>
              <a href="#resume" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Resume
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
        <section className="min-h-screen flex items-center justify-center px-8 py-16 font-sans">
          <div className="max-w-4xl mx-auto text-center font-sans">
            <div className="mb-8 flex justify-center rounded-none">
              <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-accent/20">
                <Image
                  src="/headshot.png"
                  alt="Jocelyne Mendez-Guzman headshot"
                  fill
                  className="object-cover border-background"
                />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 font-sans">Hi, I'm Jocelyne!</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-sans">
              {
                "I'm an Automation & Operations Specialist with a Master's in Molecular Science. Research taught me how to troubleshoot, design repeatable experiments, and persist when things break. \n\nThat rhythm still guides every system I build today."
              }
            </p>
          </div>
        </section>

        <section id="home" className="px-8 py-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-4 text-center font-sans">Automation Case Studies</h1>
            <p className="text-lg text-muted-foreground mb-12 font-sans text-center">
              Explore my portfolio of AI-powered automations that have transformed operations at BioRender.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {automationCaseStudies.map((study) => (
                <Link
                  key={study.id}
                  href={`/automation/${study.id}`}
                  className="group block bg-card border-2 border-border rounded-lg p-8 hover:border-accent hover:shadow-xl transition-all duration-300 min-h-[200px] flex flex-col justify-center font-sans"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors font-sans">
                    {study.title}
                  </h3>
                  <p className="text-sm font-medium text-accent font-sans">{study.metric}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-24 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Code2 className="w-8 h-8 text-accent" />
              <h2 className="text-4xl md:text-5xl font-bold text-center font-sans">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 font-sans">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-background border-2 border-border rounded-full hover:border-accent transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">{tech.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">({tech.category})</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="awards" className="px-8 py-24">
          <AwardsSection />
        </section>

        <section id="press-media" className="px-8 py-24 bg-card/30">
          <PressMediaSection />
        </section>

        <section id="contact" className="px-8 py-24">
          <div className="max-w-4xl mx-auto text-center font-sans">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-8 font-sans">
              Interested in discussing automation, AI workflows, or potential collaborations? I'd love to hear from you.
            </p>
            <div className="flex items-center justify-center gap-6">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-sans">
                <a href="mailto:jocelynemendezg@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white bg-transparent font-sans"
              >
                <a href="https://linkedin.com/in/jocelyne-mendez-guzman" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="resume" className="px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-12 text-center font-sans">Resume</h1>

            <div className="flex items-start justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-3 font-sans">Jocelyne Mendez-Guzman</h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <a href="mailto:jocelynemendezg@gmail.com" className="flex items-center gap-1 hover:text-accent">
                    <Mail className="w-4 h-4" />
                    jocelynemendezg@gmail.com
                  </a>
                  <a
                    href="https://linkedin.com/in/jocelyne-mendez-guzman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-accent"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
              <ResumeDownloadButton />
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-accent pb-2 font-sans">
                Summary
              </h2>
              <p className="text-muted-foreground leading-relaxed font-sans">
                Operations specialist with proven ability to rapidly prototype and scale AI-powered workflows in SaaS
                environments. Bridges technical implementation with business operations, eliminating manual processes
                across GTM, Customer Success, and internal teams. MSc in Molecular Science brings scientific rigor to
                building resilient systems. Recognized as Zapier's 2025 Operations Automator of the Year.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-accent pb-2 font-sans">
                Work Experience
              </h2>
              <div className="space-y-8">
                <div>
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-foreground">BioRender</h3>
                    <p className="text-sm italic text-muted-foreground">Operations Specialist, Customer Experience</p>
                    <p className="text-sm text-muted-foreground">2021 - Present</p>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                    <li>
                      Built an AI-powered triage system that reduced resolution time 69%, an AI Lead Assessment Agent
                      that cut Avg. Assignment Time from 16 hrs to 6 minutes, and a Refund Eligibility automation that
                      eliminated 400-550 hours of manual refund processing.
                    </li>
                    <li>
                      Debugged and refined automations by adjusting prompts, API integrations, and business logic when
                      systems failed, maintaining 90%+ uptime.
                    </li>
                    <li>
                      Enabled teamwide adoption through documentation, SOPs, training materials, and workshops for
                      automations and AI-powered workflows.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-foreground">Toronto Metropolitan University</h3>
                    <p className="text-sm italic text-muted-foreground">Graduate Educational Developer</p>
                    <p className="text-sm text-muted-foreground">2023 - 2024</p>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                    <li>
                      Designed and delivered 10 professional development workshops, building frameworks that enabled
                      100+ graduate students to become effective educators.
                    </li>
                    <li>
                      Revamped training modules using pedagogical frameworks (Bloom's Taxonomy) to ensure progressive
                      skill development and measurable outcomes.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-foreground">Toronto Metropolitan University</h3>
                    <p className="text-sm italic text-muted-foreground">Graduate Teaching Assistant</p>
                    <p className="text-sm text-muted-foreground">2021 - 2024</p>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground">
                    <li>
                      Instructed 100+ undergraduate students in wet lab procedures, scientific principles, and
                      experimental design.
                    </li>
                    <li>
                      Delivered actionable feedback on student work which measurably improved academic performance in
                      subsequent assignments.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-accent pb-2 font-sans">
                Education
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Toronto Metropolitan University</h3>
                  <p className="text-sm italic text-muted-foreground">Master of Science in Molecular Science</p>
                  <p className="text-sm text-muted-foreground mb-2">2024</p>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-muted-foreground">
                    <li>Completed 3-year research project, mastering new techniques and tools independently</li>
                    <li>
                      Presented data to faculty for quarterly review, building comfort with critical feedback and an
                      ability to pivot quickly from failure.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground">Toronto Metropolitan University</h3>
                  <p className="text-sm italic text-muted-foreground">Bachelor of Science in Biomedical Sciences</p>
                  <p className="text-sm text-muted-foreground">2021</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-accent pb-2 font-sans">
                Skills
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Automation</h3>
                  <p className="text-sm text-muted-foreground">
                    Orchestration (Zapier, Webhooks, Sub-Zaps, API Integration), error handling, debugging, No-code
                    platforms, rapid prototyping
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Platforms</h3>
                  <p className="text-sm text-muted-foreground">Zendesk, Stripe, Metabase, Google AppsScript</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">AI/ML</h3>
                  <p className="text-sm text-muted-foreground">
                    OpenAI (ChatGPT, Whisper), Google Gemini, Anthropic Claude, Prompt Engineering
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Operations</h3>
                  <p className="text-sm text-muted-foreground">Documentation, SOPs, dashboard creation, reporting</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Current Learning</h3>
                  <p className="text-sm text-muted-foreground">Javascript, Python, SQL, N8N</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-accent pb-2 font-sans">
                Awards & Leadership
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Zapier's Operations Automator of the Year</strong> (2025)
                </li>
                <li>
                  <strong className="text-foreground">Excellence in Teaching Award</strong> (2024)
                </li>
                <li>
                  <strong className="text-foreground">3-Minute Thesis® Competition, First Place</strong> (2023)
                </li>
              </ul>
            </section>
          </div>
        </section>
      </main>
    </div>
  )
}
