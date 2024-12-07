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
import img1 from "../../../public/Frame 303.png";
import img2 from "../../../public/Frame 296.png";
import img3 from "../../../public/Frame 309.png";
import img4 from "../../../public/Frame 301.png";
import img5 from "../../../public/Frame 296.png";
import img6 from "../../../public/Frame 303.png";

export default function CardSlider() {
  const cards = [
    { image: img1, country: "Italy",descriptions: "7 days fROM $1234"},
    { image: img2, country: "France",descriptions: "7 days fROM $1234" },
    { image: img3, country: "Germany",descriptions: "7 days fROM $1234" },
    { image: img4, country: "Japan",descriptions: "7 days fROM $1234" },
    { image: img5, country: "Spain",descriptions: "7 days fROM $1234" },
    { image: img6, country: "Australia",descriptions: "7 days fROM $1234" },
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
            className="card bg-cover bg-center rounded-lg shadow-lg h-[25rem]"
            style={{
              backgroundImage: `url(${card.image})`,
            }}
          >
            {/* Optional Content for Cards */}
            <div className="card-text bg-black opacity-70 z-10 text-white text-center w-full p-4">
              <h2 className="text-xl font-bold">{card.country}</h2>
              <p className="text-md font-medium">{card.descriptions}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
