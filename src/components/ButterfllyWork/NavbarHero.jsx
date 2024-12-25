import React, { useState } from "react";
import { BsQuestion } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavbarHero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="text-black p-4 bg-[#ffff87ec] relative">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 rounded-full flex items-center justify-center border-2 border-dotted border-[#808000]">
              {/* Question Mark Icon */}
              <span className="text-yellow-500 text-lg hover:text-yellow-700">
                <BsQuestion />
              </span>
            </div>
            <h1 className="text-xl font-bold text-[#808000] hover:text-yellow-400">
              Zen Life Coaching
            </h1>
          </div>

          {/* Centered Links */}
          <ul className="hidden md:flex space-x-8 text-lg font-bold">
            <li>
              <Link to={"/"} className="hover:text-yellow-700 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                className="hover:text-yellow-700 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-yellow-700 transition">
                About
              </Link>
            </li>
            <li>
              <Link to={"/team"} className="hover:text-yellow-700 transition">
                Team
              </Link>
            </li>
          </ul>

          {/* Button Section */}
          <Link
            to={"/getstarted"}
            className="hidden md:block px-4 py-2 bg-[#808000] rounded-full text-white hover:bg-yellow-400 transition sm:w-full md:w-auto sm:px-6 md:px-4 sm:py-3 md:py-2"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              {menuOpen ? (
                <AiOutlineClose className="w-6 h-6" />
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`fixed top-0 right-0 h-[23rem] w-2/3 bg-gray-800 text-white transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex flex-col items-center p-4 space-y-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-white text-2xl focus:outline-none"
            >
              <AiOutlineClose />
            </button>
            <Link
              to={"/"}
              className="block py-2 px-4 text-lg hover:bg-yellow-700 rounded w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to={"/services"}
              className="block py-2 px-4 text-lg hover:bg-yellow-700 rounded w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to={"/about"}
              className="block py-2 px-4 text-lg hover:bg-yellow-700 rounded w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to={"/team"}
              className="block py-2 px-4 text-lg hover:bg-yellow-700 rounded w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              to={"/getstarted"}
              className="mt-4 px-4 py-2 bg-[#808000] rounded-full text-white hover:bg-yellow-400  transition w-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarHero;
