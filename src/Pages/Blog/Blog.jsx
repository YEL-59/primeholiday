import React from 'react'
import Blog_Home_Section from './BlogComponent/Blog_Home_Section/Blog_Home_Section'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import BlogTravelTio_Section from './BlogComponent/BlogTravelTip_Section/BlogTravelTio_Section';
import Blogdestinationguid_Section from './BlogComponent/Blogdestinationguid_Section/Blogdestinationguid_Section';

import Footer from '../../Components/Footer/Footer';


const Blog = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
       
        { label: 'Blog ',href: '/blog' }, 
      ];
  return (
      <>
          <Blog_Home_Section />
          <Breadcrumb items={breadcrumbItems} />
          <BlogTravelTio_Section />
          <Blogdestinationguid_Section />
        
          <Footer/>
        
      
      </>
  )
}

export default Blog
