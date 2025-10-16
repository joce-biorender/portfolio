import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Clock, Users, TrendingUp, Zap, Shield, CheckCircle, Target } from "lucide-react"
import { WorkflowViewer } from "@/components/workflow-viewer"

export default function ARTriagerPage() {
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
            AR Ticket Triager
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dynamic AR ticket routing system that instantly assigns tickets to the right team member based on availability, workload, and expertise.
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
              Built during a company hackathon, this automation dynamically routes incoming AR (Accounts Receivable) tickets to the right assignee instantly. The system integrates Zendesk, Zapier Tables, and Slack, and uses JavaScript-based logic to factor in availability, OOO status, and ticket load for balanced assignment.
            </p>
            
            {/* Interactive Workflow Viewer */}
            <WorkflowViewer
              imageSrc="/ar-triager-workflow.png"
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
            {/* Volume Processed */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Tickets Processed</h3>
                  <p className="text-sm text-muted-foreground">Over 9,000 tickets</p>
                </div>
              </div>
              <div className="text-2xl font-light text-foreground mb-2">
                Massive Scale
              </div>
              <p className="text-sm text-muted-foreground">
                Successfully triaged thousands of AR tickets since deployment
              </p>
            </div>

            {/* Assignment Time */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
              <div>
                  <h3 className="font-medium text-foreground">Assignment Time</h3>
                  <p className="text-sm text-muted-foreground">100% faster</p>
                </div>
              </div>
              <div className="text-2xl font-light text-foreground mb-2">
                16.7 hrs → 0.0 hrs
              </div>
              <p className="text-sm text-muted-foreground">
                Instant ticket assignment eliminates manual triage delays
              </p>
            </div>

            {/* Response Time */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Response Time</h3>
                  <p className="text-sm text-muted-foreground">55% improvement</p>
                </div>
              </div>
              <div className="text-2xl font-light text-foreground mb-2">
                68.0 hrs → 30.3 hrs
              </div>
              <p className="text-sm text-muted-foreground">
                Faster first reply times improve customer experience
              </p>
            </div>

            {/* Resolution Time */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                  <h3 className="font-medium text-foreground">Resolution Time</h3>
                  <p className="text-sm text-muted-foreground">64% improvement</p>
                </div>
              </div>
              <div className="text-2xl font-light text-foreground mb-2">
                95.2 hrs → 33.9 hrs
              </div>
              <p className="text-sm text-muted-foreground">
                Dramatically faster full resolution times
              </p>
            </div>

            {/* Productivity */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Agent Productivity</h3>
                  <p className="text-sm text-muted-foreground">8% increase</p>
                </div>
              </div>
              <div className="text-2xl font-light text-foreground mb-2">
                214 → 232 tickets
              </div>
              <p className="text-sm text-muted-foreground">
                More tickets solved per agent with better workload distribution
              </p>
            </div>

            {/* Zero Unassigned */}
            <div className="border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                </div>
              <div>
                  <h3 className="font-medium text-foreground">Zero Unassigned</h3>
                  <p className="text-sm text-muted-foreground">Since launch</p>
                </div>
              </div>
              <div className="text-2xl font-light text-foreground mb-2">
                Perfect Coverage
              </div>
              <p className="text-sm text-muted-foreground">
                Every ticket gets assigned immediately with no manual intervention
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
            <h3 className="font-medium text-foreground mt-8 mb-4">Learning to Debug Production Systems</h3>
            
            <p>
              The first major issue hit me when tickets weren't getting assigned to anyone. At first, I thought it was a logic error in my assignment rules. It wasn't. When two tickets came in almost simultaneously, both runs of the Zap would check who had the lowest workload at the exact same moment, and somehow in that collision, the assignment would fail completely and the ticket would sit unassigned.
            </p>
            
            <p>
              I had no idea what was happening. The error messages weren't helpful, and the behavior was completely inconsistent. After digging through forums and Googling, I learned I was dealing with something called a race condition. I'd never encountered this concept before, but once I understood it, the fix became clear. I added intentional delays to stagger API calls and moved the load calculation into one code step that would run all the way through before moving on to assignment.
            </p>
            
            <h3 className="font-medium text-foreground mt-8 mb-4">Solving the API Rate Limit Problem</h3>
            
            <p>
              To check each agent's current ticket load, I initially used Zapier's standard webhook configuration. It kept failing and I couldn't figure out why. I'd test it, see the failure, tweak the logic, test again, same issue. It wasn't until I looked at one agent's ticket queue and realized they had a massive number of open tickets that it clicked: I was hitting Zendesk's API rate limits. The solution was switching to a custom API request setup where I could batch queries more efficiently and control the request frequency.
            </p>
            
            <p>
              I also learned to write modular code within the Zap. Instead of cramming all the assignment logic into one giant code block, I created separate code steps for each ticket category. Each step handled its own load calculation, timezone checks, and agent selection logic. This made debugging much easier because I could test each category's assignment logic independently.
            </p>
            
            <h3 className="font-medium text-foreground mt-8 mb-4">Designing for Operational Reality</h3>
            
            <p>
              As the system matured, I learned that theoretical elegance often collides with operational complexity. The routing logic couldn't be one-size-fits-all. It needed to accommodate global teams, timezone constraints, and transitional periods.
            </p>
            
            <p>
              I built time-based eligibility directly into the assignment algorithm, defining specific working hour windows for each agent and checking real-time conditions before routing. This prevented overnight tickets from sitting unassigned or agents receiving work after logging off.
            </p>
            
            <p>
              For exceptions like onboarding periods or schedule changes, explicit exclusions proved clearer than complex conditional logic. Temporarily filtering specific agents from certain rotations with a single, well-commented line of code was more reliable and easier to update when circumstances changed.
            </p>
            
            <h3 className="font-medium text-foreground mt-8 mb-4">The Human Element</h3>
            
            <p>
              Working closely with the AR team taught me that automation design has to account for human trust. Technical decisions like protecting newer team members from overflow during training, ensuring international agents didn't receive assignments after hours, and creating retry mechanisms so staff didn't return to chaos after holidays were about agent experience, not just efficiency.
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
            {/* Load-Based Assignment Logic */}
            <div className="bg-card/30 p-6 rounded-lg border border-border">
              <h3 className="font-medium text-foreground mb-4">Load-Based Assignment Algorithm</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                The core assignment logic uses a sophisticated load-balancing algorithm that considers agent availability, 
                current workload, and timezone-aware working hours. This prevents race conditions by calculating assignments 
                atomically within a single code step.
              </p>
              <div className="bg-muted/50 p-4 rounded border">
                <pre className="text-xs text-foreground overflow-x-auto">
{`// Parse inputs from Zapier
const names = inputData.names.split(",").map(n => n.trim());
const available = inputData.available.split(",").map(a => a.trim().toLowerCase() === "true");

// Map agent open ticket counts from individually named inputs
const openCounts = {
  "Agent1": parseInt(inputData.agent1_open, 10) || 0,
  "Agent2": parseInt(inputData.agent2_open, 10) || 0,
  "Agent3": parseInt(inputData.agent3_open, 10) || 0,
  "Agent4": parseInt(inputData.agent4_open, 10) || 0
};

// Get current hour in ET (timezone-aware)
const now = new Date();
const etHour = now.toLocaleString("en-US", {
  timeZone: "America/Toronto",
  hour: "numeric",
  hour12: false
});
const currentHour = parseInt(etHour, 10);

// Define working hours for each agent
const workingHours = {
  "Agent1": currentHour >= 4 && currentHour < 20,   // 4am-8pm ET
  "Agent2": true,  // Toronto-based, no restrictions
  "Agent3": true,   // Toronto-based, no restrictions
  "Agent4": true    // Toronto-based, no restrictions
};

// Build agent objects with availability and load data
const agents = names
  .filter(name => name !== "Agent5")  // Temporarily exclude Agent5
  .map((name, index) => ({
    name,
    available: available[names.indexOf(name)],
    openTickets: openCounts[name] ?? 0,
    inWorkingHours: workingHours[name] ?? true
  }));

// Filter for eligible agents (available AND within working hours)
const eligible = agents.filter(agent => agent.available && agent.inWorkingHours);

// Assignment logic with tie-breaking
let assignee = "NO_ONE_AVAILABLE";
let tied = [];
let reason = "";

if (eligible.length > 0) {
  const minOpen = Math.min(...eligible.map(a => a.openTickets));
  tied = eligible.filter(a => a.openTickets === minOpen);

  if (tied.length === 1) {
    assignee = tied[0].name;
    reason = \`Assigned to \${assignee} with lowest load (\${minOpen} open tickets)\`;
  } else {
    // Random selection among tied agents
    const randomIndex = Math.floor(Math.random() * tied.length);
    assignee = tied[randomIndex].name;
    reason = \`Randomly assigned among \${tied.length} agents tied at \${minOpen} open tickets\`;
  }
} else {
  reason = "No agents available";
}

return {
  assignee,
  eligibleAgents: eligible.map(a => \`\${a.name}: \${a.openTickets} open\`),
  tiedAtMin: tied.map(a => a.name),
  reason,
  currentHour: \`\${currentHour}:00 ET\`
};`}
                </pre>
                </div>
              </div>

            {/* Timezone-Aware Routing */}
            <div className="bg-card/30 p-6 rounded-lg border border-border">
              <h3 className="font-medium text-foreground mb-4">Timezone-Aware Business Logic</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                The most critical design decision was treating timezone availability as strategic business logic, not just a simple on/off flag. 
                With team members working across different time zones and schedules, I built time-based eligibility directly into the assignment algorithm.
              </p>
              <div className="bg-muted/50 p-4 rounded border">
                <pre className="text-xs text-foreground overflow-x-auto">
{`// Timezone-aware working hours validation
const isWithinWorkingHours = (agent, currentTime = new Date()) => {
  const agentTimezone = agent.timezone || 'UTC';
  const localTime = new Date(currentTime.toLocaleString("en-US", {timeZone: agentTimezone}));
  const localHour = localTime.getHours();
  const localDay = localTime.getDay(); // 0 = Sunday, 6 = Saturday
  
  // Weekend check
  if (localDay === 0 || localDay === 6) {
    return { 
      available: false, 
      reason: \`Weekend in \${agentTimezone} (local time: \${localTime.toLocaleString()})\` 
    };
  }
  
  // Working hours check (9 AM - 5 PM local time)
  if (localHour < 9 || localHour >= 17) {
    return { 
      available: false, 
      reason: \`Outside working hours in \${agentTimezone} (local time: \${localTime.toLocaleString()})\` 
    };
  }
  
  return { available: true, reason: "Within working hours" };
};

// Enhanced agent filtering with detailed reasoning
const filterAvailableAgents = (agents) => {
  const results = {
    available: [],
    filtered: [],
    summary: {}
  };
  
  agents.forEach(agent => {
    const timeCheck = isWithinWorkingHours(agent);
    const statusCheck = agent.status === 'available';
    const oooCheck = !agent.ooo_until || new Date(agent.ooo_until) <= new Date();
    
    if (timeCheck.available && statusCheck && oooCheck) {
      results.available.push(agent);
    } else {
      results.filtered.push({
        agent: agent.name,
        reasons: [
          !timeCheck.available ? timeCheck.reason : null,
          !statusCheck ? "Marked as unavailable" : null,
          !oooCheck ? \`OOO until \${agent.ooo_until}\` : null
        ].filter(Boolean)
      });
    }
  });
  
  results.summary = {
    total_agents: agents.length,
    available_count: results.available.length,
    filtered_count: results.filtered.length
  };
  
  return results;
};`}
                </pre>
              </div>
            </div>

            {/* System Architecture */}
            <div className="bg-card/30 p-6 rounded-lg border border-border">
              <h3 className="font-medium text-foreground mb-4">System Architecture & Error Handling</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                The system uses a modular approach with separate Zaps for different ticket types, each with their own load-balancing logic. 
                Error handling includes fallback assignments and detailed logging for debugging. The 1-minute delay prevents race conditions 
                by ensuring data consistency before assignment logic runs.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Modular Design:</strong> Separate code steps for different ticket types (PO, Credit Card, Dunning) with shared load-balancing logic
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Race Condition Prevention:</strong> 1-minute delay step ensures all parallel data gathering completes before assignment
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Comprehensive Logging:</strong> Every assignment logged to Google Sheets with detailed reasoning for audit trails
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-foreground">Fallback Handling:</strong> When no agents available, tickets are tagged for manual review with clear reasoning
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