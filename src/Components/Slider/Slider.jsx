
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { id: 1, title: "Slide 1", description: "This is the first slide." },
  { id: 2, title: "Slide 2", description: "This is the second slide." },
  { id: 3, title: "Slide 3", description: "This is the third slide." },
  { id: 4, title: "Slide 4", description: "This is the fourth slide." },
];

const CardSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1.5}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      className="w-full max-w-5xl"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-3/4">
            <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
            <p className="text-gray-700">{slide.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
