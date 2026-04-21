import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/fachada_exterior.jpg"
          alt="Fachada exterior de Fisio Canal, clínica de fisioterapia y podología en Chamberí, Madrid"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(7,52,78,0.78) 0%, rgba(7,52,78,0.65) 60%, rgba(13,148,136,0.55) 100%)",
          }}
        />
      </div>

      <div className="container-custom relative py-20 sm:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Centro autorizado · Comunidad de Madrid
          </span>
          <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Fisioterapia en Madrid que trata{" "}
            <span className="text-brand-light">a la persona</span>, no solo la lesión
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/90 max-w-2xl">
            Centro de Fisioterapia, Osteopatía, Podología y Pilates en Chamberí, Madrid.
            Todos nuestros fisioterapeutas son también osteópatas titulados —{" "}
            <span className="font-semibold text-white">
              porque tu cuerpo merece un enfoque integral.
            </span>
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/contacto#formulario" className="btn-primary">
              Pedir cita ahora
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/servicios" className="btn-secondary">
              Ver nuestros servicios
            </Link>
          </div>
          <p className="mt-6 text-xs sm:text-sm text-white/80">
            🏥 Centro autorizado Comunidad de Madrid · CS1 1037 · Más de 15 años
            de experiencia
          </p>
        </div>
      </div>
    </section>
  );
}
