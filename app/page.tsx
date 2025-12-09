"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Download,
  Mail,
  Linkedin,
  Code2,
  Database,
  Layout,
  Server,
  Briefcase,
  Calendar,
  GraduationCap,
} from "lucide-react"
import { SkillBadge } from "@/components/skill-badge"
import { Carousel3D } from "@/components/carousel-3d"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const aboutRef = useRef<HTMLElement>(null)
  const companyRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const sections = [
      aboutRef.current,
      companyRef.current,
      projectsRef.current,
      carouselRef.current,
      contactRef.current,
    ]
    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const projects = [
    {
      title: "Sistema de Gestión Empresarial",
      description: "Desarrollo de sistema administrativo completo para gestión de documentos y agendas digitales.",
      image: "/modern-ecommerce-interface.png",
      github: "https://github.com/santingcacer",
      tags: ["C#", "SQL", "ASP.NET", "JavaScript"],
    },
    {
      title: "Aplicaciones Web Personalizadas",
      description: "Diseño y desarrollo de sitios web modernos y funcionales para diversos clientes en LaunchByte.",
      image: "/analytics-dashboard-dark.jpg",
      github: "https://github.com/santingcacer",
      tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "E-Commerce La Skiña Store",
      description: "Plataforma de comercio electrónico con gestión de redes sociales y administración de sistemas.",
      image: "/task-management-ui.jpg",
      github: "https://github.com/santingcacer",
      tags: ["Node.js", "MongoDB", "Express", "React"],
    },
  ]

  const carouselSlides = [
    {
      image: "/mg-arquitectura.jpg",
      title: "MG Arquitectura",
      description:
        "Página web profesional para estudio de arquitectura. Portafolio de proyectos y servicios arquitectónicos.",
      link: "https://www.mgarquitecturauy.com/",
    },
    {
      image: "/ferrecar-service.jpg",
      title: "FerreCar Service",
      description:
        "Sistema de gestión de servicios vehiculares. Plataforma completa para administración de talleres mecánicos.",
      link: "https://www.ferrecarservice.com/",
    },
    {
      image: "/luciano-fulco-arte.jpg",
      title: "Luciano Fulco Arte",
      description:
        "Sitio web de arte para artista visual uruguayo. Galería de pinturas simbólicas con sistema de categorías y contacto.",
      link: "https://www.lucianofulcoarte.com/",
    },
  ]

  const skills = [
    { icon: <Code2 className="h-5 w-5" />, name: "Java" },
    { icon: <Server className="h-5 w-5" />, name: "Spring Boot" },
    { icon: <Code2 className="h-5 w-5" />, name: "C#" },
    { icon: <Code2 className="h-5 w-5" />, name: ".NET" },
    { icon: <Layout className="h-5 w-5" />, name: "Next.js" },
    { icon: <Layout className="h-5 w-5" />, name: "React" },
    { icon: <Database className="h-5 w-5" />, name: "Testing" },
    { icon: <Database className="h-5 w-5" />, name: "SQL" },
    { icon: <Server className="h-5 w-5" />, name: "API" },
  ]

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "https://blobs.vusercontent.net/blob/CV-Santiago-C%C3%A1ceres-EhKQzn5OFzUnIH4Hik8MnEXRwyDS5D.pdf"
    link.download = "Santiago_Caceres_CV.pdf"
    link.target = "_blank"
    link.click()
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_50%)]" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left side - Text */}
          <div className={`space-y-6 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm md:text-base tracking-wider uppercase">
                Desarrollador Web Full Stack
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">Santiago Cáceres</h1>
              <div className="h-1 w-24 bg-primary" />
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Estudiante de Analista en Tecnologías de la Información especializado en desarrollo web. Creando
              soluciones digitales funcionales y modernas con pasión por las nuevas tecnologías.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="group transition-all duration-300 hover:scale-105"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Descargar CV
              </Button>

              {/* Removed email button from hero section */}
              <Button
                size="lg"
                variant="outline"
                className="transition-all duration-300 hover:scale-105 bg-transparent"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contactar
              </Button>
            </div>

            <div className="flex gap-4 pt-8">
              {/* <a
                href="https://github.com/santingcacer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full hover:bg-accent hover:scale-110 transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </a> */}
              <a
                href="https://wa.me/59891926104"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full hover:bg-accent hover:scale-110 transition-all duration-300"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/santiago-caceress/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-full hover:bg-accent hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className={`relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl animate-pulse" />
              <div className="relative rounded-full overflow-hidden border-4 border-primary shadow-2xl animate-float aspect-square">
                <img
                  src="/santiago-photo.jpg"
                  alt="Santiago Cáceres - Desarrollador Web"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className={`py-32 px-4 md:px-8 bg-gradient-to-br from-secondary/40 via-background to-secondary/20 relative transition-all duration-1000 ${
          visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.03),transparent_60%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-5xl md:text-7xl font-bold mb-4 text-balance">Sobre Mí</h2>
              <div className="h-1.5 w-32 bg-primary mx-auto rounded-full" />
            </div>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto text-pretty">
              Desarrollador proactivo con pasión por el aprendizaje continuo y las nuevas tecnologías
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card
              className={`p-10 md:p-14 backdrop-blur-sm bg-card/80 border-2 transition-all duration-700 delay-200 ${
                visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
              } hover:shadow-2xl hover:scale-[1.02] hover:border-primary/50`}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Mi Historia</h3>
                </div>

                <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
                  <p>
                    Estudiante de Analista en Tecnologías de la Información en la Universidad ORT Uruguay. Me considero
                    una persona sociable y proactiva, con gran capacidad para el trabajo en equipo, la rápida adaptación
                    al cambio y el aprendizaje de nuevas tecnologías.
                  </p>
                  <p>
                    Poseo conocimientos y experiencia en programación orientada a objetos, metodologías ágiles,
                    arquitectura de software, patrones de diseño y testing, adquiridos a través de diversos proyectos
                    académicos y personales.
                  </p>
                  <p>
                    Mi objetivo es seguir creciendo profesionalmente como Junior Developer, aportando mis habilidades
                    técnicas y mi entusiasmo por crear soluciones digitales innovadoras y eficientes.
                  </p>
                </div>

                <div className="pt-6 flex gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleDownloadCV}
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Mi CV Completo
                  </Button>
                </div>
              </div>
            </Card>

            <div
              className={`space-y-6 transition-all duration-700 delay-500 ${
                visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
              }`}
            >
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full" />
                  Habilidades Técnicas
                </h4>
              </div>
              {/* Grid layout for skills without percentages */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <SkillBadge key={skill.name} icon={skill.icon} name={skill.name} delay={index * 100} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="company"
        ref={companyRef}
        className={`py-32 px-4 md:px-8 bg-primary text-primary-foreground relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has("company") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block">
              <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white">Experiencia Laboral</h2>
              <div className="h-1.5 w-32 bg-primary-foreground mx-auto rounded-full opacity-80" />
            </div>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* LaunchByte Card */}
            <Card
              className={`p-8 bg-primary-foreground/10 backdrop-blur-md border-2 border-primary-foreground/20 transition-all duration-700 delay-300 ${
                visibleSections.has("company") ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } hover:border-primary-foreground/40 hover:shadow-2xl hover:shadow-primary-foreground/20`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-1 text-white">LaunchByte</h3>
                  <p className="text-lg text-white/80 font-semibold">Desarrollador Web</p>
                  <div className="flex items-center gap-2 mt-2 text-white/70 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Mayo 2025 - Actualidad</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Responsable del diseño, desarrollo y despliegue de aplicaciones y sitios web personalizados para
                  clientes y proyectos propios. Me especializo en crear soluciones digitales funcionales, modernas y
                  adaptadas a cada necesidad.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                <h4 className="text-lg font-bold mb-4 text-white">Responsabilidades</h4>
                <ul className="space-y-2">
                  {[
                    "Diseño de aplicaciones web personalizadas",
                    "Desarrollo full-stack de sitios modernos",
                    "Implementación de soluciones funcionales",
                    "Despliegue y mantenimiento de proyectos",
                  ].map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Intendencia de Montevideo Card */}
            <Card
              className={`p-8 bg-primary-foreground/10 backdrop-blur-md border-2 border-primary-foreground/20 transition-all duration-700 delay-400 ${
                visibleSections.has("company") ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } hover:border-primary-foreground/40 hover:shadow-2xl hover:shadow-primary-foreground/20`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-1 text-white">Intendencia de Montevideo</h3>
                  <p className="text-lg text-white/80 font-semibold">Desarrollador Back End</p>
                  <div className="flex items-center gap-2 mt-2 text-white/70 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>Julio 2024 - Actualidad</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Desarrollo de funcionalidades en Java, implementando lógica de negocio, gestionando base de datos y
                  realizando mejoras continuas para el rendimiento del sistema.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                <h4 className="text-lg font-bold mb-4 text-white">Responsabilidades</h4>
                <ul className="space-y-2">
                  {[
                    "Desarrollo backend en Java",
                    "Implementación de lógica de negocio",
                    "Gestión de bases de datos",
                    "Optimización del rendimiento del sistema",
                  ].map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="carousel"
        ref={carouselRef}
        className={`py-20 px-4 md:px-8 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden transition-all duration-1000 ${
          visibleSections.has("carousel") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent_70%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Proyectos Destacados</h2>
          </div>

          <Carousel3D slides={carouselSlides} />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className={`py-24 px-4 md:px-8 bg-primary text-primary-foreground transition-all duration-1000 ${
          visibleSections.has("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold animate-fade-in-up">¿Trabajamos Juntos?</h2>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up animate-delay-200">
            Estoy disponible para nuevos proyectos y colaboraciones. Contáctame a través de mis redes sociales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up animate-delay-400">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg transition-all duration-300 hover:scale-105"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar CV
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">© 2025 Santiago Cáceres. Todos los derechos reservados.</p>

          <div className="flex gap-6">
            <a
              href="mailto:caceressantiago2001@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/59891926104"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/santiago-caceress/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
