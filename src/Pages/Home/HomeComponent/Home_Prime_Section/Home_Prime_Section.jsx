import React, { useEffect, useRef, useState } from "react";
import img1 from "../../../../../public/Frame 770.png";
import img2 from "../../../../../public/Oman2.png";
import img3 from "../../../../../public/Oman3.png";
import img4 from "../../../../../public/Oman.png";

import "./style.css";
import MainTitle from "../../../../Components/MainTitle/MainTitle";
const Home_Prime_Section = () => {
  const images = [
    { id: 1, src: img1, name: "Mike" },
    { id: 2, src: img2, name: "Samite", role: "WordPress Developer" },
    { id: 3, src: img3, name: "Hashi", role: "Java Developer" },
    { id: 4, src: img4, name: "Kaity", role: "Web Developer" },
    { id: 5, src: img3, name: "Lauren", role: "PHP Developer" },
    { id: 6, src: img2, name: "Ryan", role: "SEO Developer" },
    { id: 7, src: img1, name: "Dakes", role: "SQL Developer" },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Default active card index
  const sliderRef = useRef(null); // Ref for the slider container

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  // Scroll to center the active card
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const activeCard = slider.children[activeIndex];
      const sliderWidth = slider.offsetWidth;
      const cardWidth = activeCard.offsetWidth;
      const cardLeft = activeCard.offsetLeft;

      // Center the active card
      slider.scrollTo({
        left: cardLeft - sliderWidth / 2 + cardWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative bg-[#FFFFF0] bg-cover bg-center py-16 h-[70vh] flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="mb-32">
          <MainTitle head_title={"ALL-INCLUSIVE Packages"} />
        </div>

        <div
          ref={sliderRef}
          className="flex gap-5 justify-center items-center overflow-hidden"
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`slider-card cursor-pointer transition-all duration-500 transform ${
                activeIndex === index
                  ? "active scale-110 shadow-xl"
                  : "scale-90 opacity-75"
              }`}
              style={{
                backgroundImage: `url(${image.src})`,
                width: activeIndex === index ? "40rem" : "15rem",

                height: "25rem",
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className="flex flex-col justify-center items-center h-full text-center">
                {activeIndex === index ? (
                  <div className="overlay active-overlay">
                    <h2 className="text-4xl font-bold text-white">
                      {image.name}
                    </h2>
                    <p className="text-lg text-gray-200 mt-2">{image.role}</p>
                  </div>
                ) : (
                  <div className="vertical-info">
                    <h1 className="title text-white">{image.role}</h1>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home_Prime_Section;
