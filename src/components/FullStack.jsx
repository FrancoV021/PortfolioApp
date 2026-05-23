import { useEffect, useRef } from 'react';
import './FullStack.css';

const SKILLS = {
  frontend: {
    title: 'Frontend',
    icon: '🖥️',
    technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React', 'Tailwind CSS', 'Bootstrap', 'Vite', 'Responsive Design'],
  },
  backend: {
    title: 'Backend',
    icon: '⚙️',
    technologies: ['Node.js', 'Java', 'Spring Web', 'Spring Data JPA', 'Spring Security', 'JWT', 'RESTful APIs'],
  },
  database: {
    title: 'Databases',
    icon: '🗄️',
    technologies: ['MySQL', 'MySQL Workbench', 'PostgreSQL', 'PgAdmin', 'Data Modeling', 'SQL Queries'],
  },
  tools: {
    title: 'Tools & Methodologies',
    icon: '🛠️',
    technologies: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Insomnia', 'Docker', 'Maven'],
  },
  devops: {
    title: 'DevOps & Deployment',
    icon: '🚀',
    technologies: ['Vercel', 'Render', 'Railway', 'Docker', 'Git Workflow', 'CMD', 'PowerShell'],
  },
  architecture: {
    title: 'Architecture & Patterns',
    icon: '🏗️',
    technologies: ['Layered Architecture', 'Clean Code', 'SOLID Principles', 'Design Patterns', 'Scrum', 'Jira', 'Trello'],
  },
  ai: {
    title: 'AI Integration',
    icon: '🤖',
    technologies: ['Claude Code', 'OpenCode', 'MCP Protocols', 'Antigravity', 'Ollama', 'LM Studio', 'CrewAI', 'n8n', 'Pinecone', 'Cursor'],
    featured: true,
  },
};

export default function FullStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-card').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const regularSkills = Object.entries(SKILLS).filter(([, v]) => !v.featured);
  const aiSkill = Object.entries(SKILLS).find(([, v]) => v.featured);

  return (
    <section className="fullstack section" ref={sectionRef}>
      <div className="container">
        <p className="label section-label">— Expertise</p>
        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>
          Full Stack Developer
        </h2>
        <div className="section-title-line"></div>

        <p className="fullstack-intro">
          Mastered the complete web development stack — from pixel-perfect frontends to 
          distributed backend architectures — with AI-augmented workflows accelerating every phase.
        </p>

        <div className="skills-grid">
          {regularSkills.map(([key, category]) => (
            <div key={key} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon" aria-hidden="true">{category.icon}</span>
                <h3 className="skill-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.technologies.map((tech, idx) => (
                  <span key={idx} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {aiSkill && (
          <div className="skill-card skill-card--ai">
            <div className="skill-card-header">
              <span className="skill-icon" aria-hidden="true">{aiSkill[1].icon}</span>
              <h3 className="skill-title">{aiSkill[1].title}</h3>
              <span className="ai-featured-badge">Featured</span>
            </div>
            <div className="skill-tags">
              {aiSkill[1].technologies.map((tech, idx) => (
                <span key={idx} className="skill-tag skill-tag--ai">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
