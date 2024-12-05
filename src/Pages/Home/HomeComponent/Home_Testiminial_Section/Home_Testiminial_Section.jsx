import React from "react";
import img from "../../../../../public/image 46.png";

const Home_Testiminial_Section = () => {
  return (
    <>
      <div>
        <div className="container mx-auto">
                  <div className="lg:w-2/3 mx-auto grid md:grid-cols-9 gap-5 my-10 md:my-20 p-1">
                  <div className="md:col-span-5">
            <img src={img} alt="" className="h-3/3 w-full" />
          </div>
            <div className="md:col-span-4 flex justify-center items-center">
              <div>
                <h1 className="text-[#F49D2A] text-4xl max-w-[22rem] font-semibold">
                TESTIMONIALS OF SATISFACTION
                </h1>
                <p className="max-w-sm mt-5 mb-5 text-xl leading-10">
                The best measure to our services comes from our customers. Keep an eye out as our travellers share their stories. We'll be sharing feedback from our travellers here shortly, so you can see what makes PHD unique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_Testiminial_Section;
