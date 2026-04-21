import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  text?: string;
}

export default function CTASection({
  title = "¿Tienes dolor o una lesión que no mejora?",
  text = "No esperes más. Reserva tu primera sesión hoy mismo y empieza a sentirte mejor. Atendemos en Chamberí, Madrid — con horarios flexibles y acceso en transporte público desde toda la ciudad.",
}: CTASectionProps) {
  return (
    <section className="bg-cta-gradient text-white py-16 sm:py-20">
      <div className="container-custom text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          {title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/85">{text}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/contacto#formulario"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-primary shadow-md transition-all duration-200 hover:bg-brand-light hover:shadow-lg"
          >
            Pedir cita ahora
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={SITE.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-light transition-colors"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            O escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
