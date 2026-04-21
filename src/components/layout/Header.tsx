"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top info bar */}
      <div className="hidden md:block bg-brand-primary text-white text-xs">
        <div className="container-custom flex items-center justify-between py-2">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Chamberí, Madrid
            </span>
            <a
              href={`tel:${SITE.phones[0].tel}`}
              className="inline-flex items-center gap-1.5 hover:text-brand-light transition-colors"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {SITE.phones[0].value}
            </a>
            <span className="hidden lg:inline text-brand-light/80">
              WhatsApp disponible · {SITE.whatsapp.number}
            </span>
          </div>
          <span className="text-brand-light/80">
            Centro autorizado Comunidad de Madrid · {SITE.license}
          </span>
        </div>
      </div>

      <div
        className={`bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="container-custom flex items-center justify-between py-3">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={`Ir al inicio de ${SITE.name}`}
          >
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-md">
              <Image
                src="/assets/logo_encabezado.jpg"
                alt={`Logo ${SITE.name}`}
                fill
                sizes="56px"
                className="object-cover"
                priority
              />
            </div>
            <div className="leading-tight">
              <span className="block text-sm sm:text-base font-bold text-brand-primary">
                Fisio Canal
              </span>
              <span className="block text-[11px] sm:text-xs text-brand-muted">
                Fisioterapia · Osteopatía · Podología
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-text hover:text-brand-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contacto#formulario"
              className="btn-primary hidden sm:inline-flex px-5 py-2.5"
            >
              Pedir cita
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-brand-primary hover:bg-brand-light transition-colors"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-brand-bg bg-white">
            <nav className="container-custom flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-brand-text hover:text-brand-accent border-b border-brand-bg last:border-b-0"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto#formulario"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4"
              >
                Pedir cita
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
