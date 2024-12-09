
import img from "../../../../../public/HomeImg/FrameBig.png";

import CardSlider from "../../../../Components/Slider/Slider";
import MainTitle from "../../../../Components/MainTitle/MainTitle";

const Home_Packeg_Section = () => {
  return (
    <div>
      <div
          className="relative bg-cover bg-center py-10 h-[100vh]"
          style={{
            backgroundImage: `linear-gradient(239deg, #FFFFF0 37.35%, rgba(255, 255, 240, 0.00) 82.3%), url(${img})`,
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



