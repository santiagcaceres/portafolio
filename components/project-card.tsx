"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  github: string
  tags: string[]
  delay?: number
}

export function ProjectCard({ title, description, image, github, tags, delay = 0 }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group overflow-hidden animate-fade-in-up hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "scale-110 grayscale-0" : "scale-100 grayscale"
          }`}
        />
        <div
          className={`absolute inset-0 bg-primary/90 flex items-center justify-center gap-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button size="lg" variant="secondary" className="transition-transform hover:scale-110" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
