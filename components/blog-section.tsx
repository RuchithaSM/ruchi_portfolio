"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeader } from "./section-header"
import { ArrowUpRight, Calendar } from "lucide-react"

const blogPosts = [
  {
    title: "My Journey into QA Automation",
    excerpt:
      "From manual testing to writing automation frameworks — how I discovered my passion for quality engineering and the tools that changed my workflow forever.",
    date: "Dec 2025",
    readTime: "5 min read",
    tags: ["Career", "QA"],
  },
  {
    title: "Building Automation Frameworks with Selenium and Pytest",
    excerpt:
      "A deep dive into structuring scalable test automation frameworks using Python, Selenium WebDriver, and Pytest — with real-world patterns from production projects.",
    date: "Nov 2025",
    readTime: "8 min read",
    tags: ["Selenium", "Python"],
  },
  {
    title: "Transitioning from Testing to Modern Web Development",
    excerpt:
      "Why I believe QA engineers make excellent developers, and the unique perspective that testing brings to building robust, user-friendly web applications.",
    date: "Oct 2025",
    readTime: "6 min read",
    tags: ["Web Dev", "Career"],
  },
]

export function BlogSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="blog" className="px-6 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <SectionHeader
          label="05 / Blog"
          title="Thoughts & writing"
          description="Technical articles and reflections on my journey in software quality and development."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className={`group flex cursor-pointer flex-col rounded-lg border border-border bg-card p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
                <span className="h-3 w-px bg-border" />
                <span>{post.readTime}</span>
              </div>
              <h3 className="mb-3 flex items-start gap-1 font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
                {post.title}
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 -translate-x-1 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary"
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
