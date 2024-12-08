
import { useState } from "react";
import mylogo from "../../../public/Transparent-logo-3 4.png";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // Close icon from react-icons
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

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
      <div className="absolute top-0 left-0 w-full z-40 bg-transparent text-white">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
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
    <div className=" ml-[85px]">
      <img src={mylogo} className="h-8 sm:h-10 md:h-20 lg:h-full" alt="Logo" />
    </div>

    {/* Right Section - Button */}
    <div>
      <button
        onClick={toggleModal}
        className="px-4 py-2 bg-transparent border font-semibold text-white hover:bg-[#F49D2A] rounded-lg"
      >
        Enquire now
      </button>
    </div>
  </nav>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-72 opacity-90 bg-[#F49D2A] text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 rounded-br-2xl overflow-y-auto`}
      >
        <div className="flex justify-end p-4">
          <div className="text-3xl cursor-pointer" onClick={toggleSidebar}>
            <IoClose />
          </div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <Link
            to="/home"
            className="text-white py-2 px-4 hover:bg-green-700 w-full text-center"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-white py-2 px-4 hover:bg-green-700 w-full text-center"
          >
            About
          </Link>
          <Link
            to="/destination"
            className="text-white py-2 px-4 hover:bg-green-700 w-full text-center"
          >
            Destination
          </Link>
          <Link
            to="/blog"
            className="text-white py-2 px-4 hover:bg-green-700 w-full text-center"
          >
            Blog
          </Link>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default Navbar;