import { useEffect, useState } from 'react';
import { dynamicActivateI18n } from './dynamicActivatei18n';

function detectLocale() {
  const supportedLocales = ['en', 'nb', 'fi'];
  const defaultLocale = 'en';

  if (typeof window === 'undefined') {
    /**
     * Server locale detection. This requires e.g LANG environment variable to be set on the server.
     */
    return Intl.DateTimeFormat().resolvedOptions().locale;
  }

  try {
    const htmlLocale = document.documentElement.lang;

    return (
      supportedLocales.find(
        (locale) =>
          htmlLocale === locale || htmlLocale.toLowerCase().includes(locale)
      ) || defaultLocale
    );
  } catch (e) {
    console.warn('could not detect locale, falling back to source locale', e);
    return defaultLocale;
  }
}

/**
 * React hooks that dynamically loads selected locale for a package
 * @param pkg
 * @param locale
 * @returns a flag letting you know whether the locale is ready (not necessary to use)
 */
export function useI18n(pkg: string, locale?: string) {
  const [ready, setReady] = useState(false);

  const resolvedLocale = locale ?? detectLocale();

  useEffect(() => {
    Promise.allSettled([dynamicActivateI18n(pkg, resolvedLocale)]).finally(() =>
      setReady(true)
    );
  }, [resolvedLocale, pkg]);

  return ready;
}
