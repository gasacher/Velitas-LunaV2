import { asset } from '../utils/path';

/** Rutas de imágenes optimizadas para web (public/img/web/) */
export const images = {
  emblem: asset('/img/web/logo-nav.png'),
  logoWordmark: asset('/img/web/logo-wordmark.png'),
  logoWordmarkSm: asset('/img/web/logo-wordmark-sm.png'),
  favicon: asset('/img/isologotipo1_velitas.png'),

  heroHome: asset('/img/web/hero-home.jpg'),
  heroAlt: asset('/img/web/hero-alt.jpg'),

  products: {
    lunaLlena: asset('/img/web/velaluna_libro.jpg'),
    amor: asset('/img/web/velalila.jpg'),
    proteccion: asset('/img/web/velanegra.jpg'),
    equilibrio: asset('/img/web/velaverdeclaaro.jpg'),
    gratitud: asset('/img/web/velaverdeceleste.jpg'),
    claridad: asset('/img/web/velaceleste.jpg'),
    suenos: asset('/img/web/granada.jpg'),
    energia: asset('/img/web/vela_naranjajpg.jpg'),
    pazInterior: asset('/img/web/velaazul_libro.jpg'),
  },

  intentions: {
    lunar: asset('/img/web/magia_lunar.jpg'),
    amor: asset('/img/web/amor.jpg'),
    abundancia: asset('/img/transmutacion.jpeg'),
    proteccion: asset('/img/web/velanegra.jpg'),
  },

  pages: {
    nosotros: asset('/img/web/feria_velas_caja.jpg'),
    nosotrosAlt: asset('/img/web/nosotros.jpg'),
    comprar: asset('/img/web/dosvelasrosas.jpg'),
    comprarAlt: asset('/img/web/feria_ig.jpg'),
    catalogo: asset('/img/web/velaluna_libro.jpg'),
    catalogoAlt: asset('/img/web/velanaranja_libro.jpg'),
    contacto: asset('/img/web/hero-home.jpg'),
    contactoAlt: asset('/img/ritual_velaoscuros.jpeg'),
    faq: asset('/img/web/hero-home.jpg'),
    faqAlt: asset('/img/espadas.jpeg'),
  },

  rituals: [
    { src: asset('/img/ritual_diasoscuros.jpeg'), alt: 'Ritual en días oscuros', span: 'large' as const, position: 'center 30%' },
    { src: asset('/img/espadas.jpeg'), alt: 'Cartas y velas', position: 'center center' },
    { src: asset('/img/altar_velanegra.jpg'), alt: 'Altar con vela negra', span: 'tall' as const, position: 'center 40%' },
    { src: asset('/img/vela_ritual.jpeg'), alt: 'Vela en ritual', position: 'center center' },
    { src: asset('/img/transmutacion.jpeg'), alt: 'Ritual de transmutación', span: 'wide' as const, position: 'center 35%' },
    { src: asset('/img/velavioleta_libro.jpg'), alt: 'Vela violeta y libro', position: 'center center' },
  ],

  instagram: [
    { src: asset('/img/velanaranja_ig.jpeg'), alt: 'Vela naranja', position: 'center center' },
    { src: asset('/img/velarosa_ig.jpeg'), alt: 'Vela rosa', position: 'center center' },
    { src: asset('/img/samhain_ig.jpeg'), alt: 'Samhain', position: 'center center' },
    { src: asset('/img/web/feria_ig.jpg'), alt: 'Feria artesanal', position: 'center center' },
    { src: asset('/img/altar_velanegra.jpg'), alt: 'Altar con vela negra', position: 'center 40%' },
    { src: asset('/img/web/velanaranja_libro.jpg'), alt: 'Vela naranja y libro', position: 'center center' },
  ],
};
