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
    <div className="max-w-7xl mx-auto font-sans">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Newspaper className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-bold font-sans">Press & Media</h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-sans">
          Featured articles, podcast appearances, and media coverage
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Featured Articles */}
        {articles.map((article, index) => (
          <Card key={index} className="flex flex-col hover:border-accent/50 hover:shadow-xl transition-all duration-300">
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
              <CardDescription className="leading-relaxed flex-1 font-sans">{article.description}</CardDescription>
            </CardContent>
          </Card>
        ))}

        {/* Podcast Card with Spotify Embed */}
        <Card className="overflow-hidden hover:border-accent/50 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3 font-sans">Mistakes, Missteps, and Mindsets Podcast</h3>
            <p className="text-sm text-muted-foreground mb-4 font-sans">
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
        <Card className="overflow-hidden hover:border-accent/50 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-1 font-sans">3 Minute Thesis Competition</h3>
            <p className="text-sm text-muted-foreground mb-4 font-sans">First Place Winner, 2023</p>
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
  )
}
