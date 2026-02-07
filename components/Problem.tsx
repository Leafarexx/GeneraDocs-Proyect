/**
 * Problem Section Component - REDISEÑADO
 * Con iconos modernos y mejor layout
 */

export default function Problem() {
  const problems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "No tienes formatos listos",
      description: "Cada vez que necesitas un documento, empiezas desde cero."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Pierdes tiempo con Word o Excel",
      description: "Ajustar márgenes, fuentes, tablas... todo manual."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Documentos inconsistentes",
      description: "Cada documento se ve diferente. Sin imagen profesional."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Entregas algo improvisado",
      description: "Te da pena entregar documentos poco profesionales a tus clientes."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-red-500 font-semibold text-sm uppercase tracking-wider mb-4">
            El problema
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Crear documentos no debería ser tan difícil
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Si eres profesionista independiente o tienes un pequeño negocio, seguro te identificas.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="group flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 hover:border-red-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  {problem.icon}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{problem.title}</h3>
                <p className="text-sm text-gray-600">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing quote */}
        <div className="text-center">
          <div className="inline-block bg-white px-8 py-6 rounded-2xl border border-gray-200 shadow-sm">
            <p className="text-xl text-gray-700 font-medium italic">
              "Crear documentos no es tu trabajo,{' '}
              <span className="text-blue-600">pero lo necesitas.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
