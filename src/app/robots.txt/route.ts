import { NextResponse } from 'next/server';

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap location
Sitemap: https://mapachestudio.com/sitemap.xml

# Allow specific directories
Allow: /images/
Allow: /_next/static/
Allow: /favicon.ico

# Block non-essential directories
Disallow: /api/
Disallow: /_next/image
Disallow: /admin/
Disallow: /temp/

# Crawl delay (optional, for large sites)
Crawl-delay: 1`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
