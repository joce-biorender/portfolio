"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { jsPDF } from "jspdf"

export function ResumeDownloadButton() {
  const generatePDF = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const margin = 20
    const contentWidth = pageWidth - 2 * margin
    let yPos = 20

    // Helper function to add text with word wrap
    const addText = (text: string, x: number, y: number, maxWidth: number, fontSize = 10) => {
      doc.setFontSize(fontSize)
      const lines = doc.splitTextToSize(text, maxWidth)
      doc.text(lines, x, y)
      return y + lines.length * fontSize * 0.4
    }

    // Header - Name
    doc.setFont("helvetica", "bold")
    doc.setFontSize(24)
    doc.text("Jocelyne Mendez-Guzman", pageWidth / 2, yPos, { align: "center" })
    yPos += 8

    // Subtitle
    doc.setFontSize(14)
    doc.text("Operations & AI Automation Specialist", pageWidth / 2, yPos, { align: "center" })
    yPos += 6

    // Contact Info
    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)
    doc.text(
      "Toronto, Canada  |  jocelynemendezg@gmail.com  |  linkedin.com/in/jocelyne-mendez-guzman/",
      pageWidth / 2,
      yPos,
      { align: "center" },
    )
    yPos += 10

    // PROFESSIONAL SUMMARY
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.text("PROFESSIONAL SUMMARY", margin, yPos)
    yPos += 5
    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)
    yPos = addText(
      "Operations specialist with proven ability to rapidly prototype and scale AI-powered workflows in SaaS environments. Bridges technical implementation with business operations, eliminating manual processes across GTM, Customer Success, and internal teams. MSc in Molecular Science brings scientific rigor to building resilient systems. Recognized as Zapier's 2025 Operations Automator of the Year.",
      margin,
      yPos,
      contentWidth,
    )
    yPos += 8

    // WORK EXPERIENCE
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.text("WORK EXPERIENCE", margin, yPos)
    yPos += 6

    // BioRender
    doc.setFont("helvetica", "bold")
    doc.setFontSize(10)
    doc.text("Operations Specialist, Customer Experience at BioRender (2021–Present)", margin, yPos)
    yPos += 5
    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)

    const bioRenderBullets = [
      "Built an AI-powered triage system that reduced resolution time 69%, an AI Lead Assessment Agent that qualified $78,941 pipeline, and a Refund Eligibility automation that eliminated 400-550 hours of manual refund processing.",
      "Debugged and refined automations by adjusting prompts, API integrations, and business logic when systems failed, maintaining 90%+ uptime.",
      "Enabled teamwide adoption through documentation, SOPs, training materials, and workshops for automations and AI-powered workflows.",
    ]

    bioRenderBullets.forEach((bullet) => {
      doc.text("•", margin + 2, yPos)
      yPos = addText(bullet, margin + 7, yPos, contentWidth - 7)
      yPos += 2
    })
    yPos += 4

    // Toronto Met - Educational Developer
    doc.setFont("helvetica", "bold")
    doc.text("Graduate Educational Developer at Toronto Metropolitan University (2023–2024)", margin, yPos)
    yPos += 5
    doc.setFont("helvetica", "normal")

    const eduDevBullets = [
      "Designed and delivered 10 professional development workshops, building frameworks that enabled 100+ graduate students to become effective educators.",
      "Revamped training modules using pedagogical frameworks (Bloom's Taxonomy) to ensure progressive skill development and measurable outcomes.",
    ]

    eduDevBullets.forEach((bullet) => {
      doc.text("•", margin + 2, yPos)
      yPos = addText(bullet, margin + 7, yPos, contentWidth - 7)
      yPos += 2
    })
    yPos += 4

    // Toronto Met - Teaching Assistant
    doc.setFont("helvetica", "bold")
    doc.text("Graduate Teaching Assistant at Toronto Metropolitan University (2021-2024)", margin, yPos)
    yPos += 5
    doc.setFont("helvetica", "normal")

    const taBullets = [
      "Instructed 100+ undergraduate students in wet lab procedures, scientific principles, and experimental design.",
      "Delivered actionable feedback on student work which measurably improved academic performance in subsequent assignments.",
    ]

    taBullets.forEach((bullet) => {
      doc.text("•", margin + 2, yPos)
      yPos = addText(bullet, margin + 7, yPos, contentWidth - 7)
      yPos += 2
    })
    yPos += 6

    // EDUCATION
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.text("EDUCATION", margin, yPos)
    yPos += 6

    doc.setFont("helvetica", "bold")
    doc.setFontSize(10)
    doc.text("Master of Science in Molecular Science, Toronto Metropolitan University (2024)", margin, yPos)
    yPos += 5
    doc.setFont("helvetica", "normal")

    const mscBullets = [
      "Completed 3-year research project, mastering new techniques and tools independently",
      "Presented data to faculty for quarterly review, building comfort with critical feedback and an ability to pivot quickly from failure.",
    ]

    mscBullets.forEach((bullet) => {
      doc.text("•", margin + 2, yPos)
      yPos = addText(bullet, margin + 7, yPos, contentWidth - 7)
      yPos += 2
    })
    yPos += 4

    doc.setFont("helvetica", "bold")
    doc.text("Bachelor of Science in Biomedical Sciences, Toronto Metropolitan University (2021)", margin, yPos)
    yPos += 8

    // ACTIVITIES, RECOGNITION & LEADERSHIP
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.text("ACTIVITIES, RECOGNITION & LEADERSHIP", margin, yPos)
    yPos += 5
    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)

    const awards = [
      "Zapier's Operations Automator of the Year (2025)",
      "Excellence in Teaching Award (2024)",
      "3-Minute Thesis® Competition, First Place (2023)",
    ]

    awards.forEach((award) => {
      doc.text("•", margin + 2, yPos)
      doc.text(award, margin + 7, yPos)
      yPos += 5
    })
    yPos += 3

    // TECHNICAL SKILLS
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.text("TECHNICAL SKILLS", margin, yPos)
    yPos += 5
    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)
    yPos = addText(
      "Automation: Orchestration (Zapier, Webhooks, Sub-Zaps, API Integration), error handling, debugging, No-code platforms, rapid prototyping. Platforms: Zendesk, Stripe, Metabase, Google AppsScript. AI/ML: OpenAI (ChatGPT, Whisper), Google Gemini, Anthropic Claude, Prompt Engineering. Operations: Documentation, SOPs, dashboard creation, reporting. Current learning: Javascript, Python, SQL, N8N.",
      margin,
      yPos,
      contentWidth,
    )

    // Save the PDF
    doc.save("Jocelyne_Mendez-Guzman_Resume.pdf")
  }

  return (
    <Button onClick={generatePDF} className="bg-accent hover:bg-accent/90 text-white">
      <Download className="w-4 h-4 mr-2" />
      Download PDF
    </Button>
  )
}
