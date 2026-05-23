import { useEffect, useRef } from 'react';
import ProfilePh from '../assets/ProfilePh.jpg';
import './About.css';

const TRAITS = [
  { icon: '⚡', label: 'Fast Learner', desc: 'Adapts quickly to new stacks and tools' },
  { icon: '🤖', label: 'AI-Augmented', desc: 'Integrates AI into every workflow' },
  { icon: '🔐', label: 'Security-aware', desc: 'JWT, RBAC & secure API design' },
  { icon: '🚀', label: 'Delivery-focused', desc: 'Clean code that ships and scales' },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="reveal">
          <p className="label section-label">— The Developer</p>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>About Me</h2>
          <div className="section-title-line"></div>
        </div>

        <div className="about-content">
          {/* Left: Image */}
          <div className="about-image reveal-left">
            <div className="profile-ring-wrapper">
              <div className="profile-ring"></div>
              <div className="profile-ring profile-ring--inner"></div>
              <div className="image-wrapper">
                <img src={ProfilePh} alt="Franco Santacatalina — Full Stack Developer" loading="lazy" />
              </div>
              <div className="profile-badge">
                <span className="badge-dot"></span>
                <span>Open to Work</span>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="about-text">
            <p className="about-description reveal-right">
              I'm a <strong>Full Stack Web Developer</strong>
              with a modern, AI-driven approach to software. I build{' '}
              <strong>scalable, production-ready applications</strong> with a sharp focus on code quality 
              and user experience that genuinely converts.
            </p>

            <p className="about-description reveal-right" style={{ transitionDelay: '0.1s' }}>
              My stack centers on <strong>Java & Spring Boot</strong> for robust backend architecture 
              and <strong>React</strong> for fluid, responsive frontends. I design RESTful APIs with JWT 
              security, model relational databases, and accelerate every phase of development through{' '}
              <strong>AI-augmented workflows</strong> — from multi-agent pipelines to local LLM tooling.
            </p>

            <p className="about-description reveal-right" style={{ transitionDelay: '0.2s' }}>
              Currently looking for my <strong>first professional role</strong> as a Junior Developer — 
              ready to contribute real value from day one while growing inside a high-performing team.
            </p>

            {/* Trait chips */}
            <div className="trait-grid reveal" style={{ transitionDelay: '0.3s' }}>
              {TRAITS.map((t) => (
                <div key={t.label} className="trait-chip" title={t.desc}>
                  <span className="trait-icon">{t.icon}</span>
                  <span className="trait-label">{t.label}</span>
                </div>
              ))}
            </div>

            <div className="about-buttons reveal" style={{ transitionDelay: '0.4s' }}>
              <a
                href="https://www.linkedin.com/in/franco-santacatalina-735347244/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Open to Work on LinkedIn"
              >
                <span className="btn-dot"></span>
                <span>Open to Work</span>
              </a>

              <a
                href="/download/CvSantacatalinaFranco.pdf"
                download
                className="btn btn-secondary"
                aria-label="Download CV"
              >
                <span>Download CV</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  width="18"
                  height="18"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
