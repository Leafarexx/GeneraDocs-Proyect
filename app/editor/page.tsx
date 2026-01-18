'use client'

import { useState, useEffect } from 'react'
import Link from "next/link";
import Button from "../components/Button"
import PlantillaForm from "../components/PlantillaForm";
import { useLocalStorage } from '../hooks/useLocalStorage'
import { CATEGORIAS } from '../utils/categorias'
import toast from 'react-hot-toast'
import { PLANTILLAS_BASE } from '../utils/plantillasBase'

// Página del editor - CRUD de plantillas con persistencia en localStorage
export default function EditorPage() {
  // ==========================================
  // ESTADOS
  // ==========================================
  
  const [texto, setTexto] = useState('')
  const [nombre, setNombre] = useState('')
  const [nombreEdicion, setNombreEdicion] = useState('')
  const [contenidoEdicion, setContenidoEdicion] = useState('')
  const [categoriaEdicion, setCategoriaEdicion] = useState('')
  const [plantillas, setPlantillas] = useLocalStorage('plantillas', [])
  const [montado, setMontado] = useState(false)
  const [busqueda, setBusqueda] = useState('')
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('Todas')
  const [plantillaEditandoId, setPlantillaEditandoId] = useState<number | null>(null)

  // ==========================================
  // EFECTOS
  // ==========================================
  
  // Cargar plantillas base para usuarios nuevos
  useEffect(() => {
    if (plantillas.length === 0) {
      setPlantillas(PLANTILLAS_BASE)
      toast.success('✨ ¡Bienvenido! Hemos cargado 5 plantillas de ejemplo para ti', {
        duration: 5000
      })
    }
  }, [])

  // Detectar montaje en cliente (evita error hidratación)
  useEffect(() => {
    setMontado(true)
  }, [])

  // ==========================================
  // FUNCIONES
  // ==========================================
  
  // Guardar o actualizar plantilla
  const guardarPlantilla = (
    nombreForm: string, 
    contenidoForm: string,
    categoriaForm: string
  ) => {
    if (plantillaEditandoId !== null) {
      // Modo EDITAR
      setPlantillas(plantillas.map(p => 
        p.id === plantillaEditandoId 
          ? { ...p, nombre: nombreForm, contenido: contenidoForm, categoria: categoriaForm }
          : p
      ))
      toast.success('Plantilla actualizada exitosamente')
      setPlantillaEditandoId(null)
    } else {
      // Modo CREAR
      const nuevaPlantilla = {
        id: Date.now(),
        nombre: nombreForm,
        contenido: contenidoForm,
        categoria: categoriaForm,
        fechaCreacion: new Date().toISOString()
      }
      setPlantillas([...plantillas, nuevaPlantilla])
    }
    
    setNombreEdicion('')
    setContenidoEdicion('')
  }

  // Eliminar plantilla con confirmación
  const eliminarPlantilla = (id: number) => {
    const plantilla = plantillas.find(p => p.id === id)
    
    if (window.confirm(`¿Eliminar "${plantilla?.nombre}"?`)) {
      setPlantillas(plantillas.filter(p => p.id !== id))
      toast.success('Plantilla eliminada')
    }
  }

  // Duplicar plantilla
  const duplicarPlantilla = (id: number) => {
    const plantilla = plantillas.find(p => p.id === id)
    
    if (plantilla) {
      const copia = {
        ...plantilla,
        id: Date.now(),
        nombre: `${plantilla.nombre} (Copia)`,
        fechaCreacion: new Date().toISOString()
      }
      
      setPlantillas([...plantillas, copia])
      toast.success('Plantilla duplicada')
    }
  }

  // Exportar plantillas a JSON
  const exportarPlantillas = () => {
    if (plantillas.length === 0) {
      toast.error('No tienes plantillas guardadas. Crea una primero para hacer backup.')
      return
    }
    
    const dataStr = JSON.stringify(plantillas, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `plantillas-backup-${Date.now()}.json`
    link.click()
    
    URL.revokeObjectURL(url)
    toast.success(
      `✅ ${plantillas.length} ${plantillas.length === 1 ? 'plantilla' : 'plantillas'} descargadas`,
      { duration: 4000 }
    )
  }
  
  // Importar plantillas desde JSON
  const importarPlantillas = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    
    const reader = new FileReader()
    
    reader.onload = (e) => {
      try {
        const contenido = e.target?.result as string
        const importadas = JSON.parse(contenido)
        
        if (!Array.isArray(importadas)) {
          toast.error(' Archivo incorrecto. Asegúrate de subir un backup válido (.json)')
          return
        }
        
        if (importadas.length === 0) {
          setTimeout(() => {
            toast.error('❌ El archivo está vacío. No contiene plantillas para restaurar.')
          }, 100)
          return
        }
        
        setPlantillas([...plantillas, ...importadas])
        toast.success(
          `✅ ${importadas.length} ${importadas.length === 1 ? 'plantilla' : 'plantillas'} recuperadas`,
          { duration: 4000 }
        )
      } catch (error) {
        toast.error('❌ No se pudo leer el archivo. Verifica que sea un backup válido.')
      }
    }
    
    reader.readAsText(file)
    event.target.value = ''
  }

  // ==========================================
  // RENDER
  // ==========================================
  
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER */}
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
          {plantillaEditandoId !== null ? 'Editar Plantilla' : 'Editor de Plantillas'}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Aquí crearás tus documentos y plantillas
        </p>
        
        <Link href="/">
          <Button texto="← Volver al inicio" />
        </Link>

        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mt-6 mb-8">
          {plantillaEditandoId !== null ? '✏️ Editando Plantilla' : 'Editor de Plantillas'}
        </h1>
        
        {/* FORMULARIO */}
        <PlantillaForm 
          onGuardar={guardarPlantilla}
          nombreInicial={nombreEdicion}
          contenidoInicial={contenidoEdicion}
          categoriaInicial={categoriaEdicion}
        />

        {/* LISTA DE PLANTILLAS */}
        {montado && (
          <div className="mt-8 bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
            
            {/* SECCIÓN BACKUP - Day 16 + Polish Day 18 */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm mb-8 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                💾 Copia de Seguridad
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                Guarda o recupera todas tus plantillas. El archivo descargado puede importarse después para restaurar tus datos.
              </p>
              
              <div className="flex gap-3 flex-wrap">
                {/* Botón Descargar */}
                <div>
                  <Button 
                    texto="📥 Descargar Backup"
                    onClick={exportarPlantillas}
                  />
                  <p className="text-xs text-zinc-500 mt-1">
                    Guarda archivo .json con {plantillas.length} {plantillas.length === 1 ? 'plantilla' : 'plantillas'}
                  </p>
                </div>
                
                {/* Botón Restaurar */}
                <div>
                  <input
                    type="file"
                    accept=".json"
                    onChange={importarPlantillas}
                    className="hidden"
                    id="importar-input"
                  />
                  <label 
                    htmlFor="importar-input" 
                    className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors cursor-pointer"
                  >
                    📤 Restaurar Backup
                  </label>
                  <p className="text-xs text-zinc-500 mt-1">
                    Sube un archivo .json para recuperar plantillas
                  </p>
                </div>
              </div>
            </div>

            {/* HEADER LISTA */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 mt-2">
                Plantillas Guardadas ({plantillas.length})
              </h2>
            
              {/* Botón ordenar */}
              {plantillas.length > 1 && (
                <button
                  onClick={() => {
                    const ordenadas = [...plantillas].sort((a, b) => {
                      const fechaA = new Date(a.fechaCreacion || 0).getTime()
                      const fechaB = new Date(b.fechaCreacion || 0).getTime()
                      return fechaB - fechaA
                    })
                    setPlantillas(ordenadas)
                  }}
                  className="text-sm px-3 py-1 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md transition-colors"
                >
                  Ordenar por fecha ↓
                </button>
              )}
            </div>
            
            {/* BUSCADOR */}
            {plantillas.length > 2 && (
              <div className="mb-6">
                <input
                  type="text"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar plantilla por nombre..."
                  className="w-full p-2 text-sm border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                />
              </div>
            )}

            {/* FILTRO CATEGORÍA */}
            {plantillas.length > 0 && (
              <div className="mb-8">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Filtrar por categoría:
                </label>
                <select
                  value={categoriaFiltro}
                  onChange={(e) => setCategoriaFiltro(e.target.value)}
                  className="w-full p-2 text-sm border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                >
                  <option value="Todas">Todas las categorías</option>
                  {CATEGORIAS.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            )}
            
            {/* RENDERIZADO CON FILTRADO Y EMPTY STATES - Day 18 */}
            {(() => {
              // Aplicar filtros
              const plantillasFiltradas = plantillas.filter((plantilla) => {
                const cumpleBusqueda = busqueda.trim() === '' 
                  ? true 
                  : plantilla.nombre.toLowerCase().includes(busqueda.toLowerCase())
                
                const cumpleCategoria = categoriaFiltro === 'Todas'
                  ? true
                  : (plantilla.categoria || 'Sin categoría') === categoriaFiltro
                
                return cumpleBusqueda && cumpleCategoria
              })

              // EMPTY STATE - Day 18
              if (plantillasFiltradas.length === 0) {
                return (
                  <div className="text-center py-16 bg-zinc-50 dark:bg-zinc-900 rounded-lg border-2 border-dashed border-zinc-300 dark:border-zinc-700">
                    <div className="text-6xl mb-4">📋</div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                      {plantillas.length === 0 
                        ? 'No tienes plantillas guardadas'
                        : 'No se encontraron plantillas'
                      }
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                      {plantillas.length === 0 ? (
                        <>Crea tu primera plantilla usando el editor de arriba</>
                      ) : busqueda && categoriaFiltro !== 'Todas' ? (
                        <>Intenta con otra búsqueda o categoría diferente</>
                      ) : busqueda ? (
                        <>No hay plantillas con "{busqueda}". Intenta otro término</>
                      ) : (
                        <>No tienes plantillas en "{categoriaFiltro}". Crea una o cambia de categoría</>
                      )}
                    </p>
                    {(busqueda || categoriaFiltro !== 'Todas') && plantillas.length > 0 && (
                      <button
                        onClick={() => {
                          setBusqueda('')
                          setCategoriaFiltro('Todas')
                        }}
                        className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                      >
                        Ver todas las plantillas
                      </button>
                    )}
                  </div>
                )
              }

              // LISTA DE PLANTILLAS
              return (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {plantillasFiltradas.map((plantilla) => (
                    <div 
                      key={plantilla.id}
                      className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors hover:shadow-md"
                      title={`Vista previa: ${plantilla.contenido}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-zinc-900 dark:text-white">
                          {plantilla.nombre}
                        </h3>

                        {/* Badge categoría */}
                        <span className="inline-block mt-1 px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                          {plantilla.categoria || 'Sin categoría'}
                        </span>

                        {/* BOTONES - Day 18: Eliminado "Cargar" */}
                        <div className="flex gap-2">
                          <Button 
                            texto="Editar"
                            onClick={() => {
                              setPlantillaEditandoId(plantilla.id)
                              setNombreEdicion(plantilla.nombre)
                              setCategoriaEdicion(plantilla.categoria || 'Cotización')
                              setContenidoEdicion(plantilla.contenido)
                            }}
                          />

                          <Button 
                            texto="Duplicar"
                            onClick={() => duplicarPlantilla(plantilla.id)}
                          />

                          <Button 
                            texto="Eliminar"
                            onClick={() => eliminarPlantilla(plantilla.id)}
                            variant="danger"
                          />
                        </div>
                      </div>

                      {/* Fecha */}
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
              )
            })()}
          </div>
        )}
      </div>
    </div>
  )
}