import React from "react";
import { FaCheckCircle, FaChartLine, FaTasks, FaHeart, FaCog, FaAward, FaUsers, FaRocket, FaLightbulb, FaUsersCog, FaClipboardCheck, FaCogs } from "react-icons/fa";

const progressData = [
  {
    id: 1,
    title: "Completed Goals",
    progress: 75, // progress percentage
    icon: <FaCheckCircle className="text-4xl text-green-500" />,
    progressColor: "bg-green-500",
  },
  {
    id: 2,
    title: "Skill Development",
    progress: 60,
    icon: <FaChartLine className="text-4xl text-blue-500" />,
    progressColor: "bg-blue-500",
  },
  {
    id: 3,
    title: "Tasks Pending",
    progress: 40,
    icon: <FaTasks className="text-4xl text-orange-500" />,
    progressColor: "bg-orange-500",
  },
  {
    id: 4,
    title: "Personal Growth",
    progress: 85,
    icon: <FaHeart className="text-4xl text-pink-500" />,
    progressColor: "bg-pink-500",
  },
  {
    id: 5,
    title: "System Optimization",
    progress: 55,
    icon: <FaCog className="text-4xl text-gray-500" />,
    progressColor: "bg-gray-500",
  },
  {
    id: 6,
    title: "Achievements Earned",
    progress: 90,
    icon: <FaAward className="text-4xl text-yellow-500" />,
    progressColor: "bg-yellow-500",
  },
  {
    id: 7,
    title: "Community Involvement",
    progress: 70,
    icon: <FaUsers className="text-4xl text-teal-500" />,
    progressColor: "bg-teal-500",
  },
  {
    id: 8,
    title: "Innovation & Ideas",
    progress: 65,
    icon: <FaLightbulb className="text-4xl text-indigo-500" />,
    progressColor: "bg-indigo-500",
  },
  {
    id: 9,
    title: "Milestones Reached",
    progress: 80,
    icon: <FaRocket className="text-4xl text-red-500" />,
    progressColor: "bg-red-500",
  },
  // Added 3 more progress items
  {
    id: 10,
    title: "Team Collaboration",
    progress: 72,
    icon: <FaUsersCog className="text-4xl text-teal-600" />,
    progressColor: "bg-teal-600",
  },
  {
    id: 11,
    title: "Project Completion",
    progress: 55,
    icon: <FaClipboardCheck className="text-4xl text-yellow-600" />,
    progressColor: "bg-yellow-600",
  },
  {
    id: 12,
    title: "Workflow Automation",
    progress: 45,
    icon: <FaCogs className="text-4xl text-purple-600" />,
    progressColor: "bg-purple-600",
  },
];

const ProgressTracking = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100">
      {/* Hero Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-purple-800">Progress Tracking</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Monitor your achievements and stay motivated with our real-time progress tracking tools.
        </p>
      </div>

      {/* Progress Cards */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {progressData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-4 rounded-full shadow-md transform hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 text-center">{item.title}</h3>
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className={`${item.progressColor} h-4 rounded-full`}
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      {/* <div className="text-center mt-12">
        <button className="px-6 py-3 bg-purple-600 text-white font-bold text-lg rounded-lg hover:bg-purple-500 transition-colors">
          View Detailed Report
        </button>
      </div> */}
    </div>
  );
};

export default ProgressTracking;
