import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', to: 'home' },
    { name: 'Projects', to: 'projects' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/icon/logo.png" alt="FranhiCode Logo" className="nav-logo-img" />
          <span className="nav-brand">FranhiCode</span>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={600}
              offset={-70}
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/franco-santacatalina-735347244/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            aria-label="Open to Work on LinkedIn"
          >
            <span className="nav-cta-dot"></span>
            Open to Work
          </a>
        </div>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
