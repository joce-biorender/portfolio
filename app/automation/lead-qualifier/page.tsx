import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LeadQualifierPage() {
  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-serif font-bold text-lg text-foreground">Jocelyne Mendez-Guzman</span>
            <div className="flex items-center gap-6">
              <a href="/#home" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                Home
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
        <div className="max-w-6xl mx-auto px-8 py-16">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          <h1 className="text-5xl font-serif font-bold mb-12 text-accent">Lead Gen AI Qualifier + Rotator</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Column 1: Zap Visualization */}
            <div className="lg:col-span-1">
              <div className="bg-muted rounded-lg p-8 border border-border sticky top-8">
                <Image
                  src="/zapier-workflow-diagram-for-lead-qualification-and.jpg"
                  alt="Lead Gen AI Qualifier Zapier Workflow"
                  width={400}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Column 2: The Narrative */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">The Problem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sales leads from the website contact form sat unassigned for hours, sometimes days. Manual lead
                  qualification was slow, and round-robin assignment didn't account for team capacity or expertise.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Created an intelligent lead routing system that uses AI to qualify leads based on company size,
                  industry, and use case. The system then assigns leads to the most appropriate sales rep based on
                  current workload, expertise, and availability, with instant Slack notifications.
                </p>
              </div>
            </div>

            {/* Column 3: Data & Details */}
            <div className="lg:col-span-1 space-y-6">
              {/* Impact Metrics */}
              <div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">Impact Metrics</h3>
                <div className="space-y-3">
                  <Card className="border-accent/30 bg-accent/5">
                    <CardContent className="pt-4 pb-4">
                      <div className="text-sm text-muted-foreground mb-1">Avg. Assignment Time</div>
                      <div className="text-2xl font-bold text-accent">16 hrs → 0.1 hrs</div>
                    </CardContent>
                  </Card>
                  <Card className="border-accent/30 bg-accent/5">
                    <CardContent className="pt-4 pb-4">
                      <div className="text-sm text-muted-foreground mb-1">Avg. First Reply</div>
                      <div className="text-2xl font-bold text-accent">24 hrs → 4.2 hrs</div>
                    </CardContent>
                  </Card>
                  <Card className="border-accent/30 bg-accent/5">
                    <CardContent className="pt-4 pb-4">
                      <div className="text-sm text-muted-foreground mb-1">Pipeline Value</div>
                      <div className="text-2xl font-bold text-accent">$284K → $426K</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">Project Details</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Stack:</strong> Zapier, OpenAI API, Google Sheets, Slack API
                  </p>
                  <p>
                    <strong className="text-foreground">Status:</strong> Live in Production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
