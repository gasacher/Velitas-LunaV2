import { images } from './images';

export type ProductCategory = 'lunar' | 'amor' | 'proteccion' | 'equilibrio' | 'otros';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  featured?: boolean;
}

export const categoryLabels: Record<ProductCategory, string> = {
  lunar: 'Lunar',
  amor: 'Amor',
  proteccion: 'Protección',
  equilibrio: 'Equilibrio',
  otros: 'Ritual',
};

export const categoryFilters: { id: ProductCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'lunar', label: 'Lunar' },
  { id: 'amor', label: 'Amor' },
  { id: 'proteccion', label: 'Protección' },
  { id: 'equilibrio', label: 'Equilibrio' },
  { id: 'otros', label: 'Ritual' },
];

export const BASE_PRICE = 8000;

export const products: Product[] = [
  {
    id: 'luna-llena',
    name: 'Vela Luna Llena',
    description: 'Con aroma a jazmín y lavanda, ideal para rituales de cierre y manifestación.',
    price: BASE_PRICE,
    image: images.products.lunaLlena,
    category: 'lunar',
    featured: true,
  },
  {
    id: 'intencion-amor',
    name: 'Vela Intención Amor',
    description: 'Con pétalos de rosa y cuarzo rosa, para abrir el corazón y cultivar vínculos.',
    price: BASE_PRICE,
    image: images.products.amor,
    category: 'amor',
    featured: true,
  },
  {
    id: 'proteccion',
    name: 'Vela Protección',
    description: 'Con romero y turmalina negra. Limpia espacios energéticos y crea un escudo.',
    price: BASE_PRICE,
    image: images.products.proteccion,
    category: 'proteccion',
    featured: true,
  },
  {
    id: 'equilibrio',
    name: 'Vela Equilibrio',
    description: 'Infundida con salvia y amatista. Para armonizar cuerpo y mente.',
    price: BASE_PRICE,
    image: images.products.equilibrio,
    category: 'equilibrio',
  },
  {
    id: 'gratitud',
    name: 'Vela Gratitud',
    description: 'Con esencia de vainilla y flores secas. Cultiva la gratitud diaria.',
    price: BASE_PRICE,
    image: images.products.gratitud,
    category: 'otros',
  },
  {
    id: 'claridad',
    name: 'Vela Claridad',
    description: 'Aroma a eucalipto y cuarzo blanco. Para despejar la mente y enfocar.',
    price: BASE_PRICE,
    image: images.products.claridad,
    category: 'otros',
  },
  {
    id: 'suenos',
    name: 'Vela Sueños',
    description: 'Con lavanda y manzanilla. Ideal para un descanso profundo y reparador.',
    price: BASE_PRICE,
    image: images.products.suenos,
    category: 'lunar',
  },
  {
    id: 'energia',
    name: 'Vela Energía',
    description: 'Con cítricos y jengibre. Para días de vitalidad, acción y motivación.',
    price: BASE_PRICE,
    image: images.products.energia,
    category: 'otros',
  },
  {
    id: 'paz-interior',
    name: 'Vela Paz Interior',
    description: 'Sándalo y rosa blanca. Para conectar con tu centro y encontrar calma.',
    price: BASE_PRICE,
    image: images.products.pazInterior,
    category: 'equilibrio',
    featured: true,
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export { images as galleryImages };

export const ritualImages = images.rituals;
export const instagramImages = images.instagram;

export const intentions = [
  { name: 'Magia lunar', image: images.intentions.lunar, slug: 'lunar' },
  { name: 'Amor', image: images.intentions.amor, slug: 'amor' },
  { name: 'Abundancia', image: images.intentions.abundancia, slug: 'otros' },
  { name: 'Protección', image: images.intentions.proteccion, slug: 'proteccion' },
];

export const siteConfig = {
  name: 'Velitas de la Luna',
  tagline: 'Magia para empoderarte',
  description:
    'Velas artesanales con intención. Herramientas energéticas para acompañarte en tus rituales diarios.',
  instagram: 'https://www.instagram.com/velitas.luna/',
  /** Número con código de país, sin + ni espacios */
  whatsapp: '5491132008606',
  email: 'hola@velitasluna.com',
};

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(price);
}
