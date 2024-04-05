import React from 'react';
import styled, { keyframes } from 'styled-components';
import dti from '../../partners/dti.png';
import dost from '../../partners/dost.png';
import dict from '../../partners/dict.png';
import uc from '../../partners/uc.png';
import neda from '../../partners/neda.png';

const PartnersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  margin-bottom: 100px;
  background: #0f172a; /* Dark background for futuristic look */
`;

const Partner = styled.div`
  flex: 1;
  max-width: 150px;
  min-width: 120px;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;


const PartnerImg = styled.img`
  width: 150px;
`;

const PartnersSection = () => {
  return (
    <PartnersContainer className="section__padding">
      <Partner>
        <PartnerImg src={dti} alt="dti" />
      </Partner>
      <Partner>
        <PartnerImg src={dost} alt="dost" />
      </Partner>
      <Partner>
        <PartnerImg src={dict} alt="dict" />
      </Partner>
      <Partner>
        <PartnerImg src={uc} alt="uc" />
      </Partner>
      <Partner>
        <PartnerImg src={neda} alt="neda" />
      </Partner>
    </PartnersContainer>
  );
};

export default PartnersSection;
