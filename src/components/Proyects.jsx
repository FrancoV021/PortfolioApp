import { useEffect, useRef } from 'react';
import './proyects.css';

const PROJECTS = [
  {
    id: 1,
    num: '01',
    title: 'OmniStock SaaS',
    tagline: 'Enterprise Inventory & Sales Platform',
    description:
      'Multi-tenant SaaS bridging physical retail and e-commerce. Role-Based Access Control (RBAC) for admin oversight and customer purchasing. Built using AI multi-agent orchestration with Ollama and OpenCode.',
    technologies: ['React', 'Java', 'PostgreSQL', 'Docker', 'Tailwind', 'OpenCode', 'Ollama'],
    link: 'https://github.com/FrancoV021/Crud-FullStack-FastEat',
    aiPowered: true,
  },
  {
    id: 2,
    num: '02',
    title: 'Hotel Management',
    tagline: 'Full-Stack Reservation System',
    description:
      'Complete hotel operations manager with JWT auth, RBAC, and protected routes. Full CRUD for users, rooms, and reservations. RESTful API + MySQL database.',
    technologies: ['React', 'Java', 'Spring Boot', 'JWT', 'MySQL', 'Tailwind', 'Vite'],
    link: 'https://github.com/FrancoV021/Crud-Fullstack-Gestion-Hotel-DelRio',
    deployed: 'https://crud-fullstack-gestion-hotel-del-ri.vercel.app/',
  },
  {
    id: 3,
    num: '03',
    title: 'Gym Manager',
    tagline: 'Client Management App',
    description:
      'Full-stack gym client management with Docker containerization. PostgreSQL relational database, clean frontend/backend separation and RESTful API design.',
    technologies: ['Java', 'TypeScript', 'React', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/FrancoV021/CrudFullstack',
  },
  {
    id: 4,
    num: '04',
    title: 'Dental Clinic System',
    tagline: 'AI-Augmented Healthcare Platform',
    description:
      'Healthcare management built via AI-Augmented Development — multi-agents coordinated through MCP protocols, local Ollama models, and OpenCode. Appointments, patients, and staff in one system.',
    technologies: ['Java', 'React', 'PostgreSQL', 'OpenCode', 'MCP', 'Ollama'],
    link: 'https://github.com/FrancoV021/dental-app-ai-agents',
    aiPowered: true,
  },
  {
    id: 5,
    num: '05',
    title: 'Shopping Cart',
    tagline: 'React Frontend — API-Ready',
    description:
      'Component-based shopping cart built with React.js, designed for API integration. Focused on state management, dynamic UI, and scalable frontend architecture.',
    technologies: ['React.js', 'JavaScript', 'CSS', 'REST API'],
    link: 'https://github.com/FrancoV021/Proyecto-Carrito-de-compras',
  },
  {
    id: 6,
    num: '06',
    title: 'Product Stock Flow',
    tagline: 'Inventory Control System',
    description:
      'Dockerized full-stack inventory application. Product tracking and stock flow management with PostgreSQL, RESTful APIs, and clean architecture separation.',
    technologies: ['Java', 'React', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/FrancoV021/PROYECTO-CRUD---fullstack-',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.project-row').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -80px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="container">
        <p className="label section-label">— Selected Work</p>
        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>Projects</h2>
        <div className="section-title-line"></div>

        <div className="projects-list">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-row">
              <div className="project-num">{project.num}</div>

              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.aiPowered && (
                    <span className="ai-badge" title="Built with AI-Augmented workflow">
                      🤖 AI-Powered
                    </span>
                  )}
                </div>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {project.deployed && (
                  <a
                    href={project.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link--demo"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Demo
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link--code"
                  aria-label={`View source code of ${project.title} on GitHub`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
