import React, {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {WHATSAPP_URL} from '../data/portfolio';
import {assetUrl} from '../lib/assets';
import {Link} from '../lib/router';
import {EASE_EDITORIAL, Reveal} from './MotionPrimitives';

const NAV_ITEMS = [
  {label: 'Home', to: '/'},
  {label: 'Work', to: '/work'},
  {label: 'About', to: '/about'},
  {label: 'Experience', to: '/experience'},
  {label: 'Contact', to: '/contact'},
];

export function WhatsAppIcon({className = 'h-4 w-4'}: {className?: string}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.77 14.11c-.24.67-1.4 1.28-1.94 1.36-.49.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.63-.61-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.17-1.56-1.17-2.97s.74-2.11 1-2.4c.26-.29.57-.36.76-.36.19 0 .38.01.55.01.18 0 .41-.07.65.49.24.57.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.12.59.17.29.74 1.23 1.6 1.99 1.1.98 2.02 1.28 2.31 1.43.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.65-.14.26.1 1.68.79 1.97.94.29.14.48.22.55.34.07.12.07.7-.17 1.37z" />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:flex md:justify-between md:px-10">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3 transition-transform duration-200 hover:scale-[1.03]"
          aria-label="Feroz home"
        >
          <img
            src={assetUrl('/assets/site-logo.png')}
            alt="Feroz"
            className="site-logo"
          />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="nav-shell flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="nav-link"
                  activeClassName="is-active"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary hidden md:inline-flex"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-border md:hidden"
          >
            <span
              className={`block h-px w-5 bg-foreground transition-transform ${
                menuOpen ? 'translate-y-[3.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-5 bg-foreground transition-transform ${
                menuOpen ? '-translate-y-[3.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -8}}
            transition={{duration: 0.22, ease: EASE_EDITORIAL}}
            aria-label="Mobile"
            className="border-t border-border md:hidden"
          >
            <ul className="px-5 py-2">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.to}
                  className="border-b border-border last:border-0"
                >
                  <Link
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className="display block py-4 text-2xl"
                    activeClassName="text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-5 pb-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="mt-24 border-t border-border bg-background">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-4">
            <img
              src={assetUrl('/assets/site-logo.png')}
              alt="Feroz"
              className="site-logo"
            />
            <p className="label">Graphic &amp; Motion Design</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="label transition-colors hover:!text-foreground"
                    activeClassName="!text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mx-auto max-w-[1400px] border-t border-border px-5 pt-6 pb-4 md:px-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              © {year} Alamgir Sordar Feroz. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">Made in Bangladesh</p>
          </div>

          <Reveal y={28} className="mt-8 overflow-hidden select-none">
            <p
              className="font-sans font-extrabold tracking-[-0.04em] leading-[0.82] text-white/[0.08] text-[24vw] sm:text-[18vw] lg:text-[15.5vw]"
              aria-hidden="true"
            >
              Feroz
            </p>
          </Reveal>
        </div>
      </footer>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{scale: 0.8, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{delay: 0.4, duration: 0.4, ease: EASE_EDITORIAL}}
        whileHover={{scale: 1.08}}
        whileTap={{scale: 0.94}}
        className="fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </motion.a>
    </>
  );
}

export function SectionHeading({
  n,
  title,
  lead,
  as = 'h2',
}: {
  n: string;
  title: string;
  lead?: string;
  as?: 'h1' | 'h2';
}) {
  const HeadingTag = as;
  return (
    <Reveal className="max-w-2xl">
      <p className="label !text-accent">
        {n} / {title}
      </p>
      {lead && (
        <HeadingTag className="display mt-4 text-4xl md:text-6xl">
          {lead}
        </HeadingTag>
      )}
    </Reveal>
  );
}
