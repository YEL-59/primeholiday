import React from 'react';
import bgImage from '../../../../../public/Destination Page image 1.png';
import Navbar from '../../../../Components/Navbar/Navbar';

const Destination_Home_Section = () => {
  return (
    <>
      <header
        className="relative flex items-center justify-center h-[100vh]  bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
          <Navbar/>
        <div
          className="relative z-30 p-5 text-6xl font-salvager font-semibold text-[#F49D2A]  rounded-xl"
        >
          Your All-Inclusive Journey starts Here
        </div>
      </header>
    </>
  );
};

export default Destination_Home_Section;
