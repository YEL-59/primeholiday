import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./style.css";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

// Import images
import img1 from "../../../public/HomeImg/Keralabig.webp";
import img2 from "../../../public/HomeImg/MorochoBig.webp";
import img3 from "../../../public/HomeImg/oatarbig.webp";
import img4 from "../../../public/HomeImg/zangerBig.webp";

export default function CardSlider() {
  const cards = [
    { image: img1, country: "Kerala", descriptions: "7 days from ",price:"$1233" },
    { image: img2, country: "Morocho", descriptions: "8 days from ",price:"$1133" },
    { image: img3, country: "Qatar", descriptions: "2 days from ",price:"$1033" },
    { image: img4, country: "Zanger", descriptions: "3 days from ",price:"$933" },
  ];

  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000, // Delay between slides (3 seconds)
        disableOnInteraction: false, // Autoplay continues after user interaction
      }}
      modules={[Pagination, Autoplay]} // Include the Autoplay module
      className="mySwiper"
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div
            className="card bg-cover bg-center  "
            style={{
              backgroundImage: `url(${card.image})`,
            }}
          >
            {/* Optional Content for Cards */}
            <div className="card-text bg-black bg-opacity-70 z-10 mt-20 text-ivory-white text-center w-full p-4  shadow-md">
              <h2 className="text-4xl font-bold text-ivory-white leading-10">
                {card.country}
              </h2>
              <p className="text-xl font-normal text-ivory-white leading-10 uppercase">
                {card.descriptions} <strong>{card.price}</strong>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
