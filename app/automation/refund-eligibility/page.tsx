import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RefundEligibilityPage() {
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

          <h1 className="text-5xl font-serif font-bold mb-12 text-accent">Refund Eligibility Assessment System</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Column 1: Zap Visualization */}
            <div className="lg:col-span-1">
              <div className="bg-muted rounded-lg p-8 border border-border sticky top-8">
                <Image
                  src="/zapier-workflow-diagram-for-refund-eligibility-sys.jpg"
                  alt="Refund Eligibility Zapier Workflow"
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
                  Customer support agents spent significant time manually reviewing refund requests against complex
                  eligibility criteria. This led to inconsistent decisions and slow response times.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Developed an AI-powered system that automatically evaluates refund requests against BioRender's refund
                  policy. The automation pulls customer data from Stripe, analyzes usage patterns, and provides instant
                  eligibility assessments with detailed reasoning.
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
                      <div className="text-3xl font-bold text-accent mb-1">3,000+</div>
                      <div className="text-sm text-muted-foreground">Tickets Processed in Month 1</div>
                    </CardContent>
                  </Card>
                  <Card className="border-accent/30 bg-accent/5">
                    <CardContent className="pt-4 pb-4">
                      <div className="text-3xl font-bold text-accent mb-1">69%</div>
                      <div className="text-sm text-muted-foreground">Reduction in Resolution Time</div>
                    </CardContent>
                  </Card>
                  <Card className="border-accent/30 bg-accent/5">
                    <CardContent className="pt-4 pb-4">
                      <div className="text-3xl font-bold text-accent mb-1">39%</div>
                      <div className="text-sm text-muted-foreground">Faster First Replies</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">Project Details</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Stack:</strong> Zapier, OpenAI API, Stripe API, Zendesk
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
