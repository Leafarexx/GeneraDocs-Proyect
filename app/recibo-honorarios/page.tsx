import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"

/* SEO: Page-level metadata targets "recibo de honorarios" keyword cluster */
export const metadata: Metadata = {
  title: "Crea un recibo de honorarios profesional en minutos",
  description:
    "Genera un recibo de honorarios profesional de forma rápida. Completa los datos del servicio, monto y cliente, y descarga tu comprobante en PDF al instante.",
  alternates: {
    canonical: "https://generadocs.com.mx/recibo-honorarios",
  },
  openGraph: {
    title: "Crea un recibo de honorarios profesional en minutos",
    description: "Genera un recibo de honorarios profesional de forma rápida. Completa los datos del servicio, monto y cliente, y descarga tu comprobante en PDF al instante.",
    url: "https://generadocs.com.mx/recibo-honorarios",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Crea un recibo de honorarios profesional en minutos",
  description:
    "Genera un recibo de honorarios profesional de forma rápida. Completa los datos del servicio, monto y cliente, y descarga tu comprobante en PDF al instante.",
  url: "https://generadocs.com.mx/recibo-honorarios",
  publisher: {
    "@type": "Organization",
    name: "GeneraDocs",
    url: "https://generadocs.com.mx",
  },
};

export default function ReciboHonorariosPage() {
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
            Recibo de honorarios{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              profesional
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-ink-500 leading-relaxed max-w-2xl mx-auto mb-8">
            Documenta tus pagos por servicios profesionales con un recibo claro, formal y listo para descargar.
          </p>
          <Link href="https://app.generadocs.com.mx/registro">
            <Button variant="primary" size="xl" className="group">
              Crear recibo ahora
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

      {/* H2: Qué es un recibo de honorarios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-warm">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-6 tracking-tight">
            Qué es un recibo de honorarios
          </h2>
          <div className="space-y-4 text-lg text-ink-600 leading-relaxed">
            <p>
              Un recibo de honorarios es un documento que certifica el pago recibido por un profesional independiente a cambio de sus servicios. Funciona como comprobante tanto para quien paga como para quien cobra.
            </p>
            <p>
              A diferencia de una factura fiscal, el recibo de honorarios es un documento interno que sirve como respaldo contable y registro de operaciones entre un profesional y su cliente.
            </p>
            <p>
              Es indispensable para llevar un control ordenado de ingresos, respaldar acuerdos de pago y mantener un registro profesional de cada servicio prestado.
            </p>
          </div>
        </div>
      </section>

      {/* H2: Cuándo necesitas un recibo de honorarios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-6 tracking-tight">
            Cuándo necesitas un recibo de honorarios
          </h2>
          <p className="text-lg text-ink-500 mb-4">
            Estas son las situaciones donde un recibo de honorarios es necesario para documentar un pago profesional.
          </p>
          {/* Interlinks: contextual links to /cotizacion and /contrato-freelance — natural document workflow */}
          <p className="text-lg text-ink-500 mb-10">
            En la mayoría de estos casos, el flujo profesional inicia con una{' '}
            <Link href="/cotizacion" className="text-primary-600 hover:text-primary-700 underline underline-offset-2 font-medium">
              cotización profesional
            </Link>
            , se formaliza con un{' '}
            <Link href="/contrato-freelance" className="text-primary-600 hover:text-primary-700 underline underline-offset-2 font-medium">
              contrato freelance
            </Link>
            {' '}y se cierra con el recibo de honorarios como comprobante de pago.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                label: "Servicios de consultoría",
                desc: "Asesorías, diagnósticos y consultorías profesionales pagadas por sesión o proyecto",
              },
              {
                label: "Trabajo creativo independiente",
                desc: "Diseño gráfico, redacción, fotografía, desarrollo web y servicios creativos",
              },
              {
                label: "Servicios de salud",
                desc: "Consultas médicas, psicológicas, nutricionales y terapéuticas en práctica privada",
              },
              {
                label: "Capacitación y formación",
                desc: "Talleres, cursos, conferencias y sesiones de capacitación profesional",
              },
              {
                label: "Servicios legales y contables",
                desc: "Asesoría legal, trámites notariales, contabilidad y auditorías",
              },
              {
                label: "Servicios técnicos especializados",
                desc: "Ingeniería, arquitectura, topografía y servicios técnicos profesionales",
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
        </div>
      </section>

      {/* H2: Ejemplo de recibo de honorarios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-warm">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-6 tracking-tight">
            Ejemplo de recibo de honorarios
          </h2>
          <p className="text-lg text-ink-500 mb-10">
            Un recibo de honorarios bien elaborado incluye toda la información necesaria para respaldar el pago.
          </p>

          {/* Example card — visual representation of a receipt */}
          <div className="bg-white rounded-xl border border-ink-200/60 shadow-sm overflow-hidden">
            <div className="bg-primary-600 px-6 py-4">
              <p className="text-white font-semibold text-lg">Recibo de honorarios #RH-2025-031</p>
            </div>
            <div className="p-6 space-y-6">
              {/* Header row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-400 mb-1">Profesional</p>
                  <p className="font-semibold text-ink-900">Lic. María González Rivera</p>
                  <p className="text-sm text-ink-500">Consultora de Recursos Humanos</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-400 mb-1">Cliente</p>
                  <p className="font-semibold text-ink-900">Tecnología Avanzada S.A.</p>
                  <p className="text-sm text-ink-500">Departamento de RRHH</p>
                </div>
              </div>

              <hr className="border-ink-100" />

              {/* Service details */}
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-400 mb-3">Detalle del servicio</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium text-ink-800">Diagnóstico organizacional</p>
                      <p className="text-ink-400">Evaluación de clima laboral — 40 horas</p>
                    </div>
                    <p className="font-semibold text-ink-900">$18,000</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium text-ink-800">Informe ejecutivo de resultados</p>
                      <p className="text-ink-400">Documento de 25 páginas con recomendaciones</p>
                    </div>
                    <p className="font-semibold text-ink-900">$7,000</p>
                  </div>
                </div>
              </div>

              <hr className="border-ink-100" />

              {/* Totals */}
              <div className="flex justify-end">
                <div className="w-56 space-y-2 text-sm">
                  <div className="flex justify-between text-ink-500">
                    <span>Subtotal</span>
                    <span>$25,000</span>
                  </div>
                  <div className="flex justify-between text-ink-500">
                    <span>Retención ISR (10%)</span>
                    <span>-$2,500</span>
                  </div>
                  <div className="flex justify-between font-bold text-ink-900 text-base pt-2 border-t border-ink-100">
                    <span>Neto recibido</span>
                    <span>$22,500</span>
                  </div>
                </div>
              </div>

              {/* Footer info */}
              <div className="bg-surface-warm rounded-lg p-4 text-sm text-ink-500">
                <p><span className="font-medium text-ink-700">Fecha de pago:</span> 15 de enero de 2025</p>
                <p><span className="font-medium text-ink-700">Método de pago:</span> Transferencia bancaria</p>
                <p><span className="font-medium text-ink-700">Periodo del servicio:</span> 1 al 31 de diciembre de 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2: Genera tu recibo en minutos — conversion section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-6 tracking-tight">
            Genera tu recibo en minutos
          </h2>
          <p className="text-lg text-ink-500 mb-10">
            Con GeneraDocs creas recibos de honorarios profesionales sin plantillas complicadas.
          </p>

          {/* Steps */}
          <div className="space-y-6 mb-12">
            {[
              {
                step: "01",
                title: "Elige una plantilla de recibo",
                desc: "Selecciona una plantilla de recibo de honorarios diseñada para servicios profesionales.",
              },
              {
                step: "02",
                title: "Completa los datos del pago",
                desc: "Ingresa los datos del profesional, el cliente, el servicio prestado y el monto recibido.",
              },
              {
                step: "03",
                title: "Descarga tu recibo en PDF",
                desc: "Obtén un documento formal listo para entregar a tu cliente como comprobante.",
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
              href="/contrato-freelance"
              className="group bg-white p-6 rounded-xl border border-ink-200/60 hover:border-primary-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="font-semibold text-ink-900 group-hover:text-primary-600 transition-colors">Contrato freelance</p>
              </div>
              <p className="text-sm text-ink-500">Formaliza los términos de tu proyecto con un contrato profesional.</p>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Tu recibo de honorarios, listo al instante
          </h2>
          <p className="text-lg sm:text-xl text-primary-200 mb-10 max-w-xl mx-auto">
            Completa los datos de tu servicio y descarga tu recibo de honorarios en PDF.
          </p>
          <Link href="https://app.generadocs.com.mx/registro">
            <Button
              variant="default"
              size="xl"
              className="bg-white text-primary-700 hover:bg-primary-50 shadow-lg hover:shadow-xl transition-all group"
            >
              Crear recibo ahora
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
