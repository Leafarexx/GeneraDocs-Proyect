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
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/">
              <img
                src="/logo-generadocs.png"
                alt="GeneraDocs"
                className="h-9 w-auto"
              />
            </a>
            <Link href="/">
              <Button variant="outline" size="sm" className="bg-transparent">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Política de Privacidad
        </h1>
        <p className="text-muted-foreground mb-10">
          Última actualización: Enero 2026
        </p>

        <div className="prose prose-lg max-w-none text-foreground">
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              1. Información que Recopilamos
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              En GeneraDocs recopilamos la siguiente información cuando te registras en nuestra lista de espera:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li><strong className="text-foreground">Correo electrónico:</strong> Para comunicarnos contigo sobre el lanzamiento y actualizaciones del producto.</li>
              <li><strong className="text-foreground">Nombre (opcional):</strong> Para personalizar nuestra comunicación.</li>
              <li><strong className="text-foreground">Ocupación (opcional):</strong> Para entender mejor a nuestros usuarios y mejorar el producto.</li>
            </ul>
            <p className="text-muted-foreground mb-2 font-medium">Información que NO recopilamos:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>No recopilamos información de pago en esta etapa</li>
              <li>No recopilamos datos sensibles</li>
              <li>No rastreamos tu actividad en otros sitios web</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              2. Cómo Usamos tu Información
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Avisarte cuando GeneraDocs esté disponible</li>
              <li>Enviarte actualizaciones sobre el desarrollo del producto</li>
              <li>Mejorar nuestro servicio basándonos en el feedback</li>
              <li>Responder a tus consultas o comentarios</li>
            </ul>
            <p className="text-muted-foreground mb-2 font-medium">Lo que NO hacemos:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>NO vendemos tu información a terceros</li>
              <li>NO compartimos tu email con otras empresas</li>
              <li>NO enviamos spam ni publicidad de terceros</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              3. Almacenamiento y Seguridad
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Tu información se almacena de forma segura en Tally.so, plataforma de formularios con sede en Europa que cumple con GDPR. Tomamos medidas razonables para proteger tu información personal contra acceso no autorizado.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              4. Tus Derechos
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Tienes derecho a:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Acceder a la información que tenemos sobre ti</li>
              <li>Corregir cualquier información incorrecta</li>
              <li>Eliminar tu información de nuestra base de datos</li>
              <li>Cancelar tu suscripción en cualquier momento</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Para ejercer cualquiera de estos derechos, contáctanos en nuestras redes sociales @generadocs.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              5. Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro sitio web utiliza cookies esenciales para el funcionamiento básico y analytics para entender cómo se usa nuestro sitio. No utilizamos cookies de publicidad.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              6. Cambios a esta Política
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos actualizar esta política ocasionalmente. Te notificaremos de cambios significativos a través del correo electrónico que nos proporcionaste.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              7. Contacto
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Si tienes preguntas sobre esta política:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Instagram: <a href="https://instagram.com/generadocs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@generadocs</a></li>
              <li>X (Twitter): <a href="https://twitter.com/generadocs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@generadocs</a></li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              8. Consentimiento
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Al registrarte en nuestra lista de espera, aceptas los términos de esta política de privacidad.
            </p>
          </section>
        </div>

        {/* Footer info */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm mb-1">GeneraDocs</p>
          <p className="text-muted-foreground text-sm mb-4">Guadalajara, Jalisco, México</p>
          <p className="text-muted-foreground text-sm">© 2026 GeneraDocs. Todos los derechos reservados.</p>
          
          <Link href="/" className="inline-block mt-8">
            <Button variant="outline" className="bg-transparent">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </article>
    </main>
  )
}
