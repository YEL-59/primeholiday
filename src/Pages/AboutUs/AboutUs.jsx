import React from 'react'
import AboutUs_Home_Section from './AboutUsComponent/AboutUs_Home_Section/AboutUs_Home_Section'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import AboutUsDescriptionSection from './AboutUsComponent/AboutUsDescription-Section/AboutUsDescription-Section';
import AboutUscard from './AboutUsComponent/AboutUsCard/AboutUscard';
import Footer from '../../Components/Footer/Footer';

const AboutUs = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
       
        { label: 'About Us ' }, 
      ];
  return (
      <>
      
          <div>
              
              <AboutUs_Home_Section />
              <Breadcrumb items={breadcrumbItems} />
              <AboutUsDescriptionSection />
              <AboutUscard />
              
              <Footer/>
          </div>
          </>
  )
}

export default AboutUs