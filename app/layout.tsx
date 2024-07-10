import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://landing-page-gato.vercel.app/"),
  title: {
    default: "Diseño Web Profesional - Agencia Gato",
    template: "%s - Agencia Gato",
  },
  description:
    "Transforma tu presencia online con nuestro diseño web profesional. Descubre nuestras soluciones personalizadas para tu sitio web.",
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
    { name: "Agencia GATO", url: "https://gato-dev.vercel.app/" },
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
    url: "https://landing-page-gato.vercel.app/",
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
