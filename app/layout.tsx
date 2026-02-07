import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GeneraDocs - Genera documentos profesionales en PDF",
  description: "Crea recibos, constancias y documentos personalizados en minutos usando plantillas inteligentes.",
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
