import React, { useState } from "react";
import { FaBook, FaCode, FaChalkboardTeacher, FaVideo, FaFileAlt, FaDatabase, FaGithub, FaLaptop, FaCloud, FaServer, FaUserTie, FaPuzzlePiece } from "react-icons/fa";

const resourceCategories = [
  {
    id: 1,
    icon: <FaBook className="text-5xl text-purple-600" />,
    title: "E-books & Guides",
    description: "Access comprehensive guides and e-books to boost your knowledge.",
  },
  {
    id: 2,
    icon: <FaCode className="text-5xl text-green-600" />,
    title: "Code Snippets",
    description: "Browse reusable code snippets to speed up your development.",
  },
  {
    id: 3,
    icon: <FaChalkboardTeacher className="text-5xl text-blue-600" />,
    title: "Tutorials",
    description: "Learn new skills with step-by-step tutorials from experts.",
  },
  {
    id: 4,
    icon: <FaVideo className="text-5xl text-red-600" />,
    title: "Video Resources",
    description: "Watch insightful videos to understand complex topics.",
  },
  {
    id: 5,
    icon: <FaFileAlt className="text-5xl text-teal-600" />,
    title: "Documentation",
    description: "Comprehensive technical documentation for deeper insights.",
  },
  {
    id: 6,
    icon: <FaDatabase className="text-5xl text-orange-600" />,
    title: "Database Resources",
    description: "Explore database management systems and best practices.",
  },
  {
    id: 7,
    icon: <FaGithub className="text-5xl text-gray-800" />,
    title: "GitHub Repositories",
    description: "Access open-source repositories for various projects.",
  },
  {
    id: 8,
    icon: <FaLaptop className="text-5xl text-yellow-500" />,
    title: "Web Development",
    description: "Resources for building and deploying modern web applications.",
  },
  // Added new categories
  {
    id: 9,
    icon: <FaCloud className="text-5xl text-indigo-600" />,
    title: "Cloud Computing",
    description: "Learn about cloud platforms and infrastructure as a service.",
  },
  {
    id: 10,
    icon: <FaServer className="text-5xl text-gray-700" />,
    title: "Server Management",
    description: "Explore best practices for managing and maintaining servers.",
  },
  {
    id: 11,
    icon: <FaUserTie className="text-5xl text-pink-600" />,
    title: "Business Resources",
    description: "Learn how to integrate technology into business strategies.",
  },
  {
    id: 12,
    icon: <FaPuzzlePiece className="text-5xl text-red-700" />,
    title: "Problem Solving",
    description: "Enhance your problem-solving skills with real-world scenarios.",
  },
];

const ResourceLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and sort the categories based on the search query
  const filteredCategories = resourceCategories
    .filter((category) => category.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (a.title.toLowerCase().startsWith(searchQuery.toLowerCase())) return -1;
      if (b.title.toLowerCase().startsWith(searchQuery.toLowerCase())) return 1;
      return 0;
    });

  return (
    <div className="py-12 bg-gradient-to-r from-indigo-100 to-blue-50">
      {/* Hero Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl font-extrabold text-gray-800">Resource Library</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover a variety of learning materials, including e-books, tutorials, videos, and more, to enhance your skills.
        </p>
        {/* <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-full max-w-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button className="ml-2 px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-500 transition-colors">
            Search
          </button>
        </div> */}
      </div>

      {/* Resource Categories */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white shadow-xl rounded-lg p-6 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out transform"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-indigo-50 p-6 rounded-full shadow-md transform hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 text-center">{category.title}</h3>
              {/* Description */}
              <p className="mt-2 text-gray-600 text-center">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceLibrary;
