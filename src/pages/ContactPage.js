import React from 'react';
import '../styles/ContactPage.css';
import AnimatedBackground from './AnimatedBackground';
import { TiSocialFacebook } from 'react-icons/ti';
function ContactPage() {
  return (
    <div>
      <AnimatedBackground />
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h1>Connect with Us</h1>
            <ul>
              <li><a href="https://www.facebook.com"><TiSocialFacebook/>@taraki-car</a></li>
            </ul>
            <ul>
              <li>Email: tararki-car@gmail.com</li>
              <li>Address: UC Legarda, Baguio City</li>
            </ul>
          </div>
          <div className="taraki-logo">
            <img src="/assets/taraki_logo.png" alt="Taraki Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
