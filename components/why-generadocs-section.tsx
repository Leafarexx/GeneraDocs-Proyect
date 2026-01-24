"use client"

import { Check, Zap, Shield, Clock } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Rapidez sin sacrificar calidad",
    description: "Genera documentos profesionales en segundos, no en horas. Tu tiempo vale más que formatear textos.",
  },
  {
    icon: Shield,
    title: "Consistencia profesional",
    description: "Todos tus documentos mantienen el mismo nivel de calidad y profesionalismo, siempre.",
  },
  {
    icon: Clock,
    title: "Sin curva de aprendizaje",
    description: "No necesitas ser diseñador ni conocer software complejo. Solo completa y descarga.",
  },
  {
    icon: Check,
    title: "Enfócate en tu negocio",
    description: "Deja de perder tiempo en tareas administrativas y dedícate a lo que realmente importa.",
  },
]

export function WhyGeneraDocsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            ¿Por qué GeneraDocs?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Crear documentos no debería ser tan complicado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:scale-110 flex items-center justify-center transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
