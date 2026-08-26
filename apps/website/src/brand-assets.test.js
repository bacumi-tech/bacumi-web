import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';


describe('Bacumi public brand assets', () => {
  it('ships every browser-discovery asset', () => {
    for (const filename of [
      'favicon.svg',
      'favicon.ico',
      'apple-touch-icon.png',
      'icon-192.png',
      'icon-512.png',
      'social-preview.png',
      'site.webmanifest'
    ]) {
      expect(existsSync(resolve('public', filename)), filename).toBe(true);
    }
  });

  it('declares the favicon, manifest, social preview and approved theme color', () => {
    const html = readFileSync(resolve('index.html'), 'utf8');

    expect(html).toContain('href="/favicon.svg"');
    expect(html).toContain('href="/site.webmanifest"');
    expect(html).toContain('content="/social-preview.png"');
    expect(html).toContain('content="#0B132B"');
  });

  it('uses the complete Bacumi palette and typography', () => {
    const css = readFileSync(resolve('src/index.css'), 'utf8').toLowerCase();

    for (const color of ['#0b132b', '#1e293b', '#0d6e8a', '#c7ccd3', '#f5f7f9']) {
      expect(css).toContain(color);
    }
    expect(css).toContain("family=sora");
    expect(css).toContain("'sora'");
    expect(css).toContain("'inter'");
  });
});
