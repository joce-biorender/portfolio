import { ArrowLeft, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ARTriagerPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="text-base sm:text-lg text-foreground font-semibold">Jocelyne Mendez-Guzman</span>
            <div className="hidden md:flex items-center gap-6 font-medium">
              <a href="/#automation" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Work
              </a>
              <a href="/#resume" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          <h1 className="text-3xl sm:text-4xl font-light text-foreground mb-12">
            <span className="font-medium text-accent">AR Triager System</span>
          </h1>

          <div className="space-y-12">
            {/* Problem & Solution */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-4 border-b border-border pb-2">The Problem</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  BioRender's Accounts Receivable (AR) team was overwhelmed with high-volume, repetitive ticket triage.
                  Manual sorting delayed responses and created bottlenecks in the support workflow.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-4 border-b border-border pb-2">The Solution</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built an AI-powered Zapier automation that analyzes incoming AR tickets, categorizes them by urgency
                  and type, and routes them to the appropriate team members. The system uses OpenAI's API to understand
                  ticket context and make intelligent routing decisions.
                </p>
              </div>
            </div>

            {/* Impact Metrics */}
            <div>
              <h3 className="text-lg font-medium text-foreground mb-6 border-b border-border pb-2">Impact Metrics</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center py-6 border-b border-border">
                  <div className="text-2xl font-medium text-accent mb-2">69%</div>
                  <div className="text-sm text-muted-foreground">Faster Resolution</div>
                </div>
                <div className="text-center py-6 border-b border-border">
                  <div className="text-2xl font-medium text-accent mb-2">39%</div>
                  <div className="text-sm text-muted-foreground">Faster First Reply</div>
                </div>
                <div className="text-center py-6 border-b border-border">
                  <div className="text-2xl font-medium text-accent mb-2">50%</div>
                  <div className="text-sm text-muted-foreground">More Throughput</div>
                </div>
              </div>
            </div>

            {/* Workflow Diagram */}
            <div>
              <h3 className="text-lg font-medium text-foreground mb-6 border-b border-border pb-2">Workflow Diagram</h3>
              <div className="border border-border p-6">
                <Image
                  src="/zapier-workflow-diagram-for-ar-triager-system-with.jpg"
                  alt="AR Triager Zapier Workflow"
                  width={800}
                  height={1200}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4 border-b border-border pb-2">Project Details</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Stack:</span> Zapier, OpenAI API, Zendesk
                </p>
                <p>
                  <span className="font-medium text-foreground">Status:</span> Live in Production
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
