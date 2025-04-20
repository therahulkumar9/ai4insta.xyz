import { writeFileSync } from 'node:fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import path from 'node:path';

// Define the hostname and sitemap URL data
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

// Ensure the sitemap is generated properly
const generateSitemap = async () => {
  try {
    const sitemapStream = new SitemapStream({ hostname });

    // Write URLs to sitemap stream
    for (const link of links) {
      sitemapStream.write(link);
    }

    // Close the stream and get the result
    sitemapStream.end();
    const sitemap = await streamToPromise(sitemapStream);

    // Define the output file path (ensure the 'public' folder exists)
    const outputFilePath = path.resolve('public', 'sitemap.xml');

    // Write the generated sitemap to the 'public/sitemap.xml' file
    writeFileSync(outputFilePath, `<?xml version="1.0" encoding="UTF-8"?>\n${sitemap.toString()}`);

    console.log(`✅ sitemap.xml generated successfully at ${outputFilePath}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
};

// Run the sitemap generation function
generateSitemap();
