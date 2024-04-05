import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
position: relative;
padding: 20px 0;
&:before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #007BFF; // Central line color
}
`;

const TimelineItem = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

&:after {
  content: '';
  position: absolute;
  left: 50%; // Align dot with the line
  transform: translateX(-50%);
  top: 0; // Adjust if necessary
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: white; // Dot background color
  border: 2px solid #007BFF; // Dot border color
  z-index: 1;
}

// Adjust for responsive design
@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
  
  // Ensure the dot remains centered above the content
  &:after {
    top: -6px; // Adjust so the dot appears correctly at the top of the content
  }
}
`;

const Dot = styled.div`
  position: absolute;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #007BFF;
  transform: translateX(-50%);
  left: 50%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(50% - 40px);
  text-aling: center;
  position: relative;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 8px;
  background: #f9f9f9;

  @media (max-width: 768px) {
    width: 80%; // Use more screen space on smaller screens
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 8px;
`;

const Title = styled.h2`
margin: 0;
text-align: right;
    width: 45%; // Adjust based on your layout
    // Add a media query for responsive adjustments
    @media (max-width: 768px) {
      width: 100%;
      order: -1; // Move the title above the content on smaller screens
    }
`;

const ContentGroup = styled.div`
justify-content: center;
display: flex;
width: 95%;
justify-content: space-between;
${({ index }) => index % 2 === 0 ? `
    flex-direction: row;
  ` : `
    flex-direction: row-reverse;
  `}

@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;

  & > div {
    width: 100%;
    text-align: center;
  }
}
`;

const Subtitle = styled.h3``;
const Description = styled.p``;

const Timeline = ({ entries }) => (
  <TimelineContainer>
    {entries.map(({ title, subtitle, description, imageUrl }, index) => (
      <TimelineItem key={index}>
        <Dot />
        <Title>{title}</Title>
        {index % 2 === 0 ? (
          <>
            <Content style={{ marginRight: '20px' }}>
              <Subtitle>{subtitle}</Subtitle>
              <Description>{description}</Description>
              <Image src={imageUrl} alt="Timeline Event" />
            </Content>
            <Content style={{ visibility: 'hidden' }}>Placeholder for alignment</Content>
          </>
        ) : (
          <>
            <Content style={{ visibility: 'hidden' }}>Placeholder for alignment</Content>
            <Content style={{ marginLeft: '20px' }}>
              <Subtitle>{subtitle}</Subtitle>
              <Description>{description}</Description>
              <Image src={imageUrl} alt="Timeline Event" />
            </Content>
          </>
        )}
      </TimelineItem>
    ))}
  </TimelineContainer>
);
export default Timeline;
