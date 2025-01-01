import React from 'react';
import { GiThreeLeaves, GiCampCookingPot } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
// import { Link } from 'react-router-dom';
import brtflyyelow from '../../assets/butflyyelow.png';

const CardSecServices = () => {
  return (
    <>

      {/* FIRST SECTION */}
      <div className="text-center p-8 ">
        <div className="flex items-center justify-center space-x-4 ">
          <img className="w-14 h-14 rounded-full rotate-45" src={brtflyyelow} alt="left" />
          <h2 className="text-xl sm:text-3xl font-bold text-[#6B21A8]">Training Packages</h2>
          <img className="w-14 h-14 rounded-full -rotate-45" src={brtflyyelow} alt="right" />
        </div>
        <p className="text-lg text-gray-600 mt-4">"Comprehensive training solutions tailored to your specific needs"</p>
      </div>


      {/* SECOND SECTION */}
      <div className="flex flex-col items-center gap-6 p-4">
        {/* Card 1 */}
        <div className="flex flex-col bg-[#D9EC6F] hover:bg-white shadow-lg p-8 rounded-lg max-w h-auto transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300">
          {/* Top Section: Icon, Heading, and Button */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
            <div className="flex items-center gap-6">
              <GiThreeLeaves className="text-4xl text-blue-500" />
              <h2 className="text-3xl font-bold">Beginner's Journey</h2>
            </div>
            {/* Button */}
            <button className="bg-[#808000] text-white text-sm md:text-base px-6 py-3 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 lg:self-start lg:mt-0 mt-6">
              6 Weeks
            </button>
          </div>
          {/* Description */}
          <p className="text-gray-900 font-medium mb-6">
            Perfect for those starting their personal development journey. Includes
            fundamental life coaching principles and practical exercises.
          </p>
          {/* Bottom Section: Icon and Text */}
          <div className="flex items-center gap-6">
            <TiTick className="text-2xl text-green-500" />
            <h3 className="font-semibold text-gray-900">Weekly one-on-one sessions</h3>
          </div>
          <div className="flex items-center gap-6">
            <TiTick className="text-2xl text-green-500" />
            <h3 className="font-semibold text-gray-900">Digital resources and workbooks</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col bg-[#D9EC6F] hover:bg-white shadow-lg p-8 rounded-lg max-w h-auto transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300">
          {/* Top Section: Icon, Heading, and Button */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
            <div className="flex items-center gap-6">
              <GiCampCookingPot className="text-4xl text-blue-500" />
              <h2 className="text-2xl font-bold">Advanced Transformation</h2>
            </div>
            {/* Button */}
            <button className="bg-[#808000] text-white text-sm md:text-base px-6 py-3 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 lg:self-start lg:mt-0 mt-6">
              9 Weeks
            </button>
          </div>
          {/* Description */}
          <p className="text-gray-900 font-medium mb-6">
            Intensive program for deep personal transformation and leadership
            development empowering you to unlock your full potential.
          </p>
          {/* Bottom Section: Icon and Text */}
          <div className="flex items-center gap-6">
            <TiTick className="text-2xl text-green-500" />
            <h3 className="font-semibold text-gray-900">Bi-weekly intensive sessions</h3>
          </div>
          <div className="flex items-center gap-6">
            <TiTick className="text-2xl text-green-500" />
            <h3 className="font-semibold text-gray-900">Personal development plan</h3>
          </div>
        </div>
      </div>
      {/* <div className="w-full text-center mt-3 pb-6">
        <Link  to={'/getstarted'} className="px-6 py-2 bg-[#4F56DD] text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors ">
          View All
          </Link> 
      </div> */}

    </>
  );
};

export default CardSecServices;
