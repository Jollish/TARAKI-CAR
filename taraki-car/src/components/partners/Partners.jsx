import React from 'react';
import {dti, dost, dict, uc, neda } from './imports.js';
import './partners.css';

const Partners = () => {
  return (
    <div className="partners section__padding">
      <div>
        <img src={dti} alt="dti" />
      </div>
      <div>
        <img src={dost} alt="dost" />
      </div>
      <div>
        <img src={dict} alt="dict" />
      </div>
      <div>
        <img src={uc} alt="uc" />
      </div>
      <div>
        <img src={neda} alt="neda" />
      </div>
    </div>
  )
}

export default Partners