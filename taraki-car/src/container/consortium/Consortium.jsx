import React from 'react';
import './consortium.css';
import possibilityImage from '../../assets/possibility.png'

const Consortium = () => {
  return (
    <div className="consortium section__padding" id="consortium">
      <div className="consortium-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="consortium-content">
        <h4>Why Taraki?</h4>
        <h1 className="gradient__text">Advantages of a Consortium</h1>
        <ul>
          <li>
            <p>Easier to achieve collective goals because numerous “similar” companies are speaking with one voice.</p>
            </li>
            <li><p>Shares best practices and learning from each other’s expertise.</p></li>
            <li><p>Increases exposure and credibility in the industry.</p></li>
            <li><p>Avoids duplication of effort but still achieving goals.</p></li>
          </ul>
        
        <h4>The consortium permits the stakeholders to capitalize their combined assets or resources, and expertise in their sector, for a wider reach and attain better results.</h4>
      </div>
    </div>
  )
}

export default Consortium