/**
 * Reemplaza variables en una plantilla con valores reales
 * 
 * Variables soportadas:
 * - {nombre} → Llaves simples
 * - ${monto} → Signo de dólar + llaves
 * 
 * @param plantilla - Texto con variables (ej: "Hola {nombre}")
 * @param variables - Objeto con valores (ej: { nombre: "Juan" })
 * @returns Texto con variables reemplazadas
 * 
 * @example
 * reemplazarVariables("Hola {nombre}", { nombre: "Juan" })
 * // Retorna: "Hola Juan"
 */
export function reemplazarVariables(
  plantilla: string,
  variables: Record<string, string | number>
): string {
  let resultado = plantilla

  // Reemplazar variables con formato {variable}
  // Regex: /\{(\w+)\}/g encuentra todas las {palabras}
  resultado = resultado.replace(/\{(\w+)\}/g, (match, nombre) => {
    // Si existe la variable, úsala; si no, deja el placeholder
    return variables[nombre] !== undefined ? String(variables[nombre]) : match
  })

  // Reemplazar variables con formato ${variable}
  // Regex: /\$\{(\w+)\}/g encuentra todas las ${palabras}
  resultado = resultado.replace(/\$\{(\w+)\}/g, (match, nombre) => {
    return variables[nombre] !== undefined ? String(variables[nombre]) : match
  })

  return resultado
}