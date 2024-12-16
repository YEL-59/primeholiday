import { useState } from "react";
import mylogo from "../../../src/assets/mylogo.png";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // Close icon from react-icons
import Modal from "../Modal/Modal";
import { Link, useLocation } from "react-router-dom";
import Threebaricons from "../../assets/Icons/Threebaricons";

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

  // Function to close sidebar when a link is clicked
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  // Get the current location
  const location = useLocation();

  // Function to check if the current route is the active link
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-40 bg-transparent text-ivory-white">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Left Section - Bar */}
          <div className="flex items-center">
            <div
              className=" cursor-pointer text-ivory-white hover:text-primary"
              onClick={toggleSidebar}
            // onMouseEnter={openSidebar}
            >
            <Threebaricons/>
            </div>
          </div>

          {/* Center Section - Logo */}
          <Link to={'/'}> <div className="hidden md:block md:ml-[85px]">
            <img src={mylogo} className="h-8 sm:h-10 md:h-20 lg:h-full" alt="Logo" />
          </div></Link>

          {/* Right Section - Button */}
          <div>
            <button
              onClick={toggleModal}
              className="px-4 py-2 text-sm md:text-lg bg-transparent border font-semibold text-ivory-white hover:bg-primary rounded uppercase"
            >
              Enquire now
            </button>
          </div>
        </nav>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-72 opacity-90 bg-primary text-ivory-white transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 rounded-br-2xl overflow-y-auto`}
        onMouseLeave={closeSidebar}

      >
        <div className="flex justify-end p-4">
          <div className="text-3xl cursor-pointer" onClick={toggleSidebar}>
            <IoClose />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 mt-4">
          <Link
            to="/"
            className={`relative py-2 px-4 w-full text-center font-medium text-lg ${isActive("/")
                ? "text-ivory-white font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-ivory-white after:scale-100"
                : "text-green after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-ivory-white after:scale-0"
              } hover:after:scale-100 hover:text-ivory-white after:transition-transform after:duration-300`}
            onClick={closeSidebar}
          >
            Home
          </Link>

          <Link
            to="/destination"
            className={`relative py-2 px-4 w-full text-center font-medium text-lg ${isActive("/destination")
                ? "text-ivory-white font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-ivory-white after:scale-100"
                : "text-green after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-ivory-white after:scale-0"
              } hover:after:scale-100 hover:text-ivory-white after:transition-transform after:duration-300`}
            onClick={closeSidebar}
          >
            Destinations
          </Link>
          <Link
            to="/blog"
            className={`relative py-2 px-4 w-full text-center font-medium text-lg ${isActive("/blog")
                ? "text-ivory-white font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-ivory-white after:scale-100"
                : "text-green after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-ivory-white after:scale-0"
              } hover:after:scale-100 hover:text-ivory-white after:transition-transform after:duration-300`}
            onClick={closeSidebar}
          >
            Blogs
          </Link>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default Navbar;
