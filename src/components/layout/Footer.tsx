import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/equipo", label: "Equipo" },
  { href: "/tarifas", label: "Tarifas" },
  { href: "/contacto", label: "Contacto" },
];

const serviceLinks = [
  { href: "/servicios#fisioterapia", label: "Fisioterapia" },
  { href: "/servicios#osteopatia", label: "Osteopatía" },
  { href: "/servicios#podologia", label: "Podología" },
  { href: "/servicios#pilates", label: "Pilates terapéutico" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="container-custom py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1 - Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-md bg-white/90">
              <Image
                src="/assets/logo_encabezado.jpg"
                alt={`Logo ${SITE.name}`}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-base font-bold text-white">Fisio Canal</p>
              <p className="text-xs text-white/70">Fisioterapia y Podología</p>
            </div>
          </div>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{SITE.address.full}</span>
            </li>
            {SITE.phones.map((p) => (
              <li key={p.tel} className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={`tel:${p.tel}`}
                  className="hover:text-white transition-colors"
                >
                  {p.value}
                </a>
              </li>
            ))}
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-white transition-colors"
              >
                {SITE.email}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-white/60">
            N.º registro: {SITE.license} — Comunidad de Madrid
          </p>
        </div>

        {/* Col 2 - Nav */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
            Navegación
          </h3>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 - Services */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
            Servicios
          </h3>
          <ul className="space-y-2.5 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 - Social */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
            Síguenos
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href={SITE.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#1fb858] transition-colors"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.87 11.87 0 0 0 5.72 1.46h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.44zM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.22-3.75.98 1-3.66-.24-.38a9.85 9.85 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 6.99 2.9 9.83 9.83 0 0 1 2.9 6.99c0 5.46-4.44 9.91-9.88 9.91zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.7.64.71.23 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
              </svg>
              WhatsApp {SITE.whatsapp.number}
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              aria-label="Síguenos en Facebook"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.5 21.95V13.5h2.82l.43-3.3H13.5V8.1c0-.95.26-1.6 1.63-1.6h1.74V3.55A23.5 23.5 0 0 0 14.33 3.4c-2.53 0-4.26 1.54-4.26 4.38v2.42H7.25v3.3h2.82v8.45h3.43z" />
              </svg>
              Facebook
            </a>
            <Link
              href="/contacto#formulario"
              className="inline-flex items-center gap-2 mt-2 rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Pedir cita
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {SITE.name} · Todos los derechos
            reservados
          </p>
          <div className="flex gap-5">
            <Link href="/aviso-legal" className="hover:text-white transition-colors">
              Aviso legal
            </Link>
            <Link
              href="/politica-privacidad"
              className="hover:text-white transition-colors"
            >
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
