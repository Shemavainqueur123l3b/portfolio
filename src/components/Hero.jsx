import React, { useEffect, useRef } from 'react'
import { FaArrowDown, FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaCode, FaPalette, FaLaptopCode } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Welcome to my Portfolio</span>
          </div>
          <h1 className="hero-name">
            <span className="gradient-text">Shema Vainqueur</span>
          </h1>
          <div className="hero-titles">
            <span className="title-item">
              <FaPalette className="title-icon" />
              Web Designer
            </span>
            <span className="title-separator">•</span>
            <span className="title-item">
              <FaCode className="title-icon" />
              Web Developer
            </span>
            <span className="title-separator">•</span>
            <span className="title-item">
              <FaLaptopCode className="title-icon" />
              Full Stack Developer
            </span>
          </div>
          <p className="hero-description">
            Crafting beautiful, functional, and user-centric digital experiences.
            Transforming ideas into reality through code and design.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Shemavainqueur123l3b" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shema-vainqueur-94a37827b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/shema_vainqueur/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="mailto:shemavainqueur123@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <FaCode />
          </div>
          <div className="floating-card card-2">
            <FaPalette />
          </div>
          <div className="floating-card card-3">
            <FaLaptopCode />
          </div>
        </div>
      </div>
      <button className="scroll-down" onClick={scrollToNext} aria-label="Scroll down">
        <FaArrowDown />
      </button>
    </section>
  )
}

export default Hero

