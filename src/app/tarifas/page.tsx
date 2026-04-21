import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info, MessageCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import {
  PRICES_FISIO,
  PRICES_PODO,
  PRICES_PILATES,
  SITE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tarifas y precios — Fisioterapia y Podología en Chamberí",
  description:
    "Precios de fisioterapia en Madrid: sesión 44€, bonos desde 38€/sesión. Podología desde 29€. Pilates terapéutico desde 42€/mes. Transparencia total en Fisio Canal.",
  alternates: {
    canonical: "https://fispocanal.com/tarifas",
  },
};

interface PriceTableProps {
  title: string;
  intro?: string;
  rows: { service: string; price: string }[];
  note?: string;
  highlight?: boolean;
}

function PriceTable({ title, intro, rows, note, highlight }: PriceTableProps) {
  return (
    <div className="rounded-lg bg-white shadow-card overflow-hidden">
      <div
        className={`px-6 sm:px-8 py-5 ${
          highlight ? "bg-brand-primary text-white" : "bg-brand-bg"
        }`}
      >
        <h3
          className={`text-lg font-bold ${
            highlight ? "text-white" : "text-brand-primary"
          }`}
        >
          {title}
        </h3>
        {intro && (
          <p
            className={`mt-1 text-sm ${
              highlight ? "text-white/85" : "text-brand-muted"
            }`}
          >
            {intro}
          </p>
        )}
      </div>
      <div className="p-6 sm:p-8">
        <ul className="divide-y divide-brand-bg">
          {rows.map((row) => (
            <li
              key={row.service}
              className="flex items-baseline justify-between gap-4 py-3.5"
            >
              <span className="text-sm text-brand-text">{row.service}</span>
              <span className="text-sm sm:text-base font-bold text-brand-primary whitespace-nowrap">
                {row.price}
              </span>
            </li>
          ))}
        </ul>
        {note && (
          <div className="mt-5 rounded-md bg-brand-light/50 p-4 flex gap-2.5">
            <Info
              className="h-4 w-4 shrink-0 mt-0.5 text-brand-accent"
              aria-hidden="true"
            />
            <p className="text-xs leading-relaxed text-brand-muted">{note}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TarifasPage() {
  return (
    <>
      <PageHero
        title="Tarifas de fisioterapia y podología en Chamberí"
        subtitle="Precios claros, sin sorpresas. Invertir en tu salud es siempre la mejor decisión."
        image="/assets/recepcion_2.jpg"
        imageAlt="Sala de espera de la clínica Fisio Canal en Chamberí, Madrid"
      />

      <section className="section bg-brand-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PriceTable
              title="Fisioterapia y Osteopatía"
              intro="Sesiones de aproximadamente 1 hora de terapia manual exclusiva — sin cronómetro, sin prisas. Cada sesión integra fisioterapia y osteopatía según lo que tu cuerpo necesite."
              rows={PRICES_FISIO}
              note="Los bonos tienen una validez de 1 año y pueden compartirse entre miembros de la misma familia o círculo cercano."
              highlight
            />
            <div className="flex flex-col gap-8">
              <PriceTable
                title="Podología"
                rows={PRICES_PODO}
                note="Para tratamientos específicos (hongos, uñas encarnadas, pie diabético, plantillas) el precio se determina tras una primera valoración gratuita. Llámanos o escríbenos por WhatsApp."
              />
              <PriceTable
                title="Pilates Terapéutico"
                rows={PRICES_PILATES}
                note="Clases impartidas por fisioterapeutas en grupos reducidos. Imprescindible reserva previa."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="section-title">
            ¿Tienes dudas sobre qué tratamiento necesitas?
          </h2>
          <p className="mt-4 text-brand-muted">
            Cuéntanos tu situación y te orientamos sin compromiso. El primer
            paso es hablar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto#formulario" className="btn-primary">
              Contactar ahora
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={SITE.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accentDark transition-colors"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              O escríbenos directamente por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
