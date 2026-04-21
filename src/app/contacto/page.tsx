import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, Accessibility, TrainFront, Bus } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import { BUS_LINES, METRO_LINES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pide cita — Fisioterapia y Podología en Chamberí",
  description:
    "Pide cita de fisioterapia en Chamberí, Madrid. Formulario online, WhatsApp 601 17 89 69 y teléfono 91 282 62 66. Metro Canal, Cuatro Caminos y Ríos Rosas.",
  alternates: {
    canonical: "https://fispocanal.com/contacto",
  },
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        title="Contacto y cita de fisioterapia en Chamberí"
        subtitle="Estamos en el corazón de Chamberí, Madrid — disponibles por teléfono, WhatsApp y formulario online"
        image="/assets/fachada_exterior.jpg"
        imageAlt="Fachada exterior de la clínica Fisio Canal en Av. Pablo Iglesias, Chamberí Madrid"
      />

      {/* Contact cards */}
      <section className="section bg-brand-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <a
              href={`tel:${SITE.phones[0].tel}`}
              className="group rounded-lg bg-white p-7 shadow-card transition-shadow hover:shadow-cardHover"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand-accent">
                <Phone className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-primary">
                Llámanos
              </h3>
              <p className="mt-2 text-sm text-brand-text font-semibold">
                {SITE.phones[0].value}
              </p>
              <p className="text-sm text-brand-text">
                {SITE.phones[1].value}
              </p>
              <p className="mt-3 text-xs text-brand-muted">
                Horario de atención: L-V 9:00–20:00
              </p>
            </a>

            <a
              href={SITE.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg bg-white p-7 shadow-card transition-shadow hover:shadow-cardHover"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-primary">
                WhatsApp
              </h3>
              <p className="mt-2 text-sm text-brand-text font-semibold">
                {SITE.whatsapp.number}
              </p>
              <p className="mt-3 text-xs text-brand-muted">
                Disponible para consultas y reservas — respuesta rápida.
              </p>
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="group rounded-lg bg-white p-7 shadow-card transition-shadow hover:shadow-cardHover"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand-accent">
                <Mail className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-primary">
                Email
              </h3>
              <p className="mt-2 text-sm text-brand-text font-semibold break-all">
                {SITE.email}
              </p>
              <p className="mt-3 text-xs text-brand-muted">
                Respondemos en menos de 24 horas hábiles.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section id="formulario" className="section bg-white scroll-mt-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <span className="eyebrow">Cita previa</span>
              <h2 className="section-title mt-2">Pide tu cita</h2>
              <p className="mt-3 text-brand-muted">
                Rellena el formulario y te contactamos en menos de 24 horas
                hábiles.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div>
              <span className="eyebrow">Ubicación</span>
              <h2 className="section-title mt-2">Cómo llegar</h2>
              <p className="mt-3 text-brand-text">
                {SITE.address.street}
                <br />
                <span className="text-sm text-brand-muted">
                  {SITE.address.additional}
                </span>
                <br />
                {SITE.address.postalCode} {SITE.address.city}
              </p>

              <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-lg shadow-card">
                <iframe
                  title={`Mapa de ${SITE.name}`}
                  src="https://www.google.com/maps?q=Avenida+de+Pablo+Iglesias+4,+28003+Madrid&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="mt-8 space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-brand-accent mb-2">
                    <TrainFront className="h-5 w-5" aria-hidden="true" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-brand-primary">
                      Metro
                    </h3>
                  </div>
                  <ul className="space-y-1.5">
                    {METRO_LINES.map((m) => (
                      <li
                        key={m.station}
                        className="flex flex-wrap items-center gap-2 text-sm text-brand-text"
                      >
                        <span className="font-semibold">{m.station}</span>
                        {m.lines.map((l) => (
                          <span
                            key={l}
                            className="rounded-full bg-brand-light px-2 py-0.5 text-xs font-semibold text-brand-primary"
                          >
                            {l}
                          </span>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-brand-accent mb-2">
                    <Bus className="h-5 w-5" aria-hidden="true" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-brand-primary">
                      Autobuses
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {BUS_LINES.map((b) => (
                      <span
                        key={b}
                        className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-primary"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-2 rounded-md bg-brand-light/50 p-4">
                  <Accessibility
                    className="h-5 w-5 shrink-0 mt-0.5 text-brand-accent"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-brand-text">
                    Centro completamente adaptado para personas con
                    discapacidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
