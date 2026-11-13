# Sitio web de Osmundo · Pintor profesional

Sitio hecho con [Astro](https://astro.build). Se publica solo en Cloudflare cada vez que se hace `git push`.

## Páginas

| Ruta | Archivo |
| --- | --- |
| `/` Inicio | `src/pages/index.astro` |
| `/galeria/` Trabajos realizados | `src/pages/galeria.astro` |
| `/sobre-mi/` Sobre mí | `src/pages/sobre-mi.astro` |
| `/contacto/` Cotización | `src/pages/contacto.astro` |

## Dónde se cambia cada cosa

- **Nombre, frase, correo, WhatsApp, zona, servicios** → `src/config.ts`
- **Foto de Osmundo** → reemplaza `src/assets/pintor.jpg` (mismo nombre)
- **Biografía y trayectoria** → `src/pages/sobre-mi.astro`
- **Cifras y testimonio del inicio** → `src/pages/index.astro`
- **Colores y tipografías** → `src/styles/global.css` (variables al inicio)
- **Dominio del sitio** (para compartir en redes) → `astro.config.mjs`, línea `site:`

## Agregar un trabajo nuevo

1. Copia la foto a `src/content/trabajos/`, con un nombre sin espacios ni acentos,
   por ejemplo `fachada-casa-lopez.jpg`.
2. En la misma carpeta crea `fachada-casa-lopez.md` con esto:

   ```markdown
   ---
   titulo: "Fachada casa López"
   imagen: ./fachada-casa-lopez.jpg
   categoria: "Exteriores"
   ubicacion: "Colonia Centro"
   anio: 2026
   trabajo: "Pintura para exteriores y esmalte en herrería"
   destacado: true
   portada: false
   orden: 1
   ---

   Descripción opcional que aparece al abrir la foto en grande.
   ```

3. Guarda, haz `git add .`, `git commit -m "Nuevo trabajo"` y `git push`. En un par de minutos aparece en el sitio.

Notas:
- `categoria`: usa `Interiores`, `Exteriores` o `Comercial`. Si escribes una nueva, el filtro aparece solo.
- `destacado: true` lo muestra en el inicio (máximo 6).
- `portada: true` lo usa como foto grande del inicio (deja solo uno así).
- `orden`: número menor = aparece primero. `ubicacion` y la descripción son opcionales.
- Para quitar un trabajo, borra su `.md` y su foto. Para quitar los de ejemplo, borra los 10 que vienen.
- No hace falta achicar las fotos: el sitio genera versiones optimizadas (WebP) automáticamente.
  Aun así, conviene que no pasen de unos 3000 px de ancho.

## Formulario de contacto (Web3Forms)

El formulario manda los mensajes al correo usando [Web3Forms](https://web3forms.com), gratis (250 mensajes/mes).

1. Entra a <https://web3forms.com> y escribe el correo donde Osmundo quiere recibir los mensajes.
2. Llega un correo con la **Access Key** (un código tipo `a1b2c3d4-...`).
3. Pégala en `src/config.ts`, en `web3formsAccessKey: '...'`.
4. Haz commit y push. Mientras la key no esté puesta, el formulario muestra un aviso y no envía nada.

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm install` | Instala dependencias |
| `npm run dev` | Sitio de prueba en `http://localhost:4321` |
| `npm run build` | Genera el sitio final en `dist/` |
| `npm run preview` | Ver el sitio ya generado |
