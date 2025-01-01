import React from "react";
// React Icons import
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

// Importing images
import chen from '../../assets/cardfot3.png';
import sarah from '../../assets/sarha.avif';
import emma from '../../assets/emma.jpg';
import brtflyyelow from '../../assets/butflyyelow.png';

const CardSecAbout = () => {
  return (
    <>
      {/* FIRST SECTION */}
      <div className="text-center p-8">
        <div className="flex items-center justify-center space-x-4">
          <img className="w-14 h-14 rounded-full rotate-45" src={brtflyyelow} alt="left" />
          <h2 className="text-2xl sm:text-3xl font-bold text-black">Meet Our Expert Coaches</h2>
          <img className="w-14 h-14 rounded-full -rotate-45" src={brtflyyelow} alt="right" />
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {/* Card 1 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] bg-white hover:bg-gray-200 shadow-lg rounded-lg p-4 flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300">
          <img
            src={chen}
            alt="Dr. Michael Chen"
            className="w-24 h-24 rounded-full object-cover mb-4 transition-transform hover:scale-110 ease-in-out duration-300"
          />
          <h2 className="text-xl font-bold mb-2">Dr. Michael Chen</h2>
          <p className="text-gray-600 mb-4">Mindfulness Expert</p>
          <div className="flex gap-4 mb-2">
            <CiLinkedin className="text-blue-600 text-2xl transition-transform hover:scale-125 ease-in-out duration-300" />
            <FaFacebook className="text-blue-400 text-2xl transition-transform hover:scale-125 ease-in-out duration-300" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] bg-white hover:bg-gray-200 shadow-lg rounded-lg p-4 flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300">
          <img
            src={sarah}
            alt="Sarah Johnson"
            className="w-24 h-24 rounded-full object-cover mb-4 transition-transform hover:scale-110 ease-in-out duration-300"
          />
          <h2 className="text-xl font-bold mb-2">Sarah Johnson</h2>
          <p className="text-gray-600 mb-4">Life Strategy Coach</p>
          <div className="flex gap-4 mb-2">
            <CiLinkedin className="text-blue-600 text-2xl transition-transform hover:scale-125 ease-in-out duration-300" />
            <FaFacebook className="text-blue-400 text-2xl transition-transform hover:scale-125 ease-in-out duration-300" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] bg-white hover:bg-gray-200 shadow-lg rounded-lg p-4 flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300">
          <img
            src={emma}
            alt="Emma Davis"
            className="w-24 h-24 rounded-full object-cover mb-4 transition-transform hover:scale-110 ease-in-out duration-300"
          />
          <h2 className="text-xl font-bold mb-2">Emma Davis</h2>
          <p className="text-gray-600 mb-4">Wellness Coach</p>
          <div className="flex gap-4 mb-2">
            <CiLinkedin className="text-blue-600 text-2xl transition-transform hover:scale-125 ease-in-out duration-300" />
            <FaFacebook className="text-blue-400 text-2xl transition-transform hover:scale-125 ease-in-out duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSecAbout;
