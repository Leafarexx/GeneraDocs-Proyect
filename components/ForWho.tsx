/**
 * For Who Section Component
 * Clarifica para quien es y para quien no la plataforma
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function ForWho() {
  const forYou = [
    "Ofreces consultas o servicios profesionales",
    "Necesitas recibos, constancias o documentos formales",
    "Buscas una herramienta simple y directa",
    "Valoras la imagen profesional en cada entrega"
  ];

  const notForYou = [
    "Facturacion fiscal oficial (CFDI)",
    "Empresas con sistemas ERP integrados",
    "Procesos legales que requieren certificacion",
    "Automatizaciones contables avanzadas"
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-warm">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* For You */}
          <Card className="border-ink-200/60">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-ink-900">
                GeneraDocs es para ti si:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-ink-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Not For You */}
          <Card className="border-ink-200/60">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold text-ink-900">
                No esta disenado para:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-ink-300 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-ink-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Separator className="my-4" />
              <p className="text-sm text-ink-500 italic">
                GeneraDocs resuelve un problema especifico, y lo hace bien.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
