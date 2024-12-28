import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cards } from "./CardTeam";

const Ali = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const specificData = cards.filter((items) => items.link === userId);
  const object = specificData[0];

  // Handle back button
  const handleBack = () => {
    navigate(-1);
  };


  return (
    <div
      id="fakhar"
      className="flex flex-col items-center p-6 sm:p-8 md:p-10 bg-[#F5E2AC] space-y-6"
    >
      {/* Image Section */}
      <div className="relative flex justify-center">
        <img
          src={object?.image}
          alt="Profile"
          className="transform hover:scale-90 transition-transform duration-200 w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full border-2 border-purple-600 shadow-lg"
        />
        <div className="absolute rounded-full border-4 border-transparent animate-spin"></div>
      </div>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-purple-800 tracking-wide text-center">
        {object?.heading}
      </h1>

      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold text-yellow-600 text-center">
        {object?.title}
      </h2>

      {/* Introduction */}
      <h1 className="text-lg sm:text-xl text-center text-red-600 font-bold">
        {object?.intro}
      </h1>
      <p className="text-base sm:text-lg text-justify text-black font-medium leading-relaxed">
        {object?.introdction}
      </p>

      {/* Experience */}
      <h1 className="text-lg sm:text-xl text-center text-red-600 font-bold">
        {object?.Exper}
      </h1>
      <p className="text-base sm:text-lg text-justify text-black font-medium leading-relaxed">
        {object?.Experience}
      </p>

      {/* Specialization */}
      <h1 className="text-lg sm:text-xl text-center text-red-600 font-bold">
        {object?.special}
      </h1>
      <p className="text-base sm:text-lg text-justify text-black font-medium leading-relaxed">
        {object?.specialization}
      </p>

      {/* Button */}
      <button
        onClick={handleBack} // Redirect to the home route
        className="mt-4 px-6 py-2 sm:px-8 sm:py-3 bg-blue-600 text-white text-sm sm:text-lg font-bold rounded-md shadow-lg transform hover:translate-y-1 hover:scale-110 transition-all duration-300"
      >
        {object?.button || "Back"}
      </button>
    </div>
  );
};

export default Ali;
