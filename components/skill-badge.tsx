"use client"

import type React from "react"

interface SkillBadgeProps {
  icon: React.ReactNode
  name: string
  delay?: number
}

export function SkillBadge({ icon, name, delay = 0 }: SkillBadgeProps) {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-300">
        <div className="p-2 bg-primary text-primary-foreground rounded-lg">{icon}</div>
        <span className="font-semibold text-lg">{name}</span>
      </div>
    </div>
  )
}
