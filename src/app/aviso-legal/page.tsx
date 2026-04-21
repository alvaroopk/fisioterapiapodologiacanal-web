import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Aviso legal y condiciones de uso del sitio web de Fisioterapia y Podología Canal.",
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <section className="section bg-white">
      <div className="container-custom max-w-3xl">
        <span className="eyebrow">Información legal</span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-primary">
          Aviso legal
        </h1>
        <div className="mt-8 space-y-5 text-brand-text leading-relaxed text-sm">
          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de
            la Sociedad de la Información y de Comercio Electrónico (LSSICE),
            ponemos a disposición de los usuarios la siguiente información:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Titular:</strong> {SITE.name}
            </li>
            <li>
              <strong>Dirección:</strong> {SITE.address.full}
            </li>
            <li>
              <strong>Teléfono:</strong> {SITE.phones[0].value}
            </li>
            <li>
              <strong>Email:</strong> {SITE.email}
            </li>
            <li>
              <strong>Nº de registro sanitario:</strong> {SITE.license} — Comunidad de Madrid
            </li>
          </ul>
          <p>
            El acceso y uso de este sitio web atribuye la condición de usuario,
            que acepta, desde dicho acceso y uso, las presentes condiciones.
          </p>
          <h2 className="text-xl font-bold text-brand-primary mt-8">
            Propiedad intelectual
          </h2>
          <p>
            Todos los contenidos del sitio web, incluyendo textos, imágenes,
            logotipos y diseño, son propiedad del titular o de sus legítimos
            autores y están protegidos por la normativa de propiedad
            intelectual vigente.
          </p>
        </div>
      </div>
    </section>
  );
}
