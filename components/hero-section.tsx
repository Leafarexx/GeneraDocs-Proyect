import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Convierte datos simples en documentos profesionales.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Crea recibos, constancias y documentos claros en minutos, sin sistemas complicados.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
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
