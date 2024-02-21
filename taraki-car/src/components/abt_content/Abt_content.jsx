import React from 'react';
import './abt_content.css';

const Abt_content = ({ title, text }) => (
  <div className="abt_content-container">
    <div className="abt_content-container-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="abt_content-container-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Abt_content;
