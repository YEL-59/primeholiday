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
        className="relative bg-cover bg-center text-white py-8 h-[75vh] -z-10"
        style={{
          backgroundImage: `url('../../../public/imgpsh_fullsize_anim.png')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-500 to-green-700 opacity-40"></div>

        <div className='container mx-auto'>
          <h1 className="text-[#F49D2A] text-4xl font-semibold text-center mb-10 z-100 relative">
            Connect With Us
          </h1>

          <div>
            <div className="flex flex-wrap justify-between">
              <div className="flex gap-5 border-b max-w-[10rem] ">
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

            <div className="">
              <div className="flex flex-col gap-2 border-b max-w-[10rem] ">
                <div className="text-2xl ">
                  <CiLocationOn />
                </div>
                <address className="">
                  65 Hartfield Crescent Birmingham B27 7QE
                </address>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col gap-2 border-b max-w-[10rem] ">
                <div className="text-2xl ">
                  <IoMailOutline />
                </div>
                <p>contact@primeholidaydestinations.com</p>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col gap-2 border-b max-w-[10rem] ">
                <div className="text-2xl ">
                  <VscCallIncoming />
                </div>
                <p>+44 7553 778086</p>
              </div>
            </div>

            <div>
              <div className="flex justify-end">
                <img src={logo} alt="" />
              </div>
            </div>

            <div className="flex flex-wrap justify-between mt-5">
              <div>
                <div className="flex flex-wrap gap-5">
                  {' '}
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
      <div className="bg-green-800">
        <div className="container mx-auto flex justify-between p-2">
          <div className="text-white ">
            <p>stay up to date</p>
            <h1 className='font-bold'>Subscribe to our newslettere</h1>
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
