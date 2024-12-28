import React from "react";
import { FaVideo, FaClock, FaUserTie, FaGlobe, FaDesktop, FaBookOpen, FaMobileAlt, FaUsers } from "react-icons/fa";

const virtualSessions = [
  {
    id: 1,
    icon: <FaVideo className="text-4xl text-blue-600" />,
    title: "Live Interactive Sessions",
    description: "Join live sessions with coaches and experts from the comfort of your home.",
  },
  {
    id: 2,
    icon: <FaClock className="text-4xl text-green-600" />,
    title: "Flexible Scheduling",
    description: "Schedule sessions at your convenience with flexible time slots.",
  },
  {
    id: 3,
    icon: <FaUserTie className="text-4xl text-purple-600" />,
    title: "Expert Guidance",
    description: "Learn from industry experts with tailored strategies for your growth.",
  },
  {
    id: 4,
    icon: <FaGlobe className="text-4xl text-orange-600" />,
    title: "Global Access",
    description: "Participate in sessions no matter where you are located.",
  },
  {
    id: 5,
    icon: <FaDesktop className="text-4xl text-teal-600" />,
    title: "Online Workshops",
    description: "Engage in hands-on workshops that enhance your skills with practical learning.",
  },
  {
    id: 6,
    icon: <FaBookOpen className="text-4xl text-pink-600" />,
    title: "Self-Paced Learning",
    description: "Access recorded sessions and materials to learn at your own pace, anytime.",
  },
  {
    id: 7,
    icon: <FaMobileAlt className="text-4xl text-yellow-500" />,
    title: "Mobile Access",
    description: "Join virtual sessions and access materials through our mobile-friendly platform.",
  },
  {
    id: 8,
    icon: <FaUsers className="text-4xl text-indigo-600" />,
    title: "Community Support",
    description: "Be part of a supportive community where you can connect with like-minded learners.",
  },
];

const VirtualSessions = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-indigo-100 to-blue-50">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Virtual Sessions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience the best coaching sessions online. Connect with experts, learn, and grow—all from the comfort of your home.
        </p>
      </div>

      {/* Sessions Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {virtualSessions.map((session) => (
            <div
              key={session.id}
              className="bg-white shadow-2xl rounded-lg overflow-hidden p-6 hover:scale-105 hover:shadow-xl transition-transform duration-500"
            >
              {/* Icon */}
              <div className="flex justify-center items-center mb-6">
                <div className="bg-indigo-50 p-6 rounded-full shadow-md transform hover:scale-110 transition-transform duration-300">
                  {session.icon}
                </div>
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 text-center">{session.title}</h3>
              {/* Description */}
              <p className="mt-4 text-gray-600 text-center">{session.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualSessions;
