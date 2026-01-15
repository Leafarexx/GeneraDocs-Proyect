'use client'

import { useState, useEffect } from 'react'
import Link from "next/link";
import Button from "../components/Button"
import PlantillaForm from "../components/PlantillaForm";
import { useLocalStorage } from '../hooks/useLocalStorage'

/**
 * Página del editor de plantillas
 * Permite crear, editar, guardar y eliminar plantillas de documentos
 * Los datos persisten en localStorage usando custom hook
 */
export default function EditorPage() {
  // ==========================================
  // ESTADOS - Manejo de información dinámica
  // ==========================================
  
  // Estado para el contenido del textarea
  const [texto, setTexto] = useState('')
  
  // Estado para el nombre de la plantilla
  const [nombre, setNombre] = useState('')

  // Estados para cargar plantilla en el formulario
  const [nombreEdicion, setNombreEdicion] = useState('')
  const [contenidoEdicion, setContenidoEdicion] = useState('')
  
  // Estado persistente usando custom hook (guarda automáticamente en localStorage)
  // Primer parámetro: clave en localStorage
  // Segundo parámetro: valor inicial (array vacío)
  const [plantillas, setPlantillas] = useLocalStorage('plantillas', [])
  
  // Estado para evitar error de hidratación de Next.js
  // false = no mostrar lista aún (servidor/cliente inicial)
  // true = ya estamos en el cliente, mostrar lista
  const [montado, setMontado] = useState(false)

  // ==========================================
  // EFECTOS - Sincronización con el navegador
  // ==========================================
  
  // Detectar cuando el componente está montado en el cliente
  // Solo se ejecuta UNA vez al cargar (array vacío [])
  useEffect(() => {
    setMontado(true) // Ahora sí podemos mostrar la lista
  }, [])

  // ==========================================
  // FUNCIONES - Lógica de negocio
  // ==========================================
  
  /**
    * Guarda una nueva plantilla recibida del formulario
     * @param nombreForm - Nombre de la plantilla desde el formulario
    * @param contenidoForm - Contenido de la plantilla desde el formulario
    */
    const guardarPlantilla = (nombreForm: string, contenidoForm: string) => {
    // Crear objeto de la nueva plantilla
    const nuevaPlantilla = {
    id: Date.now(),              // ID único usando timestamp
    nombre: nombreForm,          // Nombre recibido del formulario
    contenido: contenidoForm     // Contenido recibido del formulario
    } 
  
    // Agregar al array de plantillas
    setPlantillas([...plantillas, nuevaPlantilla])
  
    // Feedback al usuario
    alert('¡Plantilla guardada!')
    }
  
  /**
   * Elimina una plantilla por su ID
   * Pide confirmación antes de eliminar
   * Muestra el nombre de la plantilla en el mensaje
   * 
   * @param id - ID único de la plantilla a eliminar
   */
  const eliminarPlantilla = (id) => {
    // Buscar la plantilla por ID para mostrar su nombre
    const plantilla = plantillas.find(p => p.id === id)
    
    // Mostrar popup de confirmación con nombre específico
    if (confirm(`¿Eliminar "${plantilla.nombre}"? Esta acción no se puede deshacer.`)) {
      // Filtrar array: quedarse con todos EXCEPTO el que tiene este ID
      // .filter() crea nuevo array (inmutable)
      setPlantillas(plantillas.filter(p => p.id !== id))
      
      // Feedback de confirmación
      alert('Plantilla eliminada correctamente')
    }
    // Si usuario cancela, no hace nada (no entra al if)
  }

  // ==========================================
  // RENDER - Interfaz de usuario
  // ==========================================
  
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-4xl mx-auto">
        {/* ===== HEADER ===== */}
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
          Editor de Plantillas
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Aquí crearás tus documentos y plantillas
        </p>
        
        {/* Botón de navegación de regreso */}
        <Link href="/">
          <Button texto="← Volver al inicio" />
        </Link>
        
        {/* ===== FORMULARIO DE EDICIÓN ===== */}
        <PlantillaForm 
            onGuardar={guardarPlantilla}
            nombreInicial={nombreEdicion}
            contenidoInicial={contenidoEdicion}
        />

        {/* ===== LISTA DE PLANTILLAS GUARDADAS ===== */}
        {/* Solo renderiza cuando montado = true (evita error de hidratación) */}
        {montado && (
          <div className="mt-8 bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
            {/* Header con contador dinámico */}
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
              Plantillas Guardadas ({plantillas.length})
            </h2>
            
            {/* Renderizado condicional: lista vacía vs con contenido */}
            {plantillas.length === 0 ? (
              // Si no hay plantillas, mostrar mensaje
              <p className="text-zinc-500 italic">
                No hay plantillas guardadas. Crea tu primera plantilla arriba.
              </p>
            ) : (
              // Si hay plantillas, renderizar lista con .map()
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {/* .map() transforma cada plantilla en JSX */}
                {plantillas.map((plantilla) => (
                  <div 
                    key={plantilla.id} // Key única requerida por React para performance
                    className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    {/* Header de cada plantilla con botones */}
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-zinc-900 dark:text-white">
                        {plantilla.nombre}
                      </h3>
                      <div className="flex gap-2">
                        {/* Botón Cargar: copia datos al editor */}
                        <Button 
                            texto="Cargar"
                            onClick={() => {
                                setNombreEdicion(plantilla.nombre)        // Carga nombre
                                setContenidoEdicion(plantilla.contenido)  // Carga contenido
                            }}
                        />
                        {/* Botón Eliminar: variante danger (rojo) */}
                        <Button 
                          texto="Eliminar"
                          onClick={() => eliminarPlantilla(plantilla.id)}
                          variant="danger" // Prop para estilo rojo
                        />
                      </div>
                    </div>
                    {/* Preview truncado del contenido */}
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {/* Mostrar solo primeros 100 caracteres */}
                      {plantilla.contenido.substring(0, 100)}
                      {/* Si es más largo, agregar "..." */}
                      {plantilla.contenido.length > 100 ? '...' : ''}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
      </div>
    </div>
  )
}