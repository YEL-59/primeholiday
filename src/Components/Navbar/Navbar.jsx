import React from 'react';
import mylogo from '../../../public/Transparent-logo-3 4.png'
const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-opacity-50 bg-black text-white">
      {/* Left Section - Bar */}
      <div className="flex items-center">
        <div className="h-1 w-10 bg-white"></div>
      </div>
      
      {/* Center Section - Logo */}
      <div className="text-lg font-bold">
        MyLogo
      </div>
      
      {/* Right Section - Button */}
      <div>
        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white">
          Click Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
