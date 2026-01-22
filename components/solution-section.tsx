import { Check, FileText, Zap, Download, Send } from "lucide-react"

const benefits = [
  {
    icon: FileText,
    title: "Plantillas reutilizables",
    description: "Formatos profesionales listos para usar",
  },
  {
    icon: Zap,
    title: "Datos simples",
    description: "Nombre, servicio, monto — nada más",
  },
  {
    icon: Download,
    title: "PDF profesional al instante",
    description: "Genera tu documento en segundos",
  },
  {
    icon: Send,
    title: "Listo para enviar o descargar",
    description: "Comparte directamente o guarda en tu equipo",
  },
]

export function SolutionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Aquí entra GeneraDocs
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <p className="mt-1 text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
