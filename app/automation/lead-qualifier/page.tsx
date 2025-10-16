import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Clock, Users, TrendingUp, Zap, Shield, CheckCircle } from "lucide-react"
import { WorkflowViewer } from "@/components/workflow-viewer"

export default function LeadQualifierPage() {
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
            Lead Assessment & Rotator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI-powered lead qualification and intelligent assignment system that ensures every high-quality lead reaches the right team member quickly and fairly.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <div className="border-b border-border pb-8 mb-8">
            <h2 className="text-2xl font-light text-foreground mb-4">
              <span className="font-medium text-accent">Overview</span>
            </h2>
          </div>
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              This system automatically evaluates, qualifies, and assigns inbound leads from Zendesk to the appropriate team members. It uses AI to assess lead quality, confirm business or academic intent, and route qualified leads using a load-based system that respects availability, OOO status, and weekend logic.
            </p>
            
            {/* Interactive Workflow Viewer */}
            <WorkflowViewer
              imageSrc="/lead-assessment-workflow.png"
              title="Full Zapier Workflow"
              description=""
            />
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
                  <h3 className="font-medium text-foreground">Response Time</h3>
                  <p className="text-sm text-muted-foreground">Reduced by ~60%</p>
                </div>
              </div>
              <div className="text-2xl font-light text-foreground mb-2">
                Hours → Minutes
              </div>
              <p className="text-sm text-muted-foreground">
                From hours to minutes for lead response and assignment
              </p>
            </div>

            {/* Coverage */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Assignment Coverage</h3>
                  <p className="text-sm text-muted-foreground">100% since launch</p>
                </div>
              </div>
              <div className="text-2xl font-light text-foreground mb-2">
                Zero Missed Leads
              </div>
              <p className="text-sm text-muted-foreground">
                No leads left unassigned with OOO logic and fallback handling
              </p>
            </div>

            {/* Time Reclaimed */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Time Reclaimed</h3>
                  <p className="text-sm text-muted-foreground">120-150 hours/year</p>
                </div>
              </div>
              <div className="text-2xl font-light text-foreground mb-2">
                8-10 min per lead
              </div>
              <p className="text-sm text-muted-foreground">
                Automated processing saves significant time per lead
              </p>
            </div>

            {/* Fairness */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Fair Distribution</h3>
                  <p className="text-sm text-muted-foreground">Tracked & verified</p>
                </div>
              </div>
              <div className="text-2xl font-light text-foreground mb-2">
                Transparent Process
              </div>
              <p className="text-sm text-muted-foreground">
                Improved fairness and transparency in lead distribution
              </p>
            </div>
          </div>
        </section>


        {/* Key Results */}
        <section className="mb-16">
          <div className="border-b border-border pb-8 mb-8">
            <h2 className="text-2xl font-light text-foreground mb-4">
              <span className="font-medium text-accent">Key Results</span>
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Eliminated Missed Assignments</h3>
                <p className="text-sm text-muted-foreground">
                  OOO logic and fallback handling ensure no leads are ever missed or delayed
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Improved Conversion Consistency</h3>
                <p className="text-sm text-muted-foreground">
                  Team feedback shows better follow-up rates and conversion consistency
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Zero Duplicate Assignments</h3>
                <p className="text-sm text-muted-foreground">
                  Zapier Tables + JavaScript prevent simultaneous writes and conflicts
                </p>
              </div>
                </div>
            
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Built for Scale</h3>
                <p className="text-sm text-muted-foreground">
                  Modular architecture supports easy expansion and maintenance
                </p>
              </div>
            </div>
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
            {/* Round-Robin Assignment Logic */}
            <div className="bg-card/30 p-6 rounded-lg border border-border">
              <h3 className="font-medium text-foreground mb-4">Round-Robin Assignment Algorithm</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                The system uses a sophisticated round-robin assignment algorithm that respects agent availability while maintaining fair distribution. 
                It starts from the current rotator position and cycles through available agents, with fallback logic for when the preferred agent is unavailable.
              </p>
              <div className="bg-slate-900 p-4 rounded border border-slate-700">
                <pre className="text-xs text-slate-100 overflow-x-auto font-mono">
{`// Round-Robin Assignment with Availability Check
const names = inputData.names.split(",").map(n => n.trim());
const available = inputData.available.split(",").map(a => a.trim().toLowerCase() === "true");
const rotatorNum = parseInt(inputData.next, 10); // 1-based index
const numAgents = names.length;

// Normalize rotator number to 0-based index
const startIndex = (rotatorNum - 1 + numAgents) % numAgents;
let assigned = null;
let assignedIndex = null;
let fallbackUsed = false;

// Attempt to assign starting from rotator index
for (let i = 0; i < numAgents; i++) {
  const currentIndex = (startIndex + i) % numAgents;

  if (available[currentIndex]) {
    assigned = names[currentIndex];
    assignedIndex = currentIndex;
    fallbackUsed = i !== 0; // If not the first choice, it's a fallback
    break;
  }
}

// Build result with detailed reasoning
if (!assigned) {
  return {
    assignee: "NO_ONE_AVAILABLE",
    reason: \`No agents available. Tried to assign starting at \${names[startIndex]} (rotator #\${rotatorNum}).\`,
    newRotatorNumber: rotatorNum // Keep the same for next attempt
  };
}

// Calculate next rotator position (1-based)
const nextRotator = ((assignedIndex + 1) % numAgents) + 1;

return {
  assignee: assigned,
  reason: fallbackUsed 
    ? \`Assigned to \${assigned} (fallback from \${names[startIndex]})\`
    : \`Assigned to \${assigned} (rotator #\${rotatorNum})\`,
  newRotatorNumber: nextRotator,
  fallbackUsed: fallbackUsed
};`}
                </pre>
              </div>
            </div>

            {/* Data Processing & Edge Case Handling */}
            <div className="bg-card/30 p-6 rounded-lg border border-border">
              <h3 className="font-medium text-foreground mb-4">Data Processing & Edge Case Handling</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                The system handles complex data parsing challenges and prevents AI model inconsistencies through structural solutions 
                rather than relying on perfect prompts. This includes robust institution matching and strict business rule enforcement.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">JSON Data Handling:</strong> Raw JSON objects prevent comma-delimited parsing errors with complex institution names
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Structured Output Format:</strong> Numbered key-value pairs ensure consistent parsing by Zapier
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Logical Hierarchy Enforcement:</strong> Hard stops prevent rule shopping and out-of-order evaluation
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Business Context Hard-Coding:</strong> Explicit definitions eliminate model guesswork and misinterpretations
                  </div>
                </div>
              </div>
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
              The Lead Gen Assistant tested my patience and persistence more than almost any other automation I've built. The hardest part wasn't the logic; it was getting the AI to reliably interpret messy Zendesk ticket text and match it to the right institution in a massive dataset, all while following strict business rules without deviation.
            </p>
            
            <h3 className="font-medium text-foreground mt-8 mb-4">The Challenge of Inconsistent Interpretation</h3>
            
            <p>
              In the early stages, I was frustrated because the same prompt would work perfectly one run and fail completely the next. The model would sometimes latch onto the wrong part of a ticket comment, for example, treating a user's email signature ("Department of Biology, McGill University") as the requester's organization, even when the actual request came from a Gmail address. I tried adding disclaimers like "ignore signatures and unrelated names," but the model started overcorrecting and skipping valid organizations. It became clear that I couldn't just "prompt my way" out of inconsistent inputs.
            </p>
            
            <h3 className="font-medium text-foreground mt-8 mb-4">Structural Solutions Over Perfect Prompts</h3>
            
            <p>
              Another roadblock was output formatting. I needed the model to return results that Zapier could parse predictably, but GPT would occasionally add bullets, headings, or change label names. I spent hours rewriting the prompt trying to force Markdown consistency, until I realized that switching to numbered key-value pairs (1. Organization:, 2. License Type:) gave the structure enough rigidity for parsing while still keeping it readable. That small change eliminated nearly all format-related misfires.
            </p>
            
            <p>
              Then came the data-handling crisis. I initially passed in Google Sheet rows as comma-delimited text, assuming it would be simple to parse. It wasn't. Institutions like "University of Toronto, Mississauga" broke the logic every time. The model would split those names into multiple entries or drop them entirely. After a long debugging session, I discovered the fix: instead of using delimiters, I could pass the raw JSON row objects directly into the code step. That change made the dataset stable, searchable, and completely eliminated comma-related edge cases.
            </p>
            
            <h3 className="font-medium text-foreground mt-8 mb-4">Choosing the Right Model</h3>
            
            <p>
              I also learned how much model choice matters. I started with GPT-3.5-turbo, but it was too unpredictable for domain parsing. It would confuse "biorender.com" with "biomed.com" or hallucinate fake matches. Upgrading to GPT-4 instantly improved reasoning, but it also required more controlled prompts to prevent verbosity. I ultimately switched to Gemini 2.0 Flash because its larger context window allowed it to follow instructions more consistently and hallucinate less frequently.
            </p>
            
            <p>
              The key breakthrough came when I stopped treating the LLM as a helpful assistant and started treating it as a system that needs absolute, unambiguous logic. I replaced suggestions with commands, enforced logical hierarchy with hard stops, and hard-coded business context to eliminate model guesswork. The system uses structured output formats and raw JSON data handling to prevent parsing errors with complex institution names.
            </p>
            
            <h3 className="font-medium text-foreground mt-8 mb-4">Programming an LLM with Absolute Logic</h3>
            
            <p>
              The most critical lesson came when I stopped treating the LLM as a helpful assistant and started treating it as a system that needed to be programmed with absolute, unambiguous logic.
            </p>
            
            <p>
              <strong>The "Helpful" Inference Problem:</strong> When a lead requested 11 seats, the model qualified it, reasoning it was "close enough" to the 13-seat minimum. This demonstrated that the LLM's desire to be helpful can override subtle rules. The solution was replacing suggestions with absolute commands. Phrasing changed from "the minimum is 13" to "ZERO TOLERANCE: This is an ABSOLUTE, NON-NEGOTIABLE THRESHOLD. Any request for 12 seats or fewer is an immediate and irreversible disqualification."
            </p>
            
            <p>
              <strong>Rule Shopping and Hierarchy Violations:</strong> The most frustrating issue was when the model ignored a clear disqualification rule in Step 1 and jumped ahead to Step 3 to misapply a different rule. It was actively looking for a reason to qualify the lead, even if it meant breaking the logical hierarchy. The fix was adding explicit hierarchy enforcement: "If any disqualification condition is met...STOP ALL FURTHER EVALUATION." This built a logical firewall that prevented the model from reading ahead and misapplying rules out of order.
            </p>
            
            <p>
              <strong>Defining Business Context Explicitly:</strong> The model couldn't distinguish between generic terms ("licenses") and specific product terms ("Lab Licenses"). It didn't know my team's internal assumption that "5 licenses" means 5 individual seats, not a 5-seat Lab License product. The breakthrough was creating a "DEFAULT SEAT COUNT RULE" that explicitly stated: "a request for 'X licenses' MUST be interpreted as a request for 'X seats'." By hard-coding these business definitions directly into the prompt, I removed the model's need to guess and prevented critical misinterpretations.
            </p>
            
            <h3 className="font-medium text-foreground mt-8 mb-4">Key Takeaways</h3>
            
            <p>
              In the end, I learned that building reliable AI automations isn't just about good prompts. It's about building guardrails around the model. The system became both consistent and scalable only after I:
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Prioritized structure over cleverness:</strong> rigid output formats and JSON data handling eliminated edge cases</li>
              <li><strong>Used absolute, non-negotiable language:</strong> replaced suggestions with commands to prevent helpful but incorrect inferences</li>
              <li><strong>Enforced logical hierarchy explicitly:</strong> added hard stops to prevent rule shopping</li>
              <li><strong>Hard-coded business context:</strong> defined every assumption and default to eliminate ambiguity</li>
              <li><strong>Chose the right model for the task:</strong> balanced reasoning capability with context window and consistency</li>
            </ul>
            
            <p>
              Once I stopped trying to make the model perfect and instead focused on containing its variability through structure, validation, and better data formatting, the Lead Gen Assistant became a reliable, production-ready system.
            </p>
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