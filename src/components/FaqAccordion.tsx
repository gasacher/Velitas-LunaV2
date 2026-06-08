import { useState } from 'react';
import { siteConfig } from '../data/products';
import { whatsappOrderLink } from '../data/contact';
import './FaqAccordion.css';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FaqItem[] = [
  {
    question: '¿Cómo realizo una compra?',
    answer: (
      <ol>
        <li>Elegí tus productos favoritos desde nuestro catálogo.</li>
        <li>
          Contactanos por{' '}
          <a href={whatsappOrderLink()} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          ,{' '}
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{' '}
          o por mail para hacer tu pedido.
        </li>
        <li>Coordinamos entrega o retiro y forma de pago.</li>
      </ol>
    ),
  },
  {
    question: '¿Qué formas de entrega tienen?',
    answer: (
      <ul>
        <li>Envíos por correo a todo el país</li>
        <li>Envíos por moto en CABA</li>
        <li>Retiro por punto en Congreso</li>
      </ul>
    ),
  },
  {
    question: '¿Qué medios de pago aceptan?',
    answer: (
      <ul>
        <li>Transferencia bancaria</li>
        <li>Mercado Pago</li>
        <li>Efectivo (solo en retiros)</li>
      </ul>
    ),
  },
  {
    question: '¿Las velas son artesanales?',
    answer: (
      <p>
        Sí. Cada vela es elaborada a mano con intención, materiales seleccionados y cuidado artesanal.
        Pequeñas variaciones en color o textura son parte de su carácter único.
      </p>
    ),
  },
  {
    question: '¿Cuánto duran las velas?',
    answer: (
      <p>
        Depende del tamaño y del uso, pero en general nuestras velas rinden entre 20 y 40 horas de
        combustión. Recomendamos quemarlas en sesiones de 2 a 4 horas para un mejor rendimiento.
      </p>
    ),
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="faq-accordion">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
            <button
              type="button"
              className="faq-item__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span className="faq-item__icon" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && <div className="faq-item__content">{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
