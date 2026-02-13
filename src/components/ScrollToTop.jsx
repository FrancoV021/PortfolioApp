import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="scroll-to-top-button"
          aria-label="Volver al inicio"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            width="24"
            height="24"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </Link>
      )}
    </div>
  );
}
