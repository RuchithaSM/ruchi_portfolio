"use client"

import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/RuchithaSM",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ruchithasm01220/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:ruchithasm07@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="font-mono text-sm text-muted-foreground">
              Designed & built by{" "}
              <span className="text-foreground">Ruchitha S M</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="font-mono text-xs text-muted-foreground/60" suppressHydrationWarning>
            {"\u00A9"} {new Date().getFullYear()} Ruchitha Shivappashetty
            Mallikarjun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
