import React from 'react';
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedinCircular } from 'react-icons/ti';
import './team.css'; // Import CSS file

// Import images
import ateJezImage from '../../assets/team/ate jez.png';
import coraImage from '../../assets/team/cora.png';
import cynthiaImage from '../../assets/team/cynthia.png';
import julietImage from '../../assets/team/juliet.png';
import marieImage from '../../assets/team/marie.png';
import nancyImage from '../../assets/team/nancy.png';
import nikkoImage from '../../assets/team/nikko.png';
import paulImage from '../../assets/team/paul.png';
import samuelImage from '../../assets/team/samuel.png';
import susanImage from '../../assets/team/susan.png';
import thelmaImage from '../../assets/team/thelma.png';

const Team = () => {
  // Array to hold card data (you can fetch this from an API or any other source)
  const cardsData = [
    { name: 'Jezelle Q. Oliva', jobTitle: 'TARAKI-CAR Startup Community Enabler', imgSrc: ateJezImage },
    { name: 'Corazon D. Ocampo', jobTitle: 'TARAKI-CAR Project Staff', imgSrc: coraImage },
    { name: 'Dr. Cynthia L. Posadas', jobTitle: 'TARAKI-CAR Project Staff', imgSrc: cynthiaImage },
    { name: 'Dr. Juliet P. Lucas', jobTitle: 'DTI-CAR Regional Director', imgSrc: julietImage },
    { name: 'Dr. Nancy A. Bantog', jobTitle: 'DOST-CAR Regional Director', imgSrc: nancyImage },
    { name: 'Paul Aloysius N. Mayo', jobTitle: 'DTI-CAR Creative Specialist', imgSrc: paulImage },
    { name: 'Atty. Samuel D. Gallardo', jobTitle: 'DTI-CAR Assistant Regional Director', imgSrc: samuelImage },
    { name: 'Dr. Susan A. Sumbeling', jobTitle: 'NEDA-CAR Regional Director', imgSrc: susanImage },
    { name: 'Dr. Thelma D. Palaoag', jobTitle: 'TARAKI-CAR Project Leader', imgSrc: thelmaImage }
  ];

  return (
    <div className="team section__padding">
      <div className="card-wrapper">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={card.imgSrc} alt={`profile-${index}`} />
            </div>
            <ul className="social-icons">
            <li><a href=""><TiSocialFacebook /></a></li>
              <li><a href=""><TiSocialInstagram /></a></li>
              <li><a href=""><TiSocialLinkedinCircular /></a></li>
            </ul>
            <div className="details">
              <h2>{card.name}<br /><span className="job-title">{card.jobTitle}</span></h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
