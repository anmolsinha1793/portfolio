'use client';

import AsMark from '@/app/components/AsMark';
import {
  playClickSound,
  useScrollActiveLink,
  useScrollHeader,
  useTheme,
} from '@/lib/main';

const NAV_ITEMS = [
  { href: '#home', icon: 'bx bx-home-alt', label: 'Home' },
  { href: '#about', icon: 'bx bx-user', label: 'About' },
  { href: '#skills', icon: 'bx bx-book', label: 'Skills' },
  { href: '#work', icon: 'bx bx-briefcase-alt-2', label: 'Work' },
  { href: '#contact', icon: 'bx bx-message-square-detail', label: 'Contact' },
];

/** Module scope on purpose — the hook keys its effect off this reference. */
const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1));

export default function Header() {
  const scrolled = useScrollHeader();
  const activeId = useScrollActiveLink(SECTION_IDS);
  const { isLight, toggleTheme } = useTheme();

  return (
    <header
      id="header"
      data-scrolled={scrolled ? '' : undefined}
      className="fixed top-0 left-0 z-[100] w-full bg-body [transition:.4s] data-[scrolled]:shadow-[0_4px_4px_hsla(0,0%,4%,0.3)] light:data-[scrolled]:shadow-[0_2px_4px_hsla(0,0%,1%,0.1)]"
    >
      <nav className="mx-4 flex h-[var(--header-height)] max-w-[968px] items-center justify-between lg:mx-auto lg:h-[calc(var(--header-height)+1rem)]">
        <a
          href="#"
          className="flex items-center gap-2 font-medium text-first [transition:.4s] hover:text-first-alt hover:outline-none"
        >
          <AsMark className="h-7 w-7 shrink-0" />
          Anmol
        </a>

        <div className="fixed bottom-4 w-[90%] rounded-[4rem] bg-[hsla(var(--second-hue),32%,16%,0.8)] px-9 py-4 backdrop-blur-[10px] [transition:.4s] light:bg-[hsla(var(--second-hue),32%,90%,0.8)] [@media(max-width:320px)]:px-6 sm:left-0 sm:right-0 sm:mx-auto sm:w-[328px]">
          <ul className="flex items-center justify-between">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  data-active={activeId === item.href.slice(1) ? '' : undefined}
                  className="flex rounded-[5rem] p-[0.4rem] text-xl text-text max-sm:p-3 data-[active]:bg-[linear-gradient(180deg,hsla(var(--first-hue),var(--sat),var(--lig),1),hsla(var(--first-hue),var(--sat),var(--lig),0.2))] data-[active]:text-title data-[active]:shadow-[0_0_16px_hsla(var(--first-hue),var(--sat),var(--lig),0.4)]"
                >
                  <i className={item.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <i
          id="theme__button"
          role="button"
          aria-label="Toggle colour theme"
          className={`bx cursor-pointer text-xl [transition:.3s] hover:text-first max-sm:-m-3 max-sm:p-3 ${
            isLight ? 'bx-sun' : 'bx-moon'
          }`}
          onClick={() => {
            playClickSound();
            toggleTheme();
          }}
        ></i>
      </nav>
    </header>
  );
}
