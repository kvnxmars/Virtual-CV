// --- components/Experience.jsx ---
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
                  {/* Was "Business Analyst Trainee" here vs "Business Analysis
                      Trainee (Vacation Work)" everywhere else (CV, cover
                      letters) — standardized to match. */}
                  <h3 className="role-title">Business Analysis Trainee (Vacation Work)</h3>
                  <span className="company-badge">FNB</span>
                </div>

                <div className="experience-meta">
                  {/* Was 7–18 July; your own records say 7–20 July 2025 — corrected. */}
                  <span className="date-range">
                    <FontAwesomeIcon icon={faCalendarDays} /> 7 July 2025 – 20 July 2025
                  </span>
                  <span className="location">
                    <FontAwesomeIcon icon={faLocationDot} /> Randburg, South Africa
                  </span>
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
                      Contributed to the <strong>InterfaceX Business Unit</strong>,
                      specialising in the <strong>Search &amp; Bots product</strong> as a Business Analyst Trainee.
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
                      <strong> product usability</strong> from a business analyst perspective.
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