'use client'

import { useState, useEffect } from 'react'
import Button from './Button'
import { reemplazarVariables } from '../utils/reemplazarVariables'


/**
 * Formulario para crear/editar plantillas
 * Incluye: input de nombre, textarea de contenido, vista previa y botones
 * 
 * @param onGuardar - Función que se ejecuta al guardar (recibe nombre y contenido)
 */
export default function PlantillaForm({ 
  onGuardar,
  nombreInicial = '',
  contenidoInicial = ''
}: { 
  onGuardar: (nombre: string, contenido: string) => void
  nombreInicial?: string
  contenidoInicial?: string
}) {
  // ==========================================
  // ESTADOS LOCALES - Solo para el formulario
  // ==========================================
  
  // Contenido del textarea
  const [texto, setTexto] = useState(contenidoInicial)
  
  // Nombre de la plantilla
  const [nombre, setNombre] = useState(nombreInicial)

  // Actualizar cuando cambien los valores iniciales (para "Cargar")
  useEffect(() => {
    setNombre(nombreInicial)
    setTexto(contenidoInicial)
  }, [nombreInicial, contenidoInicial])

  // Estado para almacenar variables de prueba
  const [variablesPrueba, setVariablesPrueba] = useState<Record<string, string>>({
    nombre: 'Juan Pérez',
    empresa: 'Acme Corp',
    monto: '1000',
    fecha: '15/01/2026',
    servicio: 'Consultoría'
  })

  // ==========================================
  // FUNCIONES
  // ==========================================
  
  /**
   * Maneja el guardado del formulario
   * Valida, llama a onGuardar (prop), y limpia campos
   */
  const handleGuardar = () => {
    // Validación
    if (texto.trim() === '' || nombre.trim() === '') {
      alert('Por favor escribe un nombre y contenido para la plantilla')
      return
    }
    
    // Llamar función del padre con los datos
    onGuardar(nombre, texto)
    
    // Limpiar formulario
    setTexto('')
    setNombre('')
  }

  /**
   * Limpia ambos campos del formulario
   */
  const handleLimpiar = () => {
    setTexto('')
    setNombre('')
  }

  // ==========================================
  // RENDER
  // ==========================================
  
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
      {/* Input de nombre */}
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
      
      {/* Header del editor con contador */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
          Escribe tu plantilla
        </h2>
        <span className="text-sm text-zinc-500">
          {texto.length} caracteres
        </span>
      </div>
      
      {/* Textarea de contenido */}
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe tu plantilla aquí... Ejemplo: Hola {nombre}, tu cotización es de ${monto}"
        className="w-full h-48 p-4 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
      />
    
      {/* Vista previa con variables reemplazadas */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
          Vista previa con variables:
        </h3>
        <div className="p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg min-h-[100px]">
          <p className="text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">
            {texto 
              ? reemplazarVariables(texto, variablesPrueba)
              : 'Escribe algo arriba para ver la vista previa...'
            }
          </p>
        </div>
        
        {/* Editor de variables de prueba */}
        {texto && (
          <div className="mt-4 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg">
            <p className="font-semibold text-zinc-900 dark:text-white mb-3">
              Variables de prueba:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(variablesPrueba).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    {`{${key}}`}
                  </label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setVariablesPrueba({
                      ...variablesPrueba,
                      [key]: e.target.value
                    })}
                    className="w-full p-2 text-sm border border-zinc-300 dark:border-zinc-600 rounded bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
    </div>
      
      {/* Botones */}
      <div className="mt-6 flex gap-4">
        <Button 
          texto="Guardar Plantilla" 
          onClick={handleGuardar}
        />
        <Button 
          texto="Generar Documento" 
          onClick={() => {
            const documentoFinal = reemplazarVariables(texto, variablesPrueba)
            // Por ahora, solo mostrar en alert
            // En el futuro: generar PDF
            alert('Documento generado:\n\n' + documentoFinal)
          }}
        />
        <Button 
          texto="Limpiar" 
          onClick={handleLimpiar}
        />
      </div>
    </div>
  )
}