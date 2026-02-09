import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Footer"

/* SEO: Page-level metadata targets high-intent keyword "cómo hacer una cotización" */
export const metadata: Metadata = {
  title: "Cómo hacer una cotización profesional en minutos",
  description:
    "Aprende a crear una cotización profesional paso a paso. Qué incluir, errores comunes y plantillas listas para completar y descargar en PDF al instante.",
  alternates: {
    canonical: "https://generadocs.com.mx/cotizacion",
  },
  openGraph: {
    title: "Cómo hacer una cotización profesional en minutos",
    description: "Aprende a crear una cotización profesional paso a paso. Qué incluir, errores comunes y plantillas listas para completar y descargar en PDF al instante.",
    url: "https://generadocs.com.mx/cotizacion",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Cómo hacer una cotización profesional en minutos",
  description:
    "Aprende a crear una cotización profesional paso a paso. Qué incluir, errores comunes y plantillas listas para completar y descargar en PDF al instante.",
  url: "https://generadocs.com.mx/cotizacion",
  publisher: {
    "@type": "Organization",
    name: "GeneraDocs",
    url: "https://generadocs.com.mx",
  },
};

export default function CotizacionPage() {
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
            Cómo hacer una cotización{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              profesional
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-ink-500 leading-relaxed max-w-2xl mx-auto mb-8">
            Aprende qué incluir, evita errores comunes y genera tu cotización en minutos con una plantilla lista para usar.
          </p>
          <Link href="https://app.generadocs.com.mx/registro">
            <Button variant="primary" size="xl" className="group">
              Crear cotización ahora
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

      {/* H2: Qué es una cotización y cuándo se usa */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-warm">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-6 tracking-tight">
            Qué es una cotización y cuándo se usa
          </h2>
          <div className="space-y-4 text-lg text-ink-600 leading-relaxed">
            <p>
              Una cotización es un documento donde un profesional o empresa presenta de forma detallada el precio, las condiciones y el alcance de un producto o servicio antes de que el cliente tome una decisión de compra.
            </p>
            <p>
              Se utiliza cuando un cliente solicita información sobre precios, cuando necesitas formalizar una propuesta comercial o cuando deseas establecer las condiciones de un proyecto antes de iniciarlo.
            </p>
            {/* Interlink: contextual link to /contrato-freelance — natural transition from quoting to contracting */}
            <p>
              Una vez que el cliente acepta la cotización, el siguiente paso es formalizar los términos con un{' '}
              <Link href="/contrato-freelance" className="text-primary-600 hover:text-primary-700 underline underline-offset-2 font-medium">
                contrato freelance
              </Link>{' '}
              que proteja a ambas partes durante el proyecto.
            </p>
          </div>

          {/* Key elements list — structured for featured snippets */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              { label: "Datos del emisor", desc: "Nombre, dirección y datos de contacto de quien cotiza" },
              { label: "Datos del cliente", desc: "Nombre o razón social del destinatario" },
              { label: "Descripción de servicios", desc: "Detalle claro de cada producto o servicio ofrecido" },
              { label: "Precios unitarios y totales", desc: "Desglose de costos, impuestos y monto total" },
              { label: "Vigencia de la cotización", desc: "Fecha límite para aceptar las condiciones" },
              { label: "Condiciones de pago", desc: "Forma de pago, plazos y métodos aceptados" },
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

      {/* H2: Errores comunes al hacer una cotización */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-6 tracking-tight">
            Errores comunes al hacer una cotización
          </h2>
          <p className="text-lg text-ink-500 mb-10">
            Estos errores pueden hacerte perder clientes o generar malentendidos con tus prospectos.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "No incluir una fecha de vigencia",
                desc: "Sin vigencia, el cliente puede aceptar la cotización meses después con precios desactualizados.",
              },
              {
                title: "Descripciones ambiguas del servicio",
                desc: "Frases genéricas generan confusión sobre qué está incluido y qué no.",
              },
              {
                title: "Olvidar el desglose de impuestos",
                desc: "No separar el subtotal del IVA o de otros impuestos dificulta la toma de decisión.",
              },
              {
                title: "Enviar un formato inconsistente",
                desc: "Cotizaciones sin diseño profesional reducen la confianza del cliente en tu servicio.",
              },
              {
                title: "No especificar condiciones de pago",
                desc: "Sin condiciones claras, surgen conflictos al momento de cobrar.",
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

      {/* H2: Ejemplo de cotización profesional */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-warm">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-6 tracking-tight">
            Ejemplo de cotización profesional
          </h2>
          <p className="text-lg text-ink-500 mb-10">
            Una cotización bien estructurada incluye toda la información que el cliente necesita para tomar una decisión sin dudas.
          </p>

          {/* Example card — visual representation of a quote */}
          <div className="bg-white rounded-xl border border-ink-200/60 shadow-sm overflow-hidden">
            <div className="bg-primary-600 px-6 py-4">
              <p className="text-white font-semibold text-lg">Cotización #2025-047</p>
            </div>
            <div className="p-6 space-y-6">
              {/* Header row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-400 mb-1">Emisor</p>
                  <p className="font-semibold text-ink-900">Estudio Creativo Luna</p>
                  <p className="text-sm text-ink-500">contacto@estudiocreativo.com</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-400 mb-1">Cliente</p>
                  <p className="font-semibold text-ink-900">Restaurante El Jardín</p>
                  <p className="text-sm text-ink-500">admin@eljardin.com</p>
                </div>
              </div>

              <hr className="border-ink-100" />

              {/* Services table */}
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-400 mb-3">Servicios</p>
                <div className="space-y-3">
                  {[
                    { name: "Diseño de menú digital", qty: "1", price: "$4,500" },
                    { name: "Sesión fotográfica de platillos", qty: "1", price: "$3,200" },
                    { name: "Diseño de carta impresa", qty: "50 piezas", price: "$2,800" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-sm">
                      <div>
                        <p className="font-medium text-ink-800">{item.name}</p>
                        <p className="text-ink-400">Cantidad: {item.qty}</p>
                      </div>
                      <p className="font-semibold text-ink-900">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-ink-100" />

              {/* Totals */}
              <div className="flex justify-end">
                <div className="w-48 space-y-2 text-sm">
                  <div className="flex justify-between text-ink-500">
                    <span>Subtotal</span>
                    <span>$10,500</span>
                  </div>
                  <div className="flex justify-between text-ink-500">
                    <span>IVA (16%)</span>
                    <span>$1,680</span>
                  </div>
                  <div className="flex justify-between font-bold text-ink-900 text-base pt-2 border-t border-ink-100">
                    <span>Total</span>
                    <span>$12,180</span>
                  </div>
                </div>
              </div>

              {/* Footer info */}
              <div className="bg-surface-warm rounded-lg p-4 text-sm text-ink-500">
                <p><span className="font-medium text-ink-700">Vigencia:</span> 15 días a partir de la fecha de emisión</p>
                <p><span className="font-medium text-ink-700">Condiciones:</span> 50% al aceptar, 50% al entregar</p>
              </div>
            </div>
          </div>

          {/* Interlink: contextual link to /recibo-honorarios — natural follow-up after payment */}
          <p className="mt-8 text-lg text-ink-600 leading-relaxed">
            Al recibir cada pago parcial o total, es recomendable emitir un{' '}
            <Link href="/recibo-honorarios" className="text-primary-600 hover:text-primary-700 underline underline-offset-2 font-medium">
              recibo de honorarios
            </Link>{' '}
            como comprobante formal del monto recibido.
          </p>
        </div>
      </section>

      {/* H2: Crea tu cotización en minutos — conversion section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-6 tracking-tight">
            Crea tu cotización en minutos
          </h2>
          <p className="text-lg text-ink-500 mb-10">
            Con GeneraDocs generas cotizaciones profesionales sin diseñar desde cero.
          </p>

          {/* Steps */}
          <div className="space-y-6 mb-12">
            {[
              {
                step: "01",
                title: "Elige una plantilla de cotización",
                desc: "Selecciona entre plantillas diseñadas para diferentes industrias y servicios.",
              },
              {
                step: "02",
                title: "Completa los datos",
                desc: "Ingresa los datos de tu cliente, los servicios, precios y condiciones de pago.",
              },
              {
                step: "03",
                title: "Descarga tu cotización en PDF",
                desc: "Obtén un documento profesional listo para enviar por correo o compartir.",
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Tu cotización profesional, lista al instante
          </h2>
          <p className="text-lg sm:text-xl text-primary-200 mb-10 max-w-xl mx-auto">
            Elige una plantilla, completa tus datos y descarga tu cotización en PDF.
          </p>
          <Link href="https://app.generadocs.com.mx/registro">
            <Button
              variant="default"
              size="xl"
              className="bg-white text-primary-700 hover:bg-primary-50 shadow-lg hover:shadow-xl transition-all group"
            >
              Crear cotización ahora
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
