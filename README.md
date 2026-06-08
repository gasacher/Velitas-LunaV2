# Velitas de la Luna

Sitio web para **Velitas de la Luna**, marca artesanal de velas con intención. Proyecto real de e-commerce editorial: catálogo, compra por canales directos y experiencia de marca premium en dark mode.

**Repositorio:** [github.com/gasacher/Velitas-LunaV2](https://github.com/gasacher/Velitas-LunaV2)

---

## Resumen del proyecto

Rediseño y desarrollo completo del sitio desde cero. El objetivo fue combinar estética mística y boutique con una navegación clara, carga rápida y un flujo de compra simple (formulario de contacto + WhatsApp + Instagram), sin depender de un backend propio.

| | |
|---|---|
| **Tipo** | Landing + catálogo + páginas institucionales |
| **Rol** | Diseño UI, arquitectura front-end, implementación |
| **Stack** | Astro 5 · React 19 · TypeScript · CSS |
| **Output** | Sitio estático (`dist/`) listo para deploy |
| **Idioma** | Español (Argentina) |

---

## Demo

**Live:** [gasacher.github.io/Velitas-LunaV2](https://gasacher.github.io/Velitas-LunaV2/)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
npm run preview  # preview del build
```

---

## Capturas

| Home | Catálogo |
|------|----------|
| Hero cinematográfico, logo de marca y CTA al catálogo | Filtro por intención (lunar, amor, protección…) |

| Nosotros | Contacto |
|----------|----------|
| Historia de marca con logo completo | Formulario + canales alternativos |

*(Reemplazá esta sección con screenshots reales para tu portfolio.)*

---

## Funcionalidades destacadas

- **Arquitectura híbrida Astro + React** — páginas estáticas con islas interactivas solo donde hace falta (menú mobile, FAQ acordeón, formulario, filtro de catálogo).
- **Design system coherente** — tipografía Cormorant Garamond + Outfit, paleta oscura (violeta, lavanda, dorado) y componentes reutilizables.
- **Catálogo filtrable** — productos por categoría con soporte de hash (`/catalogo#amor`).
- **Flujo de compra unificado** — botones WhatsApp e Instagram con estilo de marca; botón flotante de WhatsApp en verde.
- **CTA band inteligente** — prioriza formulario de contacto y luego canales directos.
- **Sección Instagram** — grilla uniforme estilo feed + enlace al perfil `@velitas.luna`.
- **Performance** — imágenes optimizadas para web, build estático, mínimo JavaScript en carga inicial.
- **Responsive** — navegación mobile con drawer, layouts adaptativos en catálogo y galerías.

---

## Estructura del proyecto

```
src/
├── components/     # UI: Header, Hero, ProductCard, CTABand, Logo…
├── data/           # Productos, navegación, imágenes, contacto
├── layouts/        # Layout base (SEO, header, footer)
├── pages/          # index, catalogo, comprar, nosotros, faq, contacto
└── styles/         # Design tokens y estilos globales

public/img/         # Assets de marca y fotografía de producto
public/img/web/     # Variantes optimizadas para web
```

---

## Stack técnico

| Tecnología | Uso |
|------------|-----|
| [Astro 5](https://astro.build) | Framework principal, SSG, routing |
| [React 19](https://react.dev) | Islas: `MobileNav`, `FaqAccordion`, `ContactForm`, `ProductFilter` |
| TypeScript | Tipado en datos de productos y componentes |
| CSS custom properties | Design system sin dependencia de UI kit |
| Static output | Deploy en cualquier CDN / hosting estático |

---

## Decisiones de diseño y desarrollo

1. **Astro sobre SPA completa** — mejor SEO, TTFB bajo y JS reducido para una marca que vive de imágenes y copy.
2. **Compra por WhatsApp/Instagram** — acorde al modelo real del negocio artesanal, sin carrito ni pasarela integrada.
3. **Logo híbrido** — wordmark oficial en nav/footer/hero con tamaños unificados vía CSS variables.
4. **Contacto primero** — el CTA final empuja al formulario antes que a redes, para captar consultas estructuradas.
5. **Componentes pequeños y explícitos** — fácil de mantener y extender (nuevos productos solo en `products.ts`).

---

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home con hero, colección destacada, rituales, intenciones e Instagram |
| `/catalogo` | Catálogo completo con filtros |
| `/comprar` | Guía de compra + productos destacados |
| `/nosotros` | Historia de marca |
| `/faq` | Preguntas frecuentes (acordeón) |
| `/contacto` | Formulario de contacto |

---

## Datos de marca (configuración)

Los datos centralizados viven en `src/data/`:

- `products.ts` — catálogo, precios, categorías, WhatsApp, Instagram
- `navigation.ts` — links de navegación
- `contact.ts` — mensajes prearmados para WhatsApp
- `images.ts` — rutas de imágenes optimizadas

---

## Deploy

El build genera la carpeta `dist/`:

```bash
npm run build
```

Compatible con **Netlify**, **Vercel**, **Cloudflare Pages** y **GitHub Pages**.

Este repo se publica en GitHub Pages con el workflow `.github/workflows/deploy.yml`:

- `ASTRO_SITE=https://gasacher.github.io`
- `ASTRO_BASE=/Velitas-LunaV2`

En **Settings → Pages**, la fuente debe ser **GitHub Actions**.

---

## Próximos pasos posibles

- [ ] Deploy a producción + dominio custom
- [ ] Imágenes en WebP/AVIF con `<Picture />` de Astro
- [ ] Integración con Instagram Basic Display API (feed dinámico)
- [ ] Analytics y eventos de conversión (WhatsApp / formulario)
- [ ] i18n si la marca escala a otros mercados

---

## Licencia

Proyecto privado para **Velitas de la Luna**. Código disponible en este repositorio con fines de portfolio; las imágenes y la marca pertenecen a sus respectivos dueños.

---

Desarrollado por **Gabriela Sacher** · [Velitas-LunaV2](https://github.com/gasacher/Velitas-LunaV2)
