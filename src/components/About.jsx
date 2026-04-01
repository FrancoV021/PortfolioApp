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
              I am Franco, a <b>Full Stack Web Developer</b> who balances formal university education with an <i>AI-driven development approach.</i> I specialize in building modern, scalable web applications with a strong focus on high-quality user experience and clean, maintainable code.
            </p>

            <p className="about-description">
              My technical stack includes frontend development with <b>React and JavaScript</b> to create responsive interfaces, and backend architecture using <b>Java and Spring Boot.</b> I have hands-on experience building RESTful APIs, implementing <i>JWT-based security,</i> and managing relational databases, all while leveraging <b>AI-augmented workflows</b> to optimize efficiency and code reliability.
            </p>

            <p className="about-description">
              I am currently seeking my <b>first professional challenge</b> in the IT industry as a <i>Junior Web Developer.</i> I am a proactive, curious, and committed professional, eager to contribute value to a development team and continue evolving alongside industry experts.
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
