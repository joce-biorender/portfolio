import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">Jocelyne Mendez-Guzman</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-medium">
          Award-Winning Operations Automator
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 h-auto"
        >
          <a
            href="https://docs.google.com/document/d/1fmAFln8yTJSq3u-J0CrhUcVKgdrSs2BZXRogcI4CnbQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            View My Resume
            <ArrowRight className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </section>
  )
}
