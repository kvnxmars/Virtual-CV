// --- components/Skills.jsx ---
import React from 'react';

export default function Skills() {
  const technicalSkills = [
    { category: "Languages", items: ["C#", "Java", "Python", "JavaScript"] },
    { category: "Frameworks", items: [".NET Core", "ASP.NET", "SpringBoot"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
    { category: "Web Tech", items: ["React", "Vue", "Node", "Express"] },
    { category: "Tools", items: ["Git / GitHub", "Visual Studio / VS Code"] }
  ];

  const softSkills = [
    "Communication",
    "Problem Solving",
    "Teamwork",
    "Collaboration",
    "Project Management",
    "Leadership"
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title glow-text">SKILLS</h2>
        
        <div className="skills-content">
          {/* Technical Skills */}
          <div className="skills-panel technical-panel">
            <div className="panel-header">
              <h3>⚡ TECHNICAL ARSENAL</h3>
            </div>
            <div className="panel-body">
              {technicalSkills.map((skillGroup, index) => (
                <div key={index} className="skill-group">
                  <h4 className="skill-category">{skillGroup.category}</h4>
                  <div className="skill-tags">
                    {skillGroup.items.map((skill, idx) => (
                      <span key={idx} className="skill-tag tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-panel soft-panel">
            <div className="panel-header">
              <h3>💎 SOFT SKILLS</h3>
            </div>
            <div className="panel-body">
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <div key={index} className="soft-skill-card">
                    <span className="skill-icon">✦</span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}