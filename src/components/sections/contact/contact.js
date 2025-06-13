import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-title">
              [CONTACT_PROTOCOL]
            </h2>
            <p className="contact-description">
              Ready to collaborate on your next project. Let's build something 
              extraordinary together.
            </p>
            
            <div className="contact-links">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={16} />
                </div>
                <span className="contact-text">raghibaftab@outlook.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Github size={16} />
                </div>
                <span className="contact-text">github.com/raghiba</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Linkedin size={16} />
                </div>
                <span className="contact-text">linkedin.com/in/raghibaftab</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <div className="form-header">SEND_MESSAGE</div>
            <form className="contact-form-fields">
              <input
                type="text"
                placeholder="Name"
                className="form-input"
              />
              <input
                type="email"
                placeholder="Email"
                className="form-input"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="form-textarea"
              />
              <button type="submit" className="form-submit">
                [TRANSMIT]
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;