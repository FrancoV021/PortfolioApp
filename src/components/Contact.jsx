import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:franhi02@hotmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      id: 1,
      title: 'EMAIL',
      value: 'franhi02@hotmail.com',
      icon: '✉',
      link: 'mailto:franhi02@hotmail.com',
    },
    {
      id: 2,
      title: 'TELÉFONO',
      value: '+54 9 11 2345 6789',
      icon: '☎',
      link: 'tel:+5491123456789',
    },
    {
      id: 3,
      title: 'UBICACIÓN',
      value: 'San Martín, Buenos Aires',
      icon: '📍',
      link: '#map',
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">CONTACTO</h2>

        <div className="contact-wrapper">
          <div className="contact-info">
            {contactInfo.map((info) => (
              <a
                key={info.id}
                href={info.link}
                className="info-card"
                target={info.id !== 3 ? '_blank' : '_self'}
                rel={info.id !== 3 ? 'noopener noreferrer' : ''}
                aria-label={info.title}
              >
                <div className="info-icon">{info.icon}</div>
                <div className="info-content">
                  <h4>{info.title}</h4>
                  <p>{info.value}</p>
                </div>
                <div className="arrow-icon">→</div>
              </a>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Nombre"
              />
              <div className="form-underline"></div>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Email"
              />
              <div className="form-underline"></div>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
                required
                aria-label="Asunto"
              />
              <div className="form-underline"></div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tu mensaje"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Mensaje"
              ></textarea>
              <div className="form-underline"></div>
            </div>

            <button type="submit" className="submit-btn">
              <span>ENVIAR MENSAJE</span>
              <div className="btn-animation"></div>
            </button>

            {submitted && <div className="success-message">¡Mensaje enviado correctamente!</div>}
          </form>
        </div>

        <div className="map-container" id="map">
          <iframe
            title="San Martín, Buenos Aires"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0184789865644!2d-58.38703!3d-34.1732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca82c2eb6c7dd%3A0x1c1c1c1c1c1c1c1c!2sSan%20Mart%C3%ADn%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
