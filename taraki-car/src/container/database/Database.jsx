import React from 'react';
import Abt_content from '../../components/abt_content/Abt_content';
import './database.css';

const Database = () => (
  <div className="database section__margin" id="db">
    <div className="database-content">
      <Abt_content title="Database" text="Lists of innovation, research, development, and business sectors.
HEI Researchers" />
    </div>
    <div className="database-heading">
      <h1 className="gradient__text">CAR Innovation Database</h1>
      <p>Explore the Library</p>
    </div>
    <div className="database-container">
      <Abt_content title="HEI Researchers"/>
      <Abt_content title="Negosyo Centers"/>
      <Abt_content title="Business Mentors"/>
      <Abt_content title="Industries"/>
      <Abt_content title="Higher Education Institutions"/>
      <Abt_content title="R & D Facilities"/>
      <Abt_content title="Shared Services Facilites"/>
    </div>
  </div>
);

export default Database;
