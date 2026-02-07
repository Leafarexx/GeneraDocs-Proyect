/**
 * Solution Section Component - REDISEÑADO
 * Con screenshots reales del producto
 */

import Image from 'next/image';

export default function Solution() {
  const features = [
    {
      step: "01",
      title: "Elige una plantilla",
      description: "Selecciona entre +15 plantillas profesionales: recibos, cotizaciones, facturas, cartas y reportes. O crea la tuya desde cero.",
      image: "/screenshots/plantillas-predeterminadas.png",
      imageAlt: "Plantillas predeterminadas de GeneraDocs"
    },
    {
      step: "02", 
      title: "Llena las variables",
      description: "Solo ingresa los datos que cambian: nombre del cliente, monto, fecha, servicio. GeneraDocs detecta las variables automáticamente.",
      image: "/screenshots/editor-variables.png",
      imageAlt: "Editor con variables de GeneraDocs"
    },
    {
      step: "03",
      title: "Descarga tu PDF",
      description: "Genera un documento profesional al instante. Listo para enviar por email o WhatsApp a tu cliente.",
      image: "/screenshots/pdf-generado.png",
      imageAlt: "PDF generado con GeneraDocs"
    }
  ];

  return (
    <section id="solution" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Cómo funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Tres pasos simples
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sin configuraciones complicadas. Sin conocimientos técnicos. Sin perder tiempo.
          </p>
        </div>

        {/* Features with alternating layout */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              {/* Text content */}
              <div className="flex-1 max-w-xl">
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 font-bold text-lg">
                    {feature.step}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent"></div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Image container */}
                  <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gray-50">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      width={800}
                      height={500}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-200">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 font-medium">
              Documentos profesionales en menos de 2 minutos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
