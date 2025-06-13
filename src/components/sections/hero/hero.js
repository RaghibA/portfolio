import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Terminal } from 'lucide-react';
import './hero.css';

const Hero = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const [barData, setBarData] = useState([]);
  const [waveOffset, setWaveOffset] = useState(0);

  useEffect(() => {
    // Generate initial data points for line chart
    const initialPoints = Array.from({ length: 20 }, (_, i) => 
      30 + Math.sin(i * 0.3) * 15 + Math.random() * 10
    );
    setDataPoints(initialPoints);

    // Generate initial bar data
    const initialBars = Array.from({ length: 8 }, () => 
      20 + Math.random() * 60
    );
    setBarData(initialBars);

    // Update data points every 2 seconds
    const dataTimer = setInterval(() => {
      setDataPoints(prev => {
        const newPoints = [...prev.slice(1)];
        const lastPoint = newPoints[newPoints.length - 1] || 50;
        const nextPoint = Math.max(10, Math.min(90, 
          lastPoint + (Math.random() - 0.5) * 20
        ));
        newPoints.push(nextPoint);
        return newPoints;
      });

      // Update bar data
      setBarData(prev => 
        prev.map(() => 20 + Math.random() * 60)
      );
    }, 2000);

    // Wave animation timer
    const waveTimer = setInterval(() => {
      setWaveOffset(prev => (prev + 1) % 100);
    }, 100);

    return () => {
      clearInterval(dataTimer);
      clearInterval(waveTimer);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-terminal">
              <div className="terminal-path">
                <Terminal size={16} />
                <span>~/portfolio/raghib-aftab</span>
              </div>
              <div className="terminal-command">
                $ whoami
              </div>
            </div>
            
            <h1 className="hero-title">
              RAGHIB<br />
              <span className="hero-name-accent">AFTAB</span>
            </h1>
            
            <div className="hero-description">
              <p className="hero-role">
                &gt; Software Developer
              </p>
              <p className="hero-bio">
                Building next-generation web applications with cutting-edge technologies. 
                Specializing in scalable architectures and performance optimization.
              </p>
            </div>
            
            <div className="hero-actions">
              <button className="hero-cta-button">
                [VIEW_PROJECTS]
              </button>
              
              <div className="hero-social-links">
                <a href="#" className="social-link">
                  <Github size={18} />
                </a>
                <a href="#" className="social-link">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="social-link">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stats-header">
              <div className="status-indicator"></div>
              <span className="stats-title">[OVERVIEW]</span>
            </div>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              
              {/* First chart - Line Chart (Original) */}
              <div className="stat-item chart-stat">
                <div className="mini-chart">
                  <svg width="100%" height="40" viewBox="0 0 100 40">
                    <polyline
                      fill="none"
                      stroke="#96C5B0"
                      strokeWidth="2"
                      points={dataPoints.map((point, index) => 
                        `${(index / (dataPoints.length - 1)) * 100},${40 - (point / 100) * 35}`
                      ).join(' ')}
                    />
                    {dataPoints.map((point, index) => (
                      <circle
                        key={index}
                        cx={(index / (dataPoints.length - 1)) * 100}
                        cy={40 - (point / 100) * 35}
                        r="1.5"
                        fill="#96C5B0"
                        opacity={index === dataPoints.length - 1 ? 1 : 0.6}
                      />
                    ))}
                  </svg>
                </div>
                <div className="stat-label"></div>
              </div>
              
              <div className="stat-item">
                <div className="stat-value">GMT-6 [CT]</div>
                <div className="stat-label">Timezone</div>
              </div>
              
              {/* Second chart - Bar Chart */}
              <div className="stat-item chart-stat">
                <div className="mini-chart">
                  <svg width="100%" height="40" viewBox="0 0 100 40">
                    {barData.map((height, index) => (
                      <rect
                        key={index}
                        x={index * 12 + 2}
                        y={40 - (height / 100) * 35}
                        width="8"
                        height={(height / 100) * 35}
                        fill="#96C5B0"
                        opacity={0.8}
                        rx="1"
                      />
                    ))}
                  </svg>
                </div>
                <div className="stat-label"></div>
              </div>
              
              {/* Third chart - Wave Animation */}
              <div className="stat-item chart-stat">
                <div className="mini-chart">
                  <svg width="100%" height="40" viewBox="0 0 100 40">
                    <path
                      d={`M 0,${20 + Math.sin(waveOffset * 0.1) * 8} ${Array.from({ length: 50 }, (_, i) => {
                        const x = (i / 49) * 100;
                        const y = 20 + Math.sin((waveOffset + i * 2) * 0.1) * 8 + Math.sin((waveOffset + i * 4) * 0.05) * 4;
                        return `L ${x},${y}`;
                      }).join(' ')}`}
                      fill="none"
                      stroke="#96C5B0"
                      strokeWidth="2"
                      opacity="0.8"
                    />
                    {/* Additional wave layer */}
                    <path
                      d={`M 0,${25 + Math.sin((waveOffset + 20) * 0.08) * 6} ${Array.from({ length: 30 }, (_, i) => {
                        const x = (i / 29) * 100;
                        const y = 25 + Math.sin((waveOffset + 20 + i * 3) * 0.08) * 6;
                        return `L ${x},${y}`;
                      }).join(' ')}`}
                      fill="none"
                      stroke="#96C5B0"
                      strokeWidth="1.5"
                      opacity="0.4"
                    />
                  </svg>
                </div>
                <div className="stat-label"></div>
              </div>
              
              <div className="stat-item">
                <div className="stat-value">DALLAS,TX</div>
                <div className="stat-label">Location</div>
              </div>
            </div>
            
            <div className="quick-skills">
              <div className="skills-header">CORE_STACK</div>
              <div className="skills-list">
                <span className="skill-tag">Go</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">GCP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;