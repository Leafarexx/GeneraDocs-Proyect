import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";


const baseUrl = "https://generadocs.com.mx";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "GeneraDocs - Crea cotizaciones, contratos y recibos profesionales",
    template: "%s | GeneraDocs",
  },
  description:
    "Genera cotizaciones, contratos, recibos y documentos profesionales con plantillas listas para usar. Completa tus datos y descarga tu PDF al instante.",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: baseUrl,
    siteName: "GeneraDocs",
    title: "GeneraDocs - Crea cotizaciones, contratos y recibos profesionales",
    description:
      "Genera cotizaciones, contratos, recibos y documentos profesionales con plantillas listas para usar. Completa tus datos y descarga tu PDF al instante.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeneraDocs - Crea cotizaciones, contratos y recibos profesionales",
    description:
      "Genera cotizaciones, contratos, recibos y documentos profesionales con plantillas listas para usar.",
    site: "@generadocs",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GeneraDocs",
  url: baseUrl,
  logo: `${baseUrl}/favicon-96x96.png`,
  description:
    "Plataforma para generar cotizaciones, contratos, recibos y documentos profesionales en PDF.",
  sameAs: [],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GeneraDocs",
  url: baseUrl,
  description:
    "Genera cotizaciones, contratos, recibos y documentos profesionales con plantillas listas para usar.",
  publisher: {
    "@type": "Organization",
    name: "GeneraDocs",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteJsonLd),
          }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
