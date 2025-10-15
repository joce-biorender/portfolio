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
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto font-sans">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Newspaper className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-bold text-center font-sans">Press & Media</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Featured Articles */}
          {articles.map((article, index) => (
            <Card key={index} className="flex flex-col hover:border-accent/50 transition-colors">
              <CardHeader>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  <CardTitle className="text-xl leading-tight text-balance font-sans">{article.title}</CardTitle>
                </a>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="leading-relaxed flex-1">{article.description}</CardDescription>
              </CardContent>
            </Card>
          ))}

          {/* Podcast Card with Spotify Embed */}
          <Card className="overflow-hidden hover:border-accent/50 transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Mistakes, Missteps, and Mindsets Podcast</h3>
              <p className="text-sm text-muted-foreground mb-4">
                I was a guest on episode 12, where we discussed the importance of sharing stories of failure, and
                fostering resilience.
              </p>
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/episode/0QoSItztNZVxKdETtDr0ZA?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </CardContent>
          </Card>

          {/* 3MT Video Card */}
          <Card className="overflow-hidden hover:border-accent/50 transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-1">3 Minute Thesis Competition</h3>
              <p className="text-sm text-muted-foreground mb-4">First Place Winner, 2023</p>
              <div className="aspect-video rounded-lg overflow-hidden">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
