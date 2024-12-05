import React from "react";
import img from "../../../public/imgpsh_fullsize_anim.png";
const Footer = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center text-white py-8 h-[50vh]"
        style={{
          backgroundImage: `url('../../../public/imgpsh_fullsize_anim.png')`,
        }}
          >
              {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500 to-green-700 opacity-40"></div>

        <div>
          <h1 className="text-[#F49D2A] text-4xl font-semibold text-center mb-10 z-100 relative">Connect With Us</h1>

          <div>
            <div className="flex justify-between">
              <div>
                <div className="flex gap-5">
                  {" "}
                  <p className="border-0 border-r-2 px-2">About</p>
                  <p className=" border-r-2 px-2">Destinations</p>
                  <p className=" border-r-2 px-2"> Blog</p>
                  <p className=" border-r-2 px-2">Terms & Conditions</p>
                  <p className=" border-r-2 px-2">Privacy </p>
                  <p className=" ">Cancellation & Refund</p>
                </div>
                <div>
                  <p>@ 2024 Rizmail Travel &7 Tours Limited</p>
                </div>
              </div>
              <div>
                <div>
                  <h1>
                    Prime Holiday Destinations a Brand by Rizmali Travel & Tours
                    Limited
                  </h1>
                  <p>Company Number 14730696 I Registered in England</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-700">
        <div className="flex justify-between p-5">
          <div className="text-white">
            <p>stay up to date</p>
            <h1>Subscribe to our newslettere</h1>
          </div>
          <div>
            <input
              type="text"
              className="border rounded p-2"
              placeholder="Enter Your Name"
            />
            <button className="border rounded px-5 py-2 text-white font-normal ms-5 ">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
