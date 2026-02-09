import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Guía de usuario: cómo crear documentos profesionales con GeneraDocs",
  description:
    "Guía paso a paso para usar GeneraDocs. Aprende a crear recibos, cotizaciones, contratos y otros documentos profesionales con plantillas listas para descargar.",
  alternates: {
    canonical: "https://generadocs.com.mx/guia",
  },
}

export default function GuiaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo-generadocs.png"
                alt="GeneraDocs"
                className="h-8 w-auto"
              />
            </Link>
            <div className="flex items-center gap-3">
              <Link href="https://app.generadocs.com.mx/login">
                <Button variant="ghost" size="sm">
                  Iniciar sesión
                </Button>
              </Link>
              <Link href="https://app.generadocs.com.mx/registro">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Crear cuenta gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            📖 Documentación Beta 1.0
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Guía de Usuario
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Todo lo que necesitas saber para crear documentos profesionales en segundos con GeneraDocs.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-16 z-40 bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4 overflow-x-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 text-sm font-medium whitespace-nowrap">
            <a href="#introduccion" className="text-slate-600 hover:text-blue-600 transition-colors">Introducción</a>
            <a href="#crear-cuenta" className="text-slate-600 hover:text-blue-600 transition-colors">Crear cuenta</a>
            <a href="#dashboard" className="text-slate-600 hover:text-blue-600 transition-colors">Dashboard</a>
            <a href="#plantillas" className="text-slate-600 hover:text-blue-600 transition-colors">Plantillas</a>
            <a href="#crear-documento" className="text-slate-600 hover:text-blue-600 transition-colors">Crear documento</a>
            <a href="#variables" className="text-slate-600 hover:text-blue-600 transition-colors">Variables</a>
            <a href="#exportar" className="text-slate-600 hover:text-blue-600 transition-colors">Exportar PDF</a>
            <a href="#planes" className="text-slate-600 hover:text-blue-600 transition-colors">Planes</a>
            <a href="#faq" className="text-slate-600 hover:text-blue-600 transition-colors">FAQ</a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-[240px_1fr] gap-12">
          
          {/* Sidebar - Table of Contents (Desktop) */}
          <aside className="hidden md:block">
            <div className="sticky top-40">
              <h3 className="text-sm font-semibold text-slate-900 mb-4">Contenido</h3>
              <nav className="space-y-2 text-sm">
                <a href="#introduccion" className="block text-slate-600 hover:text-blue-600 py-1">1. Introducción</a>
                <a href="#crear-cuenta" className="block text-slate-600 hover:text-blue-600 py-1">2. Crear tu cuenta</a>
                <a href="#dashboard" className="block text-slate-600 hover:text-blue-600 py-1">3. Tu dashboard</a>
                <a href="#plantillas" className="block text-slate-600 hover:text-blue-600 py-1">4. Plantillas</a>
                <a href="#crear-documento" className="block text-slate-600 hover:text-blue-600 py-1">5. Crear documento</a>
                <a href="#variables" className="block text-slate-600 hover:text-blue-600 py-1">6. Variables</a>
                <a href="#exportar" className="block text-slate-600 hover:text-blue-600 py-1">7. Exportar PDF</a>
                <a href="#mis-documentos" className="block text-slate-600 hover:text-blue-600 py-1">8. Mis documentos</a>
                <a href="#planes" className="block text-slate-600 hover:text-blue-600 py-1">9. Planes</a>
                <a href="#faq" className="block text-slate-600 hover:text-blue-600 py-1">10. FAQ</a>
                <a href="#feedback" className="block text-slate-600 hover:text-blue-600 py-1">11. Feedback</a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="space-y-16">
            
            {/* Section 1: Introducción */}
            <section id="introduccion" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-xl text-lg font-bold">1</span>
                <h2 className="text-2xl font-bold text-slate-900">Introducción</h2>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed">
                  GeneraDocs es una plataforma que te permite crear documentos profesionales — cotizaciones, contratos, reportes y más — usando plantillas prediseñadas. En lugar de empezar desde cero cada vez, tú eliges una plantilla, llenas los datos y obtienes un PDF listo para enviar.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-6">
                  <h4 className="font-semibold text-blue-900 mb-3">🎯 ¿Para quién es esto?</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">→</span>
                      Freelancers que necesitan cotizaciones rápidas
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">→</span>
                      Microempresas que envían contratos frecuentemente
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-500">→</span>
                      Vendedores que generan reportes de ventas periódicos
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: Crear cuenta */}
            <section id="crear-cuenta" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-xl text-lg font-bold">2</span>
                <h2 className="text-2xl font-bold text-slate-900">Crear tu cuenta</h2>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl">
                  <span className="flex items-center justify-center w-8 h-8 bg-white text-slate-700 rounded-lg text-sm font-bold shadow-sm">1</span>
                  <div>
                    <p className="text-slate-700">Ve a <a href="https://app.generadocs.com.mx/registro" className="text-blue-600 hover:underline font-medium">app.generadocs.com.mx</a> y haz clic en "Registrarte"</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl">
                  <span className="flex items-center justify-center w-8 h-8 bg-white text-slate-700 rounded-lg text-sm font-bold shadow-sm">2</span>
                  <div>
                    <p className="text-slate-700">Ingresa tu correo electrónico y crea una contraseña</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl">
                  <span className="flex items-center justify-center w-8 h-8 bg-white text-slate-700 rounded-lg text-sm font-bold shadow-sm">3</span>
                  <div>
                    <p className="text-slate-700">Recibirás un correo de confirmación — revisa tu bandeja de entrada (y spam)</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl">
                  <span className="flex items-center justify-center w-8 h-8 bg-white text-slate-700 rounded-lg text-sm font-bold shadow-sm">4</span>
                  <div>
                    <p className="text-slate-700">Confirma tu correo haciendo clic en el enlace</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-slate-50 rounded-xl">
                  <span className="flex items-center justify-center w-8 h-8 bg-white text-slate-700 rounded-lg text-sm font-bold shadow-sm">5</span>
                  <div>
                    <p className="text-slate-700">¡Listo! Serás redirigido a tu dashboard</p>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
                  <h4 className="font-semibold text-amber-900 mb-2">💡 Consejo para beta users</h4>
                  <p className="text-amber-800 text-sm">
                    Como usuario beta, tu cuenta ya estará habilitada desde el momento en que confirmes tu correo. No necesitas código de invitación adicional.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Dashboard */}
            <section id="dashboard" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-xl text-lg font-bold">3</span>
                <h2 className="text-2xl font-bold text-slate-900">Tu dashboard</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Al entrar a tu cuenta verás el dashboard principal. Es tu punto de partida para todo.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-xl">📄</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Plantillas</h4>
                  <p className="text-sm text-slate-600">Explora y usa plantillas disponibles</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-xl">📁</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Mis documentos</h4>
                  <p className="text-sm text-slate-600">Accede a todos los docs que ya creaste</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-xl">➕</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Crear documento</h4>
                  <p className="text-sm text-slate-600">Atajo rápido para empezar un doc nuevo</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-xl">👤</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">Mi cuenta</h4>
                  <p className="text-sm text-slate-600">Ve tu plan actual y opciones</p>
                </div>
              </div>
            </section>

            {/* Section 4: Plantillas */}
            <section id="plantillas" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-xl text-lg font-bold">4</span>
                <h2 className="text-2xl font-bold text-slate-900">Plantillas</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Las plantillas son los "moldes" de tus documentos. GeneraDocs viene con un conjunto de plantillas prediseñadas pensadas para el mercado hispanohablante.
              </p>
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-4">Plantillas disponibles en beta:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><strong>Cotización de servicios</strong> — ideal para freelancers</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><strong>Contrato de prestación de servicios</strong> — básico y personalizable</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><strong>Reporte de ventas mensual</strong> — para vendedores y emprendedores</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><strong>Factura pro forma</strong> — para proyectos pendientes de pago</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span><strong>Carta de presentación profesional</strong> — para proyectos o alianzas</span>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mt-6">
                <h4 className="font-semibold text-blue-900 mb-2">📌 ¿Puedo crear mi propia plantilla?</h4>
                <p className="text-blue-800 text-sm">
                  ¡Sí! Puedes crear plantillas personalizadas desde la sección "Mis Plantillas" en el dashboard.
                </p>
              </div>
            </section>

            {/* Section 5: Crear documento */}
            <section id="crear-documento" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-xl text-lg font-bold">5</span>
                <h2 className="text-2xl font-bold text-slate-900">Crear un documento</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Este es el flujo principal de GeneraDocs. Te guía de forma sencilla desde la plantilla hasta el PDF final.
              </p>
              <div className="space-y-6">
                <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <h4 className="font-semibold text-slate-900 mb-2">Elige una plantilla</h4>
                  <p className="text-slate-600">En la sección de Plantillas, busca la que necesites. Puedes ver una descripción breve antes de seleccionarla.</p>
                </div>
                <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <h4 className="font-semibold text-slate-900 mb-2">Revisa las variables</h4>
                  <p className="text-slate-600">Cada plantilla tiene campos que necesitan datos. Por ejemplo: nombre del cliente, monto, fecha. GeneraDocs te muestra cuáles son.</p>
                </div>
                <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <h4 className="font-semibold text-slate-900 mb-2">Llena el formulario</h4>
                  <p className="text-slate-600">Ingresa los valores para cada variable. Es como rellenar un formulario simple — sin necesidad de editar texto directamente.</p>
                </div>
                <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <h4 className="font-semibold text-slate-900 mb-2">Vista previa</h4>
                  <p className="text-slate-600">Antes de generar el PDF, puedes ver cómo quedará el documento con tus datos.</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                  <h4 className="font-semibold text-slate-900 mb-2">Genera y descarga</h4>
                  <p className="text-slate-600">Haz clic en "Generar PDF" y descarga tu documento profesional listo para enviar.</p>
                </div>
              </div>
            </section>

            {/* Section 6: Variables */}
            <section id="variables" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-xl text-lg font-bold">6</span>
                <h2 className="text-2xl font-bold text-slate-900">Variables</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Las variables son los campos dinámicos que personalizan cada documento. Se escriben entre llaves dobles.
              </p>
              <div className="bg-slate-900 rounded-xl p-6 text-sm font-mono">
                <p className="text-slate-400 mb-2"># Ejemplo de plantilla con variables:</p>
                <p className="text-white">
                  Estimado/a <span className="text-green-400">{"{{nombre_cliente}}"}</span>,
                </p>
                <p className="text-white mt-2">
                  Le enviamos la cotización por <span className="text-green-400">{"{{servicio}}"}</span> 
                  con un monto total de <span className="text-green-400">{"{{monto}}"}</span>.
                </p>
                <p className="text-white mt-2">
                  Fecha de entrega: <span className="text-green-400">{"{{fecha_entrega}}"}</span>
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5 mt-6">
                <h4 className="font-semibold text-green-900 mb-2">✨ Tip</h4>
                <p className="text-green-800 text-sm">
                  GeneraDocs detecta automáticamente las variables en tu plantilla y te muestra un formulario para llenarlas.
                </p>
              </div>
            </section>

            {/* Section 7: Exportar */}
            <section id="exportar" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-xl text-lg font-bold">7</span>
                <h2 className="text-2xl font-bold text-slate-900">Exportar PDF</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Una vez que hayas llenado las variables, puedes generar tu PDF profesional con un solo clic.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border-2 border-slate-200 rounded-xl p-5">
                  <h4 className="font-semibold text-slate-900 mb-3">Plan Gratuito</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Exportar a PDF
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-slate-400">•</span> Con marca de agua
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-5">
                  <h4 className="font-semibold text-blue-900 mb-3">Plan Pro</h4>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Exportar a PDF
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Sin marca de agua
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Exportar a DOCX
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Mis documentos */}
            <section id="mis-documentos" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-xl text-lg font-bold">8</span>
                <h2 className="text-2xl font-bold text-slate-900">Mis documentos</h2>
              </div>
              <p className="text-slate-600 mb-6">
                Todos los documentos que generas se guardan automáticamente. Puedes acceder a ellos en cualquier momento desde "Mis documentos".
              </p>
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate-900 mb-4">Desde esta sección puedes:</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center gap-3">
                    <span className="text-blue-500">→</span>
                    Ver el historial de documentos creados
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-500">→</span>
                    Descargar nuevamente cualquier PDF
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-500">→</span>
                    Editar y regenerar un documento existente
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-500">→</span>
                    Eliminar documentos que ya no necesites
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 9: Planes */}
            <section id="planes" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-xl text-lg font-bold">9</span>
                <h2 className="text-2xl font-bold text-slate-900">Planes</h2>
              </div>
              <p className="text-slate-600 mb-6">
                GeneraDocs tiene dos niveles: uno gratuito para empezar y uno Pro para profesionales que necesitan más.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Función</th>
                      <th className="text-center py-3 px-4 font-semibold text-slate-900">Gratuito</th>
                      <th className="text-center py-3 px-4 font-semibold text-blue-600 bg-blue-50 rounded-t-lg">Pro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-3 px-4 text-slate-700">Documentos por mes</td>
                      <td className="py-3 px-4 text-center text-slate-600">3</td>
                      <td className="py-3 px-4 text-center text-blue-600 bg-blue-50 font-medium">Ilimitados</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-700">Plantillas disponibles</td>
                      <td className="py-3 px-4 text-center text-slate-600">5 básicas</td>
                      <td className="py-3 px-4 text-center text-blue-600 bg-blue-50 font-medium">Todas</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-700">Exportar PDF</td>
                      <td className="py-3 px-4 text-center text-slate-600">Con marca de agua</td>
                      <td className="py-3 px-4 text-center text-blue-600 bg-blue-50 font-medium">Sin marca</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-700">Exportar DOCX</td>
                      <td className="py-3 px-4 text-center text-slate-400">—</td>
                      <td className="py-3 px-4 text-center text-green-600 bg-blue-50">✓</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-700">Branding personalizado</td>
                      <td className="py-3 px-4 text-center text-slate-400">—</td>
                      <td className="py-3 px-4 text-center text-green-600 bg-blue-50">✓</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-700">Soporte</td>
                      <td className="py-3 px-4 text-center text-slate-600">Email básico</td>
                      <td className="py-3 px-4 text-center text-blue-600 bg-blue-50 rounded-b-lg font-medium">Prioritario</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: FAQ */}
            <section id="faq" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-xl text-lg font-bold">10</span>
                <h2 className="text-2xl font-bold text-slate-900">Preguntas frecuentes</h2>
              </div>
              <div className="space-y-4">
                <details className="group bg-white border border-slate-200 rounded-xl">
                  <summary className="flex items-center justify-between p-5 cursor-pointer">
                    <span className="font-medium text-slate-900">¿Puedo usar GeneraDocs sin crear cuenta?</span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-5 pb-5 text-slate-600">
                    No. Una cuenta es necesaria para guardar tus documentos y plantillas. El registro es gratuito y rápido.
                  </div>
                </details>
                <details className="group bg-white border border-slate-200 rounded-xl">
                  <summary className="flex items-center justify-between p-5 cursor-pointer">
                    <span className="font-medium text-slate-900">¿Qué formatos de exportación hay disponibles?</span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-5 pb-5 text-slate-600">
                    En el plan gratuito exportas a PDF (con marca de agua). El plan Pro agrega exportación a DOCX.
                  </div>
                </details>
                <details className="group bg-white border border-slate-200 rounded-xl">
                  <summary className="flex items-center justify-between p-5 cursor-pointer">
                    <span className="font-medium text-slate-900">¿Puedo editar un documento ya creado?</span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-5 pb-5 text-slate-600">
                    Sí, puedes volver a abrir cualquier documento guardado, modificar las variables y re-exportarlo.
                  </div>
                </details>
                <details className="group bg-white border border-slate-200 rounded-xl">
                  <summary className="flex items-center justify-between p-5 cursor-pointer">
                    <span className="font-medium text-slate-900">¿Es segura mi información?</span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-5 pb-5 text-slate-600">
                    Sí. Usamos cifrado HTTPS en todas las comunicaciones y los datos se almacenan de forma segura en Supabase.
                  </div>
                </details>
                <details className="group bg-white border border-slate-200 rounded-xl">
                  <summary className="flex items-center justify-between p-5 cursor-pointer">
                    <span className="font-medium text-slate-900">¿Qué pasa si olvido mi contraseña?</span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-5 pb-5 text-slate-600">
                    En la página de login hay una opción "¿Olvidaste tu contraseña?". Te enviaremos un enlace de recuperación por correo.
                  </div>
                </details>
              </div>
            </section>

            {/* Section 11: Feedback */}
            <section id="feedback" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-xl text-lg font-bold">11</span>
                <h2 className="text-2xl font-bold text-slate-900">Danos tu feedback</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Tu opinión es muy valiosa 🙏</h3>
                <p className="text-blue-100 mb-6">
                  Como usuario beta, tu feedback nos ayuda a construir un mejor producto. Cada comentario que nos des define la dirección de GeneraDocs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:hola@generadocs.com.mx" className="text-blue-200 hover:text-white">hola@generadocs.com.mx</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📷</span>
                    <div>
                      <p className="font-medium">Instagram</p>
                      <a href="https://instagram.com/generadocs" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">@generadocs</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">𝕏</span>
                    <div>
                      <p className="font-medium">Twitter / X</p>
                      <a href="https://x.com/generadocs" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white">@generadocs</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-6">
                <h4 className="font-semibold text-amber-900 mb-2">🎉 ¡Gracias por ser parte de esto!</h4>
                <p className="text-amber-800 text-sm">
                  Eres uno de los primeros en usar GeneraDocs. Tu feedback en estas semanas va a definir la dirección del producto.
                </p>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <img src="/logo-generadocs.png" alt="GeneraDocs" className="h-6 w-auto" />
              <span className="text-slate-600 text-sm">© 2026 GeneraDocs</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacidad" className="text-slate-600 hover:text-blue-600">Privacidad</Link>
              <Link href="/terminos" className="text-slate-600 hover:text-blue-600">Términos</Link>
              <Link href="https://app.generadocs.com.mx/registro">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Comenzar gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
