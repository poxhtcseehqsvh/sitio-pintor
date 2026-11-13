/**
 * ─────────────────────────────────────────────────────────────
 *  DATOS GENERALES DEL SITIO — edita aquí nombre, frase y contacto
 * ─────────────────────────────────────────────────────────────
 */
export const SITIO = {
  nombre: 'Osmundo',
  oficio: 'Pintor profesional',
  frase: 'Pintura residencial y comercial, con acabados limpios y trabajo garantizado.',
  descripcion:
    'Osmundo, pintor profesional: pintura de casas, departamentos, oficinas y locales comerciales. Interiores y exteriores. Cotización sin compromiso.',
  zona: 'Servicio en la ciudad y alrededores', // ← cambia por tu ciudad / zona
  experiencia: '20', // años de experiencia (texto de ejemplo)

  correo: 'correo@ejemplo.com', // ← cambia por el correo real

  // WhatsApp: código de país + número, solo dígitos, sin "+" ni espacios.
  // Ejemplo México: 5215512345678 · España: 34612345678
  whatsapp: '5210000000000', // ← cambia por el número real
  mensajeWhatsapp: 'Hola Osmundo, vi su página y quisiera una cotización de pintura.',

  // ⚠️ WEB3FORMS: pega aquí tu access key (ver README.md, sección "Formulario de contacto")
  web3formsAccessKey: 'TU_ACCESS_KEY_DE_WEB3FORMS',

  facebook: '', // opcional, ej. 'https://facebook.com/pagina'
};

/** Servicios que aparecen en el inicio y en el formulario (edítalos libremente) */
export const SERVICIOS = [
  {
    titulo: 'Interiores',
    texto: 'Salas, recámaras, cocinas y baños. Pintura lavable, plafones, molduras y cambios de color.',
  },
  {
    titulo: 'Exteriores y fachadas',
    texto: 'Fachadas, bardas y portones con pintura de alta durabilidad, resistente al sol y la lluvia.',
  },
  {
    titulo: 'Comercial',
    texto: 'Oficinas, locales, restaurantes y edificios. Horarios flexibles para no frenar su negocio.',
  },
  {
    titulo: 'Preparación y resanes',
    texto: 'Reparación de grietas, aplanados, lijado y sellador para un acabado parejo y duradero.',
  },
  {
    titulo: 'Esmaltes y herrería',
    texto: 'Puertas, ventanas, rejas y portones con esmalte y anticorrosivo.',
  },
  {
    titulo: 'Impermeabilización',
    texto: 'Protección de azoteas y muros contra filtraciones antes de la temporada de lluvias.',
  },
];

export const urlWhatsapp = `https://wa.me/${SITIO.whatsapp}?text=${encodeURIComponent(SITIO.mensajeWhatsapp)}`;
