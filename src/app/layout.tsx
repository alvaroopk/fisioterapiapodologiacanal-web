import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Fisio Canal | Fisioterapia y Podología en Chamberí, Madrid",
    template: "%s | Fisio Canal — Fisioterapia y Podología Chamberí",
  },
  description:
    "Fisioterapia, Osteopatía y Podología en Chamberí, Madrid. Fisioterapeutas con Certificado de Osteopatía universitario. Más de 15 años. Pide cita hoy.",
  keywords: [
    "fisioterapia Chamberí",
    "fisioterapia Madrid",
    "osteopatía Chamberí",
    "osteopatía Madrid",
    "podología Chamberí",
    "podología Madrid",
    "pilates terapéutico Madrid",
    "fisioterapeuta Madrid",
    "drenaje linfático Madrid",
    "punción seca Madrid",
    "pie diabético Chamberí",
    "fisioterapia Cuatro Caminos",
    "clínica fisioterapia Chamberí",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: "Fisio Canal | Fisioterapia y Podología en Chamberí, Madrid",
    description:
      "Fisioterapia, Osteopatía y Podología en Chamberí, Madrid. Fisioterapeutas con Certificado de Osteopatía universitario. Más de 15 años. Pide cita hoy.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fisio Canal | Fisioterapia y Podología en Chamberí, Madrid",
    description:
      "Fisioterapia, Osteopatía y Podología en Chamberí, Madrid. Fisioterapeutas con Certificado de Osteopatía universitario. Más de 15 años.",
  },
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
