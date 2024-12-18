import { useRef, useState, useEffect } from "react";
import karala from "../../../../../src/assets/HomeImg/karala.webp";
import Egypt from "../../../../../src/assets/HomeImg/Egypt.webp";
import Morocco from "../../../../../src/assets/HomeImg/morocco.webp";
import Oman from "../../../../../src/assets/HomeImg/Oman.webp";
import Qatar from "../../../../../src/assets/HomeImg/Qatar.webp";
import SriLanka from "../../../../../src/assets/HomeImg/SriLanka.webp";
import zanzibar from "../../../../../src/assets/HomeImg/zanzibar.webp";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import "./style.css";

import SecoundaryTitle from "../../../../Components/SecoundaryTitle/SecoundaryTitle";
import { useNavigate } from "react-router-dom";

const Home_Prime_Section = () => {
  const images = [
    { id: 1, src: karala, name: "kerala", description: "God's Own Country" },
    { id: 2, src: SriLanka, name: "SriLanka", description: "You'll Come Back for More" },
    { id: 3, src: zanzibar, name: "zanzibar", description: "Spice Island" },
    { id: 4, src: Oman, name: "Oman", description: "Beauty Has an Address" },
    { id: 5, src: Qatar, name: "Qatar", description: "Experience the World Beyond" },
    { id: 6, src: Egypt, name: "Egypt", description: "The Gift of the Nile" },
    { id: 7, src: Morocco, name: "Morocco", description: "Land of Light" },
  ];

  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 2));
  const sliderRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const navigate = useNavigate();

  const handleCardClick = (countryName, imgSrc, description) => {
    navigate(`/destination/${countryName}`, {
      state: { imgSrc, description }, 
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const activeCard = slider.children[activeIndex];
      if (activeCard) {
        const sliderWidth = slider.offsetWidth;
        const cardWidth = activeCard.offsetWidth;
        const cardLeft = activeCard.offsetLeft;

        // Account for the last card to prevent flickering
        const maxScrollLeft = slider.scrollWidth - sliderWidth;

        let scrollToPosition = cardLeft - sliderWidth / 2 + cardWidth / 2;

        // Prevent overshooting for the last card
        if (scrollToPosition > maxScrollLeft) {
          scrollToPosition = maxScrollLeft;
        }

        requestAnimationFrame(() => {
          slider.scrollTo({
            left: Math.max(scrollToPosition, 0),
            behavior: "smooth",
          });
        });
      }
    }
  }, [activeIndex]);

  const handleMouseEnter = (index) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveIndex(Math.floor(images.length / 2)); // Reset to middle card
    }, 200); // Slight delay to avoid jitter
  };

  return (
    <div className="relative bg-ivory-white bg-cover bg-center py-8 sm:py-10 md:py-16 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-5 sm:mb-10 md:mb-16 lg:mb-20">
          <SecoundaryTitle head_title={"Prime Destinations"} />
        </div>

        {/* Swiper for small and medium screens */}
        <div className="block lg:hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            
            pagination={false}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[ Autoplay]}
            className="swiperContainer"
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <div
                  className="slider-card cursor-pointer transition-all duration-300 transform scale-95 hover:scale-105 shadow-lg"
                  onClick={() => handleCardClick(image.name, image.src, image.description)} 
                  style={{
                    backgroundImage: `url(${image.src})`,
                    width: "100%",
                    height: "20rem",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex justify-center items-end h-full text-center relative">
                    {/* Overlay positioned at the bottom */}
                    <div className="absolute bottom-2 p-4 w-full bg-[rgba(0,0,0,0.5)] text-ivory-white ">
                      <h2 className="text-sm lg:text-4xl font-bold tracking-wider">
                        {image.name}
                      </h2>
                      <p className="text-[10px] lg:text-md font-normal ">{image.description}</p>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Static cards for large screens */}
        <div className="hidden lg:block">
          <div
            ref={sliderRef}
            className="flex justify-center items-center overflow-hidden"
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`slider-card cursor-pointer transition-all duration-300 transform ${activeIndex === index
                  ? "hovered scale-110  mx-[2rem] sm:mx-[2.5rem] md:mx-[3rem] lg:mx-[2rem] 2xl:mx-[3rem]"
                  : "scale-90 opacity-95 mx-[0.2rem] "
                  }`}
                style={{
                  backgroundImage: `url(${image.src})`,
                  width: activeIndex === index ? "50rem" : "7.5rem",

                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCardClick(image.name, image.src, image.description)} 
              >
                <div
                  className={`flex flex-col justify-center items-center text-center ${activeIndex === index
                    ? "h-[32rem]  md:h-[32rem] lg:h-[28rem] xl:h-[30rem] 2xl-[32rem]"
                    : "h-[16rem]  md:h-[32rem] lg:h-[28rem]  xl:h-[30rem] 2xl-[32rem]"
                    }`}
                >
                  {activeIndex === index ? (
                    <div className="overlay active-overlay">
                      <h2 className="xl:text-xl 2xl:text-3xl font-bold text-ivory-white tracking-wider">
                        {image.name}
                      </h2>
                      <p className="text-md font-normal text-ivory-white mt-0 2xl:mt-2">
                        {image.description}
                      </p>
                    </div>
                  ) : (
                    <div className="vertical-info">
                      <h1 className="title text-white tracking-widest z-10">
                        {image.name}
                      </h1>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home_Prime_Section;
