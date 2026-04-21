import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES_SUMMARY } from "@/lib/constants";

export default function ServicesGrid() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Servicios</span>
          <h2 className="section-title mt-2">Nuestros servicios</h2>
          <p className="mt-3 text-brand-muted">
            Un enfoque integral para cada parte de tu salud.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_SUMMARY.map((service) => (
            <article
              key={service.id}
              className="group overflow-hidden rounded-lg bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-cardHover"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} en Fisio Canal — clínica en Chamberí, Madrid`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-brand-primary">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-accentDark transition-colors"
                >
                  Ver tratamientos
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
