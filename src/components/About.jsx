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
              I am Franco, a <i>Full Stack Web Developer,</i> i complements my formal 
              education with continuous self-directed learning. I am passionate about 
              building modern, scalable web applications with a strong focus on user 
              experience and clean, maintainable code. I enjoy working on real-world 
              projects that challenge me and allow me to apply and strengthen my 
              technical skills.
            </p>

            <p className="about-description">
             Throughout my learning journey, I have gained experience in frontend 
             development using React and JavaScript, creating responsive and dynamic user 
             interfaces. On the backend, I work with Java and Spring Boot to build RESTful 
             APIs, implement JWT-based authentication and authorization, and manage 
             relational databases. I also have experience with version control using Git 
             and deploying applications to production environments.
            </p>

            <p className="about-description">
             I am currently seeking <i>my first professional experience</i> in the IT industry as
             a <i>Junior Web Developer,</i> where I can contribute value to a team, continue 
             learning from experienced professionals, and grow both technically and 
             professionally. I consider myself proactive, curious, and committed, and I enjoy 
             collaborating in team environments while constantly pushing myself to improve.
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
