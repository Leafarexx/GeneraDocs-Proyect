'use client'

import { useState, useEffect } from 'react'

// Button integrado directamente
function Button({ 
  texto, 
  onClick, 
  variant = "default" 
}: { 
  texto: string
  onClick?: () => void
  variant?: "default" | "danger"
}) {
  const estiloBase = "px-6 py-3 rounded-lg font-medium hover:opacity-80 transition-opacity"
  
  const estilos = {
    default: "bg-black dark:bg-white text-white dark:text-black",
    danger: "bg-red-600 dark:bg-red-500 text-white"
  }
  
  return (
    <button 
      onClick={onClick}
      className={`${estiloBase} ${estilos[variant]}`}
    >
      {texto}
    </button>
  )
}
import { reemplazarVariables } from '../utils/reemplazarVariables'
import { generarPDF } from '../utils/generarPDF'
import { CATEGORIAS, CATEGORIA_DEFAULT } from '../utils/categorias'
import toast from 'react-hot-toast'


/**
 * Formulario para crear/editar plantillas
 * Incluye: input de nombre, textarea de contenido, vista previa y botones
 * 
 * @param onGuardar - Función que se ejecuta al guardar (recibe nombre y contenido)
 */
export default function PlantillaForm({ 
  onGuardar,
  nombreInicial = '',
  contenidoInicial = '',
  categoriaInicial = CATEGORIA_DEFAULT
}: { 
  onGuardar: (nombre: string, contenido: string, categoria: string) => void
  nombreInicial?: string
  contenidoInicial?: string
  categoriaInicial?: string
}) {
  // ==========================================
  // ESTADOS LOCALES - Solo para el formulario
  // ==========================================
  
  // Contenido del textarea
  const [texto, setTexto] = useState(contenidoInicial)
  
  // Nombre de la plantilla
  const [nombre, setNombre] = useState(nombreInicial)

  /**
   * Estado para la categoría seleccionada
   */
  const [categoria, setCategoria] = useState<string>(categoriaInicial)
  
  // Estados de validación
  const [errores, setErrores] = useState<{
    nombre?: string
    contenido?: string
  }>({})

  // ==========================================
  // FIX #1: Función para obtener fecha actual
  // ==========================================
  const obtenerFechaActual = () => {
    return new Date().toLocaleDateString('es-MX', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric'
    })
  }

  // ==========================================
  // FIX #2: Extraer variables del contenido de la plantilla
  // ==========================================
  const extraerVariablesDeContenido = (contenido: string): Record<string, string> => {
    // Buscar todas las variables en formato {variable} o ${variable}
    const regex = /\{(\w+)\}|\$\{(\w+)\}/g
    const variablesEncontradas = new Set<string>()
    
    let match
    while ((match = regex.exec(contenido)) !== null) {
      const nombreVar = match[1] || match[2]
      variablesEncontradas.add(nombreVar)
    }
    
    // Crear objeto con valores por defecto para cada variable encontrada
    const valoresDefault: Record<string, string> = {
      nombre: 'Juan Pérez',
      empresa: 'Acme Corp',
      monto: '1000',
      fecha: obtenerFechaActual(),
      servicio: 'Consultoría',
      cliente: 'Cliente Ejemplo',
      telefono: '555-1234',
      email: 'ejemplo@correo.com',
      direccion: 'Calle Principal #123',
      ciudad: 'Ciudad de México',
      descripcion: 'Descripción del servicio',
      plazo: '30 días',
      moneda: 'MXN',
      forma_pago: 'Transferencia bancaria',
      contacto: 'Nombre del Contacto',
      nombre_empresa: 'Mi Empresa S.A.',
      incluye_1: 'Elemento incluido 1',
      incluye_2: 'Elemento incluido 2',
      incluye_3: 'Elemento incluido 3',
    }
    
    // Construir objeto solo con las variables que están en el contenido
    const resultado: Record<string, string> = {}
    
    variablesEncontradas.forEach(variable => {
      resultado[variable] = valoresDefault[variable] || `[${variable}]`
    })
    
    // Si no hay variables, devolver un set básico
    if (Object.keys(resultado).length === 0) {
      return {
        nombre: 'Juan Pérez',
        empresa: 'Acme Corp',
        monto: '1000',
        fecha: obtenerFechaActual(),
        servicio: 'Consultoría'
      }
    }
    
    return resultado
  }

  // Estado para almacenar variables de prueba
  const [variablesPrueba, setVariablesPrueba] = useState<Record<string, string>>(() => 
    extraerVariablesDeContenido(contenidoInicial)
  )

  // ==========================================
  // FIX #2: Actualizar TODO cuando cambien los valores iniciales
  // ==========================================
  useEffect(() => {
    // Actualizar campos del formulario
    setNombre(nombreInicial)
    setTexto(contenidoInicial)
    setCategoria(categoriaInicial)
    
    // Extraer y setear las variables del nuevo contenido
    const nuevasVariables = extraerVariablesDeContenido(contenidoInicial)
    setVariablesPrueba(nuevasVariables)
    
    // Limpiar errores
    setErrores({})
  }, [nombreInicial, contenidoInicial, categoriaInicial])

  // ==========================================
  // FUNCIONES
  // ==========================================
  
  /**
   * Maneja el guardado del formulario
   */
  const handleGuardar = () => {
    if (!validarFormulario()) {
      toast.error('Por favor corrige los errores')
      return
    }
    
    onGuardar(nombre, texto, categoria)
    toast.success('¡Plantilla guardada exitosamente!')
    
    // Limpiar formulario
    setTexto('')
    setNombre('')
    setCategoria(CATEGORIA_DEFAULT)
    setVariablesPrueba(extraerVariablesDeContenido(''))
    setErrores({})
  }


  const validarFormulario = () => {
    const nuevosErrores: { nombre?: string; contenido?: string } = {}
    
    if (!nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es requerido'
    } else if (nombre.length > 50) {
      nuevosErrores.nombre = 'Máximo 50 caracteres'
    }
    
    if (!texto.trim()) {
      nuevosErrores.contenido = 'El contenido es requerido'
    } else if (texto.length > 5000) {
      nuevosErrores.contenido = 'Máximo 5000 caracteres'
    }
    
    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  // ==========================================
  // FIX #3: Funciones para limpiar errores al escribir
  // ==========================================
  const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevoValor = e.target.value
    setNombre(nuevoValor)
    
    if (errores.nombre && nuevoValor.trim()) {
      setErrores(prev => ({ ...prev, nombre: undefined }))
    }
  }

  const handleTextoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const nuevoValor = e.target.value
    setTexto(nuevoValor)
    
    if (errores.contenido && nuevoValor.trim()) {
      setErrores(prev => ({ ...prev, contenido: undefined }))
    }
    
    // Actualizar variables cuando cambia el contenido
    const nuevasVariables = extraerVariablesDeContenido(nuevoValor)
    
    // Mantener valores existentes para variables que ya tenían valor
    const variablesActualizadas: Record<string, string> = {}
    Object.keys(nuevasVariables).forEach(key => {
      variablesActualizadas[key] = variablesPrueba[key] || nuevasVariables[key]
    })
    
    setVariablesPrueba(variablesActualizadas)
  }

  /**
   * Limpia todos los campos del formulario
   */
  const handleLimpiar = () => {
    setTexto('')
    setNombre('')
    setCategoria(CATEGORIA_DEFAULT)
    setVariablesPrueba(extraerVariablesDeContenido(''))
    setErrores({})
  }

  // ==========================================
  // RENDER
  // ==========================================
  
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
      {/* Input de nombre */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <label className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Nombre de la plantilla
          </label>
          <span className={`text-sm ${
            nombre.length > 50 ? 'text-red-500 font-bold' : 'text-zinc-500'
          }`}>
            {nombre.length} / 50 caracteres
          </span>
        </div>
        <input
          type="text"
          value={nombre}
          onChange={handleNombreChange}
          placeholder="Ej: Cotización básica"
          className={`w-full p-3 border rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 ${
            errores.nombre 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-zinc-300 dark:border-zinc-700 focus:ring-black dark:focus:ring-white'
          }`}
        />
          {errores.nombre && (
            <p className="mt-1 text-sm text-red-500">{errores.nombre}</p>
          )}
      </div>

      {/* Selector de Categoría */}
      <div className="mb-4">
        <label className="block text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
          Categoría
        </label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        >
          {CATEGORIAS.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      
      {/* Header del editor con contador */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
          Escribe tu plantilla
        </h2>
        <span className={`text-sm ${
          texto.length > 5000 ? 'text-red-500 font-bold' : 'text-zinc-500'
          }`}>
          {texto.length} / 5000 caracteres
        </span>
      </div>
      
      {/* Textarea de contenido */}
      <textarea
        value={texto}
        onChange={handleTextoChange}
        placeholder="Escribe tu plantilla aquí... Ejemplo: Hola {nombre}, tu cotización es de ${monto}"
        className={`w-full h-48 p-4 border rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white resize-none focus:outline-none focus:ring-2 ${
          errores.contenido
            ? 'border-red-500 focus:ring-red-500'
            : 'border-zinc-300 dark:border-zinc-700 focus:ring-black dark:focus:ring-white'
          }`}
      />
      {errores.contenido && (
        <p className="mt-1 text-sm text-red-500">{errores.contenido}</p>
      )}

    
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
        {texto && Object.keys(variablesPrueba).length > 0 && (
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
          texto="Descargar PDF" 
          onClick={() => {
            const documentoFinal = reemplazarVariables(texto, variablesPrueba)
            const nombrePDF = nombre.trim() || 'documento'
            const tituloDoc = nombre.trim() || 'Documento Generado'
            generarPDF(documentoFinal, nombrePDF, tituloDoc)
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