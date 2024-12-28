import React, { useState } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { FaRegSquareCaretRight } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { FaMobileScreen } from "react-icons/fa6";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Card = ({ icon, heading, description }) => {
  return (
    <div className="bg-[#D9EC6F] hover:bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-50 sm:w-80 m-4 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="bg-[#F3E8FF] text-[#9333EA] rounded-[20%] p-4">{icon}</div>
      <h3 className="text-xl font-semibold mt-4 text-center text-[#581C87]">{heading}</h3>
      <p className="mt-2 text-center text-gray-600">{description}</p>
    </div>
  );
};

const CardThirdServices = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const cards = [
    {
      icon: <FaUserGroup className="text-4xl" />,
      heading: "1:1 Coaching Sessions",
      description: "Personalized coaching sessions tailored to your needs and goals.",
      prices: {
        basic: "$80",
        standard: "$130",
        premium: "$150",
      },
      link: "/coachingsessions",
    },
    {
      icon: <HiUserGroup className="text-4xl" />,
      heading: "Group Workshops",
      description: "Interactive group sessions focusing on specific themes and skill development.",
      prices: {
        basic: "$40",
        standard: "$100",
        premium: "$130",
      },
      link: "/groupwork",
    },
    {
      icon: <FaRegSquareCaretRight className="text-4xl" />,
      heading: "Virtual Sessions",
      description: "Online coaching and consultation services for remote clients.",
      prices: {
        basic: "$110",
        standard: "$120",
        premium: "$200",
      },
      link: "/virtualsessions",
    },
    {
      icon: <MdLibraryBooks className="text-4xl" />,
      heading: "Resource Library",
      description: "Access to exclusive content, worksheets, and learning materials.",
      prices: {
        basic: "$150",
        standard: "$250",
        premium: "$300",
      },
      link: "/resourcelibrary",
    },
    {
      icon: <GiProgression className="text-4xl" />,
      heading: "Progress Tracking",
      description: "Comprehensive tools to monitor and evaluate your personal growth.",
      prices: {
        basic: "$120",
        standard: "$170",
        premium: "$220",
      },
      link: "/progresstracking",
    },
    {
      icon: <FaMobileScreen className="text-4xl" />,
      heading: "Mobile App Access",
      description: "24/7 access to resources and coaching tools through our mobile app.",
      prices: {
        basic: "$170",
        standard: "$250",
        premium: "$350",
      },
      link: "/mobileapp",
    },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setSelectedPrice(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const handleSubmit = () => {
    if (selectedPrice) {
      console.log("Submitted Card Data:", selectedCard, selectedPrice);
      navigate(selectedCard?.link);
      closeModal();
    } else {
      alert("Please select a price option before submitting.");
    }
  };

  return (
    <>
      {/* Header Section */}
      <div className="text-center p-8">
        <h2 className="text-3xl font-bold text-[#6B21A8]">Our Services</h2>
        <p className="text-lg text-gray-600 mt-4">
          "Comprehensive coaching solutions designed to help you achieve your personal and professional goals."
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {cards.map((card, index) => (
          <div key={index} onClick={() => handleCardClick(card)}>
            <Card icon={card.icon} heading={card.heading} description={card.description} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 sm:w-3/4 lg:w-1/3">
            <h3 className="text-2xl font-semibold text-center text-[#6B21A8] mb-4">
              {selectedCard.heading}
            </h3>
            <p className="text-gray-600 mb-6 text-center">{selectedCard.description}</p>

            {/* Pricing Options */}
            <div className="space-y-4">
              {Object.entries(selectedCard.prices).map(([key, price]) => (
                <div
                  key={key}
                  onClick={() => setSelectedPrice({ tier: key, price })}
                  className={`flex justify-between items-center cursor-pointer border rounded-lg px-4 py-2 ${
                    selectedPrice?.tier === key ? "border-green-500 bg-green-50" : "border-gray-300"
                  }`}
                >
                  <span className="font-bold">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                  <span>{price}</span>
                  <span>
                    {selectedPrice?.tier === key ? (
                      <AiOutlineCheck className="text-green-500 text-xl" />
                    ) : (
                      <AiOutlineClose className="text-red-500 text-xl" />
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-[#4F56DD] text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardThirdServices;
