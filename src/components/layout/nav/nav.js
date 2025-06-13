import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom';
import './nav.css'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      navigate('/');
    }
  };

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      // If on home page, scroll directly
      scrollToSection(sectionId);
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems = [
    { name: 'PROJECTS', id: 'projects' },
    { name: 'CONTACT', id: 'contact' }
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">
            <div className="status-indicator"></div>
            <button 
              onClick={handleLogoClick}
              className="logo-button"
            >
              <span className="logo-text" data-text="[RAGHIB_AFTAB]">
                [RAGHIB_AFTAB]
              </span>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="nav-menu-desktop">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => handleSectionClick(e, item.id)}
                className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
              >
                [{item.name}]
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="nav-menu-mobile">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => handleSectionClick(e, item.id)}
                className="nav-link-mobile"
              >
                [{item.name}]
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;