import React from "react";
import img from "../../../../../public/Frame 671.png";

import CardSlider from "../../../../Components/Slider/Slider";
import MainTitle from "../../../../Components/MainTitle/MainTitle";

const Home_Packeg_Section = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center py-10 h-[80vh]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <MainTitle head_title={"ALL-INCLUSIVE Packages"} />
        <div className=" mt-10">
          <CardSlider />
        </div>
      </div>
    </div>
  );
};

export default Home_Packeg_Section;
