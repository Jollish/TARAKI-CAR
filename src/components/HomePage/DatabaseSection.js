import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ImBubbles, ImInfo, ImUserTie, ImBriefcase, ImOffice, ImStack, ImUsers } from "react-icons/im";

// Define keyframes for any animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const DatabaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem;
  width: 80%;
  margin: auto;
  background: var(--color-footer);
  background: radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  animation: ${fadeIn} 1s ease-out;
`;

const DatabaseContent = styled.div`
  display: flex;
`;

const DatabaseHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 0 2rem;
`;

const HeadingTitle = styled.h1`
  font-size: 34px;
  line-height: 45px;
  font-weight: 800;
  max-width: 510px;
  color: rgb(219, 218, 227)
`;

const HeadingExplore = styled.p`
  color: #de5d01;
  cursor: pointer;
`;

const DatabaseItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 2rem;
`;

const DatabaseItem = styled.div`
  flex: 1;
  margin: 1rem;
  min-width: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemIcon = styled.span`
  font-size: 2em;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const ItemTitle = styled.h2`
  font-size: 1.2em;
  color: #fff;
`;

// Your Database component
const DatabaseSection = () => {
  const databaseItems = [
    { icon: <ImInfo />, title: "HEI Researchers" },
    { icon: <ImBubbles />, title: "Negosyo Centers" },
    { icon: <ImUserTie />, title: "Business Mentors" },
    { icon: <ImBriefcase />, title: "Industries" },
    { icon: <ImOffice />, title: "Higher Education Institutions" },
    { icon: <ImStack />, title: "R & D Facilities" },
    { icon: <ImUsers />, title: "Shared Services Facilites" },
  ];

  return (
    <DatabaseContainer>
      <DatabaseHeading>
        <HeadingTitle>CAR Innovation Database</HeadingTitle>
        <HeadingExplore>Explore the Library</HeadingExplore>
      </DatabaseHeading>
      <DatabaseItemsContainer>
        {databaseItems.map((item, index) => (
          <DatabaseItem key={index}>
            <ItemIcon>{item.icon}</ItemIcon>
            <ItemTitle>{item.title}</ItemTitle>
          </DatabaseItem>
        ))}
      </DatabaseItemsContainer>
    </DatabaseContainer>
  );
};

export default DatabaseSection;