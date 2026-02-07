# GeneraDocs Landing Page - Quick Start Guide

## 🚀 Getting Started (3 Steps)

### 1. Install Dependencies
```bash
cd generadocs-landing
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit: **http://localhost:3000**

---

## 📦 What You Get

A complete, production-ready landing page with:

✅ **Hero Section** - Main headline with CTAs
✅ **Problem Section** - Pain points users face
✅ **Solution Section** - How GeneraDocs works
✅ **Use Case** - Real-world example (Jessica & Rafael)
✅ **For Who Section** - Target audience clarity
✅ **Interactive Demo** - Form + Live Document Preview
✅ **Final CTA** - Last conversion opportunity
✅ **Footer** - Simple, professional

---

## 🎨 Features

- **Fully Responsive** - Works on all devices
- **Interactive Demo** - Users can try it immediately
- **Smooth Scrolling** - Professional navigation
- **Clean Design** - Neutral colors, professional look
- **Fast Loading** - Optimized for performance
- **SEO Ready** - Proper meta tags included

---

## 🛠 Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

---

## 📂 File Structure

```
generadocs-landing/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx             # Main page (combines all sections)
│   └── globals.css          # Global styles
├── components/
│   ├── Hero.tsx             # Hero section with CTAs
│   ├── Problem.tsx          # Problem statement
│   ├── Solution.tsx         # Solution explanation
│   ├── UseCase.tsx          # Jessica example
│   ├── ForWho.tsx           # Target audience
│   ├── Demo.tsx             # Interactive demo ⭐
│   ├── FinalCTA.tsx         # Final call-to-action
│   └── Footer.tsx           # Footer
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🎯 Interactive Demo Explained

The **Demo component** (`components/Demo.tsx`) is the heart of the landing page:

### What it does:
1. User fills a simple form:
   - Nombre del cliente
   - Empresa / Profesional
   - Servicio / Concepto
   - Monto
   - Fecha

2. Click "Generar documento"

3. **Live preview appears** showing a professional document

4. "Descargar PDF (demo)" button shows an alert (mock download)

### How it works:
- Uses React `useState` for form data
- Real-time preview rendering
- Professional document styling
- Shows actual formatted data

### To add real PDF generation:
```bash
npm install jspdf
# or
npm install @react-pdf/renderer
```

Then update the `handleDownload()` function in `Demo.tsx`.

---

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#YOUR_COLOR',
    600: '#YOUR_DARKER_COLOR',
    // etc.
  }
}
```

### Change Copy
All text is in Spanish (Mexico). Edit component files directly:
- Hero.tsx - Main headline
- Problem.tsx - Pain points
- Solution.tsx - How it works
- UseCase.tsx - Jessica story
- ForWho.tsx - Target audience
- Demo.tsx - Form labels
- FinalCTA.tsx - Final message

### Add More Templates
Currently shows only "Recibo" (Receipt). To add more:
1. Add new form fields in `Demo.tsx`
2. Create new preview components
3. Add template selector UI

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Other Platforms
- Netlify: Drag & drop `.next` folder
- Railway: Connect GitHub repo
- AWS/Google Cloud: Use Docker

---

## 📊 Performance

Current build size:
- Main page: **2.52 kB**
- First Load JS: **105 kB**
- All content is **static** (pre-rendered)

---

## ✅ Testing Checklist

Before launching:
- [ ] Test on mobile (iPhone, Android)
- [ ] Test on tablet (iPad)
- [ ] Test on desktop (Chrome, Firefox, Safari)
- [ ] Fill demo form and verify preview
- [ ] Check all CTAs scroll correctly
- [ ] Verify all copy is correct
- [ ] Test in different browsers
- [ ] Check page load speed

---

## 🔧 Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

---

## 💡 Tips

1. **The demo is the star** - Make sure it works perfectly
2. **Mobile first** - Most users will see it on mobile
3. **Keep it simple** - This is an MVP, not a full product
4. **Focus on clarity** - Users should understand in 10 seconds
5. **Test the demo** - It's your best conversion tool

---

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### TypeScript errors
```bash
# Check for errors
npx tsc --noEmit
```

---

## 📈 Next Steps (After MVP)

1. **Add real PDF generation** (jsPDF or react-pdf)
2. **Add more templates** (Quote, Contract, etc.)
3. **Add analytics** (Google Analytics, Plausible)
4. **Add email capture** (for waiting list)
5. **Add authentication** (when ready for full product)
6. **Add backend** (save documents, user accounts)

---

## 📝 Notes

- This is an **MVP** - designed for validation
- No backend required - all client-side
- No authentication - anyone can try the demo
- PDF download is mocked - add library for real PDFs
- Spanish (Mexico) throughout
- Professional, minimal design

---

## 🆘 Support

If you encounter issues:
1. Check the README.md
2. Review component comments
3. Check Next.js documentation: https://nextjs.org
4. Check Tailwind docs: https://tailwindcss.com

---

**Ready to launch? Run `npm run dev` and start testing! 🚀**
