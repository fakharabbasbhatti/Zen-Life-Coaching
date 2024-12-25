import React from "react";
import { GiCrystalGrowth } from "react-icons/gi";
import { FaToolbox } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";



const Card = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white hover:bg-[#D9EC6F] rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="text-4xl text-[#808000] hover:text-red-600  mb-4">{icon}</div>
      <h2 className="text-xl font-bold text-center mb-2">{title}</h2>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

const CardFirst = () => {
  return (
    <div className="grid grid-cols-1 bg-[#f7f7bc]  sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      <Card
        icon={<GiCrystalGrowth />}
        title="Personal Growth"
        description="Unlock your potential through personalized coaching sessions"
      />
      <Card
        icon={<FaToolbox />}
        title="Professional Development"
        description="Enhance your career with strategic guidance and tools"
      />
      <Card
        icon={<FaHeart />}
        title="Holistic Well-being"
        description="Balance mind, body, and spirit for complete wellness"
      />
    </div>
  );
};

export default CardFirst;
