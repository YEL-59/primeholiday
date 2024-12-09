

import logo from "/Transparent-logo-3 4.png";



import { VscChevronUp } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Instagram from "../../assets/Icons/Instagram";
import Facebook from "../../assets/Icons/Facebook";
import Pinterast from "../../assets/Icons/Pinterast";
import Youtube from "../../assets/Icons/Youtube";
import Location from "../../assets/Icons/Location";
import Mail from "../../assets/Icons/Mail";
import Watsapp from "../../assets/Icons/watsapp";
import Uparrow from "../../assets/Icons/Uparrow";

const Footer = () => {
  //to click the butoon to move to the top of page
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth', 
    });
  };
 
  return (
    <>
      <div
        className="relative bg-cover bg-center text-white py-8  "
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(19, 80, 41, 0.60) 12.5%, rgba(19, 80, 41, 0.39) 58%, rgba(19, 80, 41, 0.60) 95.95%), url('/footerbg.webp')`,
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-primary text-4xl md:text-6xl font-semibold text-center mb-10 z-100 relative">
            Connect With Us
          </h1>

          <div className="flex flex-wrap justify-between md:flex-row gap-6">
            <div className="flex items-center gap-5 border-b max-w-[14rem] md:max-w-none w-full md:w-auto">
              <div className="text-3xl font-bold text-primary">
                <Instagram/>
              </div>
              <div className="text-3xl font-bold text-primary">
                <Facebook/>
              </div>
              <div className="text-3xl font-bold text-primary">
                <Pinterast/>
              </div>
              <div className="text-3xl font-bold text-primary">
                <Youtube/>
              </div>
            </div>

            <div className="text-xl px-5 py-1 rounded-lg text-text-primary border font-semibold mt-5 md:mt-0">
              Enquire now
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col gap-2 border-b max-w-[14rem] ">
              <div className="text-3xl text-primary">
               <Location/>
              </div>
              <address className="text-text-primary font-inter text-[18px] font-normal leading-[29.52px]">65 Hartfield Crescent Birmingham B27 7QE</address>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col gap-2 border-b max-w-[22rem] ">
              <div className="text-3xl text-primary">
                <Mail/>
              </div>
              <p className="text-text-primary font-inter text-[18px] font-normal leading-[29.52px]">contact@primeholidaydestinations.com</p>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col gap-2">
              <div className="text-3xl text-primary">
               <Watsapp/>
              </div>
              <p className="text-text-primary font-inter text-[18px] font-normal leading-[29.52px]">+44 7553 778086</p>
            </div>
          </div>

          <div>
            <div className="flex justify-end -mt-20">
              <img src={logo} alt="Logo" className="h-30" />
            </div>
          </div>

          <div className="flex flex-wrap justify-between mt-5">
            <div>
              <div className="flex flex-wrap gap-5 text-text-primary font-inter text-[18px] font-normal leading-[29.52px]">
              <Link to={'about'}> <p className="border-0 border-r-2 px-1">About</p></Link>
              <Link to={'destination'}> <p className="border-r-2 px-1">Destinations</p></Link>
               
               
                <Link to={'blog'}> <p className="border-r-2 px-1">Blog</p></Link>
               
                <Link to={'terms-and-conditions'}> <p className="border-r-2 px-1">Terms & Conditions</p></Link>
               <Link to={'privacy'}>  <p className="border-r-2 px-1">Privacy</p></Link>
              
                <Link to={'cancellation'}> <p className="px-1">Cancellation & Refund</p></Link>
               
              </div>
              <div>
                <p className="text-text-primary font-inter text-[18px] font-normal leading-[29.52px]">@ 2024 Rizmail Travel & Tours Limited</p>
              </div>
            </div>

            <div>
              <div>
                <h1 className="text-text-primary font-inter text-[18px] font-normal leading-[29.52px]">
                  Prime Holiday Destinations a Brand by Rizmali Travel & Tours Limited
                </h1>
                <p className="text-text-primary font-inter text-[18px] font-normal leading-[29.52px]">
                  Company Number 14730696 I Registered in England
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-text-primary font-inter text-md font-normal leading-[29.52px]">
                  Colour palette inspired by @thehousewiththepinkbed
                </p>
               
              </div>
             <div className="flex justify-end ">
             <div className="border p-2  rounded  flex justify-end w-10" onClick={handleScrollToTop}>
                 <Uparrow/>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green">
  <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between p-2">
    <div className="text-white">
      <p className="text-sm">Stay up to date</p>
      <h1 className="text-lg font-bold">Subscribe to our newsletter</h1>
    </div>
    <div className="flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        className="border rounded py-1 px-3 bg-transparent h-8"
        placeholder="Enter Your Name"
      />
      <button className="border rounded px-5 py-1 text-white font-medium mt-2 sm:mt-0 sm:ml-5 h-8">
        Subscribe
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default Footer;
