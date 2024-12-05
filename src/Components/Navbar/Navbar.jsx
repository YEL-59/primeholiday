import React, { useState } from 'react';
import mylogo from '../../../public/Transparent-logo-3 4.png';
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5'; // Close icon from react-icons

const Navbar = () => {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-40 text-white">
        {/* Left Section - Bar */}
        <div className="flex items-center">
          <div className="text-3xl font-bold cursor-pointer" onClick={toggleSidebar}>
            <FaBars />
          </div>
        </div>

        {/* Center Section - Logo */}
        <div className="text-lg font-bold">
          <img src={mylogo} alt="Logo" />
        </div>

        {/* Right Section - Button */}
        <div>
          <button className="px-4 py-2 bg-transparent border text-white hover:bg-green-600 rounded-lg">
            Enquire now
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full opacity-80 bg-green-800 text-white transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <div className="text-3xl cursor-pointer" onClick={toggleSidebar}>
            <IoClose />
          </div>
        </div>
        <div className="flex flex-col items-center mt-10">
          <a href="/" className="text-white py-2 px-4 hover:bg-green-700 w-full text-center">Home</a>
          <a href="/aboutus" className="text-white py-2 px-4 hover:bg-green-700 w-full text-center">About</a>
          <a href="/destination" className="text-white py-2 px-4 hover:bg-green-700 w-full text-center">Destination</a>
          <a href="/terms" className="text-white py-2 px-4 hover:bg-green-700 w-full text-center">Terms and Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
