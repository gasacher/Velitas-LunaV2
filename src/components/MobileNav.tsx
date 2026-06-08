import { useEffect, useState } from 'react';
import { navLinks, ctaLink, isNavActive, navHref } from '../data/navigation';
import { images } from '../data/images';
import './MobileNav.css';

interface Props {
  currentPath: string;
}

export default function MobileNav({ currentPath }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  return (
    <>
      <button
        type="button"
        className={`nav-toggle ${open ? 'nav-toggle--open' : ''}`}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="mobile-menu"
        className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`}
        aria-hidden={!open}
      >
        <div className="mobile-nav__header">
          <a href={navHref('/')} className="mobile-nav__brand" onClick={() => setOpen(false)}>
            <img src={images.logoWordmarkSm} alt="Velitas de la Luna" className="brand__wordmark" />
          </a>
          <button
            type="button"
            className="mobile-nav__close"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <ul className="mobile-nav__list">
          {navLinks.map((link) => (
            <li key={link.path}>
              <a
                href={navHref(link.path)}
                className={isNavActive(currentPath, link.path) ? 'is-active' : ''}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={navHref(ctaLink.path)}
          className={`mobile-nav__cta btn btn--primary ${isNavActive(currentPath, ctaLink.path) ? 'is-active' : ''}`}
          onClick={() => setOpen(false)}
        >
          {ctaLink.label}
        </a>
      </nav>

      {open && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
