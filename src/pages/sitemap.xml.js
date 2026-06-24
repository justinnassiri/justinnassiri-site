import { getCollection } from 'astro:content';
import { SITE } from '../consts';
export async function GET() {
  const writing = await getCollection('writing');
  const podcast = await getCollection('podcast');
  const paths = ['', 'about', 'writing', 'podcast', 'appearances', 'watch',
    ...writing.map((p) => `writing/${p.slug}`),
    ...podcast.map((e) => `podcast/${e.slug}`)];
  const urls = paths.map((p) => `  <url><loc>${SITE.url}/${p}${p ? '/' : ''}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
