import Link from "next/link";
import Button from "../components/button";

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
            <Button texto="← Volver al inicio" />
        </Link>
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
            <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                Esta es tu zona de trabajo 📝
            </p>
        
            <div className="flex gap-4">
                <Button texto="Crear Plantilla" />
                <Button texto="Ver Plantillas" />
                <Button texto="Guardar" />
            </div>
        </div>
      </div>
    </div>
  )
}