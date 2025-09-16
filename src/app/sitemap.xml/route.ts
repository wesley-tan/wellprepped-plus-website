import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://wellprepped-plus-website.vercel.app';
  
  const routes = [
    '',
    '/services',
    '/team', 
    '/contact',
    '/blog',
    '/blog/how-to-score-45-points-ib',
    '/blog/oxford-vs-cambridge-guide',
    '/blog/perfect-personal-statement',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === '' ? '1.0' : '0.8'}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
