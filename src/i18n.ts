/**
 * All site text in English and Spanish.
 * Todo el texto del sitio en inglés y español.
 */
import type { GalleryKey } from './config';

export type Lang = 'en' | 'es';

export const PATHS: Record<Lang, string> = { en: '/', es: '/es/' };

const en = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  seo: {
    title: 'Rizzo Ditalia Painting | Licensed Painters in Miami, FL',
    description:
      'Licensed & insured painting contractor in Miami, FL. Interior, exterior, commercial and residential painting. Call (786) 797-4177 for a free quote.',
  },
  nav: {
    services: 'Services',
    why: 'Why Us',
    gallery: 'Our Work',
    contact: 'Contact',
    switchLabel: 'Ver en español',
    switchShort: 'ES',
    menu: 'Menu',
  },
  hero: {
    eyebrow: 'Licensed & Insured · Miami, Florida',
    title: 'Quality Painting That Makes Miami Shine',
    subtitle:
      'Interior, exterior, commercial and residential painting done right — clean work, on time and backed by a licensed Miami company.',
    callLabel: 'Call us now',
    cta: 'Get a Free Quote',
    license: 'License #',
  },
  services: {
    eyebrow: 'What we do',
    title: 'Painting Services',
    items: [
      {
        icon: 'interior',
        title: 'Interior',
        text: 'Walls, ceilings, trim, doors and cabinets. Careful prep, clean lines and low-odor paints for your home or office.',
      },
      {
        icon: 'exterior',
        title: 'Exterior',
        text: 'Stucco, siding, fences and trim with premium coatings made to resist Miami sun, humidity and hurricane-season rain.',
      },
      {
        icon: 'commercial',
        title: 'Commercial',
        text: 'Offices, retail, restaurants and buildings. Flexible schedules — nights and weekends — so your business keeps running.',
      },
      {
        icon: 'residential',
        title: 'Residential',
        text: 'Houses, condos and townhomes. We protect your furniture and floors and leave every room spotless.',
      },
    ],
  },
  why: {
    eyebrow: 'Why choose us',
    title: 'Painters You Can Trust',
    items: [
      { icon: 'license', title: 'Licensed', text: 'Fully licensed painting contractor. License #17BS00076.' },
      { icon: 'shield', title: 'Insured', text: 'Your property is protected on every job, big or small.' },
      { icon: 'pin', title: 'Miami Local', text: 'We live and work in Miami and know what South Florida weather does to paint.' },
      { icon: 'quote', title: 'Free Quote', text: 'Clear, written estimates with no hidden costs and no obligation.' },
    ],
  },
  gallery: {
    eyebrow: 'Our work',
    title: 'Recent Projects',
    note: 'Sample images — real project photos coming soon.',
    items: {
      livingRoom: 'Interior · Living room',
      exteriorHouse: 'Exterior · Family home',
      office: 'Commercial · Office',
      kitchen: 'Residential · Kitchen',
      storefront: 'Commercial · Storefront',
      condo: 'Exterior · Condo building',
    } satisfies Record<GalleryKey, string>,
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Get Your Free Quote',
    text: 'Tell us about your project and we will get back to you quickly. Prefer to talk? Call or WhatsApp us.',
    name: 'Full name',
    phone: 'Phone',
    email: 'Email',
    service: 'Service',
    servicePlaceholder: 'Select a service',
    serviceOther: 'Other',
    message: 'Project details',
    messagePlaceholder: 'E.g. 3-bedroom house interior, about 1,500 sq ft, Kendall…',
    submit: 'Send Request',
    sending: 'Sending…',
    success: 'Thank you! We received your request and will contact you soon.',
    error: 'Something went wrong. Please call us at (786) 797-4177.',
    notConfigured: 'The form is not configured yet. Please call us at (786) 797-4177.',
    subject: 'New quote request — website (English)',
    callUs: 'Call us',
    emailUs: 'Email us',
    whatsapp: 'WhatsApp',
    area: 'Serving Miami-Dade, Florida',
  },
  footer: {
    tagline: 'Interior · Exterior · Commercial · Residential',
    license: 'Florida License #',
    rights: 'All rights reserved.',
  },
  whatsappMessage: 'Hi! I would like a free painting quote.',
  whatsappLabel: 'Chat on WhatsApp',
  notFound: {
    title: 'Page not found',
    text: 'This wall hasn’t been painted yet. The page you are looking for does not exist.',
    back: 'Back to home',
  },
};

export type Dict = typeof en;

