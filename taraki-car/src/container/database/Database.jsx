import React from 'react';
import Abt_content from '../../components/abt_content/Abt_content';
import './database.css';
import { ImBubbles } from "react-icons/im";
import { ImInfo } from "react-icons/im";
import { ImUserTie } from "react-icons/im";
import { ImBriefcase } from "react-icons/im";
import { ImOffice } from "react-icons/im";
import { ImStack } from "react-icons/im";
import { ImUsers } from "react-icons/im";

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
      <Abt_content icon={<ImInfo />} title="HEI Researchers"/>
      <Abt_content icon={<ImBubbles />} title="Negosyo Centers"/>
      <Abt_content icon={<ImUserTie />} title="Business Mentors"/>
      <Abt_content icon={<ImBriefcase />} title="Industries"/>
      <Abt_content icon={<ImOffice />} title="Higher Education Institutions"/>
      <Abt_content icon={<ImStack />} title="R & D Facilities"/>
      <Abt_content icon={<ImUsers />} title="Shared Services Facilites"/>
    </div>
  </div>
);

export default Database;
