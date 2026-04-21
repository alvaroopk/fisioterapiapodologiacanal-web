import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="section bg-brand-bg">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Testimonios</span>
          <h2 className="section-title mt-2">Lo que dicen nuestros pacientes</h2>
          <p className="mt-3 text-brand-muted">
            Más de 15 años acompañando la recuperación de personas en Chamberí.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="relative rounded-lg bg-white p-7 shadow-card"
            >
              <Quote
                className="absolute top-6 right-6 h-8 w-8 text-brand-light"
                aria-hidden="true"
              />
              <div
                className="flex gap-0.5 text-brand-accent"
                aria-label={`${t.rating} de 5 estrellas`}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-text">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 border-t border-brand-bg pt-4">
                <p className="text-sm font-bold text-brand-primary">{t.name}</p>
                <p className="text-xs text-brand-muted">{t.treatment}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
