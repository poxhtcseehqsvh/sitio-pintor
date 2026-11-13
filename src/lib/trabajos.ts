import { getCollection } from 'astro:content';

/** Todos los trabajos ordenados por "orden" y luego por año (más reciente primero). */
export async function trabajosOrdenados() {
  const trabajos = await getCollection('trabajos');
  return trabajos.sort((a, b) => a.data.orden - b.data.orden || b.data.anio - a.data.anio);
}
