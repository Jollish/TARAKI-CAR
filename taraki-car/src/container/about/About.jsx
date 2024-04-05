import React from 'react';
import Abt_content  from '../../components/abt_content/Abt_content';
import './about.css';

const aboutData = [
  {
    title: 'Tourism',
    text: 'Promote ecotourism and enhancing farm tourism sites.',
  },
  {
    title: 'Agriculture',
    text: 'Strengthen farmer coops and reduce manpower in farms',
  },
  {
    title: 'Creative Industry',
    text: 'Increase commercial areas in zoning ordinances',
  },
  {
    title: 'Knowledge Transfer',
    text: 'Strengthen government-academe linkage',
  },
];

const About = () => (
  <div className="about section__padding" id="about">
    <div className="about-heading">
      <h1 className="gradient__text">About</h1>
      <p id="abt"> The Regional Inclusive Innovation Center (RIIC) in the Cordillera Administrative Region established on November 4, 2022.
              The lead for the Cordillera RIIC is the TARAKI-CAR , a consortium under the HEIRIT- ReSEED program of DOST-PCIEERD , which is being led by the University of the Cordilleras.
      </p>
      <p>Read More</p>
    </div>
    <div className="about-container">
      {aboutData.map((item, index) => (
        <Abt_content title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default About;
