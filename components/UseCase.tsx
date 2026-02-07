/**
 * Use Case Section Component
 * Shows a real-world example of how GeneraDocs works
 */

export default function UseCase() {
  const steps = [
    "Jessica crea una plantilla de recibo una sola vez",
    "Llena los datos del paciente",
    "Genera el PDF",
    "Se lo envía en segundos"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
          Un ejemplo simple
        </h2>

        {/* Story */}
        <div className="bg-gray-50 rounded-xl p-8 mb-10 border border-gray-200">
          <div className="text-lg text-gray-800 space-y-3 mb-6">
            <p className="font-medium">Jessica es nutrióloga.</p>
            <p className="font-medium">Rafael es su paciente.</p>
            <p className="mt-6">Rafael le pide un recibo por su consulta.</p>
            <p className="text-red-600 font-medium">Jessica no tiene sistema ni formato.</p>
          </div>
        </div>

        {/* Steps visualization */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden sm:block"></div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 bg-white border-2 border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-lg text-gray-800">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="mt-12 text-center">
          <p className="text-2xl text-blue-600 font-bold">Así de simple.</p>
        </div>
      </div>
    </section>
  );
}
