import { Radio } from 'lucide-react';
import ProfilePh from '../assets/ProfilePh.jpg';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">SOBRE MÍ</h2>

        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img src={ProfilePh} alt="Franco" />
              <div className="image-glow"></div>
            </div>
          </div>

          <div className="about-text">
            <p className="about-description">
              Soy Franco, un <i>desarrollador web Full Stack</i>, tambien complemento mi 
              formación de manera autodidacta, manteniéndome en constante 
              aprendizaje. Enfocado en la creación de 
              aplicaciones web modernas, escalables y orientadas a la experiencia 
              del usuario. Trabajo principalmente con React, JavaScript,
              y Java con Spring Boot, integrando APIs REST, autenticación con JWT y 
              manejo de bases de datos relacionales. 
            </p>

            <p className="about-description">
              Tengo experiencia construyendo proyectos aplicando buenas prácticas 
              de desarrollo, control de versiones con Git y metodologías 
              orientadas a código limpio y mantenible.
              Con muchas ganas de seguir adquriendo
              habilidades y comenzar mi <i>carrera en el mundo IT</i>. 
              Me apasiona construir proyectos reales, <i>desafiando lo que viene</i>. 
              Me considero alguien proactivo, curioso 
              y comprometido, me gusta trabajar en equipo. Busco mi primera oportunidad 
              como <b>Desarrollador Web Jr</b> donde pueda aportar valor al equipo y 
              tener la posibilidad de ser <i>mejor profesional</i> y mejor compañero.
            </p>
            <div className="about-buttons">
              <a href="https://www.linkedin.com/in/franco-santacatalina-735347244/" target='Linkedin-franco-santacatalina'>
              <button className="btn btn-primary" aria-label="Open to work">
                <Radio/>
                <span> OPEN TO WORK</span>
                  
                <div className="btn-animation"></div>
              </button>
              </a>

               <a href="/resume.pdf" download className="btn btn-secondary" aria-label="Download CV"> {/*aca agrgar cv .pdf /*} */}
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
