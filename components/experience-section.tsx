"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeader } from "./section-header"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    title: "QA Automation Training — Pyspiders",
    role: "QA Automation Trainee",
    period: "May 2025 – Dec 2025",
    description:
      "Performed manual testing and automation on real-time projects like ShopperStack and QBank, creating test plans, test cases, and scenarios across functional, integration, system, and ad-hoc testing.",
    details:
      "Collaborated with a QA team on the FreshBus website at Robowaves, identifying and documenting defects in FireFlink while developing and executing automation test scripts. Gained hands-on expertise in Advanced Python, Selenium, API Testing, and SQL.",
    tags: [
      "Python",
      "Selenium",
      "Pytest",
      "API Testing",
      "SQL",
      "Manual Testing",
    ],
  },
  {
    title: "Defense Research and Development Organization (DRDO)",
    role: "Intern",
    period: "Internship",
    description:
      "Developed C programs for the NexNav GPS SBAS Receiver used in the RUSTOM-II UAV, focusing on processing real-time altitude, velocity, and navigation parameters for accurate flight data computation.",
    details:
      "Assisted in preparing and validating Interface Requirement Documentation (IRD), ensuring seamless integration of navigation modules with UAV avionics and system communication layers.",
    tags: ["C Programming", "GPS Navigation", "UAV Systems", "IRD"],
  },
  {
    title: "Bharat Electronics Limited (BEL)",
    role: "Intern",
    period: "Internship",
    description:
      "Optimized the UDP communication protocol to reduce packet loss and improve transmission reliability for mission-critical real-time broadcasting systems.",
    details:
      "Worked on improving low-latency communication flows for internal notification systems, contributing to faster and more stable message delivery across network endpoints.",
    tags: ["UDP Protocol", "Real-time Systems", "Network Optimization"],
  },
  
]

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="experience" className="px-6 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <SectionHeader
          label="02 / Experience"
          title="Where I have worked"
          description="From defense research to QA automation — each experience shaped my engineering mindset."
        />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className={`group rounded-lg border border-border bg-card p-6 transition-all duration-500 ease-out hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
              }}
            >
              <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-foreground transition-colors group-hover:text-primary">
                    {exp.title}
                    <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {exp.role}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground">
                  {exp.period}
                </span>
              </div>
              <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {exp.details}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-accent px-2.5 py-1 font-mono text-xs text-accent-foreground transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
