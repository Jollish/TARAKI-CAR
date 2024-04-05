import React from 'react';
import styled, { keyframes } from 'styled-components';
import blog01 from '../../../src/blog01.png'
import blog02 from '../../../src/blog02.png'
import blog03 from '../../../src/blog03.png'
import blog04 from '../../../src/blog04.png'
import blog05 from '../../../src/blog05.png'

const BlogSectionContainer = styled.div`
  padding: 5rem 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlogHeading = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 3rem;
`;

const BlogContainer = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ArticleContainer = styled.div`
background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ArticleContent = styled.div`
  padding: 20px;
`;

const ArticleDate = styled.p`
  font-size: 0.9rem;
  color: #fff;
`;

const ArticleTitle = styled.h3`
  font-size: 1.2rem;
  color: white;
  margin-top: 10px;
  &:hover {
    color: #fff;
  }
`;

// Example article component for demonstration
const Article = ({ imgUrl, date, title }) => (
  <ArticleContainer>
    <ArticleImage src={imgUrl} alt="Blog" />
    <ArticleContent>
      <ArticleDate>{date}</ArticleDate>
      <ArticleTitle>{title}</ArticleTitle>
    </ArticleContent>
  </ArticleContainer>
);

const BlogSection = () => {
  return (
    <BlogSectionContainer>
      <BlogHeading>We're covering a lot of developments in our news updates.
</BlogHeading>
      <BlogContainer>
        <Article imgUrl={blog01} date="Sep 26, 2022" title="Regional Caravan 1.1" />
        <Article imgUrl={blog02} date="Oct 3, 2022" title="Regional Caravan 1.2" />
        <Article imgUrl={blog03} date="Oct 10, 2022" title="RIIC Info-Drive" />
        <Article imgUrl={blog04} date="Oct 17, 2022" title="RIIC 2022 Planning Workshop" />
        <Article imgUrl={blog05} date="Oct 24, 2022" title="Regional Caravan 1.3" />
      </BlogContainer>
    </BlogSectionContainer>
  );
}

export default BlogSection;
