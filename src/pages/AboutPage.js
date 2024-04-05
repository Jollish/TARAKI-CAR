import React, { useState } from "react";
import { Chrono } from "react-chrono";
import styled, {keyframes} from 'styled-components';
import { motion } from 'framer-motion';
import TeamSection from '../components/HomePage/TeamSection';

// Styled-components for layout styling
const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2),
                0 0 10px rgba(255, 255, 255, 0.2),
                0 0 15px rgba(255, 255, 255, 0.2),
                0 0 20px rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.4),
                0 0 10px rgba(255, 255, 255, 0.4),
                0 0 15px rgba(255, 255, 255, 0.4),
                0 0 20px rgba(255, 255, 255, 0.4),
                0 0 25px rgba(255, 255, 255, 0.4),
                0 0 30px rgba(255, 255, 255, 0.4),
                0 0 35px rgba(255, 255, 255, 0.4);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.2),
                0 0 10px rgba(255, 255, 255, 0.2),
                0 0 15px rgba(255, 255, 255, 0.2),
                0 0 20px rgba(255, 255, 255, 0.2);
  }
`;

const ObjectivesSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const ObjectivesTitle = styled.h2`
  font-size: 3.5rem;
  color: #81AFDD;;
  margin-bottom: 2rem;
`;

const ObjectivesGrid = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  // Adjust grid layout for different screen sizes
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const Objective = styled.div`
  width: calc(33.333% - 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem; // Added padding for each objective for better spacing
`;

const ObjectiveImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 1.5rem;
  // Use media query for smaller devices to reduce image size
  @media (max-width: 768px) {
    width: 120px;
  }
  @media (max-width: 480px) {
    width: 100px;
  }
`;

const ObjectiveText = styled.p`
  font-size: 1.2rem;
  color: white;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

const CentralLogo = styled.div`
width: 120px;
  height: 120px;
  background-image: url('/assets/taraki_logo.png');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-bottom: 20px;
  animation: ${glowAnimation} 2s infinite ease-in-out;
@media (max-width: 768px) {
  position: relative;
  justify-content: center
}
@media (min-width: 1100px) {
  position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}
`;

const FrameworkTitle = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #81AFDD;; // Or any color that matches your design
  margin: 2rem 0; // Adjust spacing as needed
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const CategoryContainer = styled.div`
position: relative; // Relative for absolute positioning of children
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 50px;
margin: 50px;
justify-items: center;
align-items: center;
@media (max-width: 1024px) {
  grid-template-columns: repeat(2, 1fr); // Two columns for tablets
}
@media (max-width: 768px) {
  grid-template-columns: 1fr; // One column for mobile
  margin: 20px; // Less margin for smaller screens
}
`;

const Category = styled.div`
min-width: 300px;
max-width: 100%; // Ensure it doesn't overflow on smaller screens
  max-height: 350px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CategoryTitle = styled.h3`
  margin-bottom: 20px;
`;

const LogoGrid = styled.div`
display: grid;
  grid-template-columns: repeat(6, 1fr); // Adjust the number as needed
  gap: 10px;
  justify-content: center; // This will distribute space evenly around the items

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); // Adjust as needed
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); // Adjust as needed
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 100px;
`;

const Section = styled(motion.section)`
  margin: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: #81AFDD;
  margin-bottom: 20px;
  text-align: left;
`;

const Content = styled(motion.p)`
  font-size: 1.25rem;
  color: white;
  text-align: center;
  max-width: 600px;
`;

const Image = styled(motion.img)`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 20px;
`;

const CoreValuesContainer = styled.div`
  text-align: left;
`;

const CoreValue = styled.p`
  font-size: 1.5rem;
  color: white;
  margin: 0.25rem 0; // Adjust the margin as needed
`;

const BoldFirstLetter = styled.span`
  font-weight: bold;
  font-size: inherit;
`;


// Framer Motion animation variants
const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 1
    },
  },
  hidden: { opacity: 0 },
};

const listItemVariants = {
  visible: { y: 0, transition:{type: "ease-in", duration: 1} },
  hidden: {  y: 50},
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 2, bounce: 0.4 } }
};

const imageVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      staggerChildren: 0.3, 
      delayChildren: 0.2,
      duration: 1
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const categories = [
  {
    id: 'tech-business-incubators',
    title: 'Technology Business Incubators',
    logos: [
      { id: 'bsu-atbi', src: '/assets/bsu.png', alt: 'BSU ATBI' },
      { id: 'slu-tbi', src: '/assets/slu.png', alt: 'SLU TBI' },
      { id: 'slu-tbi', src: '/assets/uc.png', alt: 'SLU TBI' },
      { id: 'slu-tbi', src: '/assets/up.png', alt: 'SLU TBI' },
      // ... more logos
    ],
  },
  {
    id: 'government-institutions',
    title: 'Government Institutions',
    logos: [
      { id: 'university-1', src: '/assets/dost.png', alt: 'University 1' },
      { id: 'university-2', src: '/assets/dti.png', alt: 'University 2' },
      { id: 'university-2', src: '/assets/dict.png', alt: 'University 2' },
      { id: 'university-2', src: '/assets/peza.png', alt: 'University 2' },
      { id: 'university-2', src: '/assets/tesda.png', alt: 'University 2' },
      { id: 'university-2', src: '/assets/da.png', alt: 'University 2' },
      { id: 'university-2', src: '/path/to/university-2-logo.png', alt: 'University 2' },
      { id: 'university-2', src: '/path/to/university-2-logo.png', alt: 'University 2' },
      { id: 'university-2', src: '/path/to/university-2-logo.png', alt: 'University 2' },
      { id: 'university-2', src: '/path/to/university-2-logo.png', alt: 'University 2' },
      { id: 'university-2', src: '/path/to/university-2-logo.png', alt: 'University 2' },
      { id: 'university-2', src: '/path/to/university-2-logo.png', alt: 'University 2' },
      // ... more logos
    ],
  },
  
  {
    id: 'private-organizations',
    title: 'Academe',
    logos: [
      { id: 'bsu-atbi', src: '/assets/bsu.png', alt: 'BSU ATBI' },
      { id: 'slu-tbi', src: '/assets/up.png', alt: 'SLU TBI' },
      { id: 'slu-tbi', src: '/assets/uc.png', alt: 'SLU TBI' },
      { id: 'slu-tbi', src: '/assets/slu.png', alt: 'SLU TBI' },
      // ... more logos
    ],
  },
  
  {
    id: 'private-organizations',
    title: 'Private Organizations/Startups',
    logos: [
      { id: 'bsu-atbi', src: '/path/to/bsu-logo.png', alt: 'BSU ATBI' },
      { id: 'slu-tbi', src: '/path/to/slu-logo.png', alt: 'SLU TBI' },
      { id: 'slu-tbi', src: '/path/to/uc.png', alt: 'SLU TBI' },
      { id: 'slu-tbi', src: '/path/to/slu-logo.png', alt: 'SLU TBI' },
      // ... more logos
    ],
  },
  {
    id: 'ngo-localinvestors-funders',
    title: 'NGO/Local Investors/Funders',
    logos: [
      { id: 'bsu-atbi', src: '/assets/rotary.png', alt: 'BSU ATBI' },
      { id: 'bsu-atbi', src: '/assets/dost.png', alt: 'BSU ATBI' },
      { id: 'bsu-atbi', src: '/assets/lion.png', alt: 'BSU ATBI' },
      { id: 'bsu-atbi', src: '/assets/kalinga.png', alt: 'BSU ATBI' },
    
      // ... more logos
    ],
  },
  {
    id: 'local-government-units',
    title: 'Local Government Units',
    logos: [
      { id: 'bsu-atbi', src: '/assets/kalinga.png', alt: 'BSU ATBI' },
      // ... more logos
    ],
  },
  // ... more categories
];

