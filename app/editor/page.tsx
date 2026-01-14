import Link from "next/link";

export default function EditorPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
          Editor de Plantillas
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Aquí crearás tus documentos y plantillas
        </p>
        <Link href="/">
            <button className="mb-6 px-4 py-2 bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white rounded-lg hover:opacity-80 transition-opacity">
                ← Volver al inicio
            </button>
        </Link>
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
          <p className="text-zinc-700 dark:text-zinc-300">
            Esta es tu zona de trabajo 📝
          </p>
        </div>
      </div>
    </div>
  )
}