const rawBase = import.meta.env.BASE_URL;
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export function asset(path: string): string {
  const normalized = path.replace(/^\//, '');
  return `${base}${normalized}`;
}

export function route(path = ''): string {
  if (!path || path === '/') return base;
  const normalized = path.replace(/^\//, '');
  return `${base}${normalized}`;
}
