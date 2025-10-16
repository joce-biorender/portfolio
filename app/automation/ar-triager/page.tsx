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

        {/* Lessons Learned */}
        <section className="mb-16">
          <div className="border-b border-border pb-8 mb-8">
            <h2 className="text-2xl font-light text-foreground mb-4">
              <span className="font-medium text-accent">Lessons Learned</span>
            </h2>
          </div>
          
          <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
            <p>
              Building the AR Triage System pushed me to think beyond surface-level automation and design for system reliability, fairness, and resilience. Early on, I encountered several issues that forced me to debug across multiple layers of Zapier, Zendesk API, and JavaScript logic simultaneously.
            </p>
            
            <p>
              For example, the system was intermittently assigning tickets to the wrong agent or skipping assignments altogether. After investigating, I discovered that Zapier's asynchronous execution was causing two Zaps triggered at nearly the same time to both fetch the same "lowest-load" agent before either could update Zendesk. This created race conditions that only appeared under load. To fix it, I restructured the flow, added a controlled delay to stagger API calls, and moved load-calculation logic into a dedicated code step so it would complete atomically before assignment continued.
            </p>
            
            <p>
              Another layer of debugging involved Zendesk's API behavior. The payload for updating ticket assignees required a specific JSON structure, and a small syntax error or missing field would cause silent failures that looked like logic bugs. I learned to validate responses after every API call and to use conditional fallback routes in Zapier so the system could notify the AR Slack channel if an assignment failed instead of leaving a ticket unassigned.
            </p>
            
            <p>
              I also learned the importance of data validation and modular design. Instead of keeping all logic in one large Zap, I broke it into smaller sub-flows and tested each in isolation, such as separating the load counter, assignment logic, and Slack notifier into distinct, debuggable components. This approach made the system both more stable and easier to iterate on.
            </p>
            
            <h3 className="font-medium text-foreground mt-8 mb-4">Designing for Operational Reality</h3>
            
            <p>
              As the system matured, I learned that theoretical elegance often collides with operational complexity. The routing logic couldn't be one-size-fits-all. It needed to accommodate global teams, timezone constraints, and transitional periods.
            </p>
            
            <p>
              The most critical design decision was treating timezone availability as strategic business logic, not just a simple on/off flag. With team members working across different time zones and schedules, I built time-based eligibility directly into the assignment algorithm. This meant defining specific working hour windows for each agent and checking real-time conditions before routing, preventing scenarios where overnight tickets would sit unassigned or agents would receive work after logging off.
            </p>
            
            <p>
              During onboarding periods or schedule changes, the system needed to handle exceptions without breaking. Rather than building complex conditional logic, explicit exclusions proved clearer and more maintainable. For example, temporarily filtering specific agents from certain rotations with a single, well-commented line of code was far more reliable than intricate checks. These rules could be easily removed when circumstances changed, with inline documentation explaining the business reasoning.
            </p>
            
            <h3 className="font-medium text-foreground mt-8 mb-4">The Human Element</h3>
            
            <p>
              Beyond the technical lessons, this project deepened my understanding of cross-functional collaboration. Working closely with the AR team taught me to balance automation design with human trust, ensuring the system felt transparent and fair while optimizing for speed and accuracy.
            </p>
            
            <p>
              The automation wasn't just about distributing tickets efficiently. It was about supporting agents' ability to do their jobs well. Technical decisions like protecting newer team members from overflow during training, ensuring international agents didn't receive assignments after hours, and creating retry mechanisms so staff didn't return to chaos after holidays were fundamentally about agent experience, not just operational efficiency.
            </p>
            
            <p>
              I learned to always ask: "How does this affect the human using the system?" The best automations don't just move data faster. They earn confidence from the teams that rely on them and make people's work lives genuinely better. They handle the messy reality of how humans actually work (across timezones, during transitions, with varying skill levels) with grace and resilience.
            </p>
            
            <p className="font-medium text-foreground">
              The mark of a great automation isn't zero bugs. It's building systems that gracefully handle complexity while remaining transparent, fair, and trustworthy to the people they serve.
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