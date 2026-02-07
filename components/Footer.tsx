/**
 * Footer Component - ACTUALIZADO
 * Sin "Hecho con amor en México"
 */

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo-generadocs.png" 
                alt="GeneraDocs" 
                width={150} 
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm max-w-md">
              Genera documentos profesionales en segundos. Recibos, cotizaciones, facturas, cartas y reportes con plantillas inteligentes.
            </p>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Producto</h4>
            <ul className="space-y-3">
              <li>
                <a href="#solution" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#demo" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <Link href="https://app.generadocs.com.mx/registro" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Crear cuenta
                </Link>
              </li>
              <li>
                <Link href="https://app.generadocs.com.mx/login" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Iniciar sesión
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacidad" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Términos de uso
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Síguenos</h4>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com/generadocs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/generadocs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} GeneraDocs. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}