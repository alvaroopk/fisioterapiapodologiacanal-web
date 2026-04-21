import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TEAM } from "@/lib/constants";

export default function TeamTeaser() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Equipo</span>
          <h2 className="section-title mt-2">Conoce a tu equipo</h2>
          <p className="mt-3 text-brand-muted">
            Dos profesionales, una filosofía: tratarte como un todo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
          {TEAM.map((person) => (
            <article
              key={person.slug}
              className="flex flex-col sm:flex-row items-center gap-5 rounded-lg bg-brand-bg p-6 sm:p-7"
            >
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-card">
                <Image
                  src={person.image}
                  alt={`${person.name} — ${person.role} en Fisio Canal Chamberí, Madrid`}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-brand-primary">
                  {person.name}
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-brand-accent">
                  {person.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  {person.teaser}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/equipo" className="btn-ghost">
            Conoce nuestra historia completa
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
