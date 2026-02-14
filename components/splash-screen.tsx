"use client"

import { useEffect, useState, useCallback } from "react"

const bootLines = [
  { text: "> initializing portfolio...", delay: 0 },
  { text: "> loading modules: [qa, automation, web-dev]", delay: 800 },
  { text: "> compiling experiences...", delay: 1600 },
  { text: "> ready.", delay: 2200 },
]

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [charIndices, setCharIndices] = useState<number[]>(bootLines.map(() => 0))
  const [phase, setPhase] = useState<"boot" | "reveal" | "exit">("boot")

  const stableOnFinish = useCallback(onFinish, [onFinish])

  // Sequence the lines appearing
  useEffect(() => {
    if (phase !== "boot") return

    const timers = bootLines.map((line, index) => {
      return setTimeout(() => {
        setVisibleLines((prev) => Math.max(prev, index + 1))
      }, line.delay)
    })

    // After all lines are queued, start reveal phase
    const lastDelay = bootLines[bootLines.length - 1].delay
    const revealTimer = setTimeout(() => {
      setPhase("reveal")
    }, lastDelay + 600)

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(revealTimer)
    }
  }, [phase])

  // Typing animation for each visible line
  useEffect(() => {
    if (phase !== "boot") return

    const intervals: ReturnType<typeof setInterval>[] = []

    for (let i = 0; i < visibleLines; i++) {
      const lineText = bootLines[i].text
      if (charIndices[i] < lineText.length) {
        const interval = setInterval(() => {
          setCharIndices((prev) => {
            const next = [...prev]
            if (next[i] < lineText.length) {
              next[i] = next[i] + 1
            }
            return next
          })
        }, 18)
        intervals.push(interval)
      }
    }

    return () => intervals.forEach(clearInterval)
  }, [visibleLines, phase, charIndices])

  // Exit phase
  useEffect(() => {
    if (phase === "reveal") {
      const timer = setTimeout(() => setPhase("exit"), 400)
      return () => clearTimeout(timer)
    }
    if (phase === "exit") {
      const timer = setTimeout(stableOnFinish, 800)
      return () => clearTimeout(timer)
    }
  }, [phase, stableOnFinish])

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-all duration-700 ease-in-out ${
        phase === "exit"
          ? "pointer-events-none -translate-y-4 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="w-full max-w-lg px-6">
        {/* Terminal window */}
        <div
          className={`overflow-hidden rounded-lg border border-border shadow-2xl transition-all duration-500 ${
            phase === "reveal" || phase === "exit"
              ? "shadow-primary/5"
              : "shadow-border/20"
          }`}
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-border bg-card px-4 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-destructive/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
            <span className="ml-3 font-mono text-[11px] text-muted-foreground/70">
              ruchitha@portfolio ~ %
            </span>
          </div>

          {/* Terminal body */}
          <div className="bg-card/50 px-6 py-5">
            <div className="font-mono text-sm leading-7">
              {bootLines.map((line, i) => {
                if (i >= visibleLines) return null
                const typed = line.text.slice(0, charIndices[i])
                const isReady = line.text.includes("ready.")
                const isDone = charIndices[i] >= line.text.length
                return (
                  <div key={i} className="flex items-center">
                    <span
                      className={`transition-colors duration-300 ${
                        isReady && isDone
                          ? "text-primary font-medium"
                          : "text-muted-foreground"
                      }`}
                    >
                      {typed}
                    </span>
                    {i === visibleLines - 1 && !isDone && (
                      <span className="ml-px inline-block h-4 w-1.5 animate-pulse bg-primary" />
                    )}
                  </div>
                )
              })}
              {phase === "reveal" && (
                <div className="mt-1 flex items-center">
                  <span className="inline-block h-4 w-1.5 animate-pulse bg-primary" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Name below terminal */}
        <div
          className={`mt-8 text-center transition-all duration-500 ease-out ${
            visibleLines >= bootLines.length
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60">
            Ruchitha S M
          </p>
        </div>
      </div>
    </div>
  )
}
