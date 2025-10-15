"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-8">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              pathname === "/" ? "text-accent" : "text-muted-foreground",
            )}
          >
            Home
          </Link>
          <Link
            href="/my-journey"
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              pathname === "/my-journey" ? "text-accent" : "text-muted-foreground",
            )}
          >
            My Journey
          </Link>
          <Link
            href="/automation-portfolio"
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              pathname === "/automation-portfolio" ? "text-accent" : "text-muted-foreground",
            )}
          >
            Automation Portfolio
          </Link>
          <Link
            href="/resume"
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              pathname === "/resume" ? "text-accent" : "text-muted-foreground",
            )}
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  )
}
