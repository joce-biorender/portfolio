import { NextResponse } from "next/server"
import { jsPDF } from "jspdf"

export async function GET() {
  try {
    console.log("[v0] Starting PDF generation")

    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "letter",
    })

    // Set default font
    doc.setFont("times", "normal")

    let y = 50

    doc.setFontSize(22)
    doc.setFont("times", "bold")
    doc.text("Jocelyne Mendez-Guzman", 306, y, { align: "center" })
    y += 15

    doc.setFontSize(14)
    doc.setFont("times", "normal")
    doc.text("Operations & AI Automation Specialist", 306, y, { align: "center" })
    y += 12

    doc.setFontSize(10)
    doc.text("Toronto, Canada  |  jocelynemendezg@gmail.com  |  linkedin.com/in/jocelyne-mendez-guzman/", 306, y, {
      align: "center",
    })
    y += 20

    doc.setFontSize(11)
    doc.setFont("times", "bold")
    doc.text("PROFESSIONAL SUMMARY", 50, y)
    y += 12

    doc.setFontSize(10)
    doc.setFont("times", "normal")
    const summary =
      "Operations specialist with proven ability to rapidly prototype and scale AI-powered workflows in SaaS environments. Bridges technical implementation with business operations, eliminating manual processes across GTM, Customer Success, and internal teams. MSc in Molecular Science brings scientific rigor to building resilient systems. Recognized as Zapier's 2025 Operations Automator of the Year."
    const summaryLines = doc.splitTextToSize(summary, 512)
    doc.text(summaryLines, 50, y)
    y += summaryLines.length * 12 + 15

    doc.setFontSize(11)
    doc.setFont("times", "bold")
    doc.text("WORK EXPERIENCE", 50, y)
    y += 12

    // Job 1
    doc.setFontSize(10)
    doc.setFont("times", "bold")
    doc.text("Operations Specialist, Customer Experience at BioRender (2021–Present)", 50, y)
    y += 12

    doc.setFont("times", "normal")
    const job1Bullets = [
      "Built an AI-powered triage system that reduced resolution time 69%, an AI Lead Assessment Agent that qualified $78,941 pipeline, and a Refund Eligibility automation that eliminated 400-550 hours of manual refund processing.",
      "Debugged and refined automations by adjusting prompts, API integrations, and business logic when systems failed, maintaining 90%+ uptime.",
      "Enabled teamwide adoption through documentation, SOPs, training materials, and workshops for automations and AI-powered workflows.",
    ]

    job1Bullets.forEach((bullet) => {
      const lines = doc.splitTextToSize(bullet, 490)
      doc.text("•", 55, y)
      doc.text(lines, 70, y)
      y += lines.length * 11 + 3
    })
    y += 8

    // Job 2
    doc.setFont("times", "bold")
    doc.text("Graduate Educational Developer at Toronto Metropolitan University (2023–2024)", 50, y)
    y += 12

    doc.setFont("times", "normal")
    const job2Bullets = [
      "Designed and delivered 10 professional development workshops, building frameworks that enabled 100+ graduate students to become effective educators.",
      "Revamped training modules using pedagogical frameworks (Bloom's Taxonomy) to ensure progressive skill development and measurable outcomes.",
    ]

    job2Bullets.forEach((bullet) => {
      const lines = doc.splitTextToSize(bullet, 490)
      doc.text("•", 55, y)
      doc.text(lines, 70, y)
      y += lines.length * 11 + 3
    })
    y += 8

    // Job 3
    doc.setFont("times", "bold")
    doc.text("Graduate Teaching Assistant at Toronto Metropolitan University (2021-2024)", 50, y)
    y += 12

    doc.setFont("times", "normal")
    const job3Bullets = [
      "Instructed 100+ undergraduate students in wet lab procedures, scientific principles, and experimental design.",
      "Delivered actionable feedback on student work which measurably improved academic performance in subsequent assignments.",
    ]

    job3Bullets.forEach((bullet) => {
      const lines = doc.splitTextToSize(bullet, 490)
      doc.text("•", 55, y)
      doc.text(lines, 70, y)
      y += lines.length * 11 + 3
    })
    y += 15

    doc.setFontSize(11)
    doc.setFont("times", "bold")
    doc.text("EDUCATION", 50, y)
    y += 12

    doc.setFontSize(10)
    doc.text("Master of Science in Molecular Science, Toronto Metropolitan University (2024)", 50, y)
    y += 12

    doc.setFont("times", "normal")
    const edu1Bullets = [
      "Completed 3-year research project, mastering new techniques and tools independently",
      "Presented data to faculty for quarterly review, building comfort with critical feedback and an ability to pivot quickly from failure.",
    ]

    edu1Bullets.forEach((bullet) => {
      const lines = doc.splitTextToSize(bullet, 490)
      doc.text("•", 55, y)
      doc.text(lines, 70, y)
      y += lines.length * 11 + 3
    })
    y += 8

    doc.setFont("times", "bold")
    doc.text("Bachelor of Science in Biomedical Sciences, Toronto Metropolitan University (2021)", 50, y)
    y += 18

    doc.setFontSize(11)
    doc.text("ACTIVITIES, RECOGNITION & LEADERSHIP", 50, y)
    y += 12

    doc.setFontSize(10)
    doc.setFont("times", "normal")
    const awards = [
      "Zapier's Operations Automator of the Year (2025)",
      "Excellence in Teaching Award (2024)",
      "3-Minute Thesis® Competition, First Place (2023)",
    ]

    awards.forEach((award) => {
      doc.text("•", 55, y)
      doc.text(award, 70, y)
      y += 12
    })
    y += 10

    doc.setFontSize(11)
    doc.setFont("times", "bold")
    doc.text("TECHNICAL SKILLS", 50, y)
    y += 12

    doc.setFontSize(10)
    doc.setFont("times", "normal")
    const skills =
      "Automation: Orchestration (Zapier, Webhooks, Sub-Zaps, API Integration), error handling, debugging, No-code platforms, rapid prototyping. Platforms: Zendesk, Stripe, Metabase, Google AppsScript. AI/ML: OpenAI (ChatGPT, Whisper), Google Gemini, Anthropic Claude, Prompt Engineering. Operations: Documentation, SOPs, dashboard creation, reporting. Current learning: Javascript, Python, SQL, N8N."
    const skillsLines = doc.splitTextToSize(skills, 512)
    doc.text(skillsLines, 50, y)

    console.log("[v0] PDF generation complete")

    const pdfBuffer = Buffer.from(doc.output("arraybuffer"))

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Jocelyne_Mendez-Guzman_Resume.pdf"',
        "Content-Length": pdfBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error("[v0] Error generating PDF:", error)
    return new NextResponse(
      JSON.stringify({
        error: "Failed to generate PDF",
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
