import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import {
  FISIO_TREATMENTS,
  OSTEO_TREATMENTS,
  PODO_PATHOLOGIES,
  PODO_TREATMENTS,
  PILATES_ASPECTS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Fisioterapia, Osteopatía, Podología y Pilates en Chamberí",
  description:
    "Terapia manual, punción seca, osteopatía craneal, drenaje linfático, podología y pilates terapéutico en Chamberí, Madrid. Descubre todos nuestros tratamientos.",
  alternates: {
    canonical: "https://fispocanal.com/servicios",
  },
};

interface TreatmentCardProps {
  title: string;
  text: string;
}

function TreatmentCard({ title, text }: TreatmentCardProps) {
  return (
    <div className="rounded-lg border border-brand-bg bg-white p-6 shadow-card">
      <h3 className="text-base font-bold text-brand-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-muted">{text}</p>
    </div>
  );
}

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        title="Fisioterapia, Osteopatía, Podología y Pilates en Chamberí"
        subtitle="Cuatro disciplinas, un equipo especializado, un objetivo: tu bienestar y recuperación"
        image="/assets/sala_fisioterapia_3.jpg"
        imageAlt="Sala de fisioterapia profesional en la clínica Fisio Canal, Chamberí Madrid"
      />

      {/* Fisioterapia */}
      <section id="fisioterapia" className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-card">
              <Image
                src="/assets/sala_fisioterapia_3.jpg"
                alt="Sala de fisioterapia en Fisio Canal Chamberí Madrid con camilla profesional y equipamiento"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                className="object-cover"
              />
            </div>
            <div>
              <span className="eyebrow">Servicio</span>
              <h2 className="section-title mt-2">Fisioterapia</h2>
              <p className="mt-4 text-brand-muted leading-relaxed">
                La fisioterapia es la ciencia de la salud que utiliza medios
                físicos para mantener, tratar y recuperar la salud. En Fisio
                Canal, nuestras sesiones son principalmente de terapia manual —
                manos del especialista directamente sobre tu cuerpo, durante toda
                la sesión — complementada con electroterapia cuando es necesario.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {FISIO_TREATMENTS.map((t) => (
              <TreatmentCard key={t.title} title={t.title} text={t.text} />
            ))}
          </div>
        </div>
      </section>

      {/* Osteopatía */}
      <section id="osteopatia" className="section bg-brand-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <span className="eyebrow">Servicio</span>
              <h2 className="section-title mt-2">Osteopatía</h2>
              <p className="mt-4 text-brand-muted leading-relaxed">
                La osteopatía es una disciplina terapéutica reconocida por la
                OMS que trata al ser humano de forma global — estructural,
                craneal y visceral — restableciendo el equilibrio del cuerpo
                mediante técnicas manuales. En Fisio Canal, la osteopatía no es
                un añadido: todos nuestros fisioterapeutas tienen Certificado de
                Osteopatía universitario de 5 años. Cada sesión incluye
                automáticamente este enfoque integral.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-card order-first lg:order-last">
              <Image
                src="/assets/sala_fisioterapia_1.jpg"
                alt="Sala de tratamiento de osteopatía en Fisio Canal, clínica en Chamberí Madrid"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {OSTEO_TREATMENTS.map((t) => (
              <TreatmentCard key={t.title} title={t.title} text={t.text} />
            ))}
          </div>
        </div>
      </section>

      {/* Podología */}
      <section id="podologia" className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-card">
              <Image
                src="/assets/sala_podologia.jpg"
                alt="Gabinete de podología en Fisio Canal, Chamberí Madrid — tratamiento de pies"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                className="object-cover"
              />
            </div>
            <div>
              <span className="eyebrow">Servicio</span>
              <h2 className="section-title mt-2">Podología</h2>
              <p className="mt-4 text-brand-muted leading-relaxed">
                Tus pies soportan todo el peso de tu vida. Cuando algo falla en
                ellos, lo notas en cada paso. En Fisio Canal, nuestra podóloga
                Beatriz Álvarez — Diplomada en Podología por la UCM y Experta
                Universitaria en Patología y Ortopedia del Miembro Inferior —
                ofrece tratamiento integral del pie, desde el cuidado preventivo
                hasta patologías complejas.
              </p>
            </div>
          </div>

          <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {PODO_TREATMENTS.map((t) => (
              <TreatmentCard key={t.title} title={t.title} text={t.text} />
            ))}
          </div>

          <div className="mt-10 rounded-lg bg-brand-light/40 border border-brand-light p-6 sm:p-8">
            <h3 className="text-lg font-bold text-brand-primary">
              Patologías del pie que tratamos
            </h3>
            <p className="mt-1 text-sm text-brand-muted">
              Soluciones clínicas para los problemas más comunes:
            </p>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {PODO_PATHOLOGIES.map((p) => (
                <li key={p.name} className="flex gap-3 items-start">
                  <Check
                    className="h-5 w-5 shrink-0 mt-0.5 text-brand-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold text-brand-primary">
                      {p.name}
                    </p>
                    <p className="text-xs text-brand-muted">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pilates */}
      <section id="pilates" className="section bg-brand-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <span className="eyebrow">Servicio</span>
              <h2 className="section-title mt-2">Pilates Terapéutico</h2>
              <p className="mt-4 text-brand-muted leading-relaxed">
                El método Pilates que ofrecemos en Fisio Canal no es una clase
                de fitness. Es un programa de entrenamiento supervisado por
                fisioterapeutas, diseñado para mejorar tu postura, fortalecer la
                musculatura profunda y rehabilitar lesiones — especialmente de
                columna y espalda. Porque cuando un fisioterapeuta imparte
                Pilates, cada ejercicio tiene un propósito clínico.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-card order-first lg:order-last">
              <Image
                src="/assets/sala_pilates.jpg"
                alt="Sala de pilates terapéutico en Fisio Canal Chamberí, impartido por fisioterapeutas"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {PILATES_ASPECTS.map((t) => (
              <TreatmentCard key={t.title} title={t.title} text={t.text} />
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
            <div className="rounded-lg bg-brand-primary text-white p-6">
              <p className="text-xs uppercase tracking-wider text-brand-light">
                1 clase / semana
              </p>
              <p className="mt-2 text-3xl font-bold">42 €<span className="text-base font-medium text-white/80">/mes</span></p>
            </div>
            <div className="rounded-lg bg-brand-accent text-white p-6">
              <p className="text-xs uppercase tracking-wider text-white/90">
                2 clases / semana
              </p>
              <p className="mt-2 text-3xl font-bold">80 €<span className="text-base font-medium text-white/80">/mes</span></p>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/contacto#formulario" className="btn-primary">
              Reservar plaza en Pilates
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="¿No sabes qué servicio necesitas?"
        text="Cuéntanos qué te ocurre y te orientamos sin compromiso. Un equipo especializado, un enfoque integral."
      />
    </>
  );
}
