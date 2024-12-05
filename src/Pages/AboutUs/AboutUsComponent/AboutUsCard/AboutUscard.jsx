import React from "react";
import img from "../../../../../public/Frame 775.png";

const AboutUscard = () => {
  return (
    <div className="container mx-auto mt-10 mb-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="relative max-w-xl rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={img} alt="Qatar Destination" className="w-full h-64 object-cover" />
          <div className="absolute bottom-0 w-full bg-green-800 p-2">
            <div className="flex justify-between items-center  text-white">
              <div>
                <h2 className="text-xl font-semibold">Qatar</h2>
                <p className="text-sm">7 Days from $1235</p>
              </div>
              <div>
                <p className="text-sm py-1 px-4 bg-yellow-500 text-black rounded-lg font-semibold cursor-pointer hover:bg-yellow-400">
                  View
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative max-w-xl rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={img} alt="Qatar Destination" className="w-full h-64 object-cover" />
          <div className="absolute bottom-0 w-full bg-green-800 p-2">
            <div className="flex justify-between items-center  text-white">
              <div>
                <h2 className="text-xl font-semibold">Qatar</h2>
                <p className="text-sm">7 Days from $1235</p>
              </div>
              <div>
                <p className="text-sm py-1 px-4 bg-yellow-500 text-black rounded-lg font-semibold cursor-pointer hover:bg-yellow-400">
                  View
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative max-w-xl rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={img} alt="Qatar Destination" className="w-full h-64 object-cover" />
          <div className="absolute bottom-0 w-full bg-green-800 p-2">
            <div className="flex justify-between items-center  text-white">
              <div>
                <h2 className="text-xl font-semibold">Qatar</h2>
                <p className="text-sm">7 Days from $1235</p>
              </div>
              <div>
                <p className="text-sm py-1 px-4 bg-yellow-500 text-black rounded-lg font-semibold cursor-pointer hover:bg-yellow-400">
                  View
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUscard;
