
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ImageOverlayCard = ({ imgSrc, title, description }) => {
  return (
    <div className="relative w-full  shadow border  -z-10">
    <img src={imgSrc} alt={title} className=" h-[555px] w-full" />
    {/* Overlay Text */}
    <div className="absolute -mt-[130px] p-4 w-full flex flex-col justify-end text-ivory-white rounded bg-[rgba(0,0,0,0.35)] bg-opacity-0 z-10">
      <h2 className="text-4xl uppercase font-medium px-4 pb-1 z-10 text-center">
        {title}
      </h2>
      <p className="text-lg uppercase px-4 pb-2 text-center">{description}</p>
    </div>
  </div>
  );
};

export default ImageOverlayCard;
