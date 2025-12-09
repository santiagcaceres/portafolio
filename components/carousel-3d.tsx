"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Slide {
  image: string
  title: string
  description: string
  link?: string
}

interface Carousel3DProps {
  slides: Slide[]
}

export function Carousel3D({ slides }: Carousel3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const getSlideStyle = (index: number) => {
    const diff = index - currentIndex
    const totalSlides = slides.length

    // Normalize diff to be between -totalSlides/2 and totalSlides/2
    let normalizedDiff = diff
    if (diff > totalSlides / 2) {
      normalizedDiff = diff - totalSlides
    } else if (diff < -totalSlides / 2) {
      normalizedDiff = diff + totalSlides
    }

    const isActive = normalizedDiff === 0
    const rotateY = normalizedDiff * 45
    const translateZ = isActive ? 0 : -300
    const translateX = normalizedDiff * 400
    const scale = isActive ? 1 : 0.7
    const opacity = Math.abs(normalizedDiff) > 2 ? 0 : isActive ? 1 : 0.6

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex: isActive ? 10 : 5 - Math.abs(normalizedDiff),
    }
  }

  return (
    <div className="relative w-full py-20" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
      {/* 3D Container */}
      <div className="relative h-[450px] md:h-[550px]" style={{ perspective: "2000px" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="absolute transition-all duration-700 ease-out cursor-pointer"
              style={{
                ...getSlideStyle(index),
                transformStyle: "preserve-3d",
              }}
              onClick={() => {
                if (index !== currentIndex) {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }
              }}
            >
              <div className="relative w-[350px] md:w-[700px] h-[280px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 bg-card group">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 text-pretty">{slide.title}</h3>
                  <p className="text-white/90 mb-4 text-pretty">{slide.description}</p>
                  {slide.link && (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-fit"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(slide.link, "_blank")
                      }}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Proyecto
                    </Button>
                  )}
                </div>

                {/* Active indicator */}
                {index === currentIndex && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrev}
          className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-background/80 backdrop-blur-sm border-2 hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
        </Button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-background/80 backdrop-blur-sm border-2 hover:scale-110 transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlaying(false)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
