import React from "react";
import img from "../../../../../public/Frame 775.png";
const AboutUscard = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-3 gap-5">
        <div className="relative max-w-lg rounded shadow border ">
          <img src={img} alt="" className="rounded w-full max-h-80" />

          <div className="absolute bottom-0 flex  justify-between items-center bg-green-900  text-white rounded w-full p-2">
            <div>
              <h2 className="text-lg font-bold px-4 ">Qatar</h2>
              <p className="text-sm px-4 ">7days from $1235</p>
            </div>
            <div>
              <p className="text-sm px-4 py-1 border rounded  bg-yellow-500">
                view
              </p>
            </div>
          </div>
        </div>

        <div className="relative max-w-lg rounded shadow border ">
          <img src={img} alt="" className="rounded w-full max-h-80" />

          <div className="absolute bottom-0 flex  justify-between items-center bg-green-900  text-white rounded w-full p-2">
            <div>
              <h2 className="text-lg font-bold px-4 ">Qatar</h2>
              <p className="text-sm px-4 ">7days from $1235</p>
            </div>
            <div>
              <p className="text-sm px-4 py-1 border rounded  bg-yellow-500">
                view
              </p>
            </div>
          </div>
        </div>
        <div className="relative max-w-lg rounded shadow border ">
          <img src={img} alt="" className="rounded w-full max-h-80" />

          <div className="absolute bottom-0 flex  justify-between items-center bg-green-900  text-white rounded w-full p-2">
            <div>
              <h2 className="text-lg font-bold px-4 ">Qatar</h2>
              <p className="text-sm px-4 ">7days from $1235</p>
            </div>
            <div>
              <p className="text-sm px-4 py-1 border rounded  bg-yellow-500">
                view
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUscard;
