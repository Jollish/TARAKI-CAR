import React from 'react';
import styled, { keyframes } from 'styled-components';

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const AboutContainer = styled.div`
  width: 90%;
  display: flex;
  margin: auto;
  justify-content: center;
  flex-direction: row;
  padding: 3rem 0;
  color: #FFFFFF;

  @media screen and (max-width: 990px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutHeading = styled.div`
  margin: 0 50px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  margin-right: 2rem;

  @media screen and (max-width: 990px) {
    align-items: center;
    text-align: center;
    margin-right: 0;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 34px;
    line-height: 45px;
    font-weight: 800;
    font-family: 'Poppins', sans-serif;
    color: rgb(219, 218, 227);
    

    @media screen and (max-width: 550px) {
      font-size: 28px;
      line-height: 38px;
    }
  }

  p {
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    color: #c0c0c0;
    margin-top: 1rem;
  }
`;

const AboutContentContainer = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin: 1rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  animation: ${floatAnimation} 5s ease-in-out infinite;

  @media screen and (max-width: 990px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentTitle = styled.div`
  flex: 1;
  margin-right: 2rem;

  div {
    width: 38px;
    height: 3px;
    background: linear-gradient(90deg, #ff8a00, #e52e71);
    margin-bottom: 0.25rem;
  }

  h1 {
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
  }
`;

const ContentText = styled.div`
  flex: 2;
  display: flex;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    font-family: 'Poppins', sans-serif;
    color: #FFFFFF;
  }
`;

const DbIcon = styled.span`
  color: #fff;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 200px;
  height: auto;
  font-size: 2em;
`;



// Component using styled components
const AboutSection = () => { // Removed the aboutData prop from here
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

  return (
    <AboutContainer className="section__padding" id="about">
      <AboutHeading>
        <h1 className="gradient__text">About</h1>
        <p>The Regional Inclusive Innovation Center (RIIC) in the Cordillera Administrative Region was established on November 4, 2022. The lead for the Cordillera RIIC is the TARAKI-CAR, a consortium under the HEIRIT-ReSEED program of DOST-PCIEERD, which is being led by the University of the Cordilleras.</p>
        <p>Read More</p>
      </AboutHeading>
      <AboutContentContainer>
        {aboutData.map(({ title, text }, index) => (
          <ContentContainer key={index}>
            <ContentTitle>
              <div />
              <DbIcon /> {/* Placeholder for Your Icon Here */}
              <h1>{title}</h1>
            </ContentTitle>
            <ContentText>
              <p>{text}</p>
            </ContentText>
          </ContentContainer>
        ))}
      </AboutContentContainer>
    </AboutContainer>
  );
};

export default AboutSection;
