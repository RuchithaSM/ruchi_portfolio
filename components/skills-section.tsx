"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeader } from "./section-header"

const skillCategories = [
  {
    title: "Testing & QA",
    skills: [
      "Manual Testing",
      "Selenium",
      "Pytest",
      "API Testing",
      "Jira",
      "FireFlink",
      "JMeter",
      "Agile",
    ],
  },
  {
    title: "Programming",
    skills: ["Python", "Advanced Python", "C Programming", "JavaScript"],
  },
  {
    title: "Databases & Tools",
    skills: ["Oracle SQL", "MongoDB", "GitHub", "Excel"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Collaboration",
      "Communication",
      "Strategic Planning",
      "Problem Solving",
    ],
  },
]

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="skills" className="px-6 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <SectionHeader
          label="03 / Skills"
          title="Tools & technologies"
          description="The stack I work with daily and the skills I continue to sharpen."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`rounded-lg border border-border bg-card p-6 transition-all duration-500 ease-out hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`rounded-md bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isVisible
                        ? `${index * 100 + skillIndex * 40}ms`
                        : "0ms",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
