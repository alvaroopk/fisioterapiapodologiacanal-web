export const SITE = {
  name: "Fisioterapia y Podología Canal",
  shortName: "Fisio Canal",
  tagline:
    "Tu recuperación, en manos de especialistas que tratan la persona, no solo la lesión",
  description:
    "Centro de Fisioterapia, Osteopatía, Podología y Pilates en Chamberí, Madrid. Todos nuestros fisioterapeutas son también osteópatas.",
  url: "https://fispocanal.com",
  address: {
    street: "Avenida de Pablo Iglesias, 4",
    additional:
      "Entrada por la intersección de las calles Esquilache y Ramiro II",
    city: "Madrid",
    postalCode: "28003",
    region: "Comunidad de Madrid",
    country: "ES",
    full: "Av. de Pablo Iglesias, 4, 28003 Madrid",
  },
  phones: [
    { label: "Fijo", value: "91 282 62 66", tel: "+34912826266" },
    { label: "Móvil / WhatsApp", value: "601 17 89 69", tel: "+34601178969" },
  ],
  whatsapp: {
    number: "601 17 89 69",
    link: "https://wa.me/34601178969",
  },
  email: "fispocanal@gmail.com",
  license: "CS1 1037",
  social: {
    facebook: "https://www.facebook.com/pages/Fisioterapia-Podologia-Canal/247847028738145",
  },
  geo: {
    latitude: 40.4443,
    longitude: -3.7025,
  },
} as const;

