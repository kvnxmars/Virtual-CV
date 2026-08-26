// --- components/Contact.jsx ---
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCircleCheck,
  faCircleXmark,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// NOTE: faBriefcase and faUserAstronaut were imported before but never used
// anywhere in this file — dropped them rather than leave dead imports.

const API_URL = import.meta.env.VITE_API_URL;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('sending');

    try {
      const response = await fetch(`${API_URL}/api/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title neon">GET IN TOUCH</h2>
        <p className="contact-intro">
          Let's build something amazing together. Whether it's a project, opportunity, or just a chat about tech.
        </p>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="neon-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="neon-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  rows="6"
                  className="neon-input"
                ></textarea>
              </div>

              <button
                type="submit"
                className="neon-button submit-button primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>

              {status === 'success' && (
                <div className="status-message success">
                  <FontAwesomeIcon icon={faCircleCheck} /> Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="status-message error">
                  <FontAwesomeIcon icon={faCircleXmark} /> Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Quick Contact Links */}
          <div className="contact-info">
            <div className="contact-card">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <h3>Email</h3>
              {/* Was unathilubombzmbolongwe@gmail.com — the typo'd secondary
                  address; switched to your default address to match the CV. */}
              <a href="mailto:theeunathimbolongwe@gmail.com"
              className="contact-link">
                theeunathimbolongwe@gmail.com
              </a>
            </div>

            <div className="contact-card">
              <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/unathi-mbolongwe/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Connect with me
              </a>
            </div>

            <div className="contact-card">
              <FontAwesomeIcon icon={faGithub} className="contact-icon" />
              <h3>GitHub</h3>
              <a
                href="https://github.com/kvnxmars"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Check out my projects
              </a>
            </div>

            <div className="contact-card">
              <FontAwesomeIcon icon={faRocket} className="contact-icon" />
              <h3>Status</h3>
              <p className="status-text">
                <span className="status-dot"></span>
                Open to opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}