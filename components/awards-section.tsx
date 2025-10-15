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
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-4">
          <span className="font-medium text-accent">Awards & Recognition</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Recognition for excellence in automation, teaching, and research
        </p>
      </div>
      <div className="space-y-8">
        {awards.map((award, index) => (
          <div key={index} className="border-b border-border pb-8 last:border-b-0">
            <div className="flex flex-col sm:flex-row gap-6">
              {award.image && (
                <div className="relative w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden">
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
              <div className="flex-1">
                <h3 className="text-lg font-medium text-foreground mb-2">{award.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{award.description}</p>
                <a 
                  href={award.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
                >
                  Learn More
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
