import { X } from "lucide-react"

const painPoints = [
  "No tienes formatos listos",
  "Usas Word o Excel y pierdes tiempo",
  "Cada documento se ve diferente",
  "Entregas algo poco profesional",
]

export function ProblemSection() {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center text-balance">
            Crear documentos no debería ser tan difícil
          </h2>
          <div className="mt-12 grid gap-4">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <p className="text-foreground font-medium">{point}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-lg text-muted-foreground italic">
            &quot;Crear documentos no es tu trabajo, pero lo necesitas.&quot;
          </p>
        </div>
      </div>
    </section>
  )
}
