import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedinCircular } from 'react-icons/ti';
// import '../../../src/styles/Team.css';

import ateJezImage from '../../team/ate jez.png';
import coraImage from '../../team/cora.png';
import cynthiaImage from '../../team/cynthia.png';
import julietImage from '../../team/juliet.png';
import marieImage from '../../team/marie.png';
import nancyImage from '../../team/nancy.png';
import nikkoImage from '../../team/nikko.png';
import paulImage from '../../team/paul.png';
import samuelImage from '../../team/samuel.png';
import susanImage from '../../team/susan.png';
import thelmaImage from '../../team/thelma.png';
// Import other images

const shine = keyframes`
  0% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
`;

const Header = styled.h1`
  font-size: 2.5rem; /* Adjust the size as needed */
  background: -webkit-linear-gradient(45deg, #6a82fb, #fc5c7d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Poppins', sans-serif; /* Or any other sans-serif font you prefer */
  text-shadow: 2px 2px 8px rgba(0,0,0,0.2);
  animation: ${shine} 5s linear infinite;
  user-select: none;
  cursor: default;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  position: relative;
  background: white;
  width: 250px;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

const CardDetails = styled.div`
  padding: 1rem;
`;

const Name = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

const JobTitle = styled.p`
  font-size: 1rem;
  color: #666;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 4rem;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  transform: translateY(10px);

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(-100px);
  }
`;

const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #333;
  svg {
    width: 20px;
    height: 20px;
  }
  &:hover {
    background: #007bff;
    color: white;
  }
`;


const TeamSection = () => {
  const cardsData = [
    { name: 'Jezelle Q. Oliva', jobTitle: 'TARAKI-CAR Startup Community Enabler', imgSrc: ateJezImage, social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      } },
    { name: 'Corazon D. Ocampo', jobTitle: 'TARAKI-CAR Project Staff', imgSrc: coraImage, social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      } },
    { name: 'Dr. Cynthia L. Posadas', jobTitle: 'TARAKI-CAR Project Staff', imgSrc: cynthiaImage, social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      } },
    { name: 'Dr. Juliet P. Lucas', jobTitle: 'DTI-CAR Regional Director', imgSrc: julietImage, social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      } },
    { name: 'Dr. Nancy A. Bantog', jobTitle: 'DOST-CAR Regional Director', imgSrc: nancyImage, social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      } },
    { name: 'Paul Aloysius N. Mayo', jobTitle: 'DTI-CAR Creative Specialist', imgSrc: paulImage, social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      } },
    { name: 'Atty. Samuel D. Gallardo', jobTitle: 'DTI-CAR Assistant Regional Director', imgSrc: samuelImage, social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      } },
    { name: 'Dr. Susan A. Sumbeling', jobTitle: 'NEDA-CAR Regional Director', imgSrc: susanImage, social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      } },
    { name: 'Dr. Thelma D. Palaoag', jobTitle: 'TARAKI-CAR Project Leader', imgSrc: thelmaImage, social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com"
      } }
  ];

  return (
    <TeamContainer>
      <Header>TARAKIs</Header>
    <CardWrapper>
      {cardsData.map((card, index) => (
        <Card key={index}>
          <CardImage src={card.imgSrc} alt={`profile of ${card.name}`} />
          <CardDetails>
            <Name>{card.name}</Name>
            <JobTitle>{card.jobTitle}</JobTitle>
          </CardDetails>
          <SocialIcons>
            <SocialIcon href={card.social.facebook}><TiSocialFacebook /></SocialIcon>
            <SocialIcon href={card.social.instagram}><TiSocialInstagram /></SocialIcon>
            <SocialIcon href={card.social.linkedin}><TiSocialLinkedinCircular /></SocialIcon>
          </SocialIcons>
        </Card>
      ))}
    </CardWrapper>
  </TeamContainer>
);
};
export default TeamSection;
