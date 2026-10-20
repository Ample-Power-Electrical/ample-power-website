// Sitemap for search engines. Built automatically on every deploy, so new projects added in the CMS appear here without any extra work.
import { getProjects } from '../lib/site.js';

const SITE = 'https://amplepower.com.au';
const pages = ['/', '/about/', '/services/', '/projects/', '/buildings/', '/contact/'];

export function GET() {
  const urls = [...pages, ...getProjects().map((p) => `/projects/${p.slug}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
