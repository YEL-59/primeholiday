import React from 'react'
import AboutUs_Home_Section from './AboutUsComponent/AboutUs_Home_Section/AboutUs_Home_Section'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import AboutUsDescriptionSection from './AboutUsComponent/AboutUsDescription-Section/AboutUsDescription-Section';
import AboutUscard from './AboutUsComponent/AboutUsCard/AboutUscard';


const AboutUs = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/home' },
       
        { label: 'About Us ',href: '/' }, 
    ];
   
  return (
      <>
      
          <div>
              
              <AboutUs_Home_Section />
              <Breadcrumb items={breadcrumbItems} />
              <AboutUsDescriptionSection />
              <AboutUscard />
              
            
          </div>
          </>
  )
}

export default AboutUs