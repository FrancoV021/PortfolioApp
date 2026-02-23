import './FullStack.css';

export default function FullStack() {
  const skills = {
    frontend: {
      title: 'Frontend',
      technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
    },
    backend: {
      title: 'Backend',
      technologies: ['Node.js', 'Java', 'Spring Web', 'Spring Data JPA', 'Spring Security JWT', 'RESTful APIs'],
    },
    database: {
      title: 'Databases',
      technologies: ['MySQL', 'MySQL Workbench', 'PostgreSQL', 'PgAdmin', 'Data Model', 'Queries SQL'],
    },
    tools: {
      title: 'Tools and Methodologies',
      technologies: ['Git', 'GitHub', 'Visual Studio Code', 'IntelliJ IDEA', 'Postman', 'Docker', 'Vite', 'Maven'],
    },
    devops: {
      title: 'DevOps & Deployment',
      technologies: ['Vercel Deploy', 'Render Deploy', 'Docker', 'CMD Commands', 'PowerShell', 'Git Workflow'],
    },
    architecture: {
      title: 'Architecture & Patterns',
      technologies: ['Layered Architecture', 'Clean Code', 'SOLID Principles', 'Dessign Patterns', 'Scrum', 'Jira', 'Trello'],
    },
  };

  return (
    <section className="fullstack section">
      <div className="container">
        <h2 className="section-title">FULL STACK DEVELOPER</h2>
        <p className="fullstack-intro">
          I have mastered the full web development stack, from interactive frontend to robust backend, 
          with experience in databases and production deployment.
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