const es: Dict = {
  htmlLang: 'es',
  ogLocale: 'es_US',
  seo: {
    title: 'Rizzo Ditalia Painting | Pintores con Licencia en Miami, FL',
    description:
      'Empresa de pintura con licencia y seguro en Miami, FL. Pintura interior, exterior, comercial y residencial. Llame al (786) 797-4177 para una cotización gratis.',
  },
  nav: {
    services: 'Servicios',
    why: 'Por qué nosotros',
    gallery: 'Trabajos',
    contact: 'Contacto',
    switchLabel: 'View in English',
    switchShort: 'EN',
    menu: 'Menú',
  },
  hero: {
    eyebrow: 'Con licencia y seguro · Miami, Florida',
    title: 'Pintura de Calidad que Hace Brillar a Miami',
    subtitle:
      'Pintura interior, exterior, comercial y residencial bien hecha: trabajo limpio, a tiempo y respaldado por una empresa con licencia en Miami.',
    callLabel: 'Llámenos ahora',
    cta: 'Cotización Gratis',
    license: 'Licencia #',
  },
  services: {
    eyebrow: 'Lo que hacemos',
    title: 'Servicios de Pintura',
    items: [
      {
        icon: 'interior',
        title: 'Interior',
        text: 'Paredes, techos, molduras, puertas y gabinetes. Preparación cuidadosa, líneas limpias y pinturas de bajo olor.',
      },
      {
        icon: 'exterior',
        title: 'Exterior',
        text: 'Stucco, fachadas, cercas y molduras con recubrimientos que resisten el sol, la humedad y las lluvias de Miami.',
      },
      {
        icon: 'commercial',
        title: 'Comercial',
        text: 'Oficinas, tiendas, restaurantes y edificios. Horarios flexibles — noches y fines de semana — para no detener su negocio.',
      },
      {
        icon: 'residential',
        title: 'Residencial',
        text: 'Casas, condominios y townhouses. Protegemos sus muebles y pisos y dejamos cada cuarto impecable.',
      },
    ],
  },
  why: {
    eyebrow: 'Por qué elegirnos',
    title: 'Pintores de Confianza',
    items: [
      { icon: 'license', title: 'Licenciados', text: 'Contratista de pintura con licencia. Licencia #17BS00076.' },
      { icon: 'shield', title: 'Asegurados', text: 'Su propiedad está protegida en cada trabajo, grande o pequeño.' },
      { icon: 'pin', title: 'Locales de Miami', text: 'Vivimos y trabajamos en Miami y conocemos el efecto del clima del sur de Florida en la pintura.' },
      { icon: 'quote', title: 'Cotización Gratis', text: 'Presupuestos claros y por escrito, sin costos ocultos ni compromiso.' },
    ],
  },
  gallery: {
    eyebrow: 'Nuestro trabajo',
    title: 'Proyectos Recientes',
    note: 'Imágenes de ejemplo — pronto fotos reales de nuestros proyectos.',
    items: {
      livingRoom: 'Interior · Sala',
      exteriorHouse: 'Exterior · Casa familiar',
      office: 'Comercial · Oficina',
      kitchen: 'Residencial · Cocina',
      storefront: 'Comercial · Local',
      condo: 'Exterior · Edificio de condominios',
    },
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Pida su Cotización Gratis',
    text: 'Cuéntenos sobre su proyecto y le responderemos pronto. ¿Prefiere hablar? Llámenos o escríbanos por WhatsApp.',
    name: 'Nombre completo',
    phone: 'Teléfono',
    email: 'Correo electrónico',
    service: 'Servicio',
    servicePlaceholder: 'Seleccione un servicio',
    serviceOther: 'Otro',
    message: 'Detalles del proyecto',
    messagePlaceholder: 'Ej.: interior de casa de 3 cuartos, unos 1,500 pies², Kendall…',
    submit: 'Enviar Solicitud',
    sending: 'Enviando…',
    success: '¡Gracias! Recibimos su solicitud y le contactaremos pronto.',
    error: 'Algo salió mal. Por favor llámenos al (786) 797-4177.',
    notConfigured: 'El formulario aún no está configurado. Por favor llámenos al (786) 797-4177.',
    subject: 'Nueva solicitud de cotización — sitio web (Español)',
    callUs: 'Llámenos',
    emailUs: 'Escríbanos',
    whatsapp: 'WhatsApp',
    area: 'Servimos a Miami-Dade, Florida',
  },
  footer: {
    tagline: 'Interior · Exterior · Comercial · Residencial',
    license: 'Licencia de Florida #',
    rights: 'Todos los derechos reservados.',
  },
  whatsappMessage: '¡Hola! Quisiera una cotización gratis de pintura.',
  whatsappLabel: 'Escríbanos por WhatsApp',
  notFound: {
    title: 'Página no encontrada',
    text: 'Esta pared aún no está pintada. La página que busca no existe.',
    back: 'Volver al inicio',
  },
};

export const DICT: Record<Lang, Dict> = { en, es };
