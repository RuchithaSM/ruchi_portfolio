"use client"

import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { SectionHeader } from "./section-header"
import { Send, CheckCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  function validate(): FormErrors {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }
    return newErrors
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
  fetch("/", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    "form-name": "contact",
    name: formData.name,
    email: formData.email,
    message: formData.message,
  }).toString(),
})
    .then(() => {
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 4000)
    })
    .catch((error) => {
      console.error(error)
    })
}
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <SectionHeader
          label="06 / Contact"
          title="Get in touch"
          description="Have a question or want to work together? Drop me a message."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              {"I'm"} always open to discussing new opportunities, interesting
              projects, or just having a conversation about software quality
              and web development. Feel free to reach out.
            </p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </p>
                <a
                  href="mailto:ruchithasm07@gmail.com"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  ruchithasm07@gmail.com
                </a>
              </div>
              {/* <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Phone
                </p>
                <p className="text-foreground">+91 8867606848</p>
              </div> */}
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Location
                </p>
                <p className="text-foreground">Bengaluru, India</p>
              </div>
            </div>
          </div>

          <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
              noValidate
            >
              <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div>
              <label
                htmlFor="name"
                className={`mb-1.5 block text-sm transition-colors duration-200 ${
                  focused === "name"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Name
              </label>
              <input
                suppressHydrationWarning
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className={`w-full rounded-md border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary ${
                  errors.name ? "border-destructive" : "border-input"
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-destructive">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className={`mb-1.5 block text-sm transition-colors duration-200 ${
                  focused === "email"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Email
              </label>
              <input
                suppressHydrationWarning
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className={`w-full rounded-md border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary ${
                  errors.email ? "border-destructive" : "border-input"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-destructive">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className={`mb-1.5 block text-sm transition-colors duration-200 ${
                  focused === "message"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Message
              </label>
              <textarea
                suppressHydrationWarning
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`w-full resize-none rounded-md border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary ${
                  errors.message ? "border-destructive" : "border-input"
                }`}
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="mt-1 text-xs text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              suppressHydrationWarning
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:pointer-events-none disabled:opacity-50"
              disabled={submitted}
            >
              {submitted ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Message Sent
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
