import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: object;
}

/**
 * Sets document title and critical meta tags for a given route.
 * Cleans up and restores the previous values on unmount.
 *
 * Rules:
 * - All four props are included in the effect dependency array.
 * - The JSON-LD script is guarded against duplicate injection.
 */
export function useSeo({ title, description, canonical, jsonLd }: SeoProps) {
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : undefined;

  useEffect(() => {
    // --- title ---
    const prevTitle = document.title;
    document.title = title;

    // --- description ---
    const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = metaDesc?.content ?? '';
    if (metaDesc) metaDesc.content = description;

    // --- canonical ---
    let linkCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const prevCanonical = linkCanonical?.href ?? '';
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonical;

    // --- OG ---
    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    const prevOgTitle = ogTitle?.content ?? '';
    const prevOgDesc = ogDesc?.content ?? '';
    const prevOgUrl = ogUrl?.content ?? '';
    if (ogTitle) ogTitle.content = title;
    if (ogDesc) ogDesc.content = description;
    if (ogUrl) ogUrl.content = canonical;

    // --- Twitter ---
    const twTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    const twDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
    const prevTwTitle = twTitle?.content ?? '';
    const prevTwDesc = twDesc?.content ?? '';
    if (twTitle) twTitle.content = title;
    if (twDesc) twDesc.content = description;

    // --- JSON-LD (page-specific) ---
    // Remove any stale page-jsonld script before adding a new one
    // to guard against duplicate injection on rapid navigation.
    let ldScript: HTMLScriptElement | null = null;
    if (jsonLdString) {
      document.getElementById('page-jsonld')?.remove();
      ldScript = document.createElement('script');
      ldScript.type = 'application/ld+json';
      ldScript.id = 'page-jsonld';
      ldScript.textContent = jsonLdString;
      document.head.appendChild(ldScript);
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.content = prevDesc;
      if (linkCanonical) linkCanonical.href = prevCanonical;
      if (ogTitle) ogTitle.content = prevOgTitle;
      if (ogDesc) ogDesc.content = prevOgDesc;
      if (ogUrl) ogUrl.content = prevOgUrl;
      if (twTitle) twTitle.content = prevTwTitle;
      if (twDesc) twDesc.content = prevTwDesc;
      ldScript?.remove();
    };
  }, [title, description, canonical, jsonLdString]);
}
