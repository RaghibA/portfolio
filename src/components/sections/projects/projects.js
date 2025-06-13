import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Neural Network Dashboard",
      description: "Real-time ML model monitoring system with advanced analytics and performance metrics visualization.",
      tech: ["React", "TensorFlow", "WebGL", "Node.js"],
      status: "PRODUCTION",
      year: "2024"
    },
    {
      title: "Quantum Computing Simulator",
      description: "Browser-based quantum circuit simulator with drag-and-drop interface and state visualization.",
      tech: ["Vue.js", "WebAssembly", "Python", "Docker"],
      status: "BETA",
      year: "2024"
    },
    {
      title: "Blockchain Analytics Engine",
      description: "High-performance cryptocurrency transaction analysis tool with real-time monitoring capabilities.",
      tech: ["Go", "PostgreSQL", "Redis", "GraphQL"],
      status: "LIVE",
      year: "2023"
    },
    {
      title: "Neural Network Dashboard",
      description: "Real-time ML model monitoring system with advanced analytics and performance metrics visualization.",
      tech: ["React", "TensorFlow", "WebGL", "Node.js"],
      status: "PRODUCTION",
      year: "2024"
    },
    {
      title: "Quantum Computing Simulator",
      description: "Browser-based quantum circuit simulator with drag-and-drop interface and state visualization.",
      tech: ["Vue.js", "WebAssembly", "Python", "Docker"],
      status: "BETA",
      year: "2024"
    },
    {
      title: "Blockchain Analytics Engine",
      description: "High-performance cryptocurrency transaction analysis tool with real-time monitoring capabilities.",
      tech: ["Go", "PostgreSQL", "Redis", "GraphQL"],
      status: "LIVE",
      year: "2023"
    }
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">
          [FEATURED_PROJECTS]
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              onMouseMove={handleMouseMove}
            >
              <div className="project-header">
                <div className="project-meta">
                  <div className="project-year">{project.year}</div>
                  <div className="project-status">
                    [{project.status}]
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="project-footer">
                <button className="project-view-btn">
                  <span>VIEW</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;