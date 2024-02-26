import React from 'react';
import './abt_content.css';


const Abt_content = ({ title, text, icon }) => (
  <div className="abt_content-container">
    <div className="abt_content-container-title">
      <div />
      <span className='db_icon'>{icon}</span>
      <h1>{title}</h1>
    </div>
    <div className="abt_content-container-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Abt_content;
