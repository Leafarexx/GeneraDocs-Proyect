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
  
  // Estado para búsqueda de plantillas
  const [busqueda, setBusqueda] = useState('')

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
  * Guarda una nueva plantilla con metadata adicional
  * 
  * POR QUÉ agregamos fechaCreacion:
  * - Permite ordenar por más reciente
  * - Usuario recuerda cuándo la creó
  * - Útil para auditoría y tracking
  * 
  * @param nombreForm - Nombre de la plantilla
  * @param contenidoForm - Contenido de la plantilla
  */
  const guardarPlantilla = (nombreForm: string, contenidoForm: string) => {
   const nuevaPlantilla = {
    id: Date.now(),              // ID único
    nombre: nombreForm,          // Nombre descriptivo
    contenido: contenidoForm,    // Texto con variables
    fechaCreacion: new Date().toISOString()  // Timestamp ISO
  }
  
   setPlantillas([...plantillas, nuevaPlantilla])
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
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    Plantillas Guardadas ({plantillas.length})
                </h2>
            
                {/* Botón para ordenar por más reciente */}
                {plantillas.length > 1 && (
                    <button
                    onClick={() => {
                        const ordenadas = [...plantillas].sort((a, b) => {
                        // Ordenar por fecha de creación (más reciente primero)
                        const fechaA = new Date(a.fechaCreacion || 0).getTime()
                        const fechaB = new Date(b.fechaCreacion || 0).getTime()
                        return fechaB - fechaA  // Descendente (más nuevo primero)
                        })
                        setPlantillas(ordenadas)
                    }}
                    className="text-sm px-3 py-1 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md transition-colors"
                    >
                    Ordenar por fecha ↓
                    </button>
                )}
            </div>
            
            {/* Buscador de plantillas */}
            {plantillas.length > 2 && (
                <div className="mb-4">
                    <input
                    type="text"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    placeholder="Buscar plantilla por nombre..."
                    className="w-full p-2 text-sm border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                    />
                </div>
            )}
            
            {/* Renderizado condicional: lista vacía vs con contenido */}
            {plantillas.length === 0 ? (
              // Si no hay plantillas, mostrar mensaje
              <p className="text-zinc-500 italic">
                No hay plantillas guardadas. Crea tu primera plantilla arriba.
              </p>
            ) : (
              // Si hay plantillas, renderizar lista con .map()
              <div className="space-y-3 max-h-96 overflow-y-auto">
                
                {/* ========================================== */}
                {/* 🔍 FILTRADO DE BÚSQUEDA - CORREGIDO       */}
                {/* ========================================== */}
                {/* 
                  ANTES: plantillas.map() mostraba TODAS
                  AHORA: .filter() primero, .map() después
                  
                  Flujo:
                  1. .filter() revisa cada plantilla
                  2. Si pasa el filtro, la incluye
                  3. .map() solo trabaja con las filtradas
                */}
                {plantillas
                  .filter((plantilla) => {
                    // Si no hay búsqueda, mostrar todas
                    if (busqueda.trim() === '') return true
                    
                    // Buscar en el nombre (case-insensitive)
                    // toLowerCase() hace que "Casa" y "casa" sean iguales
                    // includes() verifica si contiene el texto
                    return plantilla.nombre
                      .toLowerCase()
                      .includes(busqueda.toLowerCase())
                  })
                  .map((plantilla) => (
                  <div 
                    key={plantilla.id}
                    className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors hover:shadow-md"
                    title={`Vista previa: ${plantilla.contenido}`}  
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

                    {/* Fecha de creación */}
                    {plantilla.fechaCreacion && (
                    <p className="text-xs text-zinc-500 mt-2">
                        Creada: {new Date(plantilla.fechaCreacion).toLocaleDateString('es-MX', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                        })}
                    </p>
                    )}
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