import React from 'react'
import Destination_Home_Section from './DestinationComponent/Destination_Home_Section/Destination_Home_Section'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import PrimeDestination_Section from './DestinationComponent/PrimeDestination_Section/PrimeDestination_Section';
import Footer from "../../Components/Footer/Footer"
const Destination = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
       
        { label: 'Destination',href:'/destination' }, 
      ];
  return (
      <>
          <div>
              <Destination_Home_Section />
              
              <Breadcrumb items={breadcrumbItems} />
              

              <div className='mb-10'>
                  <PrimeDestination_Section/>
              </div>
              <Footer/>
          </div>
      
      
      
      </>
  )
}

export default Destination