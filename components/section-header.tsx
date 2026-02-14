"use client"

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <span className="mb-2 inline-block font-mono text-xs uppercase tracking-widest text-primary">
        {label}
      </span>
      <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
      <div className="mt-4 h-px w-12 bg-primary/40" />
    </div>
  )
}
