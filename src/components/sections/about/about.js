import React from 'react'
import { Code, Database } from 'lucide-react'
import './about.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-intro">
            <h2 className="about-title">
              [ABOUT_ME]
            </h2>
            <div className="about-list">
              <p>
                &gt; 2+ years building scalable systems
              </p>
              <p>
                &gt; Proficient in Go and cloud native technologies
              </p>
              <p>
                &gt; Experienced with Docker, Kubernetes, and observability tools
              </p>
            </div>
          </div>

          <div className="about-content">
            <div className="about-cards">
              <div className="about-card">
                <div className="card-header">
                  <Code size={24} className="card-icon" />
                  <span className="card-label">PLATFORM</span>
                </div>
                <h3 className="card-title">Developer Tooling</h3>
                <p className="card-description">
                  Building tools, CLIs, and services that improve the developer experience
                  and support scalable system development.
                </p>
              </div>

              <div className="about-card">
                <div className="card-header">
                  <Database size={24} className="card-icon" />
                  <span className="card-label">BACKEND</span>
                </div>
                <h3 className="card-title">System Architecture</h3>
                <p className="card-description">
                  Designing scalable APIs and cloud infrastructure
                  for high-performance, resilient applications.
                </p>
              </div>
            </div>


            <div className="status-card">
              <div className="status-label">CURRENT_STATUS</div>
              <div className="status-content">
                <div className="status-indicator"></div>
                <span className="status-text">Available for new opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About