"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeader } from "./section-header"
import { MapPin, GraduationCap, Mail } from "lucide-react"

const infoCards = [
  { icon: MapPin, label: "Location", value: "Bengaluru, India" },
  { icon: GraduationCap, label: "Education", value: "B.Tech CSE, 2021-2025" },
  { icon: Mail, label: "Email", value: "ruchithasm07@gmail.com" },
]

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="px-6 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <SectionHeader
          label="01 / About"
          title="A bit about me"
          description="My journey into software quality and web development."
        />

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p
                className={`transition-all duration-500 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
              >
                I started my journey in tech with a deep curiosity about how
                software works under the hood. During my{" "}
                <span className="font-medium text-foreground">
                  B.Tech in Computer Science
                </span>{" "}
                at Presidency University, Bengaluru, I discovered my passion
                for ensuring that the products people rely on actually work
                the way they should.
              </p>
              <p
                className={`transition-all duration-500 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
              >
                That curiosity led me to the world of{" "}
                <span className="font-medium text-foreground">
                  QA Automation
                </span>
                , where I found the perfect blend of analytical thinking and
                hands-on coding. Today, I work with{" "}
                <span className="font-medium text-foreground">
                  Python, Selenium, Pytest
                </span>
                , and{" "}
                <span className="font-medium text-foreground">
                  API testing
                </span>{" "}
                tools to build robust test frameworks, automate repetitive
                workflows, and catch bugs before they reach users.
              </p>
              <p
                className={`transition-all duration-500 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
              >
                Beyond testing, I am equally passionate about{" "}
                <span className="font-medium text-foreground">
                  web development
                </span>
                . I believe understanding both the creation and validation of
                software gives me a unique perspective — one that values
                quality at every stage of the development lifecycle.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {infoCards.map((card, index) => (
              <div
                key={card.label}
                className={`rounded-lg border border-border bg-card p-4 transition-all duration-500 ease-out hover:border-primary/30 hover:shadow-sm ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? `${200 + index * 120}ms` : "0ms",
                }}
              >
                <div className="flex items-center gap-3 text-sm">
                  <card.icon className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{card.label}</p>
                    <p className="text-muted-foreground">{card.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
