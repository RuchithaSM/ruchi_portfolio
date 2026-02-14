"use client"

import { useCallback, useState } from "react"
import { SplashScreen } from "@/components/splash-screen"
import { CustomCursor } from "@/components/custom-cursor"
import { Navbar } from "@/components/navbar"
import { ScrollProgress } from "@/components/scroll-progress"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false)
  }, [])

  return (
    <>
      <CustomCursor />
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <div
        className={`transition-all duration-700 ease-out ${
          showSplash ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <ScrollProgress />
        <Navbar />
        <main>
          <HeroSection />
          <div className="mx-auto max-w-5xl">
            <div className="h-px bg-border" />
          </div>
          <AboutSection />
          <div className="mx-auto max-w-5xl">
            <div className="h-px bg-border" />
          </div>
          <ExperienceSection />
          <div className="mx-auto max-w-5xl">
            <div className="h-px bg-border" />
          </div>
          <SkillsSection />
          <div className="mx-auto max-w-5xl">
            <div className="h-px bg-border" />
          </div>
          <ProjectsSection />
          <div className="mx-auto max-w-5xl">
            <div className="h-px bg-border" />
          </div>
          <BlogSection />
          <div className="mx-auto max-w-5xl">
            <div className="h-px bg-border" />
          </div>
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
