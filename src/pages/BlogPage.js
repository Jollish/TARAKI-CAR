// pages/BlogPage.js

import React from 'react';
import '../styles/BlogPage.css';
import BlogSection from '../components/HomePage/BlogSection';

function BlogPage() {
  return (
    <div className="blog-container">
      <BlogSection/>
      <h1>Blog Page</h1>
      <p>This is the blog page content.</p>
    </div>
  );
}

export default BlogPage;
