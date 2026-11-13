import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Colección de trabajos realizados.
 * Cada trabajo = un archivo .md + su foto, ambos dentro de src/content/trabajos/
 * (ver README.md para el paso a paso).
 */
const trabajos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trabajos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      imagen: image(),
      /** Interiores, Exteriores, Comercial… (los filtros de la galería se crean solos) */
      categoria: z.string(),
      ubicacion: z.string().optional(),
      anio: z.number().int(),
      /** Resumen corto de lo que se hizo */
      trabajo: z.string(),
      /** Aparece en la selección de la página de inicio */
      destacado: z.boolean().default(false),
      /** Foto grande del inicio (si hay varias, se usa la primera según "orden") */
      portada: z.boolean().default(false),
      /** Número para ordenar (menor = primero). Si se omite, va al final. */
      orden: z.number().default(999),
    }),
});

export const collections = { trabajos };
