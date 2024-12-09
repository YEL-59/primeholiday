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
import img1 from "../../../public/HomeImg/Keralabig.jpg";
import img2 from "../../../public/HomeImg/moroccho.png";
import img3 from "../../../public/HomeImg/qatarbig.jpg";
import img4 from "../../../public/HomeImg/zangerBig.webp";
import img5 from "../../../public/HomeImg/omanbig.jpg"
import img6 from "../../../public/HomeImg/malaisia.jpg"

export default function CardSlider() {
  const cards = [
    { image: img5, country: "Oman", descriptions: "7 days from ", price: "$1475" },
    { image: img3, country: "Qatar", descriptions: "7 days from ", price: "$1475" },
    { image: img6, country: "Malaysia", descriptions: "7 days from ", price: "$1475" },
    { image: img2, country: "Morocco", descriptions: "7 days from ", price: "$1475" },
    { image: img1, country: "Kerala", descriptions: "7 days from ", price: "$1475" },
    { image: img4, country: "Zanzibar", descriptions: "7 days from ", price: "$1475" },
  ];

  return (
    <Swiper
    slidesPerView="auto" 
    spaceBetween={20} /* Control gap between cards */
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
      <SwiperSlide key={index} style={{ width: "60%" }}> 
        <div className="card">
          <img src={card.image} className="h-[498px]" alt={card.country} />
          <div className="card-text z-10 text-ivory-white text-center w-full p-4 shadow-md">
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
