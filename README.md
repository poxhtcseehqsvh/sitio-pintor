# Rizzo Ditalia Painting Corporation — Sitio web

Sitio bilingüe (inglés / español) hecho con [Astro](https://astro.build).

| Ruta | Idioma |
| --- | --- |
| `/` | Inglés |
| `/es/` | Español |

El botón **EN | ES** del encabezado (y los enlaces del footer) cambian de idioma y guardan la preferencia en
`localStorage` (`rdp-lang`). Si el visitante no ha elegido y su navegador está en español, se le muestra `/es/`.

## Dónde se cambia cada cosa

| Qué | Archivo |
| --- | --- |
| Teléfono, correo, licencia, WhatsApp | `src/config.ts` → `SITE` |
| **Access key de Web3Forms** ⚠️ | `src/config.ts` → `WEB3FORMS_ACCESS_KEY` |
| Fotos de la galería | `public/gallery/` + `src/config.ts` → `GALLERY` |
| Textos EN y ES (incluye pies de foto) | `src/i18n.ts` |
| Logo (header, footer y 404) | `src/assets/logo.svg` |
| Ícono de la pestaña | `public/favicon.svg` |
| Imagen al compartir en redes | `public/og-image.svg` (mejor un `.jpg` de 1200×630) |
| Colores | variables al inicio de `src/styles/global.css` |
| Dominio | `astro.config.mjs` → `site:` |

## Secciones (src/components)

`Header` · `Hero` · `Services` · `WhyUs` · `Gallery` · `CallBand` · `Contact` · `Footer` · `WhatsAppButton`,
unidas en `HomePage.astro` y usadas por `src/pages/index.astro` (EN) y `src/pages/es/index.astro` (ES).

## Formulario de contacto (Web3Forms)

1. Entra a https://web3forms.com y escribe `rizzoditalipainting@gmail.com`.
2. Copia la access key que llega por correo.
3. Pégala en `src/config.ts` en lugar de `PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE`.

Mientras no la pongas, el formulario muestra un aviso pidiendo que llamen por teléfono.

## Comandos

```
npm install
npm run dev      # servidor local
npm run build    # genera dist/
```
