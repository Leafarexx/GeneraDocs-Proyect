/**
 * Categorías disponibles para plantillas
 * 
 * POR QUÉ constantes:
 * - Una sola fuente de verdad
 * - Fácil agregar/modificar categorías
 * - TypeScript puede validar el tipo
 * 
 * POR QUÉ este orden:
 * - Ordenadas por frecuencia de uso (más común primero)
 * - "Otros" siempre al final (convención UX)
 */
export const CATEGORIAS = [
  'Cotización',
  'Contrato',
  'Factura',
  'Reporte',
  'Carta',
  'Otros'
] as const

// Type helper para TypeScript
export type Categoria = typeof CATEGORIAS[number]

/**
 * Categoría por defecto para plantillas nuevas
 * 
 * POR QUÉ "Cotización":
 * - Es el caso de uso más común para freelancers
 * - Reduce fricción (usuario no tiene que elegir siempre)
 */
export const CATEGORIA_DEFAULT: Categoria = 'Cotización'