import { useRef, useState, useEffect } from "react";
import karala from "../../../../../public/HomeImg/karala.webp";
import Egypt from "../../../../../public/HomeImg/Egypt.webp";
import Morocco from "../../../../../public/HomeImg/Morocco.webp";
import Oman from "../../../../../public/HomeImg/Oman.webp";
import Qatar from "../../../../../public/HomeImg/Qatar.webp";
import SriLanka from "../../../../../public/HomeImg/SriLanka.webp";
import zanzibar from "../../../../../public/HomeImg/zanzibar.webp";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import "./style.css";

import SecoundaryTitle from "../../../../Components/SecoundaryTitle/SecoundaryTitle";

const Home_Prime_Section = () => {
  const images = [
    { id: 1, src: karala, name: "kerala", role: "God's Own Country" },
    { id: 2, src: SriLanka, name: "SriLanka", role: "You'll Come Back for More" },
    { id: 3, src: zanzibar, name: "zanzibar", role: "Spice Island" },
    { id: 4, src: Oman, name: "Oman", role: "Beauty has an address" },
    { id: 5, src: Qatar, name: "Qatar", role: "Experience the World Beyond" },
    { id: 6, src: Egypt, name: "Egypt", role: "Beauty of Land" },
    { id: 7, src: Morocco, name: "Morocco", role: "Land of Light" },
  ];

  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 2));
  const sliderRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

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
    <div className="relative bg-ivory-white bg-cover bg-center py-16 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-20">
          <SecoundaryTitle head_title={"Prime Destinations"} />
        </div>

        {/* Swiper for small and medium screens */}
        <div className="block lg:hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="swiperContainer"
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <div
                  className="slider-card cursor-pointer transition-all duration-300 transform scale-95 hover:scale-105 shadow-lg"
                  style={{
                    backgroundImage: `url(${image.src})`,
                    width: "100%",
                    height: "25rem",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex justify-center items-end h-full text-center relative">
                    {/* Overlay positioned at the bottom */}
                    <div className="absolute bottom-0 p-4 w-full bg-[rgba(0,0,0,0.5)] text-ivory-white rounded-t-lg">
                      <h2 className="text-md lg:text-4xl font-bold tracking-wider">
                        {image.name}
                      </h2>
                      <p className="text-xs lg:text-md font-normal mt-2">{image.role}</p>
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
            className="flex gap-10 justify-center items-center overflow-hidden"
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`slider-card cursor-pointer transition-all duration-300 transform ${activeIndex === index
                    ? "hovered scale-110 shadow-xl"
                    : "scale-90 opacity-95"
                  }`}
                style={{
                  backgroundImage: `url(${image.src})`,
                  width: activeIndex === index ? "50rem" : "7.5rem",
                  height: "32rem",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col justify-center items-center h-full text-center">
                  {activeIndex === index ? (
                    <div className="overlay active-overlay">
                      <h2 className="text-4xl font-bold text-ivory-white tracking-wider">
                        {image.name}
                      </h2>
                      <p className="text-md font-normal text-ivory-white mt-2">
                        {image.role}
                      </p>
                    </div>
                  ) : (
                    <div className="vertical-info">
                      <h1 className="title text-ivory-white tracking-widest">
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
