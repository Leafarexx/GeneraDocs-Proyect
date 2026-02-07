import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Política de Privacidad - GeneraDocs",
  description: "Política de privacidad de GeneraDocs. Conoce cómo protegemos tu información.",
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <img
                src="/logo-generadocs.png"
                alt="GeneraDocs"
                className="h-8 w-auto"
              />
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Política de Privacidad
          </h1>
          <p className="text-gray-600">
            Última actualización: Febrero 2026
          </p>
        </div>

        {/* Intro */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-10">
          <p className="text-gray-700 leading-relaxed">
            En <strong>GeneraDocs</strong> nos tomamos muy en serio la privacidad de tus datos. 
            Esta política explica de forma clara y transparente qué información recopilamos, 
            cómo la usamos y cuáles son tus derechos.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">1</span>
              Información que Recopilamos
            </h2>
            <div className="pl-11 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Cuando creas una cuenta y usas GeneraDocs, recopilamos:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Correo electrónico:</strong>
                    <span className="text-gray-600"> Para tu cuenta y comunicaciones importantes.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Nombre:</strong>
                    <span className="text-gray-600"> Para personalizar tu experiencia.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Nombre de empresa (opcional):</strong>
                    <span className="text-gray-600"> Para tus documentos.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Plantillas y documentos:</strong>
                    <span className="text-gray-600"> Los que creas dentro de la plataforma.</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 font-medium mt-4">Lo que NO recopilamos:</p>
              <div className="bg-red-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-red-500">✗</span>
                  <span>Información de pago (aún no tenemos planes de pago)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-red-500">✗</span>
                  <span>Datos sensibles (salud, religión, orientación, etc.)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-red-500">✗</span>
                  <span>Tu actividad en otros sitios web</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">2</span>
              Cómo Usamos tu Información
            </h2>
            <div className="pl-11 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Usamos tu información únicamente para:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Permitirte crear y gestionar tu cuenta</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Guardar tus plantillas y documentos de forma segura</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Enviarte información importante sobre tu cuenta</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Mejorar el producto basándonos en cómo lo usas</span>
                </li>
              </ul>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <p className="text-gray-800 font-medium mb-2">🔒 Compromiso de privacidad:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• <strong>NO</strong> vendemos tu información a terceros</li>
                  <li>• <strong>NO</strong> compartimos tu email con otras empresas</li>
                  <li>• <strong>NO</strong> enviamos spam ni publicidad de terceros</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">3</span>
              Almacenamiento y Seguridad
            </h2>
            <div className="pl-11 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Tu información se almacena de forma segura utilizando:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">Supabase</p>
                  <p className="text-sm text-gray-600">Base de datos con encriptación y cumplimiento SOC 2.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">Vercel</p>
                  <p className="text-sm text-gray-600">Hosting con HTTPS y protección DDoS.</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de seguridad estándar de la industria para proteger tu información contra acceso no autorizado.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">4</span>
              Tus Derechos
            </h2>
            <div className="pl-11 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Tienes control total sobre tu información. Puedes:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <span className="text-2xl">👁️</span>
                  <span className="text-gray-700">Acceder a tus datos</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <span className="text-2xl">✏️</span>
                  <span className="text-gray-700">Corregir información incorrecta</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <span className="text-2xl">🗑️</span>
                  <span className="text-gray-700">Eliminar tu cuenta y datos</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                  <span className="text-2xl">📤</span>
                  <span className="text-gray-700">Exportar tus plantillas</span>
                </div>
              </div>
              <p className="text-gray-700">
                Para ejercer estos derechos, contáctanos en{" "}
                <a href="https://instagram.com/generadocs" className="text-blue-600 hover:underline">@generadocs</a>.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">5</span>
              Cookies
            </h2>
            <div className="pl-11">
              <p className="text-gray-700 leading-relaxed">
                Utilizamos cookies esenciales para el funcionamiento de la aplicación (autenticación, preferencias). 
                No utilizamos cookies de publicidad ni rastreo de terceros.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">6</span>
              Cambios a esta Política
            </h2>
            <div className="pl-11">
              <p className="text-gray-700 leading-relaxed">
                Si hacemos cambios significativos a esta política, te notificaremos por email 
                y/o mediante un aviso visible en la aplicación antes de que los cambios entren en vigor.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">7</span>
              Contacto
            </h2>
            <div className="pl-11">
              <p className="text-gray-700 leading-relaxed mb-4">
                ¿Tienes preguntas sobre esta política? Contáctanos:
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://instagram.com/generadocs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  </svg>
                  @generadocs
                </a>
                <a 
                  href="https://x.com/generadocs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  @generadocs
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm mb-6">
            © {new Date().getFullYear()} GeneraDocs. Todos los derechos reservados.
          </p>
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </article>
    </main>
  )
}
