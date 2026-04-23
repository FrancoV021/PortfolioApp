import { Radio } from 'lucide-react';
import ProfilePh from '../assets/ProfilePh.jpg';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>

        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img src={ProfilePh} alt="Franco" />
              <div className="image-glow"></div>
            </div>
          </div>

          <div className="about-text">
            <p className="about-description">
              I am a <b>Full Stack Web Developer</b> who bridges the gap between the rigor of university education and a disruptive approach based on <i>AI integration</i>. I specialize in building scalable, modern applications, prioritizing code quality and high-level user experiences.
            </p>

            <p className="about-description">
              My development ecosystem focuses on solid architectures using <b>Java and Spring Boot</b> for the backend, complemented by dynamic and responsive interfaces in <b>React</b>. I have hands-on experience in RESTful API design, JWT security, and relational database management, optimizing every stage of the software development life cycle through <b>AI-augmented workflows</b> to ensure efficiency and reliability.
            </p>

            <p className="about-description">
              I am currently seeking my <b>first professional challenge</b> as a Junior Web Developer, committed to delivering immediate value to a technical team while continuing to evolve within high-demand technological environments.
            </p>

            <div className="about-buttons">
              <a href="https://www.linkedin.com/in/franco-santacatalina-735347244/" target='Linkedin-franco-santacatalina'>
                <button className="btn btn-primary" aria-label="Open to work">
                  <Radio />
                  <span> OPEN TO WORK</span>
                  <div className="btn-animation"></div>
                </button>
              </a>

              <a href="/download/CvSantacatalinaFranco.pdf" download className="btn btn-secondary" aria-label="Download CV">
                <span>DOWNLOAD CV</span>
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
