import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Automation & Tools",
      skills: ["Zapier", "Make.com", "OpenAI API", "Zendesk", "Stripe API", "Google Sheets"],
    },
    {
      title: "Technical Skills",
      skills: ["API Integration", "JavaScript", "Process Design", "Data Analysis", "SQL"],
    },
    {
      title: "Professional Skills",
      skills: ["Public Speaking", "Project Management", "Team Leadership", "Scientific Communication"],
    },
  ]

  return (
    <section className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">My Core Competencies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border-border bg-background">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-accent">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
