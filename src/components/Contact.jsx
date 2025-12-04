import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear status message when user starts typing
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // EmailJS configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey || 
        serviceId === 'YOUR_SERVICE_ID' || 
        templateId === 'YOUR_TEMPLATE_ID' || 
        publicKey === 'YOUR_PUBLIC_KEY') {
      setIsSubmitting(false)
      setSubmitStatus({ 
        type: 'error', 
        message: 'Email service is not configured yet. Please contact me directly at shemavainqueur123@gmail.com or call +250 795 078 321. Thank you!' 
      })
      return
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'shemavainqueur123@gmail.com',
      reply_to: formData.email,
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setSubmitStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. I will get back to you soon.' 
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      let errorMessage = 'Sorry, there was an error sending your message. '
      
      if (error.text) {
        errorMessage += `Error: ${error.text}. `
      }
      
      errorMessage += 'Please try again or contact me directly at shemavainqueur123@gmail.com'
      
      setSubmitStatus({ 
        type: 'error', 
        message: errorMessage
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'shemavainqueur123@gmail.com',
      link: 'mailto:shemavainqueur123@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+250 795 078 321',
      link: 'tel:+250795078321',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Kigali, Rwanda',
      link: '#',
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your visions. Feel free to reach out!
            </p>
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="contact-item"
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {submitStatus && (
              <div className={`submit-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              {!isSubmitting && <FaPaperPlane />}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

