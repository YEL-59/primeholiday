import React from 'react';
import img from '../../../public/imgpsh_fullsize_anim.png';
import logo from '../../../public//Transparent-logo-3 4.png';
import { RiFacebookBoxLine } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';
import { FaPinterestP } from 'react-icons/fa';
import { CiYoutube } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import { IoMailOutline } from 'react-icons/io5';
import { VscCallIncoming } from 'react-icons/vsc';
const Footer = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center text-white py-8 h-[60vh] -z-10"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(19, 80, 41, 0.60) 12.5%, rgba(19, 80, 41, 0.39) 58%, rgba(19, 80, 41, 0.60) 95.95%), url('../../../public/imgpsh_fullsize_anim.png')`,
        }}
      >
        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-green-500 to-green-700 opacity-10"></div> */}

        <div className='container mx-auto'>
          <h1 className="text-[#F49D2A] text-6xl font-semibold text-center mb-10 z-100 relative">
            Connect With Us
          </h1>

          <div>
            <div className="flex flex-wrap  justify-between">
              <div className="flex items-center gap-5 border-b   max-w-[14rem] ">
                <div className="">
                  <RiFacebookBoxLine />
                </div>
                <div>
                  <RiInstagramLine />
                </div>
                <div>
                  <FaPinterestP />
                </div>
                <div>
                  <CiYoutube />
                </div>
              </div>

              <div className="text-xl px-5 py-1 rounded-lg text-white border font-semibold">
                Enquire now
              </div>
            </div>

            <div className=" mt-5">
              <div className="flex flex-col gap-2 border-b max-w-[14rem] ">
                <div className="text-2xl ">
                  <CiLocationOn />
                </div>
                <address className="">
                  65 Hartfield Crescent Birmingham B27 7QE
                </address>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex flex-col gap-2 border-b max-w-[19rem] ">
                <div className="text-2xl ">
                  <IoMailOutline />
                </div>
                <p>contact@primeholidaydestinations.com</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex flex-col gap-2 border-b max-w-[10rem] ">
                <div className="text-2xl ">
                  <VscCallIncoming />
                </div>
                <p>+44 7553 778086</p>
              </div>
            </div>

            <div>
              <div className="flex justify-end -mt-20">
                <img src={logo} alt="" className='h-30'/>
              </div>
            </div>

            <div className="flex flex-wrap justify-between mt-5">
              <div>
                <div className="flex flex-wrap gap-5 text-md">
                  {' '}
                  <p className="border-0 border-r-2 px-1">About</p>
                  <p className=" border-r-2 px-1">Destinations</p>
                  <p className=" border-r-2 px-1"> Blog</p>
                  <p className=" border-r-2 px-1">Terms & Conditions</p>
                  <p className=" border-r-2 px-1">Privacy </p>
                  <p className=" ">Cancellation & Refund</p>
                </div>
                <div>
                  <p>@ 2024 Rizmail Travel &7 Tours Limited</p>
                </div>
              </div>
              <div>
                <div>
                  <h1 className='text-md'>
                    Prime Holiday Destinations a Brand by Rizmali Travel & Tours
                    Limited
                  </h1>
                  <p className='text-md'>Company Number 14730696 I Registered in England</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#135029]">
        <div className="container mx-auto flex justify-between p-4">
          <div className="text-white ">
            <p>stay up to date</p>
            <h1 className='font-bold'>Subscribe to our newslettere</h1>
          </div>
          <div>
            <input
              type="text"
              className="border rounded p-2 bg-transparent"
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
