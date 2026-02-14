"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeader } from "./section-header"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AI-Driven Multilingual Customer Support",
    subtitle: "with Voice Interaction",
    description:
      "Built an intelligent customer support system with real-time speech recognition, enabling seamless 24/7 multilingual query handling and automated issue resolution. Integrated reinforcement learning to improve response accuracy over time, enhancing user satisfaction through faster, context-aware speech-to-text, NLP, and voice reply workflows.",
    tags: [
      "Python",
      "NLP",
      "Speech Recognition",
      "Reinforcement Learning",
      "Machine Learning",
    ],
    github: "https://github.com/RuchithaSM/SMARTASSIST-AI--DRIVEN-MULTILINGUAL-CUSTOMER-SUPPORT-WITH-VOICE-INTERACTION",
    demo: "#",
  },
  {
    title: "ShopperStack — E-commerce QA",
    subtitle: "Automation Testing Suite",
    description:
      "Developed comprehensive test plans, test cases, and automation scripts for a full-featured e-commerce platform. Covered functional, integration, system, and ad-hoc testing using Python, Selenium, and Pytest to ensure product reliability.",
    tags: ["Python", "Adv Selenium", "Pytest", "Manual Testing", "Jira", "Basic Jmeter"],
    github: "#",
  },
  {
    title: "FreshBus Website Testing",
    subtitle: "QA Collaboration at Robowaves",
    description:
      "Collaborated with the QA team to identify and document defects in FireFlink, while developing and executing automation test scripts to improve overall product quality and user experience.",
    tags: ["Selenium", "FireFlink", "Defect Tracking", "Test Automation"],
    github: "#",
  },
]

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="projects" className="px-6 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <SectionHeader
          label="04 / Projects"
          title="Things I have built"
          description="From AI-powered systems to comprehensive QA test suites."
        />

        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-500 ease-out hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 md:p-8 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
              }}
            >
              {/* Hover accent line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/0 transition-all duration-500 group-hover:bg-primary/60" />

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="text-sm text-primary/70">{project.subtitle}</p>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-accent px-2.5 py-1 font-mono text-xs text-accent-foreground transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="group/link inline-flex items-center gap-2 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 transition-transform duration-200 group-hover/link:scale-110" />
                    Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="group/link inline-flex items-center gap-2 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover/link:scale-110" />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
