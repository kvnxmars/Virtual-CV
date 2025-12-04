// --- components/Hero.jsx ---
import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-image-container">
          <div className="image-placeholder">
            <span className="placeholder-text">YOUR PHOTO</span>
          </div>
        </div>
        <h1 className="glow-text">KEVIN MBOLONGWE</h1>
        <p className="subtext">Software Developer • Futuristic UI Lover • Full Stack Builder</p>
        <button 
          className="neon-button"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Projects
        </button>
      </div>
    </section>
  );
}