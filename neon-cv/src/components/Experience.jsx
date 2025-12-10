// --- components/Experience.jsx ---
import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title glow-text">EXPERIENCE</h2>
        
        <div className="timeline">
          {/* Experience Item */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="experience-card">
                <div className="card-header">
                  <h3 className="role-title">Business Analyst Trainee</h3>
                  <span className="company-badge">FNB</span>
                </div>
                
                <div className="experience-meta">
                  <span className="date-range">📅 7 July 2025 – 18 July 2025</span>
                  <span className="location">📍 Sandton, South Africa</span>
                </div>
                
                <p className="experience-description">
                  During my time at FNB, I worked as a Business Analyst Trainee where I gained 
                  valuable insights into business processes and data analysis.
                </p>
                
                <div className="responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    <li>
                      <span className="bullet-icon">▸</span>
                      Contributed to the <strong>Interface Experience Business Unit</strong>, 
                      specialising in the <strong>Search & Bots product</strong> as a Business Analyst Trainee.
                    </li>
                    <li>
                      <span className="bullet-icon">▸</span>
                      Analysed and proposed intuitive improvements for in-app search and navigation, 
                      focusing on enhancing <strong>user experience</strong>.
                    </li>
                    <li>
                      <span className="bullet-icon">▸</span>
                      Assisted with the organisation of <strong>search tags</strong> and development 
                      of application <strong>shortcuts</strong> to streamline user journeys.
                    </li>
                    <li>
                      <span className="bullet-icon">▸</span>
                      Participated in identifying new features and intelligent solutions to optimise 
                      <strong>product usability</strong> from a business analyst perspective.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Add more experience items here in the future */}
        </div>
      </div>
    </section>
  );
}