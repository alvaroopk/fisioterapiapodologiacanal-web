import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, GraduationCap, Quote, Sparkles } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { TEAM, GALLERY_IMAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Fisioterapeutas en Chamberí Madrid — Jorge Espinar y Beatriz Álvarez",
  description:
    "Fisioterapeutas-osteópatas en Chamberí, Madrid: Jorge Espinar y Beatriz Álvarez. Certificado de Osteopatía universitario, 15+ años de experiencia y trato integral.",
  alternates: {
    canonical: "https://fispocanal.com/equipo",
  },
};

export default function EquipoPage() {
  return (
    <>
      <PageHero
        title="Fisioterapeutas y especialistas en Chamberí, Madrid"
        subtitle="Dos especialistas, una filosofía compartida: la excelencia en el cuidado de las personas"
        image="/assets/recepcion_1.jpg"
        imageAlt="Recepción moderna de la clínica Fisio Canal en Chamberí, Madrid"
      />

      {/* Filosofía */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <span className="eyebrow">Filosofía</span>
          <h2 className="section-title mt-2">
            Más que una clínica, una forma de entender la salud
          </h2>
          <div className="mt-6 space-y-4 text-brand-text leading-relaxed">
            <p>
              En Fisio Canal creemos que el cuerpo humano debe entenderse como
              un todo. Por eso, desde el primer día integramos la fisioterapia
              con la osteopatía: no como dos servicios separados, sino como una
              única forma de tratar al paciente de forma global — estructural,
              craneal y visceral.
            </p>
            <p>
              Todos nuestros fisioterapeutas tienen Certificado de Osteopatía
              de la Escuela de Osteopatía de Madrid, con reconocimiento
              universitario en España y que cumple los Estándares Académicos
              Europeos en Osteopatía. Esto significa que cuando vienes a una
              sesión de fisioterapia, tu terapeuta ya tiene una formación de 5
              años adicionales en osteopatía — y lo aplica en cada sesión.
            </p>
            <p className="text-sm text-brand-muted">
              Centro autorizado por la Comunidad de Madrid — Número CS1 1037.
            </p>
          </div>
        </div>
      </section>

      {/* Miembros del equipo */}
      {TEAM.map((person, idx) => (
        <section
          key={person.slug}
          className={`section ${idx % 2 === 0 ? "bg-brand-bg" : "bg-white"}`}
        >
          <div className="container-custom">
            <div
              className={`grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-2">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-card">
                  <Image
                    src={person.image}
                    alt={`${person.name} — ${person.role} en Fisio Canal, Chamberí Madrid`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    quality={85}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-3">
                <span className="eyebrow">{person.role}</span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-primary">
                  {person.name}
                </h2>
                <p className="mt-5 text-brand-text leading-relaxed">
                  {person.intro}
                </p>

                <div className="mt-8 rounded-lg bg-white border border-brand-bg p-6">
                  <div className="flex items-center gap-2 text-brand-accent">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-brand-primary">
                      Formación
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {person.education.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2.5 text-sm text-brand-text leading-relaxed"
                      >
                        <BadgeCheck
                          className="h-4 w-4 shrink-0 mt-0.5 text-brand-accent"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-accent">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                    Especialidades:
                  </span>
                  {person.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <blockquote className="mt-8 relative rounded-lg bg-brand-primary p-6 text-white">
                  <Quote
                    className="absolute top-4 right-4 h-6 w-6 text-white/30"
                    aria-hidden="true"
                  />
                  <p className="text-sm sm:text-base italic leading-relaxed text-white/95">
                    &ldquo;{person.quote}&rdquo;
                  </p>
                  <footer className="mt-3 text-xs uppercase tracking-wider text-brand-light">
                    — {person.name.split(" ")[0]}
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Galería instalaciones */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Instalaciones</span>
            <h2 className="section-title mt-2">Nuestras instalaciones</h2>
            <p className="mt-3 text-brand-muted">
              Espacios modernos, luminosos y completamente equipados —
              adaptados para personas con discapacidad.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-lg shadow-card ${
                  i === 0 || i === 3
                    ? "col-span-2 row-span-2 aspect-square"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-center text-brand-muted max-w-2xl mx-auto">
            Todas nuestras salas disponen de luz natural, están totalmente
            adaptadas para personas con discapacidad y cuentan con equipamiento
            de última generación. Cada detalle está pensado para que te sientas
            cómodo y en un entorno clínico de primer nivel.
          </p>
        </div>
      </section>

      <CTASection
        title="¿Quieres ser tratado por este equipo?"
        text="Solicita tu cita y descubre por qué más de 15 años de pacientes nos eligen en Chamberí."
      />
    </>
  );
}
