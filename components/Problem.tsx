/**
 * Problem Section Component
 * Identifica los dolores del usuario con tono de plataforma madura
 */

export default function Problem() {
  const problems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Sin formatos estandarizados",
      description: "Cada documento se crea desde cero, sin una estructura base reutilizable."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Tiempo invertido en formato",
      description: "Ajustar margenes, fuentes y tablas manualmente en Word o Excel cada vez."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Imagen inconsistente",
      description: "Cada documento tiene un aspecto diferente. Sin identidad profesional unificada."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Entregas poco profesionales",
      description: "Documentos improvisados que no reflejan la calidad de tu trabajo."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-warm">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4">
            El problema
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-6 tracking-tight">
            Crear documentos no deberia consumir tu tiempo
          </h2>
          <p className="text-lg text-ink-500 max-w-2xl mx-auto">
            Si eres profesionista independiente o tienes un negocio, conoces estos problemas.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 bg-white p-6 rounded-xl border border-ink-200/60 hover:border-amber-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                  {problem.icon}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-ink-900 mb-1">{problem.title}</h3>
                <p className="text-sm text-ink-500">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing quote */}
        <div className="text-center">
          <div className="inline-block bg-white px-8 py-6 rounded-2xl border border-ink-200/60 shadow-sm">
            <p className="text-xl text-ink-700 font-medium italic">
              &ldquo;Crear documentos no es tu negocio,{' '}
              <span className="text-primary-600">pero tu negocio los necesita.&rdquo;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
