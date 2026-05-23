import { useState, useEffect, useRef } from 'react';
import './Contact.css';
import { Mail, MapPin, Phone } from 'lucide-react';

const CONTACT_INFO = [
  {
    id: 1,
    title: 'Email',
    value: 'franhi02@hotmail.com',
    icon: <Mail size={20} />,
    link: 'mailto:franhi02@hotmail.com',
  },
  {
    id: 2,
    title: 'Phone',
    value: '+54 9 11 5386-8541',
    icon: <Phone size={20} />,
    link: 'tel:+5491153868541',
  },
  {
    id: 3,
    title: 'Location',
    value: 'San Martín, Buenos Aires',
    icon: <MapPin size={20} />,
    link: '#map',
  },
];

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/FrancoV021',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/franco-santacatalina-735347244/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/franvazquez_ok/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:franhi02@hotmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <p className="label section-label">— Get in touch</p>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>
            Contact
          </h2>
          <div className="section-title-line"></div>
        </div>

        <div className="contact-wrapper">
          {/* Left column: info + socials */}
          <div className="contact-left">
            <p className="contact-intro reveal">
              I'm actively looking for my first professional role as a Junior Developer.
              Whether you have an opportunity, a question, or just want to connect —
              my inbox is always open.
            </p>

            <div className="contact-info">
              {CONTACT_INFO.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  className="info-card reveal"
                  target={info.id !== 3 ? '_blank' : '_self'}
                  rel={info.id !== 3 ? 'noopener noreferrer' : ''}
                  aria-label={info.title}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                  <div className="arrow-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="contact-socials reveal">
              <p className="label" style={{ marginBottom: '0.75rem' }}>Find me on</p>
              <div className="social-row">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    aria-label={s.name}
                    title={s.name}
                  >
                    {s.icon}
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: form */}
          <form className="contact-form reveal-right" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-label="Name"
                />
                <div className="form-underline"></div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-label="Email"
                />
                <div className="form-underline"></div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject" className="form-label">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Job opportunity / Collaboration / Hello"
                value={formData.subject}
                onChange={handleChange}
                required
                aria-label="Subject"
              />
              <div className="form-underline"></div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about the role, project, or just say hi..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Message"
              ></textarea>
              <div className="form-underline"></div>
            </div>

            <button type="submit" className="submit-btn" id="contact-submit-btn">
              <span>Send Message</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>

            {submitted && (
              <div className="success-message" role="status">
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>

        <div className="map-container" id="map">
          <iframe
            title="San Martín, Buenos Aires"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0184789865644!2d-58.38703!3d-34.1732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca82c2eb6c7dd%3A0x1c1c1c1c1c1c1c1c!2sSan%20Mart%C3%ADn%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '12px', filter: 'invert(90%) hue-rotate(180deg)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
