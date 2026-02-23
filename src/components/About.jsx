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
              I am Franco, a <i>Full Stack Web Developer</i>, who also complements my
              professional training through self-directed learning, staying in constant
              development. I am focused on building modern, scalable web applications
              with a strong emphasis on user experience. I primarily work with React,
              JavaScript, and Java with Spring Boot, integrating REST APIs, JWT-based
              authentication, and relational database management.
            </p>

            <p className="about-description">
              I have experience building projects by applying best development practices,
              version control with Git, and methodologies focused on clean and maintainable
              code. I am highly motivated to continue developing my skills and to begin my
              <i>career in the IT industry</i>. I consider myself proactive, curious, and
              committed, always <i>challenging what´s comming</i>. I enjoy working in
              team environments and I am seeking my first opportunity as a
              <b>Junior Web Developer</b>, where I can contribute value to the team and
              continue growing as a <i>better professional</i>.
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
