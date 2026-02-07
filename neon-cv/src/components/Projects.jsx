// --- components/Projects.jsx ---
import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title glow-text">Projects</h2>

      <div className="project-grid">

        {/* Clearvue BI System */}
        <div className="project-card neon-card">
          <h3>Clearvue BI System</h3>
          <p>
            A BI system used to extract, transform and load Clearvue data into a MongoDB database.
          </p>

          <div className="project-buttons">
            <button
              className="neon-button small"
              onClick={() =>
                window.open(
                  "https://github.com/kvnxmars/clearvue-bi-system",
                  "_blank"
                )
              }
            >
              GitHub
            </button>
          </div>
        </div>

        {/* FIT@NWU */}
        <div className="project-card neon-card">
          <h3>FIT@NWU</h3>
          <p>
            University project used to track gym activities such as classes and weight training.
          </p>

          <div className="project-buttons">
            <button 
              className="neon-button small" 
              onClick={() =>
                window.open(
                  "https://rebrand.ly/fitnwu095d84",
                  "_blank"
                )
              }>
              Live Demo
            </button>

            <button
              className="neon-button small"
              onClick={() =>
                window.open(
                  "https://github.com/Luhardt/CMPG323-Project",
                  "_blank"
                )
              }
            >
              GitHub
            </button>
          </div>
        </div>

        {/* Jewel-eStore */}
        <div className="project-card neon-card">
          <h3>Jewel-eStore</h3>
          <p>React + Tailwind e-commerce jewellery store.</p>

          <div className="project-buttons">
            <button
              className="neon-button small"
              onClick={() =>
                window.open(
                  "https://github.com/phemelomakgopa/Jewel-eStore",
                  "_blank"
                )
              }
            >
              GitHub
            </button>
          </div>
        </div>

      </div>

      <div className="projects-footer">
        <button
          className="neon-button view-more"
          onClick={() => window.open("https://github.com/kvnxmars", "_blank")}
        >
          View more on GitHub
        </button>
      </div>

    </section>
  );
}
