import React from 'react'

const WorkPortfolio = () => {
  return (
    <>
      <div className="bg-gray-100 py-10" id="work">
        {/* Heading and Button */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Platform</h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-bold mb-2">Making a Web Development from scratch</h2>
            <p className="text-gray-500 mb-4">10 Dec 2024</p>
            <div className="pl-2">
              <h3 className="text-lg font-bold mb-2">Web Development</h3>
              <p className="text-gray-600">Developers use technologies like HTML, CSS, JavaScript, and frameworks such as React, Angular, or Vue.js for the frontend. The backend often involves languages like Python, PHP, or Node.js, along with databases such as MySQL or MongoDB. Modern web development emphasizes responsive design, accessibility, and optimized performance for various devices.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-bold mb-2">Making Amazon and eBay scratch websites</h2>
            <p className="text-gray-500 mb-4">12 Feb 2024</p>
            <div className="pl-2">
              <h3 className="text-lg font-bold mb-2">Amazon & Ebay</h3>
              <p className="text-gray-600">To create a pixel-perfect design for Amazon and eBay websites, focus on replicating key design elements such as the layout, fonts, colors, and product grid. For Amazon, emphasize the clean, user-friendly interface with easy navigation, prominent product images, and effective call-to-action buttons. For eBay, capture its auction-style listings and personalized seller profiles.</p>
            </div>
          </div>
        </div>

        {/* Centered Button */}
        <button className="mx-auto block px-6 py-3 bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 transition-all duration-300 mt-6">
          View All
        </button>
      </div>
    </>
  )
}

export default WorkPortfolio;
