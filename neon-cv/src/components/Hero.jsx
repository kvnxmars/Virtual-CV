// --- components/Hero.jsx ---
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faServer, faLayerGroup, faChartLine } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">

        {/* HERO IMAGE */}
        <div className="hero-image-container">
          <img
            src="/proP.jpg"
            alt="Kevin Mbolongwe"
          />
        </div>

        {/* HERO TEXT */}
        <h1 className="glow-text">KEVIN MBOLONGWE</h1>

        {/* "Data Science" previously used fa-palette, which reads as a design
            icon, not a data one — swapped to a chart icon so each tag actually
            matches what it labels. */}
        <p className="subtext">
          <span><FontAwesomeIcon icon={faLaptopCode} /> Software Developer</span>
          <span><FontAwesomeIcon icon={faChartLine} /> Data Science</span>
          <span><FontAwesomeIcon icon={faServer} /> Backend Systems</span>
          <span><FontAwesomeIcon icon={faLayerGroup} /> Full Stack Systems</span>
        </p>

        {/* HERO ACTIONS */}
        <div className="hero-buttons">
          <button
            className="neon-button"
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View Projects
          </button>

          <button
            className="neon-button"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get In Touch
          </button>

          <button
            className="neon-button primary"
            onClick={() => window.open('/Unathi Kevin Mbolongwe CV.pdf', '_blank')}
          >
            Download My CV
          </button>
        </div>

      </div>
    </section>
  );
}