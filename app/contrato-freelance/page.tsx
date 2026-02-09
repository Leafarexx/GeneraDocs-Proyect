import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"

/* SEO: Page-level metadata targets "contrato freelance" keyword cluster */
export const metadata: Metadata = {
  title: "Crea un contrato freelance profesional listo en minutos",
  description:
    "Genera un contrato freelance profesional sin redactar desde cero. Incluye alcance, pagos, propiedad intelectual y condiciones. Plantillas listas para descargar en PDF.",
  alternates: {
    canonical: "https://generadocs.com.mx/contrato-freelance",
  },
  openGraph: {
    title: "Crea un contrato freelance profesional listo en minutos",
    description: "Genera un contrato freelance profesional sin redactar desde cero. Incluye alcance, pagos, propiedad intelectual y condiciones. Plantillas listas para descargar en PDF.",
    url: "https://generadocs.com.mx/contrato-freelance",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Crea un contrato freelance profesional listo en minutos",
  description:
    "Genera un contrato freelance profesional sin redactar desde cero. Incluye alcance, pagos, propiedad intelectual y condiciones.",
  url: "https://generadocs.com.mx/contrato-freelance",
  publisher: {
    "@type": "Organization",
    name: "GeneraDocs",
    url: "https://generadocs.com.mx",
  },
};

export default function ContratoFreelancePage() {
  return (
    <main className="min-h-screen bg-surface-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Nav — consistent with landing page */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-surface-cream/80 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-generadocs.png"
                alt="GeneraDocs"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <div className="flex items-center gap-3">
              <Link href="https://app.generadocs.com.mx/login">
                <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                  Iniciar sesion
                </Button>
              </Link>
              <Link href="https://app.generadocs.com.mx/registro">
                <Button variant="primary" size="sm">
                  Crea tu cuenta gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero — single H1 targets primary keyword */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50/40 via-surface-cream to-surface-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 tracking-tight leading-[1.1]">
            Contrato freelance{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              profesional
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-ink-500 leading-relaxed max-w-2xl mx-auto mb-8">
            Protege tu trabajo y formaliza cada proyecto con un contrato claro, completo y profesional.
          </p>
          <Link href="https://app.generadocs.com.mx/registro">
            <Button variant="primary" size="xl" className="group">
              Crear contrato ahora
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>

      {/* H2: Qué es un contrato freelance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-warm">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-6 tracking-tight">
            Qué es un contrato freelance
          </h2>
          <div className="space-y-4 text-lg text-ink-600 leading-relaxed">
            <p>
              Un contrato freelance es un acuerdo escrito entre un profesional independiente y un cliente que establece las condiciones de un proyecto: qué se entregará, en qué plazo, a qué precio y bajo qué términos.
            </p>
            <p>
              A diferencia de un contrato laboral, un contrato freelance no implica una relación de subordinación. Define una colaboración entre partes iguales donde cada una asume compromisos específicos.
            </p>
            <p>
              Trabajar sin contrato expone a ambas partes a riesgos: impagos, cambios en el alcance sin aviso, entregas ambiguas y conflictos sin respaldo legal.
            </p>
            {/* Interlink: contextual link to /cotizacion — natural workflow from quote to contract */}
            <p>
              El proceso suele comenzar con una{' '}
              <Link href="/cotizacion" className="text-primary-600 hover:text-primary-700 underline underline-offset-2 font-medium">
                cotización profesional
              </Link>{' '}
              donde defines el precio y alcance del proyecto. Una vez aceptada, el contrato freelance formaliza esos términos de forma vinculante.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Qué debe incluir un contrato freelance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-6 tracking-tight">
            Qué debe incluir un contrato freelance
          </h2>
          <p className="text-lg text-ink-500 mb-10">
            Un contrato freelance efectivo cubre estos elementos esenciales para proteger a ambas partes.
          </p>

          {/* Structured for featured snippets */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                label: "Datos de las partes",
                desc: "Nombre completo, dirección y datos de contacto del freelancer y del cliente",
              },
              {
                label: "Descripción del proyecto",
                desc: "Alcance detallado de los servicios, entregables específicos y exclusiones",
              },
              {
                label: "Cronograma y fechas",
                desc: "Fecha de inicio, hitos intermedios y fecha de entrega final",
              },
              {
                label: "Monto y forma de pago",
                desc: "Precio total o por etapa, método de pago y calendario de pagos",
              },
              {
                label: "Propiedad intelectual",
                desc: "Quién es dueño del trabajo terminado y bajo qué condiciones se transfiere",
              },
              {
                label: "Cláusula de confidencialidad",
                desc: "Protección de información sensible compartida durante el proyecto",
              },
              {
                label: "Condiciones de cancelación",
                desc: "Procedimiento, penalizaciones y plazos de aviso para terminar el contrato",
              },
              {
                label: "Revisiones y modificaciones",
                desc: "Número de revisiones incluidas y costo de cambios adicionales",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 bg-white p-5 rounded-xl border border-ink-200/60"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-ink-900">{item.label}</p>
                  <p className="text-sm text-ink-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interlink: contextual link to /recibo-honorarios — payment documentation workflow */}
          <p className="mt-8 text-lg text-ink-600 leading-relaxed">
            Al recibir cada pago, documenta el monto con un{' '}
            <Link href="/recibo-honorarios" className="text-primary-600 hover:text-primary-700 underline underline-offset-2 font-medium">
              recibo de honorarios
            </Link>{' '}
            como comprobante formal para ambas partes.
          </p>
        </div>
      </section>

      {/* H2: Errores comunes en contratos freelance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-warm">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-6 tracking-tight">
            Errores comunes en contratos freelance
          </h2>
          <p className="text-lg text-ink-500 mb-10">
            Estos errores son frecuentes y pueden generar problemas legales o financieros.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "No definir el alcance con precisión",
                desc: "Un alcance vago permite que el cliente pida trabajo adicional sin costo extra. Define entregables concretos.",
              },
              {
                title: "Omitir la cláusula de pagos",
                desc: "Sin fechas y montos claros, los pagos se retrasan. Establece un calendario con consecuencias por incumplimiento.",
              },
              {
                title: "No incluir un límite de revisiones",
                desc: "Sin límite, el proyecto puede extenderse indefinidamente. Especifica cuántas revisiones están incluidas.",
              },
              {
                title: "Ignorar la propiedad intelectual",
                desc: "Si no defines quién es dueño del trabajo, ambas partes pueden reclamarlo. Aclara la transferencia de derechos.",
              },
              {
                title: "Usar un contrato genérico sin adaptar",
                desc: "Cada proyecto tiene particularidades. Un contrato copiado puede no cubrir los términos específicos de tu servicio.",
              },
            ].map((error) => (
              <div
                key={error.title}
                className="group flex items-start gap-4 bg-white p-6 rounded-xl border border-ink-200/60 hover:border-amber-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-ink-900 mb-1">{error.title}</p>
                  <p className="text-sm text-ink-500">{error.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2: Genera tu contrato en minutos — conversion section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-6 tracking-tight">
            Genera tu contrato en minutos
          </h2>
          <p className="text-lg text-ink-500 mb-10">
            Con GeneraDocs creas contratos freelance profesionales sin redactar desde cero.
          </p>

          {/* Steps */}
          <div className="space-y-6 mb-12">
            {[
              {
                step: "01",
                title: "Elige una plantilla de contrato",
                desc: "Selecciona una plantilla de contrato freelance diseñada para diferentes tipos de servicio.",
              },
              {
                step: "02",
                title: "Completa los datos del proyecto",
                desc: "Ingresa los datos de las partes, el alcance del proyecto, precios y condiciones.",
              },
              {
                step: "03",
                title: "Descarga tu contrato en PDF",
                desc: "Obtén un documento profesional listo para firmar y enviar a tu cliente.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-700 font-bold text-lg">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-ink-900 text-lg">{item.title}</p>
                  <p className="text-ink-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentos relacionados — interlinks for SEO authority distribution between landing pages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-warm">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-ink-900 mb-6">Documentos relacionados</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/cotizacion"
              className="group bg-white p-6 rounded-xl border border-ink-200/60 hover:border-primary-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-semibold text-ink-900 group-hover:text-primary-600 transition-colors">Cotización profesional</p>
              </div>
              <p className="text-sm text-ink-500">Presenta precios y condiciones claras antes de iniciar un proyecto.</p>
            </Link>
            <Link
              href="/recibo-honorarios"
              className="group bg-white p-6 rounded-xl border border-ink-200/60 hover:border-primary-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="font-semibold text-ink-900 group-hover:text-primary-600 transition-colors">Recibo de honorarios</p>
              </div>
              <p className="text-sm text-ink-500">Genera un comprobante formal de cada pago recibido por tus servicios.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA — dark gradient, matching FinalCTA component style */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-8">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Protege tu trabajo con un contrato profesional
          </h2>
          <p className="text-lg sm:text-xl text-primary-200 mb-10 max-w-xl mx-auto">
            Elige una plantilla, completa los datos del proyecto y descarga tu contrato en PDF.
          </p>
          <Link href="https://app.generadocs.com.mx/registro">
            <Button
              variant="default"
              size="xl"
              className="bg-white text-primary-700 hover:bg-primary-50 shadow-lg hover:shadow-xl transition-all group"
            >
              Crear contrato ahora
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </Link>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-primary-300 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Plan gratuito incluido</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Sin tarjeta de credito</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Descarga en PDF</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
