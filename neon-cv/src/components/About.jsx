/* ------------------------------------------------------------------
File: src/components/About.jsx
-------------------------------------------------------------------*/
import React from 'react'


export default function About(){
return (
<section id="about" className="section">
<h2 className="section-title neon">About</h2>
<div className="about-grid">
<div className="glass">
<p>
I am a final year BSc IT student at North-West University with a passion for building clean,
performant software. My experience ranges from backend services to full-stack apps and data-centric
projects. I enjoy designing reliable systems and elegant user experiences.
</p>
</div>
<div className="glass stats">
<div className="stat"><strong>Languages</strong><span>C#, Java, Python</span></div>
<div className="stat"><strong>Database</strong><span>PostgreSQL, Oracle</span></div>
<div className="stat"><strong>Tools</strong><span>Git, VSCode, Docker (basic)</span></div>
</div>
</div>
</section>
)
}