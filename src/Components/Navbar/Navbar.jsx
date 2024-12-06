// Navbar.js
import React, { useState } from "react";
import mylogo from "../../../public/Transparent-logo-3 4.png";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // Close icon from react-icons
import Modal from "../Modal/Modal";

const Navbar = () => {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-40 text-white">
        {/* Left Section - Bar */}
        <div className="flex items-center">
          <div
            className="text-3xl font-bold cursor-pointer"
            onClick={toggleSidebar}
          >
            <FaBars />
          </div>
        </div>

        {/* Center Section - Logo */}
        <div className="text-lg font-bold ml-[85px]">
          <img src={mylogo} className="h-24" alt="Logo" />
        </div>

        {/* Right Section - Button */}
        <div>
          <button
            onClick={toggleModal} // Open the modal on click
            className="px-4 py-2 bg-transparent border font-semibold text-white hover:bg-[#F49D2A] rounded-lg"
          >
            Enquire now
          </button>
        </div>
      </nav>

    
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-72 opacity-90 bg-green-800 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 rounded-br-2xl overflow-y-auto`}
      >
        <div className="flex justify-end p-4">
          <div className="text-3xl cursor-pointer" onClick={toggleSidebar}>
            <IoClose />
          </div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <a
            href="/home"
            className="text-white py-2 px-4 hover:bg-green-700 w-full text-center"
          >
            Home
          </a>
          <a
            href="/"
            className="text-white py-2 px-4 hover:bg-green-700 w-full text-center"
          >
            About
          </a>
          <a
            href="/destination"
            className="text-white py-2 px-4 hover:bg-green-700 w-full text-center"
          >
            Destination
          </a>
          <a
            href="/blog"
            className="text-white py-2 px-4 hover:bg-green-700 w-full text-center"
          >
            Blog
          </a>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default Navbar;
