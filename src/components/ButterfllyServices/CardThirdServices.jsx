import React from "react";
import { FaUserGroup } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { FaRegSquareCaretRight } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { FaMobileScreen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Card = ({ icon, heading, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#D9EC6F] hover:bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-50 sm:w-80 m-4 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
    >
      <div className="bg-[#F3E8FF] text-[#9333EA] rounded-[20%] p-4">{icon}</div>
      <h3 className="text-xl font-semibold mt-4 text-center text-[#581C87]">{heading}</h3>
      <p className="mt-2 text-center text-gray-600">{description}</p>
    </div>
  );
};

const CardThirdServices = () => {
  const navigate = useNavigate();

  const cards = [
    {
      icon: <FaUserGroup className="text-4xl" />,
      heading: "1:1 Coaching Sessions",
      description: "Personalized coaching sessions tailored to your needs and goals.",
      link: "/coachingsessions",
    },
    {
      icon: <HiUserGroup className="text-4xl" />,
      heading: "Group Workshops",
      description: "Interactive group sessions focusing on specific themes and skill development.",
      link: "/groupwork",
    },
    {
      icon: <FaRegSquareCaretRight className="text-4xl" />,
      heading: "Virtual Sessions",
      description: "Online coaching and consultation services for remote clients.",
      link: "/virtualsessions",
    },
    {
      icon: <MdLibraryBooks className="text-4xl" />,
      heading: "Resource Library",
      description: "Access to exclusive content, worksheets, and learning materials.",
      link: "/resourcelibrary",
    },
    {
      icon: <GiProgression className="text-4xl" />,
      heading: "Progress Tracking",
      description: "Comprehensive tools to monitor and evaluate your personal growth.",
      link: "/progresstracking",
    },
    {
      icon: <FaMobileScreen className="text-4xl" />,
      heading: "Mobile App Access",
      description: "24/7 access to resources and coaching tools through our mobile app.",
      link: "/mobileapp",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="text-center p-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#6B21A8]">Our Services</h2>
        <p className="text-lg text-gray-600 mt-4">
          "Comprehensive coaching solutions designed to help you achieve your personal and professional goals."
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            heading={card.heading}
            description={card.description}
            onClick={() => navigate(card.link)}
          />
        ))}
      </div>
    </>
  );
};

export default CardThirdServices;
