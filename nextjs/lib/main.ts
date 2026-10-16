'use client';

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';

const LIGHT_THEME = 'light__theme';

/**
 * Dark is the default. The stored value is the literal theme name.
 *
 * The original site stored this under `selected-theme` with inverted semantics
 * (`'dark'` meant "light__theme applied"), so a leftover value from the old
 * site would open the new one in light mode. That key is deliberately ignored
 * and cleared — hence the rename rather than a reuse.
 */
const THEME_KEY = 'theme';
const LEGACY_THEME_KEY = 'selected-theme';

const readStoredLight = () => {
  try {
    return window.localStorage.getItem(THEME_KEY) === 'light';
  } catch {
    return false;
  }
};

const themeListeners = new Set<() => void>();

const subscribeToTheme = (listener: () => void) => {
  themeListeners.add(listener);
  return () => {
    themeListeners.delete(listener);
  };
};

const writeStoredLight = (isLight: boolean) => {
  try {
    window.localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
    window.localStorage.removeItem(LEGACY_THEME_KEY);
  } catch {
    // Storage can be unavailable (private mode); the toggle still works.
  }
  themeListeners.forEach((listener) => listener());
};

/** Whether the page is scrolled far enough to shadow the header. */
export function useScrollHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrolled;
}

/**
 * Returns the id of the section currently in view.
 *
 * This deliberately returns state rather than mutating the DOM: setting an
 * attribute imperatively from an effect fires before React has finished
 * hydrating the rest of the tree, which trips a hydration mismatch.
 * `sectionIds` must be a stable reference (define it at module scope).
 */
export function useScrollActiveLink(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const onScroll = () => {
      const offset = window.scrollY + 58;
      let current: string | null = null;
      for (const section of sections) {
        if (section.offsetTop <= offset) current = section.id;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);

  return activeId;
}

export function useRevealAnimations() {
  useEffect(() => {
    let cancelled = false;
    let destroy: (() => void) | undefined;

    void import('scrollreveal').then(({ default: ScrollReveal }) => {
      if (cancelled) return;
      const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
      });
      sr.reveal('.home__data');
      sr.reveal('.home__handle', { delay: 700 });
      sr.reveal('.home__social, .home__scroll', { delay: 900, origin: 'bottom' });
      destroy = () => sr.destroy();
    });

    return () => {
      cancelled = true;
      destroy?.();
    };
  }, []);
}

export function useTheme() {
  const isLight = useSyncExternalStore(
    subscribeToTheme,
    readStoredLight,
    () => false
  );

  useEffect(() => {
    document.body.classList.toggle(LIGHT_THEME, isLight);
  }, [isLight]);

  const toggleTheme = useCallback(() => {
    writeStoredLight(!readStoredLight());
  }, []);

  return { isLight, toggleTheme };
}

export function playClickSound() {
  const click = new Audio(
    'https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav'
  );
  void click.play().catch(() => {
    // Autoplay can be blocked before the first user gesture.
  });
}
