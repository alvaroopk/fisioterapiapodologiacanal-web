import { Brain, UserCheck, BadgeCheck } from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "Fisioterapia + Osteopatía integradas",
    text: "Todos nuestros fisioterapeutas tienen Certificado de Osteopatía universitario. Cada sesión incluye automáticamente el enfoque holístico — sin coste extra.",
  },
  {
    icon: UserCheck,
    title: "Trato 100% personalizado",
    text: "Somos un equipo pequeño y especializado. Siempre sabrás quién te trata, y cada sesión se adapta exactamente a tu situación y evolución.",
  },
  {
    icon: BadgeCheck,
    title: "Especialistas altamente cualificados",
    text: "Diplomados en Fisioterapia, Osteópatas certificados y Podóloga titulada por la UCM. Formación continua en técnicas de vanguardia.",
  },
];

export default function ValueProps() {
  return (
    <section className="section bg-brand-bg">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Por qué Fisio Canal</span>
          <h2 className="section-title mt-2">¿Por qué elegirnos?</h2>
          <p className="mt-3 text-brand-muted">
            Tres diferenciales que notarás desde tu primera sesión.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-lg bg-white p-8 shadow-card transition-shadow duration-200 hover:shadow-cardHover"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand-accent">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
