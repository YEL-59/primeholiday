
import img from "../../../../../src/assets/HomeImg/FrameBig.png";

import CardSlider from "../../../../Components/Slider/Slider";
import SecoundaryTitle from "../../../../Components/SecoundaryTitle/SecoundaryTitle";

const Home_Packeg_Section = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center py-5 md:py-10 "
        style={{
          backgroundImage: `linear-gradient(239deg, #FFFFF0 37.35%, rgba(255, 255, 240, 0.00) 82.3%), url(${img})`,
        }}
      >
        <div className="flex justify-center">
          <SecoundaryTitle head_title={"ALL-INCLUSIVE Packages"} />
        </div>
        <div className=" md:mt-10">
          <CardSlider />
        </div>
      </div>
    </div>
  );
};

export default Home_Packeg_Section;



