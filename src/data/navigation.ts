import { route } from '../utils/path';

export interface NavLink {
  path: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { path: '/', label: 'Inicio' },
  { path: '/nosotros', label: 'Nosotros' },
  { path: '/catalogo', label: 'Catálogo' },
  { path: '/faq', label: 'FAQs' },
  { path: '/contacto', label: 'Contacto' },
];

export const ctaLink: NavLink = { path: '/comprar', label: 'Comprar' };

export function navHref(path: string): string {
  return route(path);
}

export function isNavActive(currentPath: string, path: string): boolean {
  if (path === '/') return currentPath === '/';
  return currentPath === path || currentPath.startsWith(`${path}/`);
}
