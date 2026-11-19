/**
 * All site text in English and Spanish.
 * Todo el texto del sitio en inglés y español.
 */
import type { GalleryKey } from './config';

export type Lang = 'en' | 'es';

export const LANGS: Lang[] = ['en', 'es'];
export const PATHS: Record<Lang, string> = { en: '/', es: '/es/' };
export const LANG_STORAGE_KEY = 'rdp-lang';

export type ServiceIcon = 'interior' | 'exterior' | 'commercial' | 'residential';
export type WhyIcon = 'license' | 'shield' | 'pin' | 'quote';

const en = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  seo: {
    title: 'Rizzo Ditalia Painting | Licensed Painting Contractor in Miami, FL',
    description:
      'Licensed & insured painting contractor in Miami, FL. Interior, exterior, commercial and residential painting. Call (786) 797-4177 for a free quote.',
    keywords:
      'painters Miami, painting contractor Miami, interior painting, exterior painting, commercial painting, residential painting, house painters Miami FL',
  },
  topbar: {
    license: 'FL License #',
    area: 'Serving Miami-Dade County',
  },
  nav: {
    services: 'Services',
    why: 'Why Us',
    gallery: 'Our Work',
    contact: 'Contact',
    quote: 'Free Quote',
    langLabel: 'Language',
    menu: 'Open menu',
  },
  hero: {
    eyebrow: 'Licensed & Insured · Miami, Florida',
    titleA: 'Bring Your Walls',
    titleB: 'Back to Life',
    subtitle:
      'Professional interior, exterior, commercial and residential painting. Clean prep, sharp lines and finishes built for the Miami sun.',
    callLabel: 'Call now — free estimate',
    cta: 'Get a Free Quote',
    whatsapp: 'WhatsApp us',
    cardTitle: 'Your project, done right',
    cardItems: [
      'Free, no-obligation estimates',
      'Written quote with no hidden costs',
      'Furniture & floors protected',
      'Spotless clean-up every day',
    ],
    cardLicense: 'Florida License',
  },
  services: {
    eyebrow: 'What we do',
    title: 'Painting Services',
    intro: 'From a single bedroom to an entire building, we handle every job with the same care.',
    items: [
      {
        icon: 'interior' as ServiceIcon,
        title: 'Interior',
        text: 'Walls, ceilings, trim, doors and cabinets. Careful prep, clean lines and low-odor paints.',
      },
      {
        icon: 'exterior' as ServiceIcon,
        title: 'Exterior',
        text: 'Stucco, siding, fences and trim with premium coatings that resist sun, humidity and storms.',
      },
      {
        icon: 'commercial' as ServiceIcon,
        title: 'Commercial',
        text: 'Offices, retail, restaurants and buildings — with night and weekend schedules available.',
      },
      {
        icon: 'residential' as ServiceIcon,
        title: 'Residential',
        text: 'Houses, condos and townhomes. We treat your home like our own and leave it spotless.',
      },
    ],
  },
  why: {
    eyebrow: 'Why choose us',
    title: 'Painters Miami Can Trust',
    text: 'We are a local, licensed company. You get honest pricing, clear communication and a finish that lasts.',
    items: [
      { icon: 'license' as WhyIcon, title: 'Licensed', text: 'Fully licensed painting contractor — License #17BS00076.' },
      { icon: 'shield' as WhyIcon, title: 'Insured', text: 'Your property is protected on every job, big or small.' },
      { icon: 'pin' as WhyIcon, title: 'Miami Local', text: 'We know what South Florida heat and humidity do to paint.' },
      { icon: 'quote' as WhyIcon, title: 'Free Quote', text: 'Clear, written estimates. No hidden costs, no obligation.' },
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
  band: {
    title: 'Ready for a fresh new look?',
    text: 'Call today for your free, no-obligation estimate.',
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
    messagePlaceholder: 'E.g. 3-bedroom house interior, about 1,500 sq ft, in Kendall…',
    submit: 'Send Request',
    sending: 'Sending…',
    success: 'Thank you! We received your request and will contact you soon.',
    error: 'Something went wrong. Please call us at (786) 797-4177.',
    notConfigured: 'The form is not active yet. Please call us at (786) 797-4177.',
    subject: 'New quote request — website (English)',
    callUs: 'Call us',
    emailUs: 'Email us',
    whatsapp: 'WhatsApp',
    area: 'Service area',
    areaValue: 'Miami, Florida',
    license: 'License',
  },
  footer: {
    tagline: 'Professional painting for homes and businesses in Miami, Florida.',
    explore: 'Explore',
    contact: 'Contact',
    license: 'FL License #',
    rights: 'All rights reserved.',
  },
  whatsappMessage: 'Hi! I would like a free painting quote.',
  whatsappLabel: 'Chat on WhatsApp',
  notFound: {
    title: 'Page not found',
    text: 'This wall hasn’t been painted yet — the page you are looking for does not exist.',
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
    keywords:
      'pintores en Miami, empresa de pintura Miami, pintura interior, pintura exterior, pintura comercial, pintura residencial, pintar casa Miami',
  },
  topbar: {
    license: 'Licencia FL #',
    area: 'Servimos al condado Miami-Dade',
  },
  nav: {
    services: 'Servicios',
    why: 'Por qué nosotros',
    gallery: 'Trabajos',
    contact: 'Contacto',
    quote: 'Cotización Gratis',
    langLabel: 'Idioma',
    menu: 'Abrir menú',
  },
  hero: {
    eyebrow: 'Con licencia y seguro · Miami, Florida',
    titleA: 'Dele Nueva Vida',
    titleB: 'a sus Paredes',
    subtitle:
      'Pintura profesional interior, exterior, comercial y residencial. Preparación cuidadosa, líneas perfectas y acabados hechos para el sol de Miami.',
    callLabel: 'Llame ahora — estimado gratis',
    cta: 'Cotización Gratis',
    whatsapp: 'Escríbanos por WhatsApp',
    cardTitle: 'Su proyecto, bien hecho',
    cardItems: [
      'Estimados gratis y sin compromiso',
      'Cotización por escrito sin costos ocultos',
      'Protegemos muebles y pisos',
      'Limpieza completa cada día',
    ],
    cardLicense: 'Licencia de Florida',
  },
  services: {
    eyebrow: 'Lo que hacemos',
    title: 'Servicios de Pintura',
    intro: 'Desde un cuarto hasta un edificio completo, cada trabajo recibe el mismo cuidado.',
    items: [
      {
        icon: 'interior',
        title: 'Interior',
        text: 'Paredes, techos, molduras, puertas y gabinetes. Preparación cuidadosa y pinturas de bajo olor.',
      },
      {
        icon: 'exterior',
        title: 'Exterior',
        text: 'Stucco, fachadas, cercas y molduras con recubrimientos que resisten sol, humedad y tormentas.',
      },
      {
        icon: 'commercial',
        title: 'Comercial',
        text: 'Oficinas, tiendas, restaurantes y edificios, con horarios de noche y fines de semana.',
      },
      {
        icon: 'residential',
        title: 'Residencial',
        text: 'Casas, condominios y townhouses. Cuidamos su hogar como si fuera el nuestro.',
      },
    ],
  },
  why: {
    eyebrow: 'Por qué elegirnos',
    title: 'Pintores de Confianza en Miami',
    text: 'Somos una empresa local y con licencia. Precios honestos, comunicación clara y un acabado que dura.',
    items: [
      { icon: 'license', title: 'Licenciados', text: 'Contratista de pintura con licencia — Licencia #17BS00076.' },
      { icon: 'shield', title: 'Asegurados', text: 'Su propiedad está protegida en cada trabajo, grande o pequeño.' },
      { icon: 'pin', title: 'Locales de Miami', text: 'Conocemos el efecto del calor y la humedad del sur de Florida.' },
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
  band: {
    title: '¿Listo para un cambio de look?',
    text: 'Llame hoy para su estimado gratis y sin compromiso.',
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
    messagePlaceholder: 'Ej.: interior de casa de 3 cuartos, unos 1,500 pies², en Kendall…',
    submit: 'Enviar Solicitud',
    sending: 'Enviando…',
    success: '¡Gracias! Recibimos su solicitud y le contactaremos pronto.',
    error: 'Algo salió mal. Por favor llámenos al (786) 797-4177.',
    notConfigured: 'El formulario aún no está activo. Por favor llámenos al (786) 797-4177.',
    subject: 'Nueva solicitud de cotización — sitio web (Español)',
    callUs: 'Llámenos',
    emailUs: 'Escríbanos',
    whatsapp: 'WhatsApp',
    area: 'Área de servicio',
    areaValue: 'Miami, Florida',
    license: 'Licencia',
  },
  footer: {
    tagline: 'Pintura profesional para hogares y negocios en Miami, Florida.',
    explore: 'Secciones',
    contact: 'Contacto',
    license: 'Licencia FL #',
    rights: 'Todos los derechos reservados.',
  },
  whatsappMessage: '¡Hola! Quisiera una cotización gratis de pintura.',
  whatsappLabel: 'Escríbanos por WhatsApp',
  notFound: {
    title: 'Página no encontrada',
    text: 'Esta pared aún no está pintada — la página que busca no existe.',
    back: 'Volver al inicio',
  },
};

export const DICT: Record<Lang, Dict> = { en, es };
