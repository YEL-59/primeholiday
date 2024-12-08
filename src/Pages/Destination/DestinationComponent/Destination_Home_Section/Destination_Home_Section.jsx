import React from 'react';
import bgImage from '../../../../../public/DestinationImg/Destinationbg.webp';
import SectionHeader from '../../../../Components/SectionHeader/SectionHeader';


const Destination_Home_Section = () => {
  return (
    <>
      <SectionHeader
      backgroundImage={bgImage}
      title={'Your All-Inclusive Journey starts Here'}
      />
    </>
  );
};

export default Destination_Home_Section;
