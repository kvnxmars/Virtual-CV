// --- components/Hero.jsx ---
import React from "react";

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

        <p className="subtext">
          <span><i className="fa-solid fa-laptop-code"></i> Software Developer</span>
          <span><i className="fa-solid fa-palette"></i> UI/UX Designer</span>
          <span><i className="fa-solid fa-server"></i> Backend Systems</span>
          <span><i className="fa-solid fa-layer-group"></i> Full Stack Systems</span>
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
    className="neon-button"
    onClick={() => window.open('/Unathi Kevin Mbolongwe CV.pdf', '_blank')}
  >
    Download My CV
  </button>
</div>


      </div>
    </section>
  );
}