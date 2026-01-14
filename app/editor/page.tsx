'use client'

import { useState } from 'react'
import Link from "next/link";
import Button from "../components/button";

export default function EditorPage() {
    const [texto, setTexto] = useState('')
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
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    Escribe tu plantilla
                </h2>
                <span className="text-sm text-zinc-500">
                    {texto.length} caracteres
                </span>
            </div>
            
            <textarea
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Escribe tu plantilla aquí... Ejemplo: Hola {nombre}, tu cotización es de ${monto}"
                className="w-full h-48 p-4 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
        
            <div className="mt-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                Vista previa:
                </h3>
                <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg min-h-[100px]">
                    <p className="text-zinc-700 dark:text-zinc-300">
                        {texto || 'Escribe algo arriba para ver la vista previa...'}
                    </p>
                </div>
                <div className="mt-6 flex gap-4">
                    <Button 
                        texto="Guardar Plantilla" 
                        onClick={() => alert('Plantilla guardada: ' + texto)}
                    />
                    <Button 
                        texto="Limpiar" 
                        onClick={() => setTexto('')}
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}