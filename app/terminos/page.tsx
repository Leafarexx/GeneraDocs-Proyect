import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Términos de Uso - GeneraDocs",
  description: "Términos y condiciones de uso de GeneraDocs.",
}

export default function TerminosPage() {
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
            Términos de Uso
          </h1>
          <p className="text-gray-600">
            Última actualización: Febrero 2026
          </p>
        </div>

        {/* Intro */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
          <p className="text-gray-700 leading-relaxed">
            Al usar <strong>GeneraDocs</strong>, aceptas estos términos. Por favor léelos con atención.
            Son simples y directos porque creemos en la transparencia.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">1</span>
              Sobre el Servicio
            </h2>
            <div className="pl-11 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                GeneraDocs es una plataforma para crear documentos profesionales usando plantillas personalizables.
                El servicio te permite:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Crear y guardar plantillas de documentos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Generar documentos PDF personalizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Usar plantillas predeterminadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Descargar y compartir tus documentos</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">2</span>
              Tu Cuenta
            </h2>
            <div className="pl-11 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Para usar GeneraDocs necesitas crear una cuenta. Eres responsable de:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Proporcionar información verdadera y actualizada</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Mantener tu contraseña segura y confidencial</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700">Toda la actividad que ocurra bajo tu cuenta</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">3</span>
              Uso Aceptable
            </h2>
            <div className="pl-11 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Puedes usar GeneraDocs para cualquier propósito legal. <strong>NO puedes</strong> usar el servicio para:
              </p>
              <div className="bg-red-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-red-500">✗</span>
                  <span>Crear documentos fraudulentos o engañosos</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-red-500">✗</span>
                  <span>Suplantar identidad de otras personas o empresas</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-red-500">✗</span>
                  <span>Actividades ilegales de cualquier tipo</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-red-500">✗</span>
                  <span>Intentar hackear o comprometer la seguridad del servicio</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">4</span>
              Tu Contenido
            </h2>
            <div className="pl-11 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Los documentos y plantillas que creas te pertenecen a ti. GeneraDocs:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">✓ Lo que hacemos</p>
                  <p className="text-sm text-gray-600">Almacenamos tu contenido de forma segura para que puedas acceder a él.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="font-medium text-gray-900 mb-1">✗ Lo que NO hacemos</p>
                  <p className="text-sm text-gray-600">No usamos, vendemos ni compartimos tu contenido con terceros.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">5</span>
              Disponibilidad del Servicio
            </h2>
            <div className="pl-11 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Nos esforzamos por mantener GeneraDocs disponible 24/7, pero:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Puede haber interrupciones por mantenimiento o actualizaciones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>No garantizamos disponibilidad ininterrumpida</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Te recomendamos mantener copias de tus documentos importantes</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">6</span>
              Limitación de Responsabilidad
            </h2>
            <div className="pl-11 space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-gray-700 leading-relaxed">
                  GeneraDocs se proporciona "tal cual". No somos responsables de:
                </p>
                <ul className="mt-3 space-y-1 text-gray-700 text-sm">
                  <li>• Pérdida de datos debido a circunstancias fuera de nuestro control</li>
                  <li>• Consecuencias del uso de los documentos que generes</li>
                  <li>• Decisiones tomadas basándose en los documentos creados</li>
                </ul>
              </div>
              <p className="text-gray-700 text-sm">
                <strong>Nota:</strong> GeneraDocs NO genera documentos fiscales oficiales (CFDI). 
                Para facturas fiscales, consulta un servicio autorizado por el SAT.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">7</span>
              Cancelación de Cuenta
            </h2>
            <div className="pl-11 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Puedes cancelar tu cuenta en cualquier momento. Al hacerlo:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Perderás acceso a tus plantillas guardadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Tu información será eliminada según nuestra política de privacidad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>Los documentos que ya descargaste seguirán siendo tuyos</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">8</span>
              Cambios a estos Términos
            </h2>
            <div className="pl-11">
              <p className="text-gray-700 leading-relaxed">
                Podemos actualizar estos términos ocasionalmente. Te notificaremos de cambios importantes 
                por email y/o mediante un aviso en la aplicación. El uso continuado del servicio después 
                de los cambios constituye aceptación de los nuevos términos.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-lg text-sm font-bold">9</span>
              Contacto
            </h2>
            <div className="pl-11">
              <p className="text-gray-700 leading-relaxed mb-4">
                ¿Tienes preguntas sobre estos términos? Contáctanos:
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
          <div className="flex justify-center gap-4">
            <Link href="/privacidad" className="text-sm text-blue-600 hover:underline">
              Política de Privacidad
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
