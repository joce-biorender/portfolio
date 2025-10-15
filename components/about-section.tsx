import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Headshot */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-muted">
              <Image src="/headshot.png" alt="Jocelyne Mendez-Guzman" fill className="object-cover" />
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground">Hi, I'm Jocelyne!</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="flex items-start gap-3">
                <span className="text-xl">📚</span>
                <span>Master of Science in Molecular Science from Toronto Metropolitan University.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-xl">🤖</span>
                <span>
                  I oversee CX operations @ BioRender and have deployed 10+ AI-based automations that have boosted our
                  team's efficiency.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-xl">🔥</span>
                <span>
                  I love teaching, public speaking, organizing large projects and working on unsolved problems.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-xl">🫀</span>
                <span>I'm friendly, coachable, relentlessly curious, and a self-starter.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
