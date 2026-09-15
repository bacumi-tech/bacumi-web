import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from '../dist/server/entry-server.js';
import { getCanonicalUrl, getPageMetadata } from '../src/content/pageMetadata.js';

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = resolve(appRoot, 'dist');
const template = await readFile(resolve(distRoot, 'index.html'), 'utf8');
const sitemap = await readFile(resolve(appRoot, 'public/sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>https:\/\/bacumi\.com([^<]*)<\/loc>/g)]
  .map((match) => match[1] || '/');

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const replaceMeta = (html, selector, value) => {
  const [attribute, name] = selector;
  const pattern = new RegExp(`<meta(?=[^>]*${attribute}="${name}")[^>]*>`, 'i');
  return html.replace(pattern, `<meta ${attribute}="${name}" content="${escapeHtml(value)}" />`);
};

for (const route of routes) {
  const metadata = getPageMetadata(route);
  const canonicalUrl = getCanonicalUrl(route);
  let html = template
    .replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(metadata.title)}</title>`)
    .replace(/<link(?=[^>]*rel="canonical")[^>]*>/i, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(
      '<div id="root"></div>',
      `<div id="root" data-prerender-path="${escapeHtml(route)}">${render(route)}</div>`
    );

  html = replaceMeta(html, ['name', 'description'], metadata.description);
  html = replaceMeta(html, ['property', 'og:url'], canonicalUrl);
  html = replaceMeta(html, ['property', 'og:title'], metadata.title);
  html = replaceMeta(html, ['property', 'og:description'], metadata.description);
  html = replaceMeta(html, ['name', 'twitter:title'], metadata.title);
  html = replaceMeta(html, ['name', 'twitter:description'], metadata.description);
  html = html.replace('</head>', '    <meta name="robots" content="index,follow" />\n  </head>');

  const outputs = route === '/'
    ? [resolve(distRoot, 'index.html')]
    : [resolve(distRoot, `.${route}.html`), resolve(distRoot, `.${route}`, 'index.html')];
  for (const output of outputs) {
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, html);
  }
}

await rm(resolve(distRoot, 'server'), { recursive: true, force: true });
