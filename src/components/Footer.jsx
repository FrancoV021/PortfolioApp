import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/FrancoV021',
      icon: '→',
    },
    {
      name: 'LinkedIn',
      url: 'www.linkedin.com/in/franco-santacatalina-735347244',
      icon: '→',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/franvazquez_ok/',
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
            <h3>FranhiCode</h3>
            <p>Desarrollador Web Full Stack Jr con muchas ganas de sumar y aprender del mundo IT.</p>
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
          <p>&copy; {currentYear} Franhicode.</p>
          <p>Diseñado y desarrollado con ❤️ por Franco</p>
        </div>
      </div>
    </footer>
  );
}
