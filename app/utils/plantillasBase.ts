export const PLANTILLAS_BASE = [
  {
    id: 1,
    nombre: "Cotización de Servicios Profesionales",
    contenido: `Estimado/a {cliente},

Me complace presentar la siguiente cotización para {servicio}:

DESCRIPCIÓN DEL SERVICIO:
{descripcion}

INVERSIÓN:
Monto: ${'${monto}'} {moneda}
Plazo de entrega: {plazo}
Forma de pago: {forma_pago}

INCLUYE:
- {incluye_1}
- {incluye_2}
- {incluye_3}

Esta cotización tiene validez de 30 días a partir de la fecha de emisión.

Quedo atento a sus comentarios.

Saludos cordiales,
{nombre_empresa}
{contacto}`,
    categoria: "Cotización",
    fechaCreacion: new Date().toISOString()
  },
  {
    id: 2,
    nombre: "Contrato de Servicios Freelance",
    contenido: `CONTRATO DE PRESTACIÓN DE SERVICIOS PROFESIONALES

Entre {cliente} (en adelante "EL CLIENTE") y {proveedor} (en adelante "EL PROVEEDOR")

1. OBJETO DEL CONTRATO
EL PROVEEDOR se compromete a realizar los siguientes servicios:
{descripcion_servicios}

2. PLAZO DE EJECUCIÓN
Fecha de inicio: {fecha_inicio}
Fecha de término: {fecha_fin}

3. CONTRAPRESTACIÓN
Monto total: ${'${monto}'} {moneda}
Forma de pago: {forma_pago}

4. ENTREGABLES
- {entregable_1}
- {entregable_2}
- {entregable_3}

5. PROPIEDAD INTELECTUAL
{clausula_propiedad}

Firmado el {fecha_firma}

_____________________          _____________________
{cliente}                      {proveedor}`,
    categoria: "Contrato",
    fechaCreacion: new Date().toISOString()
  },
  {
    id: 3,
    nombre: "Factura Simple",
    contenido: `FACTURA

Fecha: {fecha}
No. Factura: {numero_factura}

DATOS DEL CLIENTE:
{cliente}
{direccion}
{rfc_nit}

CONCEPTO:
{concepto}

DETALLE:
Descripción: {descripcion}
Cantidad: {cantidad}
Precio unitario: ${'${precio_unitario}'}
Subtotal: ${'${subtotal}'}

IVA ({iva}%): ${'${monto_iva}'}
TOTAL: ${'${total}'} {moneda}

FORMA DE PAGO: {forma_pago}

Agradecemos su preferencia.

{nombre_empresa}
{datos_fiscales}`,
    categoria: "Factura",
    fechaCreacion: new Date().toISOString()
  },
  {
    id: 4,
    nombre: "Carta Formal Empresarial",
    contenido: `{ciudad}, {fecha}

{destinatario}
{cargo}
{empresa}

Estimado/a {destinatario}:

Por medio de la presente me dirijo a usted con el fin de {proposito}.

{parrafo_1}

{parrafo_2}

{parrafo_3}

Sin otro particular, quedo a la espera de su respuesta.

Atentamente,

_____________________
{remitente}
{cargo_remitente}
{empresa_remitente}
{contacto}`,
    categoria: "Carta",
    fechaCreacion: new Date().toISOString()
  },
  {
    id: 5,
    nombre: "Reporte Mensual de Proyecto",
    contenido: `REPORTE MENSUAL - {mes} {año}

PROYECTO: {nombre_proyecto}
RESPONSABLE: {responsable}

RESUMEN EJECUTIVO:
{resumen}

LOGROS DEL MES:
✓ {logro_1}
✓ {logro_2}
✓ {logro_3}

MÉTRICAS CLAVE:
- {metrica_1}: {valor_1}
- {metrica_2}: {valor_2}
- {metrica_3}: {valor_3}

DESAFÍOS ENFRENTADOS:
- {desafio_1}
- {desafio_2}

PLAN PARA PRÓXIMO MES:
→ {objetivo_1}
→ {objetivo_2}
→ {objetivo_3}

RECURSOS NECESARIOS:
{recursos}

Elaborado por: {elaborado_por}
Fecha: {fecha_elaboracion}`,
    categoria: "Reporte",
    fechaCreacion: new Date().toISOString()
  }
]