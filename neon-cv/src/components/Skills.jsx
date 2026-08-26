// --- components/Skills.jsx ---
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPuzzlePiece,
  faPeopleGroup,
  faHandshake,
  faListCheck,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  // NOTE: added a "Data & ML" group — Pandas, NumPy, Scikit-learn, Power BI and
  // Streamlit are the actual stack behind the Clearvue and Insider Threat
  // projects shown below in Projects.jsx, but none of them appeared anywhere
  // in this list before. Left ASP.NET and SpringBoot in Frameworks since I
  // can't confirm those beyond a module tag — worth double-checking those two
  // are ones you'd actually want to claim before this goes live.
  const technicalSkills = [
    { category: "Languages", items: ["C#", "Java", "Python", "JavaScript"] },
    { category: "Frameworks", items: [".NET Core", "ASP.NET", "SpringBoot"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
    { category: "Web Tech", items: ["React", "Vue", "Node", "Express"] },
    { category: "Data & ML", items: ["Pandas", "NumPy", "Scikit-learn", "Power BI", "Streamlit"] },
    { category: "Tools", items: ["Git / GitHub", "Visual Studio / VS Code", "Jupyter Notebook"] }
  ];

  const softSkills = [
    { label: "Communication", icon: faComments },
    { label: "Problem Solving", icon: faPuzzlePiece },
    { label: "Teamwork", icon: faPeopleGroup },
    { label: "Collaboration", icon: faHandshake },
    { label: "Project Management", icon: faListCheck },
    { label: "Leadership", icon: faUsersGear },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title glow-text">SKILLS</h2>

        <div className="skills-content">
          {/* Technical Skills */}
          <div className="skills-panel technical-panel">
            <div className="panel-header">
              <h3>Technical Arsenal</h3>
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

          {/* Soft Skills — was a plain "✦" glyph before; now a distinct FA icon
              per skill, matching how Contact.jsx already uses real icons. */}
          <div className="skills-panel soft-panel">
            <div className="panel-header">
              <h3>Soft Skills</h3>
            </div>
            <div className="panel-body">
              <div className="soft-skills-grid">
                {softSkills.map((skill, index) => (
                  <div key={index} className="soft-skill-card">
                    <span className="skill-icon"><FontAwesomeIcon icon={skill.icon} /></span>
                    <span className="skill-name">{skill.label}</span>
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