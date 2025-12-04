import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Shema Vainqueur</h3>
            <p>Web Designer • Web Developer • Full Stack Developer</p>
            <p className="footer-location">📍 Kigali, Rwanda</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
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
            <div className="footer-contact">
              <p><a href="mailto:shemavainqueur123@gmail.com">shemavainqueur123@gmail.com</a></p>
              <p><a href="tel:+250795078321">+250 795 078 321</a></p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} Shema Vainqueur.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

