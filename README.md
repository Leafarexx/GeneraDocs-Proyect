# GeneraDocs - Landing Page

MVP landing page for GeneraDocs, a document generation tool for professionals and small businesses.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd generadocs-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📁 Project Structure

```
generadocs-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles
├── components/
│   ├── Hero.tsx             # Hero section with main CTA
│   ├── Problem.tsx          # Problem statement section
│   ├── Solution.tsx         # How GeneraDocs solves it
│   ├── UseCase.tsx          # Real-world example (Jessica)
│   ├── ForWho.tsx           # Target audience clarification
│   ├── Demo.tsx             # Interactive demo (form + preview)
│   ├── FinalCTA.tsx         # Final call-to-action
│   └── Footer.tsx           # Footer with tagline
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design & Features

### Sections
1. **Hero** - Main headline and CTAs
2. **Problem** - Pain points users face
3. **Solution** - How GeneraDocs works
4. **Use Case** - Jessica & Rafael story
5. **For Who** - Target audience (who should/shouldn't use it)
6. **Demo** - Interactive form with live document preview
7. **Final CTA** - Last conversion opportunity
8. **Footer** - Simple tagline

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State**: React useState (client-side only)

### Key Features
- ✅ Fully responsive (mobile-first)
- ✅ Interactive demo with form validation
- ✅ Live document preview
- ✅ Smooth scroll navigation
- ✅ Clean, professional design
- ✅ No backend required (MVP)
- ✅ Fast page loads

## 🎯 Demo Functionality

The demo section allows users to:
1. Fill a simple form (name, company, service, amount, date)
2. Generate a professional document preview
3. See how the final document looks
4. Mock PDF download (shows alert - no real PDF generation yet)

**Note**: This is an MVP. Real PDF generation would require a library like `jsPDF` or `react-pdf`.

## 🛠 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content
All text content is hardcoded in Spanish (Mexico) as per requirements. Edit component files directly to change copy.

### Adding Real PDF Generation
To add actual PDF download:
1. Install a PDF library: `npm install jspdf` or `npm install @react-pdf/renderer`
2. Update `Demo.tsx` `handleDownload` function
3. Convert the preview HTML to PDF format

## 📦 Production Build

```bash
npm run build
npm start
```

Or deploy to Vercel:
```bash
npx vercel
```

## 🧪 Development Notes

- No authentication required
- No database/backend
- All state is local (useState)
- Perfect for MVP validation
- Mobile-responsive by default

## 📝 Product Context

**GeneraDocs** is NOT:
- ❌ CFDI / tax invoice software
- ❌ Full accounting system
- ❌ Enterprise ERP

**GeneraDocs** IS:
- ✅ Simple document generator
- ✅ For professionals & small businesses
- ✅ Receipts, certificates, simple documents
- ✅ Fast, clear, professional

## 🤝 Contributing

This is an MVP. For production:
- Add real PDF generation
- Add user authentication
- Add template management
- Add cloud storage
- Add analytics

## 📄 License

MIT (or your preferred license)

---

**Built with ❤️ for professionals who need simple, professional documents.**
