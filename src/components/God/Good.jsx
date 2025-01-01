// import React from 'react'

// const Good = () => {

//     const cards = [
//         { id: 1, name: 'Fakhar', age: '21', buttonText: 'Learn More', },
//         { id: 2, name: 'Ali', age: '21', buttonText: 'Learn More', },
//         { id: 3, name: 'Hadi', age: '19', buttonText: 'Learn More', },
//     ]

//     return (
//         <div>
//             {cards.map((item) => (
//                 <div key={item.id} className='flex justify-center items-center flex-col'>
//                     <h1>{item.name}</h1>
//                     <h2>{item.age}</h2>
//                     <h1>{item.buttonText}</h1>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Good;



import React from 'react';

const Good = () => {
    const cards = [
        { id: 1, image: 'https://s3-alpha-sig.figma.com/img/f578/f9c2/a181ef669150341163e63e6e9da01878?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dQuv907JKAp65kChOzUAxwEv1YeSQbIdyUfiJqLHHl0QJ9dq4N61BfhctFpJxiAqGG5g9tj48zIbf7uHe-T3F7K0UDLAaqKeiddX1x3u6rrS9gLo4zMVjGYm8uBlkB1lBxCGR6HHoZf1q9n53V3UYKIj54P56pZOA2-zZQNGrqTKV7AaCeHR7T4PK0UMHprOpN0wFaf~f0qlQS4Kiebr~JTC~lrmLrIoXqk6KtDTzluOby87RRc7lrRgHIsEdrlnBmuBx8lqDRBhgwAJGEGexM06B~sbIccbQgwVluHiikfZMvw6BlWqX8Qurl~hpW7FOK8xGEUBjNXCQ55rxOhvnQ__', name: 'Ayesha', age: '18', buttonText: 'Learn More' },
        { id: 2, image: 'https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D', name: 'Rida', age: '17', buttonText: 'Learn More' },
        { id: 3, image: 'https://media.istockphoto.com/id/2155405825/photo/lonely-sad-girl-sad-teen-girl-on-a-bench-in-the-park-single-girl-outdoor.webp?a=1&b=1&s=612x612&w=0&k=20&c=oyhbfT6SzswW4gvd5XZIXmG9e-Fsi-DBWwvtyjpdurk=', name: 'Noor', age: '19', buttonText: 'Learn More' },
    ];

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-md rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105"
                    >
                        <div className="flex justify-center">
                            <img src={item.image} alt="Card" className="w-32 h-32 object-cover rounded-full" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">{item.name}</h1>
                        <h2 className="text-lg text-gray-600  font-semibold">Age: {item.age}</h2>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            {item.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Good;




// SERVICE CARDS DETAIL

// import React, { useState } from "react";
// import { FaUserGroup } from "react-icons/fa6";
// import { HiUserGroup } from "react-icons/hi";
// import { FaRegSquareCaretRight } from "react-icons/fa6";
// import { MdLibraryBooks } from "react-icons/md";
// import { GiProgression } from "react-icons/gi";
// import { FaMobileScreen } from "react-icons/fa6";
// import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";

// // Custom Alert Component
// const Alert = ({ message, onClose }) => {
//   return (
//     <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg flex items-center space-x-4 z-50">
//       <span className="font-bold">Alert!</span>
//       <span>{message}</span>
//       <button onClick={onClose} className="ml-4 text-white font-semibold text-lg">
//         &times;
//       </button>
//     </div>
//   );
// };

// const Card = ({ icon, heading, description }) => {
//   return (
//     <div className="bg-[#D9EC6F] hover:bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-50 sm:w-80 m-4 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
//       <div className="bg-[#F3E8FF] text-[#9333EA] rounded-[20%] p-4">{icon}</div>
//       <h3 className="text-xl font-semibold mt-4 text-center text-[#581C87]">{heading}</h3>
//       <p className="mt-2 text-center text-gray-600">{description}</p>
//     </div>
//   );
// };

// const CardThirdServices = () => {
//   const navigate = useNavigate();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [selectedPrice, setSelectedPrice] = useState(null);
//   const [alertMessage, setAlertMessage] = useState("");

//   const cards = [
//     {
//       icon: <FaUserGroup className="text-4xl" />,
//       heading: "1:1 Coaching Sessions",
//       description: "Personalized coaching sessions tailored to your needs and goals.",
//       prices: {
//         basic: "$80",
//         standard: "$130",
//         premium: "$150",
//       },
//       link: "/coachingsessions",
//     },
//     {
//       icon: <HiUserGroup className="text-4xl" />,
//       heading: "Group Workshops",
//       description: "Interactive group sessions focusing on specific themes and skill development.",
//       prices: {
//         basic: "$40",
//         standard: "$100",
//         premium: "$130",
//       },
//       link: "/groupwork",
//     },
//     {
//       icon: <FaRegSquareCaretRight className="text-4xl" />,
//       heading: "Virtual Sessions",
//       description: "Online coaching and consultation services for remote clients.",
//       prices: {
//         basic: "$110",
//         standard: "$120",
//         premium: "$200",
//       },
//       link: "/virtualsessions",
//     },
//     {
//       icon: <MdLibraryBooks className="text-4xl" />,
//       heading: "Resource Library",
//       description: "Access to exclusive content, worksheets, and learning materials.",
//       prices: {
//         basic: "$150",
//         standard: "$250",
//         premium: "$300",
//       },
//       link: "/resourcelibrary",
//     },
//     {
//       icon: <GiProgression className="text-4xl" />,
//       heading: "Progress Tracking",
//       description: "Comprehensive tools to monitor and evaluate your personal growth.",
//       prices: {
//         basic: "$120",
//         standard: "$170",
//         premium: "$220",
//       },
//       link: "/progresstracking",
//     },
//     {
//       icon: <FaMobileScreen className="text-4xl" />,
//       heading: "Mobile App Access",
//       description: "24/7 access to resources and coaching tools through our mobile app.",
//       prices: {
//         basic: "$170",
//         standard: "$250",
//         premium: "$350",
//       },
//       link: "/mobileapp",
//     },
//   ];

//   const handleCardClick = (card) => {
//     setSelectedCard(card);
//     setSelectedPrice(null);
//     setIsModalOpen(true);
//     setAlertMessage(""); // Reset alert message when a card is clicked
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCard(null);
//   };

//   const handleSubmit = () => {
//     if (selectedPrice) {
//       console.log("Submitted Card Data:", selectedCard, selectedPrice);
//       navigate(selectedCard?.link);
//       closeModal();
//     } else {
//       setAlertMessage("Please select a price option before submitting.");
//     }
//   };

//   return (
//     <>
//       {/* Show Alert if there is an alert message */}
//       {alertMessage && <Alert message={alertMessage} onClose={() => setAlertMessage("")} />}

//       {/* Header Section */}
//       <div className="text-center p-8">
//         <h2 className="text-3xl font-bold text-[#6B21A8]">Our Services</h2>
//         <p className="text-lg text-gray-600 mt-4">
//           "Comprehensive coaching solutions designed to help you achieve your personal and professional goals."
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
//         {cards.map((card, index) => (
//           <div key={index} onClick={() => handleCardClick(card)}>
//             <Card icon={card.icon} heading={card.heading} description={card.description} />
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {isModalOpen && selectedCard && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-11/12 sm:w-3/4 lg:w-1/3">
//             <h3 className="text-2xl font-semibold text-center text-[#6B21A8] mb-4">
//               {selectedCard.heading}
//             </h3>
//             <p className="text-gray-600 mb-6 text-center">{selectedCard.description}</p>

//             {/* Pricing Options */}
//             <div className="space-y-4">
//               {Object.entries(selectedCard.prices).map(([key, price]) => (
//                 <div
//                   key={key}
//                   onClick={() => setSelectedPrice({ tier: key, price })}
//                   className={`flex justify-between items-center cursor-pointer border rounded-lg px-4 py-2 ${
//                     selectedPrice?.tier === key ? "border-green-500 bg-green-50" : "border-gray-300"
//                   }`}
//                 >
//                   <span className="font-bold">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
//                   <span>{price}</span>
//                   <span>
//                     {selectedPrice?.tier === key ? (
//                       <AiOutlineCheck className="text-green-500 text-xl" />
//                     ) : (
//                       <AiOutlineClose className="text-red-500 text-xl" />
//                     )}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* Actions */}
//             <div className="flex justify-center mt-6 space-x-4">
//               <button
//                 onClick={closeModal}
//                 className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 transition-colors"
//               >
//                 Close
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="px-6 py-2 bg-[#4F56DD] text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CardThirdServices;


