import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Radio } from "lucide-react"

export function PresentationsSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto font-sans">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Radio className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-bold text-center font-sans">Media</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
              <div className="mb-4">
                <div className="aspect-video rounded-lg overflow-hidden mb-3">
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
              <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                <a
                  href="https://www.torontomu.ca/graduate/news-events/2023/april/msc-student-wins-tmu-three-minute-thesis-competition/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Read the Announcement
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
