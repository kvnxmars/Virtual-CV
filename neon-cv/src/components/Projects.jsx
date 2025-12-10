// --- components/Projects.jsx ---
import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title glow-text">Projects</h2>

      <div className="project-grid">

        {/* Messaging App */}
        <a 
          href="https://github.com/kvnxmars/clearvue-bi-system" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-card neon-card project-link"
        >
          <h3>Clearvue BI System</h3>
          <p>A BI system used to extract, transform and load clearvue data into a MongoDB database.</p>
        </a>

        {/* Gym Tracker */}
        <a 
          href="https://github.com/Luhardt/CMPG323-Project" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-card neon-card project-link"
        >
          <h3>FIT@NWU</h3>
          <p>University project used to track university gym activities, such as classes and weight training for students.</p>
        </a>

        {/* Jewel-eStore */}
        <a 
          href="https://github.com/phemelomakgopa/Jewel-eStore" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-card neon-card project-link"
        >
          <h3>Jewel-eStore</h3>
          <p>React + Tailwind e-commerce jewellery store.</p>
        </a>

      </div>
    </section>
  );
}
