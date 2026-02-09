'use client';

/**
 * Hero Section Component
 * Estilo plataforma SaaS establecida con screenshot del producto
 */

import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/40 via-surface-cream to-surface-cream">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-surface-cream/80 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-generadocs.png"
                alt="GeneraDocs"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#solution" className="text-sm text-ink-500 hover:text-ink-900 transition-colors">
                Producto
              </a>
              <a href="#demo" className="text-sm text-ink-500 hover:text-ink-900 transition-colors">
                Demo
              </a>
              <Link href="/guia" className="text-sm text-ink-500 hover:text-ink-900 transition-colors">
                Guia
              </Link>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <Link href="https://app.generadocs.com.mx/login">
                <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                  Iniciar sesion
                </Button>
              </Link>
              <Link href="https://app.generadocs.com.mx/registro">
                <Button variant="primary" size="sm">
                  Crea tu cuenta gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/60 text-primary-700 text-sm font-medium mb-8 animate-fade-in border border-primary-200/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Plataforma de documentos para profesionales
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 tracking-tight leading-[1.1]">
            Documentos profesionales,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              listos al instante
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-ink-500 mb-8 leading-relaxed max-w-2xl mx-auto">
            La plataforma que profesionistas y negocios usan para generar recibos, cotizaciones, constancias y mas. Elige una plantilla, llena los datos, descarga tu PDF.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="https://app.generadocs.com.mx/registro">
              <Button variant="primary" size="xl" className="w-full sm:w-auto group">
                Comenzar ahora
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
            <Button
              onClick={scrollToDemo}
              variant="outline"
              size="xl"
              className="w-full sm:w-auto"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ver demo
            </Button>
          </div>

          {/* Trust text */}
          <p className="text-sm text-ink-400 mb-12">
            Plan gratuito disponible · Sin tarjeta de credito · Configuracion en 2 minutos
          </p>
        </div>

        {/* Screenshot del Dashboard */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/15 via-primary-400/15 to-primary-600/15 rounded-2xl blur-2xl opacity-60"></div>

          {/* Screenshot container */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-ink-200/60 bg-white">
            <Image
              src="/screenshots/dashboard.png"
              alt="Plataforma GeneraDocs"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Floating badges */}
          <div className="absolute -left-4 top-1/4 hidden lg:block">
            <div className="bg-white rounded-lg shadow-lg border border-ink-100 px-4 py-3 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-ink-700">PDF generado</span>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 top-1/3 hidden lg:block">
            <div className="bg-white rounded-lg shadow-lg border border-ink-100 px-4 py-3 animate-float-delayed">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-50 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-ink-700">Variables automaticas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
