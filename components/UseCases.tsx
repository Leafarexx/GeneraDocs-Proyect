/**
 * Use Cases Section Component
 * Shows 4 real-world scenarios of how GeneraDocs can be used
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function UseCases() {
  const cases = [
    {
      name: "Laura Méndez",
      role: "Nutrióloga",
      description: "Laura atiende a sus pacientes y necesita generar recibos y recomendaciones personalizadas después de cada consulta. Con GeneraDocs, crea documentos claros y profesionales en minutos.",
      documents: [
        "Recibo de consulta",
        "Plan de alimentación básico"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: "Carlos Rivera",
      role: "Diseñador freelance",
      description: "Carlos trabaja con varios clientes y constantemente necesita enviar cotizaciones y contratos. GeneraDocs le permite generar documentos formales sin rehacerlos cada vez.",
      documents: [
        "Cotización de servicios",
        "Contrato simple"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      name: "Ana López",
      role: "Dueña de tienda local",
      description: "Ana necesita generar comprobantes y cartas para su negocio de forma rápida. Con GeneraDocs, evita el papeleo manual y mantiene todo ordenado.",
      documents: [
        "Comprobante de venta",
        "Carta comercial"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      name: "Miguel Torres",
      role: "Estudiante universitario",
      description: "Miguel necesita generar cartas formales y documentos escolares sin complicarse con el formato. GeneraDocs le ayuda a tener documentos listos en pocos pasos.",
      documents: [
        "Carta de motivos",
        "Solicitud escolar"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Casos reales, documentos reales
          </h2>
          <p className="text-lg text-gray-600">
            GeneraDocs se adapta a diferentes perfiles y necesidades. Estos son algunos ejemplos de cómo se puede usar en el día a día.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cases.map((useCase, index) => (
            <Card key={index} className="group hover:border-gray-300 transition-all duration-200">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                    {useCase.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg mb-1">{useCase.name}</CardTitle>
                    <CardDescription className="text-sm font-medium text-blue-600">
                      {useCase.role}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Documentos generados:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.documents.map((doc, docIndex) => (
                      <span
                        key={docIndex}
                        className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
