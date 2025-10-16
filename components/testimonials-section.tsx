import { MessageCircle } from "lucide-react"

const testimonials = [
  {
    image: "/testimonial1.png",
    alt: "Team member feedback about automation impact",
    name: "A",
    message: "This has had a huge impact on our day-to-day 🦸‍♂️🦸‍♂️ thank you so much for building this @joce It really makes our work easier 💪",
    timestamp: "Aug 7th at 4:03 PM"
  },
  {
    image: "/testimonial2.png", 
    alt: "AR team appreciation message",
    name: "S",
    message: "Huge win for the AR team all thanks to @joce who's always willing to help us out. We're so grateful for all your help",
    timestamp: "Aug 8th at 2:22 PM"
  }
]

export function TestimonialsSection() {
  return (
    <section className="mb-16">
      <div className="border-b border-border pb-8 mb-8">
        <h2 className="text-2xl font-light text-foreground mb-4">
          <span className="font-medium text-accent">Team Feedback</span>
        </h2>
      </div>
      
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-card/30 p-6 rounded-lg border border-border">
            <div className="relative w-full max-w-2xl mx-auto">
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-full rounded-lg shadow-sm"
                style={{ filter: 'blur(2px)' }}
              />
              
              {/* Overlay with anonymized content */}
              <div className="absolute inset-0 bg-background/90 rounded-lg flex items-center justify-center">
                <div className="bg-card p-8 rounded-lg border border-border max-w-md">
                  <div className="flex items-start gap-4">
                    {/* Anonymized Profile Picture */}
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-foreground text-sm font-medium">{testimonial.name}</span>
                    </div>
                    
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-foreground text-sm">{testimonial.name}</span>
                        <span className="text-xs text-muted-foreground">{testimonial.timestamp}</span>
                      </div>
                      
                      {/* Message */}
                      <div className="text-sm text-foreground leading-relaxed">
                        {testimonial.message.split('@joce').map((part, i) => (
                          <span key={i}>
                            {part}
                            {i < testimonial.message.split('@joce').length - 1 && (
                              <span className="bg-yellow-100 text-yellow-800 px-1 rounded text-xs font-medium">@joce</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
