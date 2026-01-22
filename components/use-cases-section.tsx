import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { User, FileText } from "lucide-react"

const useCases = [
  {
    name: "Laura Méndez",
    role: "Nutrióloga",
    documents: ["Recibo de consulta", "Recomendaciones básicas"],
    color: "bg-primary/10",
  },
  {
    name: "Carlos Rivera",
    role: "Diseñador freelance",
    documents: ["Cotización de servicios", "Contrato simple"],
    color: "bg-accent/20",
  },
  {
    name: "Ana López",
    role: "Dueña de tienda local",
    documents: ["Comprobante de venta", "Carta comercial"],
    color: "bg-secondary",
  },
]

export function UseCasesSection() {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Casos reales, documentos reales
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            GeneraDocs se adapta a distintos perfiles y necesidades.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-full ${useCase.color} flex items-center justify-center mb-4`}>
                  <User className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{useCase.name}</h3>
                <p className="text-muted-foreground">{useCase.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium text-foreground mb-3">Documentos:</p>
                <ul className="space-y-2">
                  {useCase.documents.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-center gap-2 text-muted-foreground">
                      <FileText className="w-4 h-4 text-primary" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
