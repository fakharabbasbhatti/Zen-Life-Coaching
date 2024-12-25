import React from "react";
// React Icons import
import { FaRegEye } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";

const CardAbout = () => {
  return (
    <div className="flex flex-wrap justify-center gap-7 p-4">
      {/* Card 1 */}
      <div className="w-full sm:w-[50%] md:w-[35%] bg-[#D9EC6F] hover:bg-[#f9f9f9] transition-all transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 shadow-lg rounded-lg p-6 flex flex-col items-start">
        <div className="text-blue-700 hover:text-red-500 text-3xl mb-4">
          {/* React Icon */}
          <FaRegEye />
        </div>
        <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
        <p className="text-gray-700">
          To create a world where every individual has access to transformative coaching that nurtures personal growth, emotional well-being, and spiritual development.
        </p>
      </div>

      {/* Card 2 */}
      <div className="w-full sm:w-[50%] md:w-[35%] bg-[#D9EC6F] hover:bg-[#f9f9f9] transition-all transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 shadow-lg rounded-lg p-6 flex flex-col items-start">
        <div className="text-blue-700 hover:text-red-500 text-3xl mb-4">
          {/* React Icon */}
          <FaBullseye />
        </div>
        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="text-gray-700">
          To provide innovative coaching solutions that integrate ancient wisdom with modern techniques, helping our clients achieve lasting personal transformation.
        </p>
      </div>
    </div>
  );
};

export default CardAbout;
