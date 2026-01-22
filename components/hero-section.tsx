"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTypewriter } from "@/hooks/use-typewriter"

const phrases = [
  "Convierte datos simples en documentos profesionales.",
  "Crea cotizaciones en segundos, no en horas.",
  "Genera recibos profesionales al instante.",
  "Diseña contratos claros sin complicaciones.",
]

export function HeroSection() {
  const { displayText } = useTypewriter({
    phrases,
    typingSpeed: 60,
    deletingSpeed: 30,
    pauseDuration: 2000,
  })

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight min-h-[2.4em] md:min-h-[2.6em] flex items-center justify-center">
            <span className="inline-flex items-center">
              <span>{displayText}</span>
              <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-pulse" />
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Crea recibos, constancias y documentos claros en minutos, sin sistemas complicados.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Probar demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Ideal para profesionistas y pequeños negocios.
          </p>
        </div>
      </div>
    </section>
  )
}
