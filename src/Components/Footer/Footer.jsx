import logo from "/Transparent-logo-3 4.png";

import { Link } from "react-router-dom";
import Instagram from "../../assets/Icons/Instagram";
import Facebook from "../../assets/Icons/Facebook";
import Pinterast from "../../assets/Icons/Pinterast";
import Youtube from "../../assets/Icons/Youtube";
import Location from "../../assets/Icons/Location";
import Mail from "../../assets/Icons/Mail";

import Uparrow from "../../assets/Icons/Uparrow";
import Whatsappe from "../../assets/Icons/Whatsappe";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Footer = () => {
  //to click the butoon to move to the top of page
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
// State to manage modal visibility
const [isModalOpen, setIsModalOpen] = useState(false);



// Toggle modal visibility
const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
};
  return (
    <>
      <div
        className="relative bg-cover bg-center text-white py-5  "
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(19, 80, 41, 0.60) 12.5%, rgba(19, 80, 41, 0.39) 58%, rgba(19, 80, 41, 0.60) 95.95%), url('/footerbg.webp')`,
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-primary text-4xl md:text-6xl font-semibold text-center mb-10 z-100 relative">
            Connect With Us
          </h1>

          <div className="flex flex-wrap justify-between md:flex-row gap-8">
            <div className="flex items-center gap-5 border-b pb-4 max-w-[14rem] md:max-w-none w-full md:w-auto">
              <div className="text-3xl font-bold text-primary">
                <Instagram />
              </div>
              <div className="text-3xl font-bold text-primary">
                <Facebook />
              </div>
              <div className="text-3xl font-bold text-primary">
                <Pinterast />
              </div>
              <div className="text-3xl font-bold text-primary">
                <Youtube />
              </div>
            </div>

            <div onClick={toggleModal} className="text-xl px-5 py-1 rounded text-text-primary border font-semibold flex justify-center items-center cursor-pointer">
              Enquire now
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col gap-2 pb-4 border-b max-w-[14rem] ">
              <div className="text-3xl text-primary pb-2">
                <Location />
              </div>
              <address className="text-text-primary font-inter text-[18px] font-normal leading-[29.52px]">
                65 Hartfield Crescent Birmingham B27 7QE
              </address>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col gap-2 pb-4 border-b max-w-[22rem] ">
              <div className="text-3xl text-primary pb-2">
                <Mail />
              </div>
              <p className="text-text-primary font-inter text-[15px] md:text-[18px] font-normal leading-[29.52px]">
                contact@primeholidaydestinations.com
              </p>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col gap-2">
              <div className="text-3xl text-primary pb-2">
                <Whatsappe />
              </div>
              <p className="text-text-primary font-inter text-[18px] font-normal leading-[29.52px]">
                +44 7553 778086
              </p>
            </div>
          </div>

          <div>
            <div className="flex justify-end -mt-20">
              <img src={logo} alt="Logo" className="h-30 hidden md:block" />
            </div>
          </div>

          <div className="flex flex-wrap justify-between mt-5">
            <div>
              <div className="flex flex-wrap text-text-primary font-inter text-[18px] font-normal leading-[29.52px]">
                <Link to={"aboutus"} className="flex items-center px-2">
                  <p className="inline-flex items-center relative pr-4 after:content-[''] after:border-r-2 after:border-gray-300 after:h-4 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2">
                    About
                  </p>
                </Link>
                <Link to={"destination"} className="flex items-center px-2">
                  <p className="inline-flex items-center relative pr-4 after:content-[''] after:border-r-2 after:border-gray-300 after:h-4 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2">
                    Destinations
                  </p>
                </Link>
                <Link to={"blog"} className="flex items-center px-2">
                  <p className="inline-flex items-center relative pr-4 after:content-[''] after:border-r-2 after:border-gray-300 after:h-4 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2">
                    Blog
                  </p>
                </Link>
                <Link
                  to={"terms-and-conditions"}
                  className="flex items-center px-2"
                >
                  <p className="inline-flex items-center relative pr-4 after:content-[''] after:border-r-2 after:border-gray-300 after:h-4 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2">
                    Terms & Conditions
                  </p>
                </Link>
                <Link to={"privacy"} className="flex items-center px-2">
                  <p className="inline-flex items-center relative pr-4 after:content-[''] after:border-r-2 after:border-gray-300 after:h-4 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2">
                    Privacy
                  </p>
                </Link>
                <Link to={"cancellation"} className="flex items-center px-2">
                  <p className="inline-flex items-center">
                    Cancellation & Refund
                  </p>
                </Link>
              </div>

              <div className="w-full text-text-primary font-inter text-[18px] font-normal leading-[29.52px] flex sm:flex-row gap-2 flex-col items-center justify-between py-4">
                <p>&copy; 2024 Rizmail Travel & Tours Limited</p>
              </div>

             
            </div>

            <div>
              <div>
                <h1 className="text-text-primary font-inter text-[18px] font-normal leading-[29.52px]">
                  Prime Holiday Destinations a Brand by Rizmali Travel & Tours
                  Limited
                </h1>
                <p className="text-text-primary text-end font-inter text-[18px] font-normal leading-[29.52px] pb-4">
                  Company Number 14730696 I Registered in England
                </p>
              </div>
              <div className="">
                <p className="text-text-primary font-inter text-end text-sm font-normal leading-[29.52px]">
                Colour palette inspired by @thehousewiththepinkbed
                </p>
              </div>
         
            </div>
          </div>
        </div>


        <div className="flex justify-end mr-14 -mt-10">
                <div
                  className="text-4xl  border-[2px] h-[48px] rounded-xl py-3 px-3 border-primary flex justify-center items-center"
                  onClick={handleScrollToTop}
                >
                  <Uparrow  />
                </div>
              </div>
      </div>

      <div className="bg-green">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between p-2">
          <div className="text-ivory-white">
            <p className="text-sm">Stay up to date</p>
            <h1 className="text-lg font-bold">Subscribe to our newsletter</h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              className="border rounded py-1 px-3 bg-transparent h-8 text-ivory-white"
              placeholder="Enter Your Name"
            />
            <button className="border rounded px-5 py-1 text-ivory-white font-medium mt-2 sm:mt-0 sm:ml-5 h-8">
              Subscribe
            </button>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={toggleModal} />
      </div>
    </>
  );
};

export default Footer;
