import { useState, type FormEvent } from 'react';
import './ContactForm.css';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get('nombre') ?? '');
    const email = String(data.get('email') ?? '');
    const mensaje = String(data.get('mensaje') ?? '');

    const body = encodeURIComponent(
      `Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`
    );
    const mailto = `mailto:hola@velitasluna.com?subject=${encodeURIComponent('Consulta desde la web')}&body=${body}`;

    window.location.href = mailto;
    setStatus('success');
    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" required autoComplete="name" />
      </div>

      <div className="contact-form__field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required autoComplete="email" />
      </div>

      <div className="contact-form__field">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows={5} required />
      </div>

      <button
        type="submit"
        className="btn btn--primary contact-form__submit"
        disabled={status === 'sending'}
      >
        Enviar mensaje
      </button>

      {status === 'success' && (
        <p className="contact-form__feedback contact-form__feedback--success" role="status">
          Se abrió tu cliente de correo. Si no aparece, escribinos por{' '}
          <a href="https://www.instagram.com/velitas.luna/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          .
        </p>
      )}
    </form>
  );
}
