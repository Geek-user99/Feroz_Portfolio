import {useEffect} from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'profile' | 'article';
  structuredData?: Record<string, unknown>;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export function SeoHead({
  title,
  description,
  image = '/assets/hero-feroz.png',
  imageAlt = 'Alamgir Sordar Feroz — Graphic & Motion Designer',
  type = 'website',
  structuredData,
}: SeoHeadProps) {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = `${origin}${window.location.pathname}`;
    const resolvedImage = image.startsWith('http')
      ? image
      : `${origin}${image.startsWith('/') ? image : `/${image}`}`;

    document.title = title;
    upsertCanonical(canonicalUrl);

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', resolvedImage);
    upsertMeta('property', 'og:image:alt', imageAlt);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', resolvedImage);
    upsertMeta('name', 'twitter:image:alt', imageAlt);

    const routeScriptId = 'route-structured-data';
    const existing = document.getElementById(routeScriptId);
    if (structuredData) {
      const script = existing ?? document.createElement('script');
      script.id = routeScriptId;
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify(structuredData);
      if (!existing) {
        document.head.appendChild(script);
      }
    } else if (existing) {
      existing.remove();
    }
  }, [title, description, image, imageAlt, type, structuredData]);

  return null;
}
