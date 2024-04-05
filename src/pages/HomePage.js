// In src/pages/HomePage.js
import React from 'react';
import Header from '../components/HomePage/Header';
import AboutSection from '../components/HomePage/AboutSection';
import PartnersSection from '../components/HomePage/PartnersSection';
import DatabaseSection from '../components/HomePage/DatabaseSection';
import BlogSection from '../components/HomePage/BlogSection';
import TeamSection from '../components/HomePage/TeamSection';
// import ContactSection from '../components/HomePage/ContactSection';

import styled from 'styled-components';

// Example of a styled section
const Section = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  margin-bottom: 2rem;
`;

const SectionContent = styled.p`
  // Your content styles here
`;


function HomePage() {
  return (
    <div>
      <Header />
      <AboutSection />
      <PartnersSection />
      <DatabaseSection />
      <BlogSection />
      <TeamSection />
      {/* <ContactSection /> */}
    </div>
  );
}

export default HomePage;
