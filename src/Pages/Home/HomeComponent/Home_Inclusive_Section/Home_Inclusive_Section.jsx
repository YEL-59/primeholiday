import React from "react";
import img from "../../../../../public/Image for section 4 6.png";
const Home_Inclusive_Section = () => {
  return (
    <>
      {" "}
          <div >
          <div className="container mx-auto">
        <div className="lg:w-2/3 mx-auto grid md:grid-cols-9 gap-5 my-10 md:my-20 p-1">
          <div className="md:col-span-4">
            <div>
              <h1 className="text-[#F49D2A] text-4xl max-w-[19rem] font-semibold">
                COMMITMENT TO EXCELLENCE
              </h1>
              <p className="max-w-sm mt-5 mb-5 text-xl leading-10">
                At PHD, we are committed to transforming each holiday into a
                memorable experience, prioritizing our clients' comfort,
                enjoyment, and peace of mind from start to finish. When you
                travel with prime Holiday Destinations, you're not just
                exploring a new place, you're embarking on a journey crafted
                with passion, experience, and a commitment to excellence.
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <img src={img} alt="" className="h-3/3 w-full" />
          </div>
        </div>
      </div>
   </div>
    </>
  );
};

export default Home_Inclusive_Section;
