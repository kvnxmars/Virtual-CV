// --- components/Projects.jsx ---
import React from "react";


export default function Projects() {
return (
<section id="projects" className="projects-section">
<h2 className="section-title glow-text">Projects</h2>


<div className="project-grid">
<div className="project-card neon-card">
<h3>Messaging App</h3>
<p>A full-stack messaging system using C#/.NET + Oracle DB.</p>
</div>


<div className="project-card neon-card">
<h3>Gym Tracker</h3>
<p>Competition project with admin panel + user dashboard.</p>
</div>


<div className="project-card neon-card">
<h3>Jewel-eStore</h3>
<p>React + Tailwind e-commerce jewellery store.</p>
</div>
</div>
</section>
);
}