const objectivesData = [
  {
    img: '/assets/plan.gif',
    text: 'Establishment of a 5-yr Regional Startup Development Plan and Roadmaps'
  },
  {
    img: '/assets/growth.gif',
    text: 'Increasing Awareness about the Consortium'
  },
  {
    img: '/assets/upskill.gif',
    text: 'Upskilling and Upscaling Activities'
  },
  {
    img: '/assets/investor.gif',
    text: 'Establishment of Local Investor Network'
  },
  {
    img: '/assets/team.gif',
    text: 'Cross Pollination Undertakings Among Stakeholders'
  },
  {
    img: '/assets/startup.gif',
    text: 'Activating startup activity hubs in lesser active provinces in the regions'
  },
  // ... add other objectives
];

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Timeline items for the `Chrono` component
  const timelineItems = [
    {
      title: "TARAKI-CAR is the regional consortium in the Cordillera Administrative Region",
      cardTitle: "The beginning of our journey.",
      cardDetailedText: "which started on January 2023 under DOST-PCIEERD’s (Department of Science and Technology-Philippine Council for Industry, Energy, and Emerging Technology Research and Development) HEIRIT ReSEED (Higher Education Institution Readiness for Innovation and Technopreneurship -Regional Startup Enablers for Ecosystem Development) Program.",
    },
    {
      title: "STRONG REGIONAL STARTUP ECOSYSTEM IS...",
      cardDetailedText: "collaborative entity cultivating the maximum potential of innovators creating sustainable innovative (10X) solutions to societal problems",
    },
    {
      title: "OUR AIM",
      cardDetailedText: "Strengthen the startup and innovation ecosystem in the region by providing support that enables the community to innovate and make this region inclusive and innovative",
      media: { type: "IMAGE", source: { url: "/assets/taraki_logo.png" } }
    },
    // Add more timeline items as needed
  ];

  // Sections for Vision, Mission, and Core Values
  const sections = [
    {
      id: 'vision',
      title: 'Vision',
      content: 'TARAKI envisions to be the country’s leading technological consortium in building and transforming the Cordilleran Startup Ecosystem.',
      imageUrl: '/assets/logo-mountain.png',
    },
    {
      id: 'mission',
      title: 'Mission',
      content: 'TARAKI cultivates ingenuity for innovators by fostering collaboration and community-driven initiatives in becoming globally renowned.',
      imageUrl: '/assets/taraki-logo.png',
    },
    {
      id: 'core-values',
    title: 'Core Values',
    content: [
      'Teamwork',
      'Altruism',
      'Respect',
      'Adaptability',
      'Knowledgeability',
      'Inclusiveness'
    ],
    }
  ];

  return (
    <main>

<Section
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
>
        <Chrono theme={{cardBgColor: "white", primary: "blue", secondary: "none", titleColorActive: "white"}} items={timelineItems} mediaSettings={{ align: 'center', fit: 'cover' }} mode="VERTICAL_ALTERNATING" mediaHeight="200" onScrollEnd scrollable="true" disableToolbar="true" iconBackgroundColor="black" timelinePointDimension={50} classNames={{cardText:"card-text"}}>
        <div className="chrono-icons">
        <img src="/assets/taraki_logo.png" alt="image1" />
        <img src="/assets/taraki_logo.png" alt="image1" />
        <img src="/assets/taraki_logo.png" alt="image1" />
        </div>
        </Chrono>
      </Section>
      <FlexContainer>
        
      {sections.map(({ id, title, content, imageUrl }) => {
        if (id === 'core-values') {
          return (
      <Section key={id}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      >
              <Title>{title}</Title>
              <CoreValuesContainer>
                {content.map((value, index) => (
                  <CoreValue key={index}>
                    <BoldFirstLetter>{value.charAt(0)}</BoldFirstLetter>
                    {value.slice(1)}
                  </CoreValue>
                ))}
              </CoreValuesContainer>
            </Section>
          );
        } else {
          // The normal rendering for other sections
          return (
            <Section key={id}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            >
              <Title>{title}</Title>
              <Content>{content}</Content>
              {/* If you are using images for sections, uncomment below */}
              {imageUrl && (
    <Image
      src={imageUrl}
      alt={title}
      variants={imageVariants}
      whileHover="hover"
    />
  )}
            </Section>
          );
        }
      })}
        </FlexContainer>

        <ObjectivesSection>
        <ObjectivesTitle>OBJECTIVES</ObjectivesTitle>
        <ObjectivesGrid
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        >
          {objectivesData.map((objective, index) => (
            <Objective key={index} variants={listItemVariants}>
              <ObjectiveImage src={objective.img} alt={`Objective ${index + 1}`} />
              <ObjectiveText>{objective.text}</ObjectiveText>
            </Objective>
          ))}
      </ObjectivesGrid>
      </ObjectivesSection>

<FrameworkTitle>FRAMEWORK</FrameworkTitle>
<CategoryContainer>
  <CentralLogo />
  {categories.map((category) => (
    <Category key={category.id}>
      <CategoryTitle>{category.title}</CategoryTitle>
      <LogoGrid>
        {category.logos.map((logo) => (
          // Set inline styles for width and height to 50px
          <img key={logo.id} src={logo.src} alt={logo.alt} style={{ width: '50px', height: '50px' }} />
        ))}
      </LogoGrid>
    </Category>
  ))}
</CategoryContainer>
<TeamSection />

    </main>
  );
};

export default AboutPage;
