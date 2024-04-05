import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">Do you want to step into the future of others</h1>
      </div>
      <div className="footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>A virtual or physical platforms for collaborative programs purposively to generate product, process, or service innovations that are deemed important to the goal of inclusive growth and development of the respective regions. </p>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Join Our Team</h4>
          <p>UC Legarda Campus, Legarda Rd.</p>
          <p>Baguio City, Benguet</p>
          <p>Philippines</p>
        </div>
      </div>
      <div class="footer-copyright">
        <p>2022 ATTRACT | All rights reserved</p>
        <p>Designed by TARAKI-CAR</p>
      </div>
    </div>
  )
}

export default Footer