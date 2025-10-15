import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Newspaper } from "lucide-react"

const articles = [
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

export function PressMediaSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-4">
          <span className="font-medium text-accent">Press & Media</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Featured articles, podcast appearances, and media coverage
        </p>
      </div>

      <div className="space-y-12">
        {/* Featured Articles */}
        {articles.map((article, index) => (
          <div key={index} className="border-b border-border pb-8 last:border-b-0">
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors block"
            >
              <h3 className="text-lg font-medium text-accent mb-3">{article.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{article.description}</p>
            </a>
          </div>
        ))}

        {/* Podcast Section */}
        <div className="border-b border-border pb-8">
          <h3 className="text-lg font-medium text-foreground mb-3">Mistakes, Missteps, and Mindsets Podcast</h3>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            I was a guest on episode 12, where we discussed the importance of sharing stories of failure, and
            fostering resilience.
          </p>
          <div className="max-w-md mx-auto">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/episode/0QoSItztNZVxKdETtDr0ZA?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>

        {/* 3MT Video Section */}
        <div>
          <h3 className="text-lg font-medium text-foreground mb-1">3 Minute Thesis Competition</h3>
          <p className="text-sm text-muted-foreground mb-6">First Place Winner, 2023</p>
          <div className="aspect-video max-w-2xl mx-auto">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/WYqoQc-xpSo"
              title="3 Minute Thesis Competition"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
