import React, { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Real Time Analytics Platform",
      description: "Analytics tool that allows users to configure telemetry channels to send and recieve live data",
      tech: ["Go", "PostgreSQL", "Kubernetes", "Docker"],
      status: "PROTOTYPE",
      year: "2025"
    },
    {
      title: "NBA Stats ETL",
      description: "ETL pipeline for transforming NBA kaggle datasets into player stats used in game simulations",
      tech: ["Python", "Airflow", "PostgreSQL"],
      status: "IN DEVELOPMENT",
      year: "2024"
    },
    {
      title: "NBA 1v1 Simulation",
      description: "NBA player 1v1 simulation",
      tech: ["JavaScript", "PostgreSQL", "Nest.js", "React.js"],
      status: "LIVE",
      year: "2023"
    },
    {
      title: "Sequential Test Runner",
      description: "API testing tool that allows users to run a series of API requests in a single test to validate e2e flow of applications",
      tech: ["Go", "JavaScript", "PostgreSQL", "React.js"],
      status: "IN DEVELOPMENT",
      year: "2025"
    },
    {
      title: "Ant Colony Simulation",
      description: "Ant colony simulation engine using boids and quadtrees",
      tech: ["C++", "JavaScript", "SFML"],
      status: "IN DEVELOPMENT",
      year: "2025"
    },
    {
      title: "Pokemon TCG",
      description: "Allows pokemon card collectors to track their decks and view the value of cards via pokemontcg apis",
      tech: ["Go", "React.js", "MongoDB"],
      status: "PROTOTYPE",
      year: "2023"
    },
    {
      title: "Basketball reference web scrapper",
      description: "Player stat scrapping program formerly used to provide player stats to 1v1 simulation",
      tech: ["Python"],
      status: "COMPLETE",
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