export const NAV_LINKS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/equipo", label: "Equipo" },
  { href: "/tarifas", label: "Tarifas" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const SERVICES_SUMMARY = [
  {
    id: "fisioterapia",
    title: "Fisioterapia",
    image: "/assets/sala_fisioterapia_3.jpg",
    description:
      "Terapia manual especializada para recuperar tu movilidad y eliminar el dolor. Trabajamos con técnicas de masoterapia, movilizaciones, punción seca, electroterapia y kinesio taping adaptadas a tu lesión.",
    href: "/servicios#fisioterapia",
  },
  {
    id: "osteopatia",
    title: "Osteopatía",
    image: "/assets/sala_fisioterapia_1.jpg",
    description:
      "Tratamiento global que restablece el equilibrio de tu cuerpo. Abordamos tu problema desde sus causas reales — estructural, craneal y visceral — no solo los síntomas.",
    href: "/servicios#osteopatia",
  },
  {
    id: "podologia",
    title: "Podología",
    image: "/assets/sala_podologia.jpg",
    description:
      "Cuidado profesional de tus pies: desde quiropodia y tratamiento de hongos y callos hasta pie diabético y plantillas ortopédicas a medida. Tu comodidad empieza desde el suelo.",
    href: "/servicios#podologia",
  },
  {
    id: "pilates",
    title: "Pilates terapéutico",
    image: "/assets/sala_pilates.jpg",
    description:
      "Clases de Pilates impartidas por fisioterapeutas. No es fitness genérico: es un programa supervisado médicamente para mejorar tu postura, fortalecer tu core y rehabilitar lesiones de espalda.",
    href: "/servicios#pilates",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "María G.",
    treatment: "Fisioterapia · Lumbalgia",
    text: "Llevaba meses con dolor de espalda que no mejoraba en ningún sitio. En Fisio Canal me hicieron una exploración completa el primer día y desde la tercera sesión ya notaba la diferencia. El trato es increíble, muy profesional y cercano a la vez.",
    rating: 5,
  },
  {
    name: "Carlos M.",
    treatment: "Osteopatía",
    text: "Vine por unas cefaleas crónicas y no esperaba que la osteopatía craneal pudiera ayudarme tanto. Jorge me explicó paso a paso lo que hacía y por qué. Llevo 3 meses sin jaquecas. Totalmente recomendado.",
    rating: 5,
  },
  {
    name: "Ana R.",
    treatment: "Podología",
    text: "Beatriz es una profesional excelente. Me trató una uña encarnada que llevaba meses dándome problemas y el resultado fue perfecto desde la primera sesión. El centro está impecable y muy bien equipado.",
    rating: 5,
  },
  {
    name: "Roberto P.",
    treatment: "Pilates terapéutico",
    text: "Empecé el pilates por recomendación de Jorge tras unas sesiones de fisio. Nunca había hecho pilates y me sorprendió lo exigente y completo que es cuando lo imparte un fisioterapeuta. Mis lumbares han mejorado muchísimo.",
    rating: 5,
  },
] as const;

export const TEAM = [
  {
    slug: "jorge",
    name: "Jorge Espinar Álvaro",
    role: "Fisioterapeuta · Osteópata",
    image: "/assets/jorge_fisioterapeuta.jpg",
    teaser:
      "Diplomado en Fisioterapia por la Universidad Pontificia de Salamanca y Certificado de Osteopatía por la EOM. Especializado en terapia manual, punción seca y pilates terapéutico.",
    intro:
      "Jorge es el fundador y alma de Fisio Canal. Con más de 15 años de experiencia clínica, ha desarrollado un estilo de trabajo que combina rigor científico con una sensibilidad especial para entender al paciente más allá de la lesión.",
    education: [
      "Diplomado en Fisioterapia — Universidad Pontificia de Salamanca",
      "Certificado de Osteopatía — Escuela de Osteopatía de Madrid (EOM) / Universidad Garbi de Gerona (5 años)",
      "Postgrado en Pilates Suelo",
      "Postgrado en Punción Seca",
      "Postgrado en Drenaje Linfático Manual (Técnica de Leduc)",
      "Postgrado en Kinesiología Aplicada",
    ],
    specialties: [
      "Osteopatía integral",
      "Terapia manual",
      "Pilates terapéutico",
      "Punción seca",
    ],
    quote:
      "Cada paciente es un caso único. Mi trabajo es escuchar lo que el cuerpo dice, no solo tratar el síntoma.",
  },
  {
    slug: "beatriz",
    name: "Beatriz Álvarez Arias",
    role: "Fisioterapeuta · Osteópata · Podóloga",
    image: "/assets/beatriz_fisioterapeuta.jpg",
    teaser:
      "Doble titulación en Fisioterapia y Podología (UCM). Certificada en Osteopatía por la EOM. Experta en patología del pie, pie diabético y drenaje linfático.",
    intro:
      "Beatriz aporta al equipo una perspectiva única: es a la vez fisioterapeuta, osteópata y podóloga diplomada. Esta combinación le permite ver al paciente desde los pies hasta la cabeza — literalmente — y detectar conexiones entre patologías que otros especialistas podrían no relacionar.",
    education: [
      "Diplomada en Fisioterapia — Universidad Pontificia de Salamanca",
      "Certificado de Osteopatía — EOM / Universidad Garbi de Gerona (5 años)",
      "Diplomada en Podología — Universidad Complutense de Madrid",
      "Experta Universitaria en Patología y Ortopedia del Miembro Inferior — UCM",
      "Postgrado en Punción Seca",
      "Postgrado en Drenaje Linfático Manual (Técnica de Leduc)",
      "Postgrado en Kinesiología Aplicada",
    ],
    specialties: [
      "Podología clínica",
      "Pie diabético",
      "Plantillas a medida",
      "Drenaje linfático",
      "Osteopatía visceral",
    ],
    quote:
      "Muchas veces el dolor de espalda empieza en el pie. Mi formación me permite ver esas conexiones que marcan la diferencia en el tratamiento.",
  },
] as const;

export const GALLERY_IMAGES = [
  { src: "/assets/fachada_exterior.jpg", alt: "Fachada exterior de la clínica de fisioterapia Fisio Canal en Chamberí, Madrid" },
  { src: "/assets/recepcion_1.jpg", alt: "Recepción moderna de Fisio Canal — clínica de fisioterapia y podología en Chamberí" },
  { src: "/assets/recepcion_2.jpg", alt: "Sala de espera luminosa de Fisio Canal, clínica fisioterapia Chamberí Madrid" },
  { src: "/assets/sala_fisioterapia_3.jpg", alt: "Sala de fisioterapia con camilla profesional en Fisio Canal, Chamberí Madrid" },
  { src: "/assets/sala_fisioterapia_1.jpg", alt: "Sala de tratamiento de osteopatía y fisioterapia en Fisio Canal Chamberí" },
  { src: "/assets/sala_podologia.jpg", alt: "Gabinete de podología profesional con sillón clínico en Fisio Canal, Madrid" },
  { src: "/assets/sala_pilates.jpg", alt: "Sala de pilates terapéutico con colchonetas en Fisio Canal Chamberí, Madrid" },
] as const;

export const METRO_LINES = [
  { station: "Canal", lines: ["L2"] },
  { station: "Cuatro Caminos", lines: ["L2", "L6", "L7"] },
  { station: "Ríos Rosas", lines: ["L1"] },
];

export const BUS_LINES = ["3", "12", "37", "45", "149", "F", "C2"];

export const FISIO_TREATMENTS = [
  {
    title: "Terapia Manual",
    text: "La columna vertebral de nuestra práctica. Combinamos masoterapia (masaje terapéutico profundo), movilizaciones articulares y estiramientos asistidos para recuperar el rango de movimiento, reducir el dolor y restaurar la función muscular. Cada sesión dura aproximadamente 1 hora y es exclusivamente de terapia manual — sin atajos.",
  },
  {
    title: "Electroterapia",
    text: "Cuando la situación lo requiere, complementamos el tratamiento manual con equipos Phyaction de última generación: corrientes diadinámicas para el dolor, TENS para relajación muscular, EMS para fortalecimiento, corrientes interferenciales, iontoforesis, ultrasonidos e infrarrojos. Tecnología al servicio de tu recuperación.",
  },
  {
    title: "Drenaje Linfático Manual",
    text: "Masaje suave y preciso que estimula el sistema linfático para eliminar líquidos retenidos y reducir edemas. Especialmente indicado para: edemas circulatorios, piernas cansadas, edemas durante el embarazo, recuperación postcirugía, linfedema tras extirpación de ganglios (cáncer de mama). Aplicamos la reconocida Técnica de Leduc.",
  },
  {
    title: "Punción Seca (Dry Needling)",
    text: "Técnica fisioterapéutica (no acupuntura) que consiste en introducir una aguja fina directamente en los puntos gatillo miofasciales — los nódulos de tensión muscular que generan dolor irradiado. Altamente efectiva en: cervicalgias, dorsalgias, lumbalgias, tendinopatías, artrosis y capsulitis. Produce alivio significativo incluso en dolores crónicos resistentes.",
  },
  {
    title: "Kinesio Taping",
    text: "Vendaje elástico funcional desarrollado por el Dr. Kenzo Kase que se aplica sobre la piel para proporcionar soporte muscular y articular sin limitar el movimiento. Reduce la inflamación, mejora la circulación y alivia el dolor. Útil en lesiones musculares, articulares, ligamentosas y para reducción de edema o linfedema.",
  },
] as const;

export const OSTEO_TREATMENTS = [
  {
    title: "Osteopatía Estructural",
    text: "Trabaja sobre el aparato músculo-esquelético: columna vertebral, articulaciones, músculos y fascias. Mediante manipulaciones y técnicas suaves, restaura la movilidad articular, corrige desequilibrios posturales y alivia dolores de espalda, cuello, hombros, caderas y extremidades. Es la modalidad de osteopatía más conocida y la base del tratamiento integral.",
  },
  {
    title: "Osteopatía Craneal (Craneosacral)",
    text: "Técnica sutil que trabaja sobre las estructuras del cráneo y la médula espinal, liberando tensiones en el sistema nervioso central. Especialmente efectiva en: cefaleas y migrañas, estrés crónico, vértigos, trastornos del sueño, bruxismo y problemas de concentración. Sesiones muy relajantes con resultados sorprendentes en patologías resistentes a otros tratamientos.",
  },
  {
    title: "Osteopatía Visceral",
    text: "Trabaja sobre las vísceras y sus fascias — las membranas que envuelven y conectan los órganos internos. Las tensiones viscerales pueden causar dolores musculoesqueléticos aparentemente desconectados. Indicada en: digestión lenta o pesada, reflujo, cicatrices de cirugías abdominales, dolores pélvicos, problemas menstruales. Un enfoque que muchos especialistas convencionales no contemplan.",
  },
] as const;

export const PODO_PATHOLOGIES = [
  { name: "Hiperqueratosis (durezas)", desc: "Eliminación de acumulaciones de piel endurecida en zonas de presión." },
  { name: "Helomas (callos)", desc: "Tratamiento y eliminación de callos dolorosos, incluidos callos interdigitales." },
  { name: "Onicomicosis (hongos en uñas)", desc: "Tratamiento antifúngico clínico para recuperar uñas sanas." },
  { name: "Uñas encarnadas", desc: "Solución definitiva sin necesidad de cirugía en la mayoría de casos." },
  { name: "Papilomas y verrugas plantares", desc: "Tratamiento eficaz de verrugas en la planta del pie." },
  { name: "Pie diabético", desc: "Cuidado especializado y preventivo para pacientes con diabetes." },
] as const;

export const PODO_TREATMENTS = [
  {
    title: "Quiropodia (Cuidado general del pie)",
    text: "Tratamiento profesional de uñas (engrosadas, deformadas, encarnadas), callos y durezas. No es un simple corte de uñas: es un procedimiento clínico con instrumental esterilizado que resuelve problemas que el cuidado doméstico no puede abordar. Precio: 29 €.",
  },
  {
    title: "Plantillas ortopédicas a medida",
    text: "Las plantillas genéricas de farmacia solo aportan amortiguación. Las nuestras se fabrican a medida tras un estudio biomecánico de tu pisada, corrigiendo desequilibrios que generan dolor en pies, rodillas, cadera y espalda. Indicadas para: fascitis plantar, metatarsalgias, hallux valgus, pie plano/cavo, espolón calcáneo y deportistas.",
  },
  {
    title: "Cuidado del pie diabético",
    text: "Los pacientes con diabetes necesitan cuidado podológico especializado y preventivo. Las alteraciones circulatorias y nerviosas de la diabetes hacen que cualquier herida o rozadura en el pie sea potencialmente grave. En Fisio Canal ofrecemos revisiones periódicas, cuidado preventivo y tratamiento de lesiones en el pie diabético con los máximos estándares clínicos.",
  },
] as const;

export const PILATES_ASPECTS = [
  {
    title: "Pilates para la espalda",
    text: "Nuestro programa trabaja especialmente el 'centro de fuerza': transverso del abdomen, suelo pélvico, multífidos y glúteos. Una musculatura profunda fuerte es la mejor protección contra el dolor de espalda y las recaídas. Muy recomendado para personas con lumbalgias crónicas, hernias discales y problemas posturales.",
  },
  {
    title: "Rehabilitación y prevención",
    text: "Muchos de nuestros pacientes de fisioterapia continúan con clases de Pilates como fase de mantenimiento y prevención. Es el paso natural después del tratamiento: de recuperar la función a fortalecer el cuerpo para que no vuelva a lesionarse.",
  },
  {
    title: "Pequeños grupos, atención personalizada",
    text: "Las clases se realizan en grupos reducidos para garantizar que el fisioterapeuta pueda corregir la ejecución de cada alumno. En Pilates, la técnica correcta lo es todo — una mala ejecución puede agravar en lugar de mejorar. Aquí eso no pasa.",
  },
] as const;

export const PRICES_FISIO = [
  { service: "Sesión individual (~1 hora)", price: "44 €" },
  { service: "Bono 5 sesiones", price: "200 € (40 €/sesión)" },
  { service: "Bono 10 sesiones", price: "380 € (38 €/sesión)" },
  { service: "Drenaje Linfático Manual (sesión)", price: "44 €" },
  { service: "Bono 5 sesiones DLM", price: "200 € (40 €/sesión)" },
];

export const PRICES_PODO = [
  { service: "Quiropodia (uñas, callos y durezas)", price: "29 €" },
  { service: "Demás tratamientos podológicos", price: "Consultar" },
  { service: "Plantillas ortopédicas a medida", price: "Consultar" },
];

export const PRICES_PILATES = [
  { service: "1 clase/semana", price: "42 €/mes" },
  { service: "2 clases/semana", price: "80 €/mes" },
];

// URL de la web original del cliente (usada en el banner de demo)
export const ORIGINAL_URL = "http://www.fisioterapiapodologiacanal.es/";

// Cambiar a true para habilitar la indexación en Google
export const SITE_INDEXED = false;
