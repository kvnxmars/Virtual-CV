// --- components/Navbar.jsx ---
import React from "react";


export default function Navbar() {
return (
    <nav className="navbar">
        <div className="nav-logo">KEVIN</div>
        <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    );
}