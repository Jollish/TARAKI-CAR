import React from 'react';
import '../../styles/Header.css';
import videoSrc from '../../../src/TARAKI ANIMATION_1.mp4';

const Header = () => (
  <div className="header section__padding" id="home">
    <video autoPlay loop muted playsInline className="header-video">
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default Header;
