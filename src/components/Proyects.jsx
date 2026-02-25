import './proyects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Gym Manager',
      description: 'Full-stack web application designed to manage gym clients through a complete CRUD system, providing a centralized and efficient solution to organize client data. Client information is stored in a relational database. The application is fully containerized with Docker, allowing easy setup and deployment across different environments. It follows a clear separation of concerns between front-end and back-end, ensuring scalability and maintainability. This project strengthened my full-stack development skills, including API integration, database management, clean code practices, version control with Git, and working with real-world data flows.',
      technologies: ['Java', 'TypeScipt', 'PostgreSQL', 'React', 'Docker'],
      link: 'https://github.com/FrancoV021/CrudFullstack',
    },
    {
      id: 2,
      title: 'Drag and Drop TaskList',
      description: 'Front-end application that allows users to manage tasks through an intuitive drag-and-drop interface, improving task organization and overall user experience. Tasks can be easily reordered by priority or workflow status using interactive UI elements, providing real-time visual feedback. This project focuses on state management, event handling, and component-based architecture in React, ensuring a smooth and maintainable UI. The project helped strengthen my skills in building dynamic user interfaces, implementing JavaScript-driven interactions, and creating clean, responsive layouts with CSS.',
      technologies: ['React', 'JavaScript','CSS'],
      link: 'https://github.com/FrancoV021/Proyecto-DragNdrop-'
    },
    {
      id: 3,
      title: 'Hotel Management',
      description: 'Full-stack web application designed to manage hotel operations, including users, reservations, and rooms through a complete CRUD system. The project features a secure authentication and authorization flow using JWT, role-based access control, and protected routes. Built with React, Vite, and Tailwind on the frontend, and Java with Spring Boot on the backend, it integrates RESTful APIs with a MySQL relational database. This project strengthened my skills in full-stack architecture, API design, authentication mechanisms, database modeling, and deployment-ready frontend and backend integration.',
      technologies: ['React', 'Java', 'JWT', 'Vite', 'Tailwind', 'MySql'],
      link: 'https://github.com/FrancoV021/Crud-Fullstack-Gestion-Hotel-DelRio',
      deployed: 'https://crud-fullstack-gestion-hotel-del-ri.vercel.app/',
    },
    {
      id: 4,
      title: 'Simple order management system',
      description: 'Simple application designed to manage fast food orders, providing an efficient workflow for creating, tracking, and processing orders. The backend is developed in Java and fully containerized with Docker, ensuring consistency across development and production environments. The application is deployed using Render for the backend and database, and Vercel for the frontend, enabling a complete cloud-based deployment. This project strengthened my understanding of full-stack architecture, containerization, deployment workflows, and environment configuration in real-world applications.',
      technologies: ['Docker', 'Vercel', 'JavaScript', 'Java'],
      link: 'https://github.com/FrancoV021/Crud-FullStack-FastEat'
    },
    {
      id: 5,
      title: 'Shopping Cart',
      description: 'Application built with React.js, designed to be consumed by a REST API. The project focuses on client-side state management, dynamic UI updates, and user interaction flows such as adding, removing, and updating products in the cart. Although this project implements only the client layer, it was designed with a clear separation of concerns and scalable architecture, simulating real-world frontend integration with backend services. This project strengthened my skills in React fundamentals, component-based architecture, state handling, and building frontend applications prepared for API-driven environments.',
      technologies: ['React.js', 'JavaScript', 'CSS ],
      link: 'https://github.com/FrancoV021/Proyecto-Carrito-de-compras',
    },
    {
      id: 6,
      title: 'Product Stock Flow',
      description: 'Full-stack web application developed to manage product inventory and stock flow. The application allows tracking, updating, and organizing products in a relational database, providing an efficient solution for inventory control. Built with React on the frontend and Java on the backend, it follows a clear separation between client and server, exposing RESTful APIs for data interaction. The project is fully containerized with Docker, ensuring consistent environments and simplified deployment. This project strengthened my skills in full-stack development, database modeling with PostgreSQL, API design, and scalable application architecture.',
      technologies: ['Java', 'Docker', 'React', 'PostgreSQL'],
      link: 'https://github.com/FrancoV021/PROYECTO-CRUD---fullstack-'
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>

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
                  aria-label="View deployed project"
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
                  aria-label="View repo in GitHub"
                >
                  CODE
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
