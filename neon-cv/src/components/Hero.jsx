// --- components/Hero.jsx ---
import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-image-container">
          <div className="hero-image-container">
          <img 
            src="/bathroompic.jpg" 
            alt="Kevin Mbolongwe"
            className="hero-image"
          />
          </div>
        </div>
        <h1 className="glow-text">UNATHI KEVIN MBOLONGWE</h1>
        <p className="subtext">Software Developer • Futuristic UI Lover • Full Stack Builder</p>
        <button 
          className="neon-button"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Projects
        </button>
        <button 
          className="neon-button"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get In Touch
        </button>
        <a className="cv"
          href="/Physical_CV.pdf" 
          download="Kevin_Mbolongwe_CV.pdf"
          className="neon-button"
          style={{ display: 'inline-block', textDecoration: 'none' }}
        >
          Download My CV
        </a>
      </div>
    </section>
  );
}