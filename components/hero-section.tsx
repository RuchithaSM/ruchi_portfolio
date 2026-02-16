"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

const taglines = [
  "QA Automation Engineer",
  "SDET",
  "Web Developer",
  "Problem Solver",
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const currentTagline = taglines[taglineIndex]

    if (!isDeleting) {
      if (currentText.length < currentTagline.length) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentTagline.slice(0, currentText.length + 1))
        }, 80)
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    } else {
      if (currentText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, 40)
      } else {
        setIsDeleting(false)
        setTaglineIndex((prev) => (prev + 1) % taglines.length)
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [mounted, currentText, isDeleting, taglineIndex])

  const getAnimStyle = (delay: string) => ({
    opacity: mounted ? undefined : 0,
    transform: mounted ? undefined : "translateY(24px)",
    animation: mounted
      ? `fadeSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) ${delay} both`
      : "none",
  })

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[calc(100vh-80px)] items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Text content */}
        <div className="flex-1">
          <div style={getAnimStyle("0.1s")}>
            <p className="mb-4 font-mono text-sm text-muted-foreground">
              {"Hello, I'm"}
            </p>
          </div>

          <div style={getAnimStyle("0.25s")}>
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">Ruchitha Shivappashetty</span>
              <br />
              <span className="text-primary">Mallikarjun</span>
            </h1>
          </div>

          <div style={getAnimStyle("0.4s")}>
            <div className="mb-8 flex items-center gap-1 font-mono text-lg text-muted-foreground sm:text-xl">
              <span>{currentText}</span>
              <span className="inline-block w-px animate-typing-cursor border-r-2 border-primary">
                &nbsp;
              </span>
            </div>
          </div>

          <div style={getAnimStyle("0.55s")}>
            <p className="mb-10 max-w-xl leading-relaxed text-muted-foreground">
              A passionate technology enthusiast with strong skills in
              identifying issues and ensuring smooth product performance. I
              enjoy solving real-world quality challenges while continuously
              learning advanced testing tools and practices.
            </p>
          </div>

          <div style={getAnimStyle("0.7s")}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10"
            >
              View My Work
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>

          <div style={getAnimStyle("0.85s")} className="mt-12">
            <div className="h-px w-24 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40" />
          </div>
        </div>

        {/* Profile image */}
        <div
          className="flex-shrink-0"
          style={{
            opacity: mounted ? undefined : 0,
            transform: mounted ? undefined : "scale(0.9) translateY(24px)",
            animation: mounted
              ? "fadeSlideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s both"
              : "none",
          }}
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-primary/10 blur-xl" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-border shadow-xl sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <Image
                src="/images/profile.jpg"
                alt="Ruchitha Shivappashetty Mallikarjun"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{
          opacity: mounted ? undefined : 0,
          animation: mounted
            ? "fadeSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 1.2s both"
            : "none",
        }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
          <span className="font-mono text-xs">scroll</span>
          <div className="relative h-8 w-px overflow-hidden bg-muted-foreground/10">
            <div
              className="absolute top-0 h-3 w-full bg-primary/40"
              style={{ animation: "scrollPulse 2s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
