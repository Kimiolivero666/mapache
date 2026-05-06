import { routing } from '@/i18n/routing';

export async function GET() {
  const baseUrl = 'https://mapachestudio.com';
  const locales = routing.locales;
  
  // Generate all possible URLs for each locale
  const urls: string[] = [];
  
  locales.forEach(locale => {
    // Add homepage for each locale
    urls.push(`
  <url>
    <loc>${baseUrl}/${locale}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`);
    
    // Add section anchor links as separate URLs
    const sections = ['#services', '#projects', '#about', '#contact'];
    sections.forEach(section => {
      urls.push(`
  <url>
    <loc>${baseUrl}/${locale}${section}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);
    });
  });
  
  // Add root URL (redirects to default locale)
  urls.push(`
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
