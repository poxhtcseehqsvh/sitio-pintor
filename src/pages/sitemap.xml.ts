import type { APIRoute } from 'astro';
import { PATHS } from '../i18n';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://example.com');
  const en = new URL(PATHS.en, base).href;
  const es = new URL(PATHS.es, base).href;
  const alt = `<xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="es" href="${es}"/>`;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url><loc>${en}</loc>${alt}</url>
  <url><loc>${es}</loc>${alt}</url>
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
