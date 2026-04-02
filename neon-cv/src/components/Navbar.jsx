// --- components/Navbar.jsx ---
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Set up dark mode on load (default dark; light by opt-in)
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const isDark = savedMode === null ? true : savedMode === 'true';
    setIsDarkMode(isDark);

    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(isDark ? 'dark-mode' : 'light-mode');
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);

    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(newMode ? 'dark-mode' : 'light-mode');
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
      
      <div className="nav-center">
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
      </div>

      {/* Theme Toggle */}
      <button 
        className={`theme-toggle ${isDarkMode ? 'active' : ''}`}
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <i className={`fa-solid ${isDarkMode ? 'fa-moon' : 'fa-sun'}`} aria-hidden="true"></i>
      </button>
    </nav>
  );
}