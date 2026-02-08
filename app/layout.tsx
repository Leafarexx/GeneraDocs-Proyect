import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GeneraDocs - Plataforma de documentos inteligentes",
  description: "Genera recibos, cotizaciones, constancias y documentos profesionales con plantillas inteligentes. La plataforma que usan profesionistas y negocios en México.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
