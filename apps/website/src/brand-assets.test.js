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

  it('ships correctly sized base icons and no legacy public logos', () => {
    for (const [filename, expectedSize] of [
      ['apple-touch-icon.png', 180],
      ['icon-192.png', 192],
      ['icon-512.png', 512]
    ]) {
      const bytes = readFileSync(resolve('public', filename));
      expect(bytes.toString('ascii', 1, 4)).toBe('PNG');
      expect(bytes.readUInt32BE(16), `${filename} width`).toBe(expectedSize);
      expect(bytes.readUInt32BE(20), `${filename} height`).toBe(expectedSize);
    }

    for (const obsoletePath of [
      'images/logo.png',
      'images/bacumi-square-logo.png',
      'images/bacumi_pulse/logo.png'
    ]) {
      expect(existsSync(resolve('public', obsoletePath)), obsoletePath).toBe(false);
    }
  });

  it('uses the canonical mark in the manifest and favicon', () => {
    const manifest = JSON.parse(readFileSync(resolve('public/site.webmanifest'), 'utf8'));
    expect(manifest.theme_color).toBe('#0F1115');
    expect(manifest.background_color).toBe('#FAFAF8');
    expect(manifest.icons).toEqual([
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ]);

    const favicon = readFileSync(resolve('public/favicon.svg'), 'utf8');
    expect(favicon).toContain('Bacumi brand mark flat');
    expect(favicon).toContain('#FF6A00');
    expect(favicon).toContain('#0F1115');
    expect(favicon).toContain('#FFB347');
  });

  it('declares the favicon, manifest, social preview and approved theme color', () => {
    const html = readFileSync(resolve('index.html'), 'utf8');

    expect(html).toContain('href="/favicon.svg"');
    expect(html).toContain('href="/site.webmanifest"');
    expect(html).toContain('content="/social-preview.png"');
    expect(html).toContain('content="#0F1115"');
  });

  it('uses the complete Bacumi palette and typography', () => {
    const css = readFileSync(resolve('src/index.css'), 'utf8').toLowerCase();

    for (const color of ['#0f1115', '#565b65', '#a34100', '#858a94', '#fafaf8']) {
      expect(css).toContain(color);
    }
    expect(css).toContain("family=sora");
    expect(css).toContain("'sora'");
    expect(css).toContain("'inter'");
  });
});
