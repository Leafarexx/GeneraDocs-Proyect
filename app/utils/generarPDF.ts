import jsPDF from 'jspdf'

/**
 * Genera un PDF profesional con formato mejorado
 * 
 * Mejoras incluidas:
 * - Título destacado con la plantilla
 * - Fecha de generación automática
 * - Mejor espaciado y márgenes
 * - Separación clara entre secciones
 * - Manejo automático de páginas múltiples
 * 
 * @param contenido - Texto del documento a convertir en PDF
 * @param nombreArchivo - Nombre del archivo PDF (sin extensión)
 * @param titulo - Título opcional para el documento
 */
export function generarPDF(
  contenido: string, 
  nombreArchivo: string = 'documento',
  titulo?: string
) {
  // ==========================================
  // CONFIGURACIÓN INICIAL
  // ==========================================
  
  // Crear instancia de jsPDF con formato A4 vertical
  const doc = new jsPDF({
    orientation: 'portrait',  // Vertical (también existe 'landscape' = horizontal)
    unit: 'mm',               // Unidades en milímetros
    format: 'a4'              // Tamaño A4 (210mm x 297mm)
  })

  // ==========================================
  // MÁRGENES Y MEDIDAS
  // ==========================================
  
  // Definir márgenes del documento (en mm)
  const margenIzquierdo = 20    // Espacio desde el borde izquierdo
  const margenSuperior = 20     // Espacio desde el borde superior
  const margenDerecho = 20      // Espacio desde el borde derecho
  const anchoUtil = 210 - margenIzquierdo - margenDerecho  // A4 = 210mm de ancho
  
  let posicionY = margenSuperior  // Rastreador de posición vertical

  // ==========================================
  // SECCIÓN: TÍTULO DEL DOCUMENTO
  // ==========================================
  
  if (titulo) {
    // Configurar fuente grande y negrita para el título
    doc.setFontSize(18)
    doc.setFont('helvetica', 'bold')
    
    // Agregar título
    doc.text(titulo, margenIzquierdo, posicionY)
    posicionY += 10  // Espacio después del título (10mm)
    
    // Línea decorativa debajo del título
    doc.setLineWidth(0.5)  // Grosor de línea en mm
    doc.line(
      margenIzquierdo,           // x inicio
      posicionY,                 // y inicio
      210 - margenDerecho,       // x fin (ancho completo)
      posicionY                  // y fin (línea horizontal)
    )
    posicionY += 8  // Espacio después de la línea
  }

  // ==========================================
  // SECCIÓN: FECHA DE GENERACIÓN
  // ==========================================
  
  // Obtener fecha actual formateada
  const fechaActual = new Date().toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  // Configurar fuente pequeña para la fecha
  doc.setFontSize(10)
  doc.setFont('helvetica', 'italic')
  doc.text(`Generado el: ${fechaActual}`, margenIzquierdo, posicionY)
  posicionY += 12  // Espacio generoso después de la fecha

  // ==========================================
  // SECCIÓN: CONTENIDO PRINCIPAL
  // ==========================================
  
  // Restaurar fuente normal para el contenido
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(12)

  // Dividir contenido en líneas que quepan en el ancho útil
  // splitTextToSize() maneja automáticamente:
  // - Saltos de línea del texto original
  // - Palabras que no caben en una línea
  // - Saltos de línea manuales (\n)
  const lineas = doc.splitTextToSize(contenido, anchoUtil)

  // Agregar cada línea al documento
  // Nota: jsPDF maneja automáticamente múltiples páginas si el contenido es largo
  doc.text(lineas, margenIzquierdo, posicionY)

  // ==========================================
  // PIE DE PÁGINA (opcional - para futuro)
  // ==========================================
  
  // Obtener número total de páginas
  const totalPaginas = doc.getNumberOfPages()
  
  // Agregar número de página en cada página
  for (let i = 1; i <= totalPaginas; i++) {
    doc.setPage(i)  // Ir a la página específica
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    
    // Texto centrado en el pie de página
    doc.text(
      `Página ${i} de ${totalPaginas}`,
      105,  // Centro horizontal (210mm / 2 = 105mm)
      287,  // Cerca del borde inferior (297mm - 10mm = 287mm)
      { align: 'center' }
    )
  }

  // ==========================================
  // DESCARGA DEL PDF
  // ==========================================
  
  // Descargar el archivo
  // save() automáticamente agrega la extensión .pdf
  doc.save(`${nombreArchivo}.pdf`)
  
  // Feedback en consola para debugging
  console.log(`✅ PDF generado: ${nombreArchivo}.pdf (${totalPaginas} página${totalPaginas > 1 ? 's' : ''})`)
}