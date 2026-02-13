import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">SOBRE MÍ</h2>

        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img src="/placeholder-photo.jpg" alt="Franco" />
              <div className="image-glow"></div>
            </div>
          </div>

          <div className="about-text">
            <p className="about-description">
              Soy un desarrollador web apasionado con experiencia en frontend y
              backend. Me especializo en crear aplicaciones web modernas, rápidas
              y escalables. Tengo un profundo conocimiento en React, Node.js,
              Java con Spring Boot y gestión de bases de datos.
            </p>

            <p className="about-description">
              Me encanta resolver problemas complejos y transformar diseños en
              experiencias interactivas. Soy proactivo, autodidacta y siempre
              estoy aprendiendo nuevas tecnologías y mejorando mis habilidades.
            </p>

            <div className="about-buttons">
              <button className="btn btn-primary" aria-label="Open to work">
                <span>OPEN TO WORK</span>
                <div className="btn-animation"></div>
              </button>

              <a href="/resume.pdf" download className="btn btn-secondary" aria-label="Download CV">
                <span>DESCARGAR CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <div className="btn-animation"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
