import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";
import Script from "next/script";
import { Partytown } from "@builder.io/partytown/react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};
export const metadata: Metadata = {
  metadataBase: new URL("https://web.gato.com.pe/"),
  title: {
    default: "Diseño Web Profesional - Agencia Gato",
    template: "%s - Agencia Gato",
  },
  description:
    "Transforma tu presencia online con nuestro diseño web profesional. Descubre nuestras soluciones personalizadas para tu sitio web.",
  alternates: {
    canonical: "https://web.gato.com.pe/",
    languages: {
      "es-ES": "https://web.gato.com.pe/es-ES",
    },
  },
  keywords: [
    "Diseño web profesional",
    "Diseño web personalizado",
    "Agencia de diseño web",
    "Desarrollo de sitios web",
    "Diseño de páginas web",
    "Diseño web a medida",
    "Agencia de desarrollo web",
    "Servicios de diseño web",
    "Empresas de diseño web",
    "Desarrollo web profesional",
    "Consultoría en diseño web",
    "Diseño de sitios web empresariales",
    "Diseño web Lima, Perú",
    "Web design services",
    "Custom web design",
    "Professional web design",
    "Web development",
    "Web design agency",
    "Web design company",
    "Responsive web design",
    "UX/UI design",
    "Landing page design",
    "E-commerce design",
    "One-page website design",
  ],
  icons: {
    icon: "/gato-icon.png",
  },
  authors: [
    { name: "Agencia GATO" },
    { name: "Agencia GATO", url: "https://gato.pe/" },
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo a medida - Agencia Gato",
    description:
      "Transforma tu presencia online con nuestro diseño web profesional. Descubre nuestras soluciones personalizadas para tu sitio web.",
    images: "/opengraph-image.png",
  },

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://web.gato.com.pe/",
    siteName: "Agencia Gato",
    title: "Desarrollo a medida - Agencia Gato",
    description:
      "Transforma tu presencia online con nuestro diseño web profesional. ¡Haz clic ahora para descubrir nuestras soluciones personalizadas para tu sitio web!",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Agencia Gato - Diseño Web Profesional",
      },
      {
        url: "/mstile-310x310.png",
        width: 310,
        height: 310,
        alt: "Logo Agencia GATO",
      },
    ],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <Partytown debug={true} forward={["dataLayer.push"]} />
        <Script
          id="gtm"
          type="text/partytown"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','AW-16593859821');`,
          }}
        ></Script>
      </Head>
      <GoogleTagManager gtmId="AW-16593859821" />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
