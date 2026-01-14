'use client'

import { useState } from 'react'
import Link from "next/link";
import Button from "../components/button";

export default function EditorPage() {
    const [texto, setTexto] = useState('')
    const [nombre, setNombre] = useState('')
    const [plantillas, setPlantillas] = useState([])

    const guardarPlantilla = () => {
        if (texto.trim() === '' || nombre.trim() === '') {
            alert('Por favor escribe un nombre y contenido para la plantilla')
            return
        }
        
        const nuevaPlantilla = {
            id: Date.now(),
            nombre: nombre,
            contenido: texto
        }
        
        setPlantillas([...plantillas, nuevaPlantilla])
        setTexto('')
        setNombre('')
        alert('¡Plantilla guardada!')
    }

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
            <div className="mb-4">
                <label className="block text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    Nombre de la plantilla
                </label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej: Cotización básica"
                    className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                />
            </div>
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
                        onClick={guardarPlantilla}
                    />
                    <Button 
                        texto="Limpiar" 
                        onClick={() => {
                        setTexto('')
                        setNombre('')
                        }}
                    />
                </div>
            </div>
        </div>
      </div>
      {/* Lista de plantillas guardadas */}
        <div className="mt-8 bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
            Plantillas Guardadas ({plantillas.length})
        </h2>
        
        {plantillas.length === 0 ? (
            <p className="text-zinc-500 italic">
            No hay plantillas guardadas. Crea tu primera plantilla arriba.
            </p>
            ) : (
                <div className="space-y-3">
                {plantillas.map((plantilla) => (
                    <div 
                    key={plantilla.id}
                    className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                    >
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-zinc-900 dark:text-white">
                        {plantilla.nombre}
                        </h3>
                        <Button 
                        texto="Cargar"
                        onClick={() => {
                            setNombre(plantilla.nombre)
                            setTexto(plantilla.contenido)
                        }}
                        />
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        {plantilla.contenido.substring(0, 100)}
                        {plantilla.contenido.length > 100 ? '...' : ''}
                    </p>
                    </div>
                ))}
                </div>
            )}
        </div>
    </div>
  )
}