import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award } from "lucide-react"

const awards = [
  {
    title: "2025 Operations Automator of the Year",
    description: "Awarded by Zapier at the Zappy Awards for excellence in automation.",
    link: "https://zapier.com/l/zappy-awards",
    image:
      "https://res.cloudinary.com/zapier-media/image/upload/q_auto,f_auto/v1718057525/Campaign%20landing%20pages/Zappy%20Awards/zappy_awards_cp8lvq.png",
  },
  {
    title: "2023-2024 Teaching Excellence Award",
    description: "Awarded for outstanding contributions to teaching and learning at Toronto Metropolitan University.",
    link: "https://www.torontomu.ca/learning-teaching/ta-ga/awards/#!accordion-1690217031069-2022-2023-recipients:~:text=jocelyne%20mendez%2Dguzman",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQHPgNmK6BhPzg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1688587234739?e=1762992000&v=beta&t=3WVHjNqm5jvG0F01PO_ZlN2NUPQdeZ__ti6VBhEN018",
  },
  {
    title: "3-Minute Thesis® Competition, First Place",
    description:
      "Won first place at Toronto Metropolitan University's 2023 3MT competition for effectively communicating complex research.",
    link: "https://www.torontomu.ca/graduate/news-events/2023/april/msc-student-wins-tmu-three-minute-thesis-competition/",
    image:
      "https://www.torontomu.ca/content/dam/graduate/student-guide/student-engagement/3MT/2023/Jocelyne-Mendez-Guzman-Cory-Searcy.jpeg",
  },
  {
    title: "2023 Jennifer MacTavish Award",
    description: "Recognized for graduate student leadership at Toronto Metropolitan University.",
    link: "https://www.torontomu.ca/graduate/future-students/financing-your-studies/scholarships-awards/graduate-student-leadership-awards/2023-24/",
  },
]

export function AwardsSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Award className="w-8 h-8 text-accent" />
          <h2 className="text-4xl md:text-5xl font-bold text-center font-sans">Awards & Recognition</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <Card key={index} className="flex flex-col hover:border-accent/50 transition-colors font-sans">
              {award.image && (
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={award.image || "/placeholder.svg"}
                    alt={award.title}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: award.title.includes("Zappy") ? "50% -50%" : "50% 25%",
                    }}
                  />
                </div>
              )}
              <CardHeader className="font-sans">
                <CardTitle className="text-xl leading-tight text-balance font-sans">{award.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="mb-6 leading-relaxed flex-1 font-sans">{award.description}</CardDescription>
                <Button variant="outline" size="sm" asChild className="w-fit bg-transparent font-sans">
                  <a href={award.link} target="_blank" rel="noopener noreferrer">
                    Learn More
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
