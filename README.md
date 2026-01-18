# 📄 Generador de Documentos Profesionales

> Aplicación web para crear, gestionar y exportar plantillas de documentos profesionales con reemplazo dinámico de variables y generación de PDFs.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://genera-docs-proyect.vercel.app)

---

## 🚀 Demo en Vivo

**👉 [https://genera-docs-proyect.vercel.app](https://genera-docs-proyect.vercel.app)**

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
- ✅ Interfaz optimizada para desktop

---

## 🛠️ Tech Stack

| Categoría | Tecnología |
|-----------|------------|
| Framework | Next.js 16 |
| UI Library | React 19 |
| Lenguaje | TypeScript 5 |
| Estilos | Tailwind CSS 3 |
| PDF | jsPDF |
| Notificaciones | react-hot-toast |
| Deploy | Vercel |

---

## 🚀 Instalación Local

### Prerequisitos

- Node.js 18+ 
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/Leafarexx/GeneraDocs-Proyect.git
cd GeneraDocs-Proyect
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

## 📁 Estructura del Proyecto

```
generador-documentos/
├── app/
│   ├── components/      # Componentes reutilizables
│   │   ├── Button.tsx
│   │   └── PlantillaForm.tsx
│   ├── editor/          # Página del editor
│   │   └── page.tsx
│   ├── hooks/           # Custom hooks
│   │   └── useLocalStorage.ts
│   ├── utils/           # Utilidades
│   │   ├── categorias.ts
│   │   ├── generarPDF.ts
│   │   ├── plantillasBase.ts
│   │   └── reemplazarVariables.ts
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
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

## 📮 Roadmap Futuro

### Versión 1.1 (Próximamente)
- [ ] Guardar variables con cada plantilla
- [ ] Responsive design para mobile
- [ ] Confirmación al limpiar formulario
- [ ] Preview de plantillas en modal

### Versión 2.0 (Planeado)
- [ ] Backend con Supabase
- [ ] Autenticación de usuarios
- [ ] Sincronización multi-dispositivo
- [ ] Dominio propio (generadocs.com.mx)
- [ ] Monetización

---

## 📊 Estadísticas del Proyecto

- **21 días** de desarrollo consecutivo
- **25+ commits** documentados
- **~3,000 líneas** de código TypeScript/React
- **20+ features** implementadas
- **0 bugs críticos** en producción

---

## 🧠 Aprendizajes Técnicos

Durante el desarrollo de este proyecto, dominé:

- ✅ Next.js 16 App Router y Turbopack
- ✅ React 19 hooks avanzados (useState, useEffect, custom hooks)
- ✅ TypeScript para type safety
- ✅ Persistencia de datos con localStorage
- ✅ Generación de PDFs con jsPDF
- ✅ Regex para reemplazo de variables
- ✅ UX patterns (empty states, progressive disclosure)
- ✅ Responsive design con Tailwind
- ✅ File handling (Blob API, FileReader)
- ✅ Deploy en Vercel con CI/CD

---

## 👨‍💻 Autor

**Rafael Ibarra**

- GitHub: [@Leafarexx](https://github.com/Leafarexx)
- LinkedIn: [Rafael Ibarra](https://linkedin.com/in/rafaelibarra)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- Desarrollado como parte de un reto personal de 21 días de código consecutivo
- Inspirado por la necesidad real de freelancers y pequeñas empresas
- Gracias a la comunidad de Next.js y React por las herramientas increíbles

---

<div align="center">
  
**⭐ Si este proyecto te fue útil, dale una estrella en GitHub ⭐**

🚀 **[Ver Demo Live](https://genera-docs-proyect.vercel.app)** 🚀

</div>
