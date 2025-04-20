// generate-sitemap.mjs
import { writeFileSync } from 'node:fs';
import { SitemapStream, streamToPromise } from 'sitemap';

const hostname = 'https://ai4insta.xyz';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/youtube', changefreq: 'weekly', priority: 0.8 },
  { url: '/insta-caption-ai', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
  { url: '/features', changefreq: 'monthly', priority: 0.5 },
  { url: '/pricing', changefreq: 'monthly', priority: 0.5 },
  { url: '/privacy', changefreq: 'yearly', priority: 0.3 },
  { url: '/terms', changefreq: 'yearly', priority: 0.3 },
  { url: '/instagram', changefreq: 'weekly', priority: 0.7 }
];

const sitemapStream = new SitemapStream({ hostname });

for (const link of links) {
  sitemapStream.write(link);
}

sitemapStream.end();

const sitemap = await streamToPromise(sitemapStream);
writeFileSync('./public/sitemap.xml', sitemap.toString());

console.log('✅ sitemap.xml generated successfully!');
