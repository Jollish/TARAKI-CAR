import React from 'react';
import Article  from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css';

const Blog = () => {
  return (
    <div className="blog section__padding">
      <div className="blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it</h1>
      </div>
      <div className="blog-container">
        <div className="blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 6 2007" title="Regional Caravan 1.1"/>
        </div>
        <div className="blog-container_groupB">
          <Article imgUrl={blog02} date="Sep 6 2007" title="Regional Caravan 1.2"/>
          <Article imgUrl={blog03} date="Sep 6 2007" title="RIIC Info-Drive"/>
          <Article imgUrl={blog04} date="Sep 6 2007" title="RIIC 2022 Planning Workshop"/>
          <Article imgUrl={blog05} date="Sep 6 2007" title="Open AI is the future. Let us explore it is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog