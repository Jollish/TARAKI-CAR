import React from 'react';
import './ContactSection.css'; // Stylish form and contact info

const ContactSection = () => (
  <div className="contact-section">
    <h2>Contact Us</h2>
    <form className="newsletter-form">
      <input type="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </form>
    <a href="mailto:info@tarakicar.com">Send us an email</a>
  </div>
);

export default ContactSection;
