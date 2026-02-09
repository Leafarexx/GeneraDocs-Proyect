/**
 * Use Cases Section Component
 * Muestra perfiles reales de usuarios de la plataforma
 */

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function UseCases() {
  const cases = [
    {
      name: "Laura Mendez",
      role: "Nutriologa",
      /* Interlink: contextual link to /recibo-honorarios using descriptive anchor text */
      description: (<>Atiende pacientes y necesita generar un <Link href="/recibo-honorarios" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">recibo de honorarios</Link> despues de cada consulta. Con GeneraDocs, crea documentos profesionales en minutos.</>),
      documents: [
        "Recibo de consulta",
        "Plan de alimentacion"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      name: "Carlos Rivera",
      role: "Disenador freelance",
      /* Interlinks: contextual links to /cotizacion and /contrato-freelance with descriptive anchors */
      description: (<>Trabaja con multiples clientes y necesita una <Link href="/cotizacion" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">cotización profesional</Link> y un <Link href="/contrato-freelance" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">contrato freelance</Link> para cada proyecto. La plataforma le permite generarlos sin rehacerlos cada vez.</>),
      documents: [
        "Cotizacion de servicios",
        "Contrato de proyecto"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      name: "Ana Lopez",
      role: "Duena de negocio local",
      description: "Genera comprobantes y cartas comerciales para su negocio de forma rapida. Sin papeleo manual, todo organizado desde la plataforma.",
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
      role: "Consultor independiente",
      description: "Necesita reportes y documentos formales para sus clientes corporativos. GeneraDocs le da la imagen profesional que su trabajo requiere.",
      documents: [
        "Reporte ejecutivo",
        "Propuesta de servicios"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-4">
            Profesionales que ya usan la plataforma
          </h2>
          <p className="text-lg text-ink-500">
            GeneraDocs se adapta a diferentes perfiles y necesidades. Asi es como lo usan en el dia a dia.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cases.map((useCase, index) => (
            <Card key={index} className="group border-l-4 border-l-primary-200 hover:border-l-primary-400 transition-all duration-200">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary-50 text-primary-600 rounded-lg group-hover:bg-primary-100 transition-colors">
                    {useCase.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg mb-1">{useCase.name}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary-600">
                      {useCase.role}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-ink-500 text-sm leading-relaxed mb-4">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-ink-400 uppercase tracking-wide">
                    Documentos generados:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.documents.map((doc, docIndex) => (
                      <span
                        key={docIndex}
                        className="inline-flex items-center px-2.5 py-1 rounded-md bg-surface-warm text-ink-600 text-xs font-medium border border-ink-200/40"
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
