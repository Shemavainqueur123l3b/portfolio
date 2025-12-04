import React from 'react'
import { FaCode, FaPalette, FaRocket } from 'react-icons/fa'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Hello! I'm <strong>Shema Vainqueur</strong>, a passionate and creative developer
              who loves bringing ideas to life through code and design.
            </p>
            <p>
              With expertise spanning web design, frontend development, and full-stack engineering,
              I create digital experiences that are not only visually stunning but also highly
              functional and user-friendly. I believe in writing clean, maintainable code and
              designing interfaces that users love to interact with.
            </p>
            <p>
              Whether it's crafting pixel-perfect designs, building responsive web applications,
              or architecting scalable backend systems, I bring a holistic approach to every project.
              I'm always eager to learn new technologies and take on challenging projects that push
              the boundaries of what's possible.
            </p>
          </div>
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">
                <FaPalette />
              </div>
              <h3>Design First</h3>
              <p>Creating beautiful, intuitive user interfaces that enhance user experience</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaCode />
              </div>
              <h3>Clean Code</h3>
              <p>Writing maintainable, scalable code following best practices and modern standards</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaRocket />
              </div>
              <h3>Performance</h3>
              <p>Optimizing applications for speed, efficiency, and seamless user interactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

