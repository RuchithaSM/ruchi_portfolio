"use client"

import { useEffect, useState, useRef } from "react"

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches
    if (hasCoarsePointer) return
    setMounted(true)

    function onMouseMove(e: MouseEvent) {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    function onMouseDown() {
      setIsClicking(true)
    }

    function onMouseUp() {
      setIsClicking(false)
    }

    function onMouseEnterWindow() {
      setIsHidden(false)
    }

    function onMouseLeaveWindow() {
      setIsHidden(true)
    }

    function animate() {
      const dx = mousePos.current.x - ringPos.current.x
      const dy = mousePos.current.y - ringPos.current.y
      ringPos.current.x += dx * 0.15
      ringPos.current.y += dy * 0.15
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    // Detect hoverable elements
    function onMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement
      const isInteractive =
        target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")
      setIsHovering(!!isInteractive)
    }

    document.addEventListener("mousemove", onMouseMove, { passive: true })
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)
    document.addEventListener("mouseover", onMouseOver, { passive: true })
    document.addEventListener("mouseenter", onMouseEnterWindow)
    document.addEventListener("mouseleave", onMouseLeaveWindow)

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
      document.removeEventListener("mouseover", onMouseOver)
      document.removeEventListener("mouseenter", onMouseEnterWindow)
      document.removeEventListener("mouseleave", onMouseLeaveWindow)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Dot (precise position) */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ willChange: "transform" }}
      >
        <div
          className={`-ml-1 -mt-1 rounded-full bg-primary transition-all duration-150 ${
            isHidden ? "opacity-0" : "opacity-100"
          } ${isClicking ? "h-1 w-1" : "h-2 w-2"}`}
        />
      </div>
      {/* Ring (follows with lag) */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            isHidden ? "opacity-0" : "opacity-100"
          } ${
            isHovering
              ? "-ml-5 -mt-5 h-10 w-10 border-primary/60 bg-primary/5"
              : "-ml-3.5 -mt-3.5 h-7 w-7 border-muted-foreground/30 bg-transparent"
          } ${isClicking ? "scale-90" : "scale-100"}`}
        />
      </div>
    </>
  )
}
