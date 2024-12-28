import React from "react";
import { FaHome, FaHeart, FaUser, FaCog, FaCamera, FaGamepad, FaMusic, FaMapMarkerAlt, FaShoppingCart, FaCloud, FaLock, FaCalendarAlt } from "react-icons/fa";

const MobileApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 to-indigo-700 p-6 rounded-xl shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-2xl font-bold mb-2">Welcome to Mobile App</h2>
            <p className="text-sm opacity-80 mb-4">Explore a world of features!</p>
          </div>
        </section>

        {/* Feature Cards */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Explore <span className="text-[#ff2359]">Mobile</span> Features</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Existing Features */}
            <div className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition text-center">
              <FaHeart size={30} className="text-red-400 mx-auto mb-2" />
              <h4 className="text-lg font-bold">Feature 1</h4>
              <p className="text-sm opacity-70">Details about Likes</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition text-center">
              <FaUser size={30} className="text-blue-400 mx-auto mb-2" />
              <h4 className="text-lg font-bold">Feature 2</h4>
              <p className="text-sm opacity-70">Details about Profile</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition text-center">
              <FaCog size={30} className="text-yellow-400 mx-auto mb-2" />
              <h4 className="text-lg font-bold">Feature 3</h4>
              <p className="text-sm opacity-70">Details about Setting</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition text-center">
              <FaHome size={30} className="text-green-400 mx-auto mb-2" />
              <h4 className="text-lg font-bold">Feature 4</h4>
              <p className="text-sm opacity-70">Details about Home</p>
            </div>

            {/* New Features */}
            <div className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition text-center">
              <FaCamera size={30} className="text-pink-400 mx-auto mb-2" />
              <h4 className="text-lg font-bold">Feature 5</h4>
              <p className="text-sm opacity-70">Details about Camera</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition text-center">
              <FaGamepad size={30} className="text-teal-400 mx-auto mb-2" />
              <h4 className="text-lg font-bold">Feature 6</h4>
              <p className="text-sm opacity-70">Details about Games</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition text-center">
              <FaMusic size={30} className="text-blue-400 mx-auto mb-2" />
              <h4 className="text-lg font-bold">Feature 7</h4>
              <p className="text-sm opacity-70">Details about Music</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition text-center">
              <FaMapMarkerAlt size={30} className="text-purple-400 mx-auto mb-2" />
              <h4 className="text-lg font-bold">Feature 8</h4>
              <p className="text-sm opacity-70">Details about Location</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition text-center">
              <FaShoppingCart size={30} className="text-orange-400 mx-auto mb-2" />
              <h4 className="text-lg font-bold">Feature 9</h4>
              <p className="text-sm opacity-70">Details about Shopping</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition text-center">
              <FaCloud size={30} className="text-gray-400 mx-auto mb-2" />
              <h4 className="text-lg font-bold">Feature 10</h4>
              <p className="text-sm opacity-70">Details about Cloud</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition text-center">
              <FaLock size={30} className="text-yellow-500 mx-auto mb-2" />
              <h4 className="text-lg font-bold">Feature 11</h4>
              <p className="text-sm opacity-70">Details about Security</p>
            </div>

            {/* New Feature - Feature 12 */}
            <div className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition text-center">
              <FaCalendarAlt size={30} className="text-teal-500 mx-auto mb-2" />
              <h4 className="text-lg font-bold">Feature 12</h4>
              <p className="text-sm opacity-70">Details about Calendar</p>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className=" bottom-0 bg-gradient-to-r from-indigo-600 to-purple-800 shadow-md p-3 flex justify-around">
        <button className="flex flex-col items-center text-green-400 hover:text-green-600">
          <FaHome size={24} />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center text-red-400 hover:text-red-600">
          <FaHeart size={24} />
          <span className="text-xs mt-1">Likes</span>
        </button>
        <button className="flex flex-col items-center text-blue-400 hover:text-blue-600">
          <FaUser size={24} />
          <span className="text-xs mt-1">Profile</span>
        </button>
        <button className="flex flex-col items-center text-yellow-400 hover:text-yellow-600">
          <FaCog size={24} />
          <span className="text-xs mt-1">Settings</span>
        </button>
      </nav>
    </div>
  );
};

export default MobileApp;
