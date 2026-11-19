/**
 * ─────────────────────────────────────────────────────────────
 *  BUSINESS DATA / DATOS DE LA EMPRESA
 *  Edit contact info here. / Edita aquí los datos de contacto.
 * ─────────────────────────────────────────────────────────────
 */
export const SITE = {
  name: 'Rizzo Ditalia Painting Corporation',
  shortName: 'Rizzo Ditalia Painting',
  phoneDisplay: '(786) 797-4177',
  phoneHref: 'tel:+17867974177',
  email: 'rizzoditalipainting@gmail.com',
  license: '17BS00076',
  city: 'Miami',
  region: 'FL',
  // WhatsApp: country code + number, digits only
  whatsapp: '17867974177',
};

/**
 * ⚠️⚠️⚠️  WEB3FORMS ACCESS KEY  ⚠️⚠️⚠️
 * 1. Go to https://web3forms.com and enter the company email
 * 2. Copy the access key you receive by email
 * 3. Paste it below, replacing the placeholder text
 *
 * 1. Entra a https://web3forms.com y escribe el correo de la empresa
 * 2. Copia la access key que te llega por correo
 * 3. Pégala abajo, reemplazando el texto de ejemplo
 */
export const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

/**
 * GALLERY / GALERÍA
 * Placeholder SVGs live in /public/gallery/. To use real photos, copy them into
 * /public/gallery/ and change `src` (e.g. '/gallery/kitchen.jpg').
 * Para usar fotos reales, cópialas a /public/gallery/ y cambia `src`.
 * The captions are in src/i18n.ts → gallery.items
 */
export const GALLERY = [
  { src: '/gallery/interior-living-room.svg', key: 'livingRoom' },
  { src: '/gallery/exterior-house.svg', key: 'exteriorHouse' },
  { src: '/gallery/commercial-office.svg', key: 'office' },
  { src: '/gallery/residential-kitchen.svg', key: 'kitchen' },
  { src: '/gallery/commercial-storefront.svg', key: 'storefront' },
  { src: '/gallery/exterior-condo.svg', key: 'condo' },
] as const;

export type GalleryKey = (typeof GALLERY)[number]['key'];

export const whatsappUrl = (message: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
