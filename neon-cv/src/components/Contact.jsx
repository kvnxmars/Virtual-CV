// --- components/Contact.jsx ---
import React, { useState } from 'react';

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

    // Option 1: Using Formspree (free, no backend needed)
    // Sign up at formspree.io and replace YOUR_FORM_ID
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
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
                className="neon-button submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>

              {status === 'success' && (
                <div className="status-message success">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="status-message error">
                  ✗ Oops! Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>

          {/* Quick Contact Links */}
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:unathilubombzmbolongwe@gmail.com" className="contact-link">
                unathilubombzmbolongwe@gmail.com
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/unathi-mbolongwe/" 
                target="_blank" 
                rel="noreferrer"
                className="contact-link"
              >
                Connect with me
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">🚀</div>
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