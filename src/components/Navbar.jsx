import { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: 'HOME', to: 'home' },
    { name: 'PROJECTS', to: 'projects' },
    { name: 'ABOUT ME', to: 'about' },
    { name: 'CONTACT', to: 'contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>FranhiDev</h1>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
        </div>
      </div>
    </nav>
  );
}
