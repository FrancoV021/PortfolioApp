import './proyects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Gym Manager',
      description: 'Aplicacion que implementa funciones CRUD, para registrar clientes de un gym.',
      technologies: ['Java', 'TypeScipt', 'PostgreSQL', 'React', 'Docker'],
      link: 'https://github.com/FrancoV021/CrudFullstack',
    },
    {
      id: 2,
      title: 'Drag and Drop TaskList',
      description: 'Lista de tareas implementando "Drag and Drop".',
      technologies: ['React', 'JavaScript'],
      link: 'https://github.com/FrancoV021/Proyecto-DragNdrop-'
    },
    {
      id: 3,
      title: 'Hotel Management',
      description: 'App para la gestion de un hotel, inplementa funciones CRUD para administrar Usuarios, Reservas y Habitaciones',
      technologies: ['React', 'Springboot', 'Java', 'JWT', 'Vite', 'Tailwind', 'MySql'],
      link: 'https://github.com/FrancoV021/Crud-Fullstack-Gestion-Hotel-DelRio',
      deployed: 'https://crud-fullstack-gestion-hotel-del-ri.vercel.app/',
    },
    {
      id: 4,
      title: 'Simple order management system',
      description: 'Sistema de Gestión de Pedidos Aplicación simple, para gestión de pedidos de comida rápida.',
      technologies: ['Docker', 'Vercel', 'JavaScript', 'Java'],
      link: 'https://github.com/FrancoV021/Crud-FullStack-FastEat'
    },
    {
      id: 5,
      title: 'Shopping Cart',
      description: 'Frontend de carrito de compras en React.js que implementa un api',
      technologies: ['React.js', 'API'],
      link: 'https://github.com/FrancoV021/Proyecto-Carrito-de-compras',
    },
    {
      id: 6,
      title: 'StockFLow de productos',
      description: 'App web gestion de inventario de productos',
      technologies: ['Java', 'Docker', 'React', 'PostgreSQL'],
      link: 'https://github.com/FrancoV021/PROYECTO-CRUD---fullstack-'
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">PROYECTOS</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">

                 {project.deployed && (
                  
                
                <a
                  href={project.deployed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link deployed"
                  aria-label="Ver proyecto desplegado"
                >
                  DEMO
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    width="18"
                    height="18"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                )}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link repo"
                  aria-label="Ver repositorio en GitHub"
                >
                  CÓDIGO
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="18"
                    height="18"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>

              <div className="project-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
