import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Información sobre el tratamiento de datos personales en Fisioterapia y Podología Canal.",
  robots: { index: false, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <section className="section bg-white">
      <div className="container-custom max-w-3xl">
        <span className="eyebrow">Información legal</span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-primary">
          Política de privacidad
        </h1>
        <div className="mt-8 space-y-5 text-brand-text leading-relaxed text-sm">
          <p>
            En {SITE.name} nos comprometemos a proteger la privacidad de las
            personas que visitan nuestra web y contactan con nuestro centro, en
            cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la Ley
            Orgánica 3/2018 de Protección de Datos Personales y Garantía de los
            Derechos Digitales.
          </p>
          <h2 className="text-xl font-bold text-brand-primary mt-8">
            Responsable del tratamiento
          </h2>
          <p>
            {SITE.name} — {SITE.address.full} — {SITE.email}
          </p>
          <h2 className="text-xl font-bold text-brand-primary mt-8">
            Finalidades
          </h2>
          <p>
            Los datos personales facilitados a través del formulario de contacto
            se utilizan exclusivamente para responder a la solicitud planteada
            y, en su caso, gestionar una cita en el centro.
          </p>
          <h2 className="text-xl font-bold text-brand-primary mt-8">
            Derechos
          </h2>
          <p>
            El usuario puede ejercer sus derechos de acceso, rectificación,
            supresión, oposición, limitación y portabilidad enviando un correo
            a {SITE.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
