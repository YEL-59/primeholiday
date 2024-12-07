import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// Import required modules
import { Pagination } from "swiper/modules";

// Import images
import img1 from "../../../public/Frame 307.png";
import img2 from "../../../public/Frame 307.png";
import img3 from "../../../public/Frame 307.png";

export default function CardSlider() {
  const images = [img1, img2, img3, img1]; // Array of images for the slider

  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div
            className="card bg-cover bg-center rounded-lg shadow-lg h-[25rem] "
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            {/* Optional Content for Cards */}
            <div className="card-content flex items-end justify-center h-full p-4 bg-gradient-to-t from-black/50 via-transparent">
              <h2 className="text-white text-lg font-bold">Card Title {index + 1}</h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
