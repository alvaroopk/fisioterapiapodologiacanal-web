import { SITE } from "@/lib/constants";

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE.name,
  image: `${SITE.url}/assets/fachada_exterior.jpg`,
  "@id": SITE.url,
  url: SITE.url,
  telephone: SITE.phones[0].tel,
  email: SITE.email,
  priceRange: "€€",
  description:
    "Centro de Fisioterapia, Osteopatía, Podología y Pilates terapéutico en Chamberí, Madrid. Todos nuestros fisioterapeutas son también osteópatas con Certificado universitario de 5 años.",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    postalCode: SITE.address.postalCode,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  medicalSpecialty: [
    "Physiotherapy",
    "Osteopathy",
    "Podiatry",
    "PhysicalTherapy",
  ],
  hasMap: `https://www.google.com/maps?q=${encodeURIComponent(SITE.address.full)}`,
  sameAs: [SITE.social.facebook],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
