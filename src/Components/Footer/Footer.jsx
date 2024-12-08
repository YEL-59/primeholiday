

import logo from "/Transparent-logo-3 4.png";

import img1 from "/instagram.png";
import img2 from "/facebook.png";
import img3 from "/Frame.png";
import img4 from "/Frame 3.png";
import img5 from "/whatsapp.png";
import img6 from "/location.png";
import img7 from "/sms.png";
import { VscChevronUp } from "react-icons/vsc";

const Footer = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center text-white py-8  -z-10"
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
                <img src={img1} alt="Instagram" />
              </div>
              <div className="text-3xl font-bold text-primary">
                <img src={img2} alt="Facebook" />
              </div>
              <div className="text-3xl font-bold text-primary">
                <img src={img3} alt="Frame 1" />
              </div>
              <div className="text-3xl font-bold text-primary">
                <img src={img4} alt="Frame 2" />
              </div>
            </div>

            <div className="text-xl px-5 py-1 rounded-lg text-text-primary border font-semibold mt-5 md:mt-0">
              Enquire now
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col gap-2 border-b max-w-[14rem] ">
              <div className="text-3xl text-primary">
                <img src={img6} alt="Location" />
              </div>
              <address className="text-lg">65 Hartfield Crescent Birmingham B27 7QE</address>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col gap-2 border-b max-w-[22rem] ">
              <div className="text-3xl text-primary">
                <img src={img7} alt="SMS" />
              </div>
              <p className="text-lg">contact@primeholidaydestinations.com</p>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col gap-2">
              <div className="text-3xl text-primary">
                <img src={img5} alt="Whatsapp" />
              </div>
              <p className="text-lg">+44 7553 778086</p>
            </div>
          </div>

          <div>
            <div className="flex justify-end -mt-20">
              <img src={logo} alt="Logo" className="h-30" />
            </div>
          </div>

          <div className="flex flex-wrap justify-between mt-5">
            <div>
              <div className="flex flex-wrap gap-5 text-lg">
                <p className="border-0 border-r-2 px-1">About</p>
                <p className="border-r-2 px-1">Destinations</p>
                <p className="border-r-2 px-1">Blog</p>
                <p className="border-r-2 px-1">Terms & Conditions</p>
                <p className="border-r-2 px-1">Privacy</p>
                <p className="px-1">Cancellation & Refund</p>
              </div>
              <div>
                <p>@ 2024 Rizmail Travel & Tours Limited</p>
              </div>
            </div>

            <div>
              <div>
                <h1 className="text-lg">
                  Prime Holiday Destinations a Brand by Rizmali Travel & Tours Limited
                </h1>
                <p className="text-lg">
                  Company Number 14730696 I Registered in England
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm">
                  Colour palette inspired by @thehousewiththepinkbed
                </p>
                <div className="border rounded p-1 flex justify-center w-10">
                  <VscChevronUp />
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
