import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Clock, Shield, TrendingUp, Zap, CheckCircle, DollarSign } from "lucide-react"
import { WorkflowViewer } from "@/components/workflow-viewer"

export default function RefundEligibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/#automation" className="text-muted-foreground hover:text-foreground transition-colors">
                Automation
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-light text-foreground mb-6">
            Refund Eligibility System
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Automated refund eligibility determination system that replaced manual judgment-based processes with consistent, policy-aligned automation.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <div className="border-b border-border pb-8 mb-8">
            <h2 className="text-2xl font-light text-foreground mb-4">
              <span className="font-medium text-accent">Overview</span>
            </h2>
          </div>
          <div className="space-y-6 text-base text-foreground leading-relaxed">
            <p>
              This automation determines whether users qualify for a refund based on their last charge date, plan type (monthly or annual), and premium feature usage (hi-res export or publication license export). It handles optional fields, timezone normalization, and outputs structured results.
            </p>
            
            {/* Interactive Workflow Viewer */}
            <WorkflowViewer
              imageSrc="/refund-eligibility-workflow.png"
              title="Full Zapier Workflow"
              description=""
            />
            
            <p>
              The automation replaced a manual, judgment-based process with a consistent, policy-aligned system that allows agents to decide refund eligibility instantly.
            </p>
          </div>
        </section>

        {/* Impact & Metrics */}
        <section className="mb-16">
          <div className="border-b border-border pb-8 mb-8">
            <h2 className="text-2xl font-light text-foreground mb-4">
              <span className="font-medium text-accent">Impact & Metrics</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Time Savings */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Time Savings</h3>
                  <p className="text-sm text-muted-foreground">4-7 minutes per ticket</p>
                </div>
              </div>
              <div className="text-2xl font-light text-foreground mb-2">
                400-550 hours/year
              </div>
              <p className="text-sm text-muted-foreground">
                Based on monthly refund volume, significant time reclaimed for agents
              </p>
            </div>

            {/* Response Time */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
              <div>
                  <h3 className="font-medium text-foreground">Response Time</h3>
                  <p className="text-sm text-muted-foreground">22% improvement</p>
                </div>
              </div>
              <div className="text-2xl font-light text-foreground mb-2">
                Faster Resolution
              </div>
              <p className="text-sm text-muted-foreground">
                Agents no longer need to reference Metabase manually for eligibility
              </p>
            </div>

            {/* CSAT Improvement */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">CSAT Improvement</h3>
                  <p className="text-sm text-muted-foreground">0.2-0.3 points</p>
                </div>
              </div>
              <div className="text-2xl font-light text-foreground mb-2">
                Better Experience
              </div>
              <p className="text-sm text-muted-foreground">
                Faster, clearer responses lead to improved customer satisfaction
              </p>
            </div>

            {/* Compliance */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-orange-600" />
                </div>
              <div>
                  <h3 className="font-medium text-foreground">Zero Mis-refunds</h3>
                  <p className="text-sm text-muted-foreground">Since launch</p>
                </div>
              </div>
              <div className="text-2xl font-light text-foreground mb-2">
                Perfect Compliance
              </div>
              <p className="text-sm text-muted-foreground">
                Eliminated policy inconsistencies and ensured Terms of Service compliance
              </p>
            </div>
          </div>
        </section>



        {/* Lessons Learned */}
        <section className="mb-16">
          <div className="border-b border-border pb-8 mb-8">
            <h2 className="text-2xl font-light text-foreground mb-4">
              <span className="font-medium text-accent">Lessons Learned</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              This project taught me how much stronger automations become when they are built collaboratively. I built the Refund Eligibility Automation with my colleague <a href="https://www.linkedin.com/in/mayet-awoke-a059481a7" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 underline">Mayet Awoke</a>, and most of it came together through Slack huddles with my screen shared. We built the system piece by piece, testing, debugging, and rewriting logic until we had a working minimum viable product. I handled the code-based logic inside Zapier, and Mayet pressure-tested the system's behaviour in real-world refund scenarios.
            </p>
            
            <h3 className="font-medium text-foreground mt-8 mb-4">Handling Incomplete and Inconsistent Data</h3>
            
            <p>
              Early on, we ran into problems with incomplete or inconsistent data. Some users were missing charge dates or export timestamps, which caused the automation to fail or incorrectly mark them as ineligible. We fixed this by rewriting the logic to check each field conditionally, evaluating only what existed instead of assuming full data. This immediately stabilized the system and made the output more reliable.
            </p>
            
            <h3 className="font-medium text-foreground mt-8 mb-4">Adding Transparency to Black Box Logic</h3>
            
            <p>
              Another challenge was that the automation initially acted like a black box. It would return a simple "Eligible" or "Not Eligible," leaving agents confused about the reason. We decided to add a clear output that included both a human-readable reason and a short machine-readable code, such as PREMIUM, 7DAYS, or 30DAYS. This change gave agents clarity while keeping the logic traceable for future analytics.
            </p>
            
            <div className="my-8">
              <img 
                src="/mayet-suggestion.png" 
                alt="Mayet suggesting human-in-the-loop approach in Slack" 
                className="max-w-lg mx-auto rounded-lg border border-border shadow-sm"
              />
            </div>
            
            <h3 className="font-medium text-foreground mt-8 mb-4">Implementing a Human-in-the-Loop Review Step</h3>
            
            <p>
              The biggest improvement came from adding a human-in-the-loop step, which was actually Mayet's idea. After watching a session from Zapier's ZapConnect Conference, she suggested we adopt that model for refund reviews. At first, I wanted to keep the automation fully autonomous, but we realized that refund cases often include gray areas like partial usage or borderline timestamps. Adding a review path for uncertain results made the system much more accurate and built trust among the team.
            </p>
            
            <h3 className="font-medium text-foreground mt-8 mb-4">Resolving Timezone Inconsistencies</h3>
            
            <p>
              We also discovered subtle timezone inconsistencies between Stripe, Metabase, and Zendesk. I fixed this by normalizing all timestamps to Coordinated Universal Time (UTC) before running eligibility checks. Once that was in place, false mismatches near midnight disappeared entirely.
            </p>
            
            <h3 className="font-medium text-foreground mt-8 mb-4">Key Takeaways</h3>
            
            <p>
              Looking back, this project showed me how collaboration and iteration can elevate a simple workflow into a reliable, policy-aligned system. Mayet's idea for a human review layer and my work refining the code blocks complemented each other perfectly. By combining perspectives, we built something far more accurate and resilient than either of us could have built alone.
            </p>
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="mb-16">
          <div className="border-b border-border pb-8 mb-8">
            <h2 className="text-2xl font-light text-foreground mb-4">
              <span className="font-medium text-accent">Technical Deep Dive</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {/* AI Classification Logic */}
            <div className="bg-card/30 p-6 rounded-lg border border-border">
              <h3 className="font-medium text-foreground mb-4">AI-Powered Refund Classification</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                The system uses Gemini 2.0 Flash to analyze customer communications and determine if they're requesting a legitimate refund. 
                The AI prompt is designed to distinguish between refund requests and other types of inquiries like cancellations or technical support.
              </p>
              <div className="bg-muted/50 p-4 rounded border">
                <pre className="text-xs text-foreground overflow-x-auto">
{`// AI Classification Prompt (Gemini 2.0 Flash)
Role: You are a highly skilled and empathetic customer service AI assistant 
for a subscription-based service, specializing in meticulous email analysis 
and intent classification.

Task: Carefully review the entire provided email 'Thread' AND 'Subject' to 
categorize the customer's primary request into one of two distinct categories:

Not a Refund: The customer's primary intent does not involve seeking financial 
compensation or the reversal/prevention of a charge. This includes general 
inquiries, technical support requests, account updates, standard cancellation 
requests where no billing dispute is present.

Refund Request: The customer's primary intent is to seek financial compensation, 
the reversal of a charge, or the prevention of an unwanted charge. This includes:
- Explicitly asking for money back
- Requesting reimbursement  
- Disputing a charge and seeking its removal
- Stating they did not authorize a charge
- Expressing dissatisfaction with a service and indicating a desire for 
  financial recompense

Output Format:
Category: [Not a Refund / Refund Request]
Explanation: [Detailed reasoning with specific quotes from the email]
Additional Observations: [Unusual circumstances, escalation factors]
Confidence Level: [High / Medium / Low]`}
                </pre>
              </div>
            </div>

            {/* Data Handling & Timezone Normalization */}
            <div className="bg-card/30 p-6 rounded-lg border border-border">
              <h3 className="font-medium text-foreground mb-4">Data Preprocessing & Timezone Handling</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                The system handles incomplete data gracefully and normalizes all timestamps to UTC to prevent timezone-related inconsistencies 
                between Stripe, Metabase, and Zendesk. This ensures accurate eligibility calculations regardless of when or where data was recorded.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Conditional Field Checking:</strong> Only evaluates fields that exist, preventing failures from missing data
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">UTC Normalization:</strong> All timestamps converted to UTC before eligibility calculations
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Structured Output:</strong> Returns both human-readable explanations and machine-readable codes (PREMIUM, 7DAYS, 30DAYS)
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Human-in-the-Loop:</strong> Uncertain cases flagged for manual review to handle gray areas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Back to Portfolio */}
        <div className="text-center pt-8 border-t border-border">
          <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background font-normal px-8 py-3 rounded-none">
            <Link href="/#automation">
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}