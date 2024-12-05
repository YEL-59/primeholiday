import React, { useEffect, useState } from "react";
import img from "../../..//../..//public/Frame 671.png";
import MainHeading from "../../../../Components/MainHeading/MainHeading";

const Home_Packeg_Section = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prevIndex) => (prevIndex + 1) % 2); // Toggle between 0 and 1
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <>
      <div>
        <div
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div>
            <MainHeading head_title={"ALL-INCLUSIVE Packages"} />
          </div>

          {/* Slider Section */}
          <div>
            <div className="flex gap-5 transition-transform duration-700">
              <div
                className={`h-[30rem] w-[60rem] bg-red-500 bg-cover transition-transform duration-700 ${
                  sliderIndex === 0 ? "transform translate-x-0" : "transform translate-x-[100%]"
                }`}
              >
                <img src={img} className="object-cover w-full h-full" alt="" />
              </div>
              <div
                className={`h-[30rem] w-[40rem] bg-red-500 bg-cover transition-transform duration-700 ${
                  sliderIndex === 1 ? "transform translate-x-0" : "transform translate-x-[-50%]"
                }`}
              >
                <img src={img} className="object-cover w-full h-full" alt="" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_Packeg_Section;
