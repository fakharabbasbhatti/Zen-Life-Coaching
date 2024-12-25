import React, { useState } from "react";
import { BsQuestion } from 'react-icons/bs';

const NavbarTeam = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Wrapper with Background Image */}
    
  {/* Overlay */}
  <div className="absolute opacity-20"></div>
        <nav className="text-black">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            {/* Start: Icon and Heading */}
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 rounded-full flex items-center justify-center border-2 border-dotted border-[#808000]">
                {/* Question Mark Icon */}
                <span className="text-yellow-500 text-lg">
                  <BsQuestion />
                </span>
              </div>
              <h1 className="text-xl font-bold text-[#808000] hover:text-yellow-400">Zen Life Coaching</h1>
            </div>

            {/* Center: Links */}
            <div className="hidden md:flex space-x-6 font-bold">
              <a href="#home" className="hover:text-yellow-700">Home</a>
              <a href="#about" className="hover:text-yellow-700">About</a>
              <a href="#services" className="hover:text-yellow-700">Services</a>
              <a href="#contact" className="hover:text-yellow-700">Contact</a>
            </div>

            {/* End: Notification and Profile */}
            <div className="flex items-center space-x-4">
              {/* Notification Bell */}
              <div className="relative">
                <span className="text-2xl">🔔</span>
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                  3
                </span>
              </div>

              {/* Profile Picture */}
              <img
                src="https://images.unsplash.com/photo-1521038199265-bc482db0f923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVkZHkncyUyMGFtZXJpY2FuJTIwZGluZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black "
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-gray-400">
              <a href="#home" className="block py-2 px-4 hover:bg-yellow-700 text-white">Home</a>
              <a href="#about" className="block py-2 px-4 hover:bg-yellow-700 text-white">About</a>
              <a href="#services" className="block py-2 px-4 hover:bg-yellow-700 text-white">Services</a>
              <a href="#contact" className="block py-2 px-4 hover:bg-yellow-700 text-white">Contact</a>
            </div>
          )}
        </nav>
   
    </>
  );
};

export default NavbarTeam;
