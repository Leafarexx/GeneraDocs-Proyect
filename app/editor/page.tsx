'use client'

import { useState, useEffect } from 'react'
import Link from "next/link";
import Button from "../components/Button"
import PlantillaForm from "../components/PlantillaForm";
import { useLocalStorage } from '../hooks/useLocalStorage'
import { CATEGORIAS } from '../utils/categorias'
import toast from 'react-hot-toast'
import { PLANTILLAS_BASE } from '../utils/plantillasBase'


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
  const [categoriaEdicion, setCategoriaEdicion] = useState('')
  
  // Estado persistente usando custom hook (guarda automáticamente en localStorage)
  // Primer parámetro: clave en localStorage
  // Segundo parámetro: valor inicial (array vacío)
  const [plantillas, setPlantillas] = useLocalStorage('plantillas', [])
  
  // Cargar plantillas base si es usuario nuevo
useEffect(() => {
  if (plantillas.length === 0) {
    setPlantillas(PLANTILLAS_BASE)
    toast.success('✨ ¡Bienvenido! Hemos cargado 5 plantillas de ejemplo para ti', {
      duration: 5000
    })
  }
}, [])


  // Estado para evitar error de hidratación de Next.js
  // false = no mostrar lista aún (servidor/cliente inicial)
  // true = ya estamos en el cliente, mostrar lista
  const [montado, setMontado] = useState(false)
  
  // Estado para búsqueda de plantillas
  const [busqueda, setBusqueda] = useState('')

  // Estado para filtro de categoría
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('Todas')

  // ==========================================
  // EFECTOS - Sincronización con el navegador
  // ==========================================
  
  // Detectar cuando el componente está montado en el cliente
  // Solo se ejecuta UNA vez al cargar (array vacío [])
  useEffect(() => {
    setMontado(true) // Ahora sí podemos mostrar la lista
  }, [])

  // Estado para la plantilla que se está editando (ID)
  const [plantillaEditandoId, setPlantillaEditandoId] = useState<number | null>(null)





  // ==========================================
  // FUNCIONES - Lógica de negocio
  // ==========================================
  
  /**
  * Guarda una nueva plantilla con metadata completa
  * 
  * ARQUITECTURA:
  * - PlantillaForm captura datos (UI Layer)
  * - Esta función maneja lógica de negocio (Business Layer)
  * - useLocalStorage persiste (Data Layer)
  * 
  * @param nombreForm - Nombre de la plantilla
  * @param contenidoForm - Contenido con variables
  * @param categoriaForm - Categoría seleccionada
  */

  // Funcion para Modificar guardarPlantilla para Crear O Actualizar
  const guardarPlantilla = (
    nombreForm: string, 
    contenidoForm: string,
    categoriaForm: string
    ) => {
        if (plantillaEditandoId !== null) {
            // MODO EDITAR: Actualizar plantilla existente
            setPlantillas(plantillas.map(p => 
            p.id === plantillaEditandoId 
                ? { ...p, nombre: nombreForm, contenido: contenidoForm, categoria: categoriaForm }
                : p
            ))
            toast.success('Plantilla actualizada exitosamente')
            setPlantillaEditandoId(null)
        } else {
        // MODO CREAR: Nueva plantilla
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
  

  /**
   * Elimina una plantilla por su ID
   * Pide confirmación antes de eliminar
   * Muestra el nombre de la plantilla en el mensaje
   * 
   * @param id - ID único de la plantilla a eliminar
   */
  
  const eliminarPlantilla = (id: number) => {
    const plantilla = plantillas.find(p => p.id === id)
    
    if (window.confirm(`¿Eliminar "${plantilla?.nombre}"?`)) {
        setPlantillas(plantillas.filter(p => p.id !== id))
        toast.success('Plantilla eliminada')
    }
  } 
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
  {/*Función exportarPlantillas: permite al usuario exportar todas las plantillas guardadas en un archivo JSON.
   Crea un Blob con los datos, genera un enlace de descarga y simula un clic para iniciar la descarga.
   Muestra una notificación de éxito o error según corresponda.*/}
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
      `✅ Backup guardado: ${plantillas.length} ${plantillas.length === 1 ? 'plantilla descargada' : 'plantillas descargadas'}`,
      { duration: 4000 }
    )
  }
  
  {/*Función importarPlantillas: permite al usuario importar plantillas desde un archivo JSON.
   Lee el archivo, valida su contenido, y actualiza el estado de plantillas si es válido.
   Muestra notificaciones de éxito o error según corresponda.*/}
  const importarPlantillas = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    
    const reader = new FileReader()
    
    reader.onload = (e) => {
      try {
        const contenido = e.target?.result as string
        const importadas = JSON.parse(contenido)
        
        if (!Array.isArray(importadas)) {
          toast.error('❌ Archivo incorrecto. Asegúrate de subir un backup válido (.json)')
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
          `✅ Backup restaurado: ${importadas.length} ${importadas.length === 1 ? 'plantilla recuperada' : 'plantillas recuperadas'}`,
          { duration: 4000 }
        )
      } catch (error) {
        toast.error('❌ No se pudo leer el archivo. Verifica que sea un backup válido.')
      }
    }
    
    reader.readAsText(file)
    // Limpiar input para permitir re-selección del mismo archivo
    event.target.value = ''
  }




  // ==========================================
  // RENDER - Interfaz de usuario
  // ==========================================
  
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8">
      <div className="max-w-4xl mx-auto">
        {/* ===== HEADER ===== */}
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
            {plantillaEditandoId !== null ? 'Editar Plantilla' : 'Editor de Plantillas'}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Aquí crearás tus documentos y plantillas
        </p>
        
        {/* Botón de navegación de regreso */}
        <Link href="/">
          <Button texto="← Volver al inicio" />
        </Link>

        {/* Título dinámico */}
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mt-6 mb-8">
          {plantillaEditandoId !== null ? '✏️ Editando Plantilla' : 'Editor de Plantillas'}
        </h1>
        
        {/* ===== FORMULARIO DE EDICIÓN ===== */}
        <PlantillaForm 
            onGuardar={guardarPlantilla}
            nombreInicial={nombreEdicion}
            contenidoInicial={contenidoEdicion}
            categoriaInicial={categoriaEdicion}
        />

        {/* ===== LISTA DE PLANTILLAS GUARDADAS ===== */}
        {/* Solo renderiza cuando montado = true (evita error de hidratación) */}
        
        {montado && (
          <div className="mt-8 bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
            {/* Header con contador dinámico */}
            <div className="flex justify-between items-center mb-4">
                
                {/* Sección de Backup */}
                <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm mb-6">
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
                
                {/* Título con contador */}
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

            {/* Filtro de categoría */}
            {plantillas.length > 0 && (
            <div className="mb-4">
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
                    // Filtro 1: Búsqueda por nombre
                    const cumpleBusqueda = busqueda.trim() === '' 
                        ? true 
                        : plantilla.nombre.toLowerCase().includes(busqueda.toLowerCase())
                    
                    // Filtro 2: Categoría (con manejo de plantillas sin categoría)
                    const cumpleCategoria = categoriaFiltro === 'Todas'
                        ? true
                        : (plantilla.categoria || 'Sin categoría') === categoriaFiltro
                    
                    // Ambos filtros deben cumplirse
                    return cumpleBusqueda && cumpleCategoria
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

                      {/* Badge de categoría */}
                      <span className="inline-block mt-1 px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                        {plantilla.categoria || 'Sin categoría'}
                      </span>

                      <div className="flex gap-2">
                        {/* Botón Cargar: copia datos al editor */}
                        <Button 
                            texto="Cargar"
                            onClick={() => {
                                setNombreEdicion(plantilla.nombre)        // Carga nombre
                                setContenidoEdicion(plantilla.contenido)  // Carga contenido
                                setCategoriaEdicion(plantilla.categoria || 'Cotización')
                                setPlantillaEditandoId(null)
                            }}
                        />
                        
                        {/* Botón Editar: cambia a modo edición */}
                        <Button 
                          texto="Editar"
                          onClick={() => {
                            setPlantillaEditandoId(plantilla.id)
                            setNombreEdicion(plantilla.nombre)
                            setCategoriaEdicion(plantilla.categoria || 'Cotización')
                            setContenidoEdicion(plantilla.contenido)
                          }}
                        />

                        {/* Botón Duplicar */}
                        <Button 
                          texto="Duplicar"
                          onClick={() => duplicarPlantilla(plantilla.id)}
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

