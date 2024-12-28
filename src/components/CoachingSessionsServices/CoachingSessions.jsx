// import React from "react";
// import { FaChalkboardTeacher, FaBrain, FaLaptopCode, FaHandsHelping, FaUsers, FaStar, FaThumbsUp, FaHeart, FaCalendar, FaTrophy, FaRocket, FaGlobe } from "react-icons/fa";

// const coachingSessions = [
//   {
//     id: 1,
//     icon: <FaChalkboardTeacher className="text-4xl text-blue-600" />,
//     title: "Personal Coaching",
//     description: "One-on-one coaching tailored to your personal development goals.",
//     link: "/sessions/personal-coaching",
//   },
//   {
//     id: 2,
//     icon: <FaBrain className="text-4xl text-green-600" />,
//     title: "Mindset Coaching",
//     description: "Build a growth mindset to achieve success and resilience.",
//     link: "/sessions/mindset-coaching",
//   },
//   {
//     id: 3,
//     icon: <FaLaptopCode className="text-4xl text-purple-600" />,
//     title: "Career Coaching",
//     description: "Guidance for career advancement and professional growth.",
//     link: "/sessions/career-coaching",
//   },
//   {
//     id: 4,
//     icon: <FaHandsHelping className="text-4xl text-orange-600" />,
//     title: "Team Coaching",
//     description: "Empowering teams to work collaboratively and achieve results.",
//     link: "/sessions/team-coaching",
//   },
//   {
//     id: 5,
//     icon: <FaUsers className="text-4xl text-yellow-600" />,
//     title: "Group Coaching",
//     description: "Interactive coaching sessions in a group setting for collective growth.",
//     link: "/sessions/group-coaching",
//   },
//   {
//     id: 6,
//     icon: <FaStar className="text-4xl text-pink-600" />,
//     title: "Leadership Coaching",
//     description: "Helping you develop the skills needed to lead effectively.",
//     link: "/sessions/leadership-coaching",
//   },
//   {
//     id: 7,
//     icon: <FaThumbsUp className="text-4xl text-teal-600" />,
//     title: "Confidence Coaching",
//     description: "Boost your self-esteem and gain the confidence to tackle any challenge.",
//     link: "/sessions/confidence-coaching",
//   },
//   {
//     id: 8,
//     icon: <FaHeart className="text-4xl text-red-600" />,
//     title: "Emotional Intelligence Coaching",
//     description: "Improve your emotional intelligence to enhance relationships and decision-making.",
//     link: "/sessions/emotional-intelligence-coaching",
//   },
//   {
//     id: 9,
//     icon: <FaCalendar className="text-4xl text-indigo-600" />,
//     title: "Time Management Coaching",
//     description: "Learn how to effectively manage your time for a balanced life.",
//     link: "/sessions/time-management-coaching",
//   },
//   {
//     id: 10,
//     icon: <FaTrophy className="text-4xl text-yellow-500" />,
//     title: "Achievement Coaching",
//     description: "Set and achieve your personal and professional goals with focused strategies.",
//     link: "/sessions/achievement-coaching",
//   },
//   {
//     id: 11,
//     icon: <FaRocket className="text-4xl text-blue-500" />,
//     title: "Innovation Coaching",
//     description: "Foster creativity and innovative thinking to drive growth and change.",
//     link: "/sessions/innovation-coaching",
//   },
//   // Adding the new session
//   {
//     id: 12,
//     icon: <FaGlobe className="text-4xl text-teal-500" />,
//     title: "Global Coaching",
//     description: "Personalized coaching that bridges cultural differences and promotes global success.",
//     link: "/sessions/global-coaching",
//   },
// ];

// const CoachingSessions = () => {
//   return (
//     <div className="py-12 bg-gray-50">
//       {/* Header Section */}
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold text-gray-800">Coaching Sessions</h2>
//         <p className="mt-4 text-gray-600">
//           Explore our coaching sessions designed to help you grow personally and professionally.
//         </p>
//       </div>

