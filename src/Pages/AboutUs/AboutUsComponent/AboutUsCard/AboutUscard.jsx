import React from "react";
import img from "../../../../../public/Frame 775.png";

const AboutUscard = () => {
  return (
    <div className="bg-[#fffff0]">
         <div className="container mx-auto  p-14">
       <h1 className="text-3xl font-bold text-[#F49D2A] text-center mt-10 mb-14">Destinations you'll love</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="relative max-w-xl rounded-lg overflow-hidden shadow-lg  h-[26rem] bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={img} alt="Qatar Destination" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full bg-green-800 py-4 px-5">
            <div className="flex justify-between items-center  text-white">
              <div>
                <h2 className="text-xl font-semibold">Qatar</h2>
                <p className="text-sm">7 Days from $1235</p>
              </div>
              <div>
              <p className="text-sm py-1.5 px-4 bg-yellow-500 text-white rounded font-semibold cursor-pointer hover:bg-yellow-400">
                  View
                </p>
              </div>
            </div>
          </div>
        </div>



        <div className="relative max-w-xl rounded-lg overflow-hidden shadow-lg  h-[26rem] bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={img} alt="Qatar Destination" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full bg-green-800 py-4 px-5">
            <div className="flex justify-between items-center  text-white">
              <div>
                <h2 className="text-xl font-semibold">sri lanka</h2>
                <p className="text-sm">7 Days from $1235</p>
              </div>
              <div>
              <p className="text-sm py-1.5 px-4 bg-yellow-500 text-white rounded font-semibold cursor-pointer hover:bg-yellow-400">
                  View
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="relative max-w-xl rounded-lg overflow-hidden shadow-lg  h-[26rem] bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={img} alt="Qatar Destination" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full bg-green-800 py-4 px-5">
            <div className="flex justify-between items-center  text-white">
              <div>
                <h2 className="text-xl font-semibold">Morocco</h2>
                <p className="text-sm">7 Days from $1235</p>
              </div>
              <div>
                <p className="text-sm py-1.5 px-4 bg-yellow-500 text-white rounded font-semibold cursor-pointer hover:bg-yellow-400">
                  View
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
    </div>
  );
};

export default AboutUscard;
