"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-4">
        <div className="flex items-center justify-center gap-6 text-sm">
          <Link
            href="/#resume"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            Timeline
          </Link>
          <Link
            href="/#automation"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/#awards"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            Awards
          </Link>
          <Link
            href="/#press-media"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            Media
          </Link>
          <Link
            href="/#contact"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
