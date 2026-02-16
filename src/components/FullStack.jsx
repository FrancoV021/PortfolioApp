import './FullStack.css';

export default function FullStack() {
  const skills = {
    frontend: {
      title: 'Frontend',
      technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
    },
    backend: {
      title: 'Backend',
      technologies: ['Node.js', 'Express', 'Java', 'Spring Web', 'Spring Data JPA', 'Spring Security JWT', 'RESTful APIs'],
    },
    database: {
      title: 'Base de Datos',
      technologies: ['MySQL', 'MySQL Workbench', 'PostgreSQL', 'PgAdmin', 'Modelado de datos', 'Queries SQL'],
    },
    tools: {
      title: 'Herramientas y Metodologías',
      technologies: ['Git', 'GitHub', 'Visual Studio Code', 'IntelliJ IDEA', 'Postman', 'Docker', 'Vite', 'Maven'],
    },
    devops: {
      title: 'DevOps & Deployment',
      technologies: ['Vercel Deploy', 'Render Deploy', 'Docker', 'Comandos CMD', 'PowerShell', 'Git Workflow'],
    },
    architecture: {
      title: 'Arquitectura & Patrones',
      technologies: ['Arquitectura en Capas', 'Clean Code', 'SOLID Principles', 'Patrones de Diseño', 'Scrum', 'Jira', 'Trello'],
    },
  };

  return (
    <section className="fullstack section">
      <div className="container">
        <h2 className="section-title">FULL STACK DEVELOPER</h2>
        <p className="fullstack-intro">
          Domino el stack completo de desarrollo web, desde el frontend interactivo hasta el backend robusto, con
          experiencia en bases de datos y deployment en producción.
        </p>

        <div className="skills-grid">
          {Object.entries(skills).map(([key, category]) => (
            <div key={key} className="skill-card">
              <h3 className="skill-title">{category.title}</h3>
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
      </div>
    </section>
  );
}
