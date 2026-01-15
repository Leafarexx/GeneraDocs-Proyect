'use client'

import { useState, useEffect } from 'react'

/**
 * Custom hook para manejar localStorage con React
 * 
 * @param clave - Nombre de la clave en localStorage (ej: 'plantillas')
 * @param valorInicial - Valor por defecto si no hay nada guardado
 * @returns [valor, setValor] - Igual que useState
 * 
 * Ejemplo de uso:
 * const [datos, setDatos] = useLocalStorage('misDatos', [])
 */
export function useLocalStorage<T>(clave: string, valorInicial: T) {
  // Estado con función inicializadora (lazy initialization)
  // Solo se ejecuta UNA vez al montar el componente
  const [valor, setValor] = useState<T>(() => {
    // Verificar que estamos en el navegador (no en el servidor)
    if (typeof window !== 'undefined') {
      // Intentar leer datos guardados de localStorage
      const guardado = localStorage.getItem(clave)
      
      // Si hay datos guardados, parsearlos de JSON a objeto/array
      // Si no hay datos, usar el valor inicial
      return guardado ? JSON.parse(guardado) : valorInicial
    }
    
    // Si estamos en el servidor, devolver valor inicial
    return valorInicial
  })

  // Efecto secundario: guardar en localStorage cuando cambia el valor
  // Se ejecuta cada vez que 'clave' o 'valor' cambian
  useEffect(() => {
    // Verificar que estamos en el navegador
    if (typeof window !== 'undefined') {
      // Convertir el valor a JSON string y guardarlo
      // localStorage solo acepta strings
      localStorage.setItem(clave, JSON.stringify(valor))
    }
  }, [clave, valor]) // Dependencias: observa cambios en estos valores

  // Devolver [valor, setter] igual que useState
  // 'as const' ayuda a TypeScript a entender el tipo correcto
  return [valor, setValor] as const
}