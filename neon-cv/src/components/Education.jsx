// --- components/Education.jsx ---
import React from 'react';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="section-title glow-text">EDUCATION</h2>
        
        <div className="education-grid">
          {/* BSc IT */}
          <div className="education-card">
            <div className="card-corner-accent"></div>
            <div className="degree-icon">🎓</div>
            <h3 className="degree-title">BSc Information Technology</h3>
            <p className="institution">North-West University</p>
            <p className="education-dates">February 2022 - November 2025</p>
            <div className="degree-divider"></div>
            <p className="education-description">
              Completed a Bachelor of Science in Information Technology, focusing on 
              developing robust software solutions and understanding complex data and software systems.
            </p>
            <div className="status-badge completed">COMPLETED</div>
          </div>

          {/* High School */}
          <div className="education-card">
            <div className="card-corner-accent"></div>
            <div className="degree-icon">📚</div>
            <h3 className="degree-title">National Senior Certificate</h3>
            <p className="institution">Randfontein High School</p>
            <p className="education-dates">January 2017 - December 2021</p>
            <div className="degree-divider"></div>
            <p className="education-description">
              Completed high school education with a focus on Mathematics, Accounting, 
              Business Studies and Computer Applications Technology.
            </p>
            <div className="status-badge completed">COMPLETED</div>
          </div>
        </div>
      </div>
    </section>
  );
}