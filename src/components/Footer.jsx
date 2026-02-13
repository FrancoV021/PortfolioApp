import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: '→',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: '→',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: '→',
    },
    {
      name: 'Email',
      url: 'mailto:franhi02@hotmail.com',
      icon: '→',
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Franco Dev</h3>
            <p>Desarrollador Web Full Stack apasionado por crear experiencias digitales increíbles.</p>
          </div>

          <div className="footer-section">
            <h4>Redes Sociales</h4>
            <div className="social-links">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  <span>{link.name}</span>
                  <span className="icon">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Franco. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado con ❤️ por Franco</p>
        </div>
      </div>
    </footer>
  );
}
