import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard. Built with React, Node.js, and MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tags: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      image: '📋',
      github: '#',
      live: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive analytics dashboard for social media management with data visualization, scheduling, and performance tracking.',
      tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      image: '📊',
      github: '#',
      live: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.',
      tags: ['React', 'CSS3', 'Framer Motion'],
      image: '💼',
      github: '#',
      live: '#',
    },
    {
      title: 'Weather App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      tags: ['React', 'API Integration', 'Chart.js'],
      image: '🌤️',
      github: '#',
      live: '#',
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for blogging with markdown support, SEO optimization, and comment system.',
      tags: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
      image: '✍️',
      github: '#',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A collection of projects showcasing my skills in web design, development, and full-stack engineering
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
                <div className="project-overlay">
                  <a href={project.github} className="project-link" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href={project.live} className="project-link" aria-label="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

