import React, { useState, useEffect } from "react";
import img from "../../../../../public/Frame 671.png";
import img1 from "../../../../../public/Frame 770.png";
import img2 from "../../../../../public/Oman2.png";
import img3 from "../../../../../public/Oman3.png";
import img4 from "../../../../../public/Oman.png";
import MainHeading from "../../../../Components/MainHeading/MainHeading";

const Home_Prime_Section = () => {
  // Array of images
  const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img3 },
    { id: 6, src: img2 },
    { id: 7, src: img1 },
  ];

  // Set initial expanded index to the middle item
  const [expandedIndex, setExpandedIndex] = useState(Math.floor(images.length / 2));

  // Handle the click on a div to expand or collapse
  const handleClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index); // Toggle expansion
  };

  return (
    <>
      <div className="relative bg-[#FFFFF0] bg-cover bg-center" >
        <div>
          <MainHeading head_title={'ALL-INCLUSIVE Packages'} />
        </div>

        {/* Slider Section */}
        <div className="flex gap-5 overflow-x-auto">
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => handleClick(index)} // Handle click to expand
              className={`h-[30rem] bg-cover cursor-pointer transition-all duration-500 ${
                expandedIndex === index
                  ? "w-[100rem] h-[50rem] mx-auto -mt-16 shadow-xl"  
                  : "w-28"
              }`}
              style={{ backgroundImage: `url(${image.src})` }}
            >
              {/* Image is set as background */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home_Prime_Section;
