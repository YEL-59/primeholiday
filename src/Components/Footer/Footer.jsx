import logo from "../../../src/assets/mylogo.png";

import { Link } from "react-router-dom";
import Instagram from "../../assets/Icons/Instagram";
import Facebook from "../../assets/Icons/Facebook";
import Pinterast from "../../assets/Icons/Pinterast";
import Youtube from "../../assets/Icons/Youtube";
import Location from "../../assets/Icons/Location";
import Mail from "../../assets/Icons/Mail";

import Uparrow from "../../assets/Icons/Uparrow";
import Whatsappe from "../../assets/Icons/Whatsappe";
import footerbg from "../../assets/footerbg.webp"
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
        className="relative bg-cover bg-center text-ivory-white py-7  "
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(19, 80, 41, 0.60) 12.5%, rgba(19, 80, 41, 0.39) 58%, rgba(19, 80, 41, 0.60) 95.95%), url(${footerbg})`,
        }}
      >
        <div className="container mx-auto px-2 sm:px-0">
          <h1 className="text-primary text-4xl md:text-5xl font-medium text-center mb-10 z-100 relative ">
            Connect With Us
          </h1>

          <div className="flex flex-wrap justify-between md:flex-row gap-8">
            <div className="flex items-center gap-5 border-ivory-white border-b pb-4 max-w-[18rem] 2xl:max-w-[21rem] w-full ">
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

            <div onClick={toggleModal} className="px-4 py-2 text-sm md:text-lg bg-transparent border font-semibold text-ivory-white hover:bg-primary hover:text-white rounded uppercase focus:outline-none transition-colors duration-300 ease-in-out hover:border-0">
              Enquire now
            </div>
          </div>

          <div className="mt-5 mb-8 md:mb-0">
            <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2  pb-4 border-ivory-white border-b max-w-[18rem] 2xl:max-w-[21rem]">
              {/* Icon Section */}
              <div className="text-3xl text-primary flex-shrink-0">
                <Location />
              </div>

              {/* Address Section */}
              <p className="text-ivory-white font-inter text-[13.5px] sm:text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-normal ">
                <span className="block">65 Hartfield Crescent</span>
                <span className="block">Birmingham</span>
                <span className="block">B27 7QE</span>
              </p>
            </div>
          </div>


          <div className="mt-5">
            <div className="flex flex-row sm:flex-col gap-2 pb-4 border-ivory-white border-b max-w-[18rem] 2xl:max-w-[21rem] ">
              <div className="text-3xl text-primary ">
                <Mail />
              </div>
              <p className="text-ivory-white font-inter text-[13.5px] md:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-normal ">
                contact@primeholidaydestinations.com
              </p>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2">
              <div className="text-3xl text-primary ">
                <Whatsappe />
              </div>
              <p className="text-ivory-white font-inter text-[13.5px] md:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-normal ">
                +44 7553 778086
              </p>
            </div>
          </div>

          <div>
            <div className="flex justify-end md:-mt-20">
              <img src={logo} alt="Logo" className="h-24 hidden md:block" />
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-between mt-5">
            <div>
              <div className="flex flex-wrap text-ivory-white font-inter text-[12.5px] md:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-normal leading-[29.52px]">
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
                <Link to={"/blog"} className="flex items-center px-2">
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

              <div className="w-full ms-2 text-ivory-white font-inter text-[12.5px] md:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-normal leading-[29.52px] flex sm:flex-row gap-2 flex-col md:items-center justify-between ">
                <p>&copy; 2024 Rizmail Travel & Tours Limited</p>
              </div>


            </div>

            <div className="ms-2 md:ms-0">
              <div>
                <h1 className="text-ivory-white font-inter text-[11px] md:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-normal leading-[29.52px]">
                  Prime Holiday Destinations a Brand by Rizmali Travel & Tours
                  Limited
                </h1>
                <p className="text-ivory-white text-start 2xl:text-end font-inter text-[13.5px] md:text-[10px] lg:text-[12px] xl:text-[15px] 2xl:text-[18px] font-normal leading-[29.52px] pb-4">
                  Company Number 14730696 I Registered in England
                </p>
              </div>
              <div className="">
                <p className="text-ivory-white font-inter text-start 2xl:text-end text-[13.5px] md:text-[10px] lg:text-[12px] xl:text-[15px] font-normal ">
                  Colour palette inspired by @thehousewiththepinkbed
                </p>
              </div>

            </div>
          </div>
        </div>


        <div className="flex justify-end mr-4 -mt-[55px] hidden md:flex">
          <div
            className="text-4xl  border-[2px] h-[48px] rounded-xl py-3 px-3 border-primary flex justify-center items-center"
            onClick={handleScrollToTop}
          >
            <Uparrow />
          </div>
        </div>
      </div>

      <div className="bg-green">
        <div className="container mx-auto flex flex-col md:flex-row gap-5 items-center justify-between py-5 px-2 ">
          <div className="text-ivory-white text-center md:text-start">
            <p className="text-xs uppercase font-bold font-helvetica leading-5 tracking-[2px]">Stay up to Date</p>
            <h1 className="text-lg font-bold truncate font-inter">Subscribe to Our Newsletter</h1>
          </div>
          <div className="flex flex-col md:flex-row justify-end gap-2 w-full">
            <input
              type="text"
              className="border rounded py-2 px-3  bg-transparent  text-ivory-white placeholder-ivory-white placeholder:font-normal focus:outline-none"
              placeholder="Enter Your Name"
            />
            <button className="border rounded px-5 py-2 text-ivory-white font-medium mt-2 sm:mt-0 sm:ml-5  uppercase">
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
