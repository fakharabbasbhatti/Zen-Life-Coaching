import React from 'react';
import { FaExplosion } from "react-icons/fa6";
import { SiSololearn } from "react-icons/si";
import { GrCatalog } from "react-icons/gr";
import { GiSurroundedShield } from "react-icons/gi";
import { MdLocalFireDepartment } from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import brtflyyelow from '../../assets/butflyyelow.png';



const ThirdCard = () => {
  const cards = [
    { icon: <FaExplosion size={40} />, title: "Discover our Expertise", description: "Unlocking Your Potential" },
    { icon: <SiSololearn  size={40} />, title: "Innovative Solutions", description: "Driving Measurable Outcomes" },
    { icon: <GrCatalog size={40} />, title: "Tailored Strategies", description: "Sustainable Transformation" },
    { icon: <GiSurroundedShield size={40} />, title: "Empowering Your Success", description: "Comprehensive Consulting Solutions" },
    { icon: <MdLocalFireDepartment size={40} />, title: "Trusted Partnerships", description: "Lasting Impact" },
    { icon: <IoIosApps  size={40} />, title: "Personalized Approach", description: "Cultivating Long-Term Growth" },
  ];
  
  return (
    <div className="py-12">
      {/* Heading Section */}
      
      <div className="text-center p-8">
        <div className="flex items-center justify-center space-x-4 ">
          <img className="w-14 h-14 rounded-full rotate-45" src={brtflyyelow} alt="left" />
          <h2 className="text-lg sm:text-3xl font-bold text-[#6B21A8]">Our Team Approach</h2>
          <img className="w-14 h-14 rounded-full -rotate-45" src={brtflyyelow} alt="right" />
        </div>
        <p className="text-lg text-gray-600 mt-4">"Our team focuses on collaboration, and continuous improvement, delivering high-quality solutions meet client expectations."</p>
      </div>
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white hover:bg-[#D9EC6F]  rounded-lg shadow-md p-6 text-center hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
          >
            <div className="text-yellow-500 hover:text-[#ff2359] mb-4 flex items-center justify-center">{card.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      {/* <div className="flex justify-center mt-12">
        <button className="px-6 py-3 bg-[#DBFB1C] text-black rounded-full hover:bg-yellow-400 transition">
          Contact Us
        </button>
      </div> */}
    </div>
  );
};

export default ThirdCard;
