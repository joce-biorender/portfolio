import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"

const features = [
  {
    title: "How BioRender cut ticket resolution time by 69% and boosted throughput 50%",
    description: "A Zapier article detailing the automation I submitted for the 2025 Zappy Awards.",
    link: "https://zapier.com/blog/biorender-cut-ticket-resolution-time-with-automation/",
  },
  {
    title: "After TMU - Jocelyne Mendez-Guzman",
    description: "A blog post by Toronto Metropolitan University about my path after graduation.",
    link: "https://www.torontomu.ca/alumni/news-and-stories/2024/02/after-tmu---jocelyne-mendez-guzman/",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <FileText className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-bold text-center font-sans">Featured Articles</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto font-sans">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col hover:border-accent/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl leading-tight text-balance font-sans">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="mb-6 leading-relaxed flex-1">{feature.description}</CardDescription>
                <Button variant="outline" size="sm" asChild className="w-fit bg-transparent">
                  <a href={feature.link} target="_blank" rel="noopener noreferrer">
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
