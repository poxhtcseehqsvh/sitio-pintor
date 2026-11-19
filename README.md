# Rizzo Ditalia Painting Corporation — Sitio web

Sitio bilingüe (inglés / español) hecho con [Astro](https://astro.build).

| Ruta | Idioma |
| --- | --- |
| `/` | Inglés |
| `/es/` | Español |

El botón **ES / EN** del encabezado cambia de idioma y guarda la preferencia en `localStorage` (`rdp-lang`).
Si el visitante no ha elegido y su navegador está en español, se le muestra `/es/` automáticamente.

## Dónde se cambia cada cosa

- **Teléfono, correo, licencia, WhatsApp** → `src/config.ts` (`SITE`)
- **Access key de Web3Forms** → `src/config.ts` (`WEB3FORMS_ACCESS_KEY`) ⚠️ obligatorio para que el formulario funcione
- **Todos los textos (EN y ES)** → `src/i18n.ts`
- **Fotos de la galería** → copia las fotos a `public/gallery/` y cambia `src` en `GALLERY` (`src/config.ts`)
- **Logo** → reemplaza `public/logo-mark.svg` y `public/favicon.svg`
- **Imagen para redes sociales** → `public/og-image.svg` (recomendado cambiarla por un `.jpg` de 1200×630)
- **Colores** → variables al inicio de `src/styles/global.css`
- **Dominio** → `astro.config.mjs`, línea `site:` (se usa en canonical, hreflang, sitemap y robots.txt)

## Formulario de contacto (Web3Forms)

1. Entra a https://web3forms.com y escribe el correo de la empresa.
2. Copia la access key que llega por correo.
3. Pégala en `src/config.ts` en lugar de `YOUR_WEB3FORMS_ACCESS_KEY_HERE`.

## Comandos

```
npm install
npm run dev      # servidor local
npm run build    # genera dist/
```
