import { siteConfig } from './products';

export function whatsappOrderLink(productName?: string): string {
  const message = productName
    ? `Hola! Quiero consultar por la vela "${productName}" de Velitas de la Luna 🕯️`
    : 'Hola! Quiero hacer un pedido en Velitas de la Luna 🕯️';

  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const hasWhatsApp = Boolean(siteConfig.whatsapp);
