// --- components/Navbar.jsx ---
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">KEVIN</div>
      
      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
        <li><a onClick={() => scrollToSection('about')}>About</a></li>
        <li><a onClick={() => scrollToSection('education')}>Education</a></li>
        <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
        <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
        <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
        <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}