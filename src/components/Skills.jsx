import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaAws,
  FaDocker,
  FaCode,
  FaPalette,
} from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiExpress } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaReact />,
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: <FaJs />, level: 95 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 98 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 95 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <FaNode />,
      skills: [
        { name: 'Node.js', icon: <FaNode />, level: 90 },
        { name: 'Express.js', icon: <SiExpress />, level: 88 },
        { name: 'Python', icon: <FaPython />, level: 85 },
        { name: 'REST APIs', icon: <FaCode />, level: 92 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
      ],
    },
    {
      title: 'Design & Tools',
      icon: <FaPalette />,
      skills: [
        { name: 'Figma', icon: <FaFigma />, level: 90 },
        { name: 'UI/UX Design', icon: <FaPalette />, level: 88 },
        { name: 'Git', icon: <FaGitAlt />, level: 92 },
        { name: 'Docker', icon: <FaDocker />, level: 75 },
        { name: 'AWS', icon: <FaAws />, level: 70 },
        { name: 'Database Design', icon: <FaDatabase />, level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      >
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

