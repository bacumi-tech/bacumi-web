import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCanonicalUrl, getPageMetadata } from '../content/pageMetadata';

const ensureMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
  return element;
};

const PageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMetadata(pathname);
    const pageUrl = getCanonicalUrl(pathname);
    document.title = meta.title;

    ensureMeta('meta[name="description"]', { name: 'description', content: meta.description });
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    ensureMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    ensureMeta('meta[property="og:url"]', { property: 'og:url', content: pageUrl });
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title });
    ensureMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: meta.description
    });
    ensureMeta('meta[name="robots"]', {
      name: 'robots',
      content: meta.indexable ? 'index,follow' : 'noindex,follow'
    });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);
  }, [pathname]);

  return null;
};

export default PageMeta;