//       {/* Sessions Grid */}
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {coachingSessions.map((session) => (
//             <div
//               key={session.id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300"
//             >
//               {/* Icon */}
//               <div className="flex justify-center items-center mb-4">
//                 <div className="bg-gray-100 p-4 rounded-full">
//                   {session.icon}
//                 </div>
//               </div>
//               {/* Title */}
//               <h3 className="text-xl font-bold text-gray-800 text-center">
//                 {session.title}
//               </h3>
//               {/* Description */}
//               <p className="mt-4 text-gray-600 text-center">
//                 {session.description}
//               </p>
//               {/* Button */}
//               <div className="text-center mt-6">
//                 <a
//                   href={session.link}
//                   className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoachingSessions;



import React from "react";
import { GiThreeLeaves } from "react-icons/gi";
import { PiGlobeStandFill } from "react-icons/pi";
import { BsQuestionOctagonFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// Reusable Card Component
const Card = ({ icon, title, subtitle, price, features, buttonText }) => {
  return (
    <div className="bg-[#D9EC6F] hover:bg-white hover:border-blue-500 border rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
      {/* Center Icon */}
      <div className="flex items-center justify-center w-16 h-16 text-white hover:text-[#dff36d] bg-blue-500 hover:bg-[#ff2359] rounded-full mb-4">
        <span className="text-2xl">{icon}</span>
      </div>

      {/* Headings */}
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <h3 className="text-gray-800 mb-2">{subtitle}</h3>
      <p className="text-3xl font-bold mb-4">
        {price}
        <span className="text-sm text-gray-900">/mo</span>
      </p>

      {/* Features */}
      <div className="grid grid-cols-1 self-start w-full h-40 mb-5 gap-2">
        {features.map((feature, index) => (
          <div key={index} className="flex space-x-3">
            <span className="text-green-700 text-lg">
              <TiTick />
            </span>
            <span className="text-gray-900">{feature.heading}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="bg-[#581C87] text-white px-32 py-2 rounded-lg hover:bg-blue-600 transition">
        {buttonText}
      </button>
    </div>
  );
};

// Main Component
const CardGetStarted = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
     {/* Back Icon Positioned at Start */}
<div className="flex justify-start p-4">
  <IoMdArrowRoundBack
    onClick={handleBack} // Redirect to the home route
    className="text-blue-500 hover:text-blue-700 text-3xl sm:text-3xl cursor-pointer transform hover:-translate-y-1 hover:scale-110 transition-all duration-300"
  />
</div>


      {/* FIRST SECTION */}
      <div className="text-center p-8">
        <div className="flex items-center justify-center space-x-4">
          <img
            className="w-14 h-14 rounded-full rotate-45"
            src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__"
            alt="left"
          />
          <h2 className="text-3xl font-bold">Choose Your Zen Journey</h2>
          <img
            className="w-14 h-14 rounded-full -rotate-45"
            src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__"
            alt="right"
          />
        </div>
        <p className="text-lg text-gray-600 mt-4">
          "Select the perfect plan to guide you on your path to inner peace"
        </p>
      </div>

      {/* SECOND SECTION */}
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <Card
            icon={<GiThreeLeaves />}
            title="Basic"
            subtitle="Begin Your Journey"
            price="$49"
            features={[
              { heading: "2 Monthly Sessions" },
              { heading: "Start their Journey" },
              { heading: "Email Support" },
              { heading: "Ideal for beginners" },
              { heading: "Basic Meditation Guide" },
            ]}
            buttonText="Get Started"
          />

          {/* Card 2 */}
          <Card
            icon={<PiGlobeStandFill />}
            title="Standard"
            subtitle="Deepen Your Practice"
            price="$99"
            features={[
              { heading: "4 Monthly Sessions" },
              { heading: "Priority Email Support" },
              { heading: "Deepen Your Practice" },
              { heading: "Advanced Meditation Guide" },
              { heading: "Weekly Group Sessions" },
            ]}
            buttonText="Get Started"
          />

          {/* Card 3 */}
          <Card
            icon={<BsQuestionOctagonFill />}
            title="Premium"
            subtitle="Transform Your Life"
            price="$199"
            features={[
              { heading: "8 Monthly Sessions" },
              { heading: "24/7 Direct Support" },
              { heading: "Personalized Meditation Plan" },
              { heading: "1-on-1 Intensive Retreats" },
              { heading: "Lifestyle Consultation" },
            ]}
            buttonText="Get Started"
          />
        </div>
      </div>
    </>
  );
};

export default CardGetStarted;




