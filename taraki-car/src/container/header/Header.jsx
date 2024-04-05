import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
import videoSrc from '../../assets/background/TARAKI ANIMATION_1.mp4';

const Header = () => (
  <div className="header section__padding" id="home">
    <video autoPlay loop muted playsInline className="header-video">
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default Header;
