import type { Metadata } from "next";
import HomeHero from "@/components/sections/HomeHero";
import ValueProps from "@/components/sections/ValueProps";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Testimonials from "@/components/sections/Testimonials";
import TeamTeaser from "@/components/sections/TeamTeaser";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title:
    "Fisioterapia y Podología en Chamberí, Madrid | Fisio Canal",
  description:
    "Clínica de fisioterapia en Chamberí, Madrid. Fisioterapeutas-osteópatas titulados, podología especializada y pilates terapéutico. Más de 15 años. Pide cita.",
  alternates: {
    canonical: "https://fispocanal.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ValueProps />
      <ServicesGrid />
      <Testimonials />
      <TeamTeaser />
      <CTASection />
    </>
  );
}
