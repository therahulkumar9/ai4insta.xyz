// generate-sitemap.mjs
import { writeFileSync, createWriteStream } from 'node:fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'node:zlib';

const hostname = 'https://ai4insta.xyz';

const sitemap = new SitemapStream({ hostname });
const writeStream = createWriteStream('./public/sitemap.xml.gz');
sitemap.pipe(createGzip()).pipe(writeStream);

const routes = [
  '/',
  '/youtube',
  '/insta-caption-ai',
  '/contact',
  '/features',
  '/pricing',
  '/privacy',
  '/terms',
  '/instagram'
];

for (const url of routes) {
  sitemap.write({ url, changefreq: 'weekly', priority: 0.8 });
}

sitemap.end();

const sitemapXML = await streamToPromise(sitemap);
writeFileSync('./public/sitemap.xml', sitemapXML.toString());

console.log('✅ Sitemap generated successfully!');
