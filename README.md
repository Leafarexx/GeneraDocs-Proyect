# 📄 Generador de Documentos Profesionales

> Aplicación web para crear, gestionar y exportar plantillas de documentos profesionales con reemplazo dinámico de variables y generación de PDFs.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)

---

## 🎯 ¿Qué es?

**Generador de Documentos** es una herramienta web que permite a freelancers, emprendedores y pequeñas empresas crear plantillas reutilizables de documentos (cotizaciones, contratos, facturas, etc.) con variables dinámicas que se pueden completar y exportar a PDF profesional.

### Problema que resuelve

❌ **Antes:** Crear documentos desde cero cada vez, formateo inconsistente, tiempo perdido en tareas repetitivas.

✅ **Ahora:** Plantillas reutilizables + variables dinámicas = 10x más rápido.

---

## ✨ Características Principales

### 📋 Gestión de Plantillas
- ✅ Crear, editar, duplicar y eliminar plantillas
- ✅ Sistema de categorías (Cotización, Contrato, Factura, Carta, Reporte, Otro)
- ✅ Búsqueda en tiempo real por nombre
- ✅ Filtros combinados (búsqueda + categoría)
- ✅ Ordenamiento por fecha de creación

### 🔄 Variables Dinámicas
- ✅ Reemplazo automático de variables `{nombre}`, `{empresa}`, `${monto}`
- ✅ Preview en tiempo real
- ✅ Validación de campos requeridos

### 📄 Generación de PDFs
- ✅ Exportación a PDF con formato profesional
- ✅ Estilo corporativo (headers, spacing, fuentes)
- ✅ Descarga instantánea

### 💾 Backup y Persistencia
- ✅ Guardado automático en localStorage
- ✅ Exportar todas las plantillas a JSON
- ✅ Importar plantillas desde archivo
- ✅ Sistema de respaldo completo

### 🎨 Experiencia de Usuario
- ✅ 5 plantillas profesionales pre-cargadas para nuevos usuarios
- ✅ Dark mode nativo
- ✅ Empty states contextuales
- ✅ Toast notifications para feedback
- ✅ Interfaz responsive (mobile, tablet, desktop)

---

## 🖼️ Screenshots

### Pantalla Principal - Editor
![Editor de Plantillas](https://github.com/user-attachments/assets/e96d90b2-a0b4-4aea-99b4-5823c16eaef8)
*Editor con formulario completo, validaciones y preview de variables dinámicas*

### Lista de Plantillas con Búsqueda y Filtros
![Lista de Plantillas](https://github.com/user-attachments/assets/c57220a7-fe73-4658-b3bc-c6da0e7d3440)
*Gestión completa con búsqueda en tiempo real, filtros por categoría y múltiples acciones*

### Generación de PDF Profesional
![PDF Generado](https://github.com/user-attachments/assets/0c2bcf2f-c9f8-4669-80d3-c4dc87edd7a4)
*Documento PDF con formato corporativo y variables reemplazadas*

### Dark Mode Nativo
![Dark Mode](https://github.com/user-attachments/assets/a13479d7-9f71-4e10-8e1c-623d930f8240)
*Interfaz completa con soporte para modo oscuro*

### Backup y Restauración
![Backup System](https://github.com/user-attachments/assets/c0baf4a8-0ef0-49d3-a243-9ff74a0e7cf3)
*Sistema completo de exportar/importar plantillas en formato JSON*

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - Framework React con App Router
- **React 19** - Biblioteca UI con hooks modernos
- **TypeScript 5** - Type safety y mejor DX
- **Tailwind CSS 3** - Utility-first styling

### Herramientas y Librerías
- **jsPDF** - Generación de documentos PDF
- **react-hot-toast** - Notificaciones elegantes
- **Custom Hooks** - useLocalStorage para persistencia

### Desarrollo
- **ESLint** - Linting de código
- **Geist Font** - Tipografía moderna de Vercel

---

## 🚀 Instalación Local

### Prerequisitos

- Node.js 18+ 
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/Leafarexx/generador-documentos.git
cd generador-documentos
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en navegador**
```
http://localhost:3000
```

---

## 📝 Scripts Disponibles

```bash
npm run dev          # Inicia servidor de desarrollo
npm run build        # Crea build de producción
npm run start        # Inicia servidor de producción
npm run lint         # Ejecuta ESLint
```

---

## 📂 Estructura del Proyecto

```
generador-documentos/
├── app/
│   ├── components/      # Componentes reutilizables
│   │   ├── Button.tsx
│   │   ├── PlantillaForm.tsx
│   │   └── ...
│   ├── editor/         # Página del editor
│   ├── generator/      # Página del generador
│   ├── hooks/          # Custom hooks
│   │   └── useLocalStorage.ts
│   ├── utils/          # Utilidades
│   │   ├── categorias.ts
│   │   └── plantillasBase.ts
│   └── layout.tsx
├── public/             # Assets estáticos
└── package.json
```

---

## 🎯 Casos de Uso

### Para Freelancers
- Crear cotizaciones rápidas para clientes
- Mantener contratos estandarizados
- Generar facturas profesionales

### Para Pequeñas Empresas
- Documentos corporativos consistentes
- Reducir tiempo en administración
- Profesionalizar comunicaciones

### Para Consultores
- Propuestas de proyecto
- Reportes mensuales
- Cartas formales

---

## 🔮 Roadmap Futuro

### Versión 2.0 (Planeado)
- [ ] Backend con Supabase
- [ ] Autenticación de usuarios
- [ ] Sincronización multi-dispositivo
- [ ] Compartir plantillas entre usuarios
- [ ] Variables dinámicas con dropdowns (moneda, fecha)
- [ ] Exportar a Word (.docx)
- [ ] Templates marketplace

### Mejoras de UX
- [ ] Preview de plantillas en modal
- [ ] Confirmación al limpiar formulario
- [ ] Drag & drop para reordenar plantillas
- [ ] Historial de versiones

---

## 📊 Estadísticas del Proyecto

- **21 commits** consecutivos documentados
- **~3,000 líneas** de código TypeScript/React
- **20+ features** implementadas
- **0 bugs** conocidos en producción
- **3 semanas** de desarrollo (reto 21 días)

---

## 🧠 Aprendizajes Técnicos

Durante el desarrollo de este proyecto, dominé:

- ✅ Next.js 15 App Router y Server Components
- ✅ React hooks avanzados (useState, useEffect, custom hooks)
- ✅ TypeScript para type safety
- ✅ Persistencia de datos con localStorage
- ✅ Generación de PDFs con jsPDF
- ✅ Regex para reemplazo de variables
- ✅ UX patterns (empty states, progressive disclosure)
- ✅ Responsive design con Tailwind
- ✅ File handling (Blob API, FileReader)
- ✅ Testing y QA sistemático

---

## 👨‍💻 Autor

**Rafael Ibarra**

- GitHub: [@TU_USUARIO](https://github.com/TU_USUARIO)
- LinkedIn: [Tu LinkedIn](https://linkedin.com/in/TU_PERFIL)
- Email: rafael08dev@gmail.com

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- Inspirado por la necesidad real de freelancers y pequeñas empresas
- Desarrollado como parte de un reto de 21 días de código consecutivo
- Gracias a la comunidad de Next.js y React por las herramientas increíbles

---

## 🔗 Demo en Vivo

🚀 **[Ver Demo](https://tu-app.vercel.app)** *(Disponible después de Day 21)*

---

<div align="center">
  
**⭐ Si este proyecto te fue útil, dale una estrella en GitHub ⭐**

[⬆️ Volver arriba](#-generador-de-documentos-profesionales)

</div>
