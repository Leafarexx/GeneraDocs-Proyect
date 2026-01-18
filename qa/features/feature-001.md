# Feature 001 – Generación de PDF

## Descripción
El usuario puede generar un PDF a partir de una plantilla con variables dinámicas.

## User story
Como usuario, quiero generar un PDF para descargar un documento formal.

## Expected behavior
- El PDF se genera correctamente
- Las variables se reemplazan por los valores ingresados
- No se genera el PDF si falta una variable obligatoria

## Inputs
- Plantilla seleccionada
- Variables dinámicas

## Outputs
- Archivo PDF descargable

## Validaciones
- Todas las variables obligatorias deben existir
- Los valores no pueden estar vacíos

## Casos de error conocidos
- Variable faltante


