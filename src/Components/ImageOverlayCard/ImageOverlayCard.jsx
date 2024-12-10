
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ImageOverlayCard = ({ imgSrc, title, description }) => {
  return (
    <div className="relative w-full  shadow border  ">
    <img src={imgSrc} alt={title} className=" w-full h-auto object-cover aspect-[16/9] md:aspect-[4/3] lg:aspect-[3/3]" />
    {/* Overlay Text */}
    <div className="absolute -mt-[80px] md:-mt-[130px] p-0 md:p-4 w-full flex flex-col justify-end text-ivory-white  bg-[rgba(0,0,0,0.35)] bg-opacity-0 z-10">
      <h2 className="text-lg md:text-2xl xl:text-4xl uppercase font-medium px-4 md:pb-1 z-10 text-center">
        {title}
      </h2>
      <p className="text-sm md:text-sm xl:text-xl uppercase px-4 pb-2 text-center">{description}</p>
    </div>
  </div>
  );
};

export default ImageOverlayCard;
