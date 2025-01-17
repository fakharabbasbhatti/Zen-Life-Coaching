import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Title and Description */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600 mt-2">
              Reach out to us for any queries, assistance, or information. We're here to help and would love to hear from you!
            </p>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-800">Address</h3>
            <p className="text-gray-600 mt-1">1234 Fitness Street, Gym City, World</p>
          </div>

          {/* Time Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-800">Working Hours</h3>
            <p className="text-gray-600 mt-1">Mon to Fri: 7:30 am — 1:00 am</p>
            <p className="text-gray-600">Sat to Sun: 8:00 am — 11:00 pm</p>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
            <p className="text-gray-600 mt-1">Phone: +800-123-4567</p>
            <p className="text-gray-600">Email: gymat@yourname.com</p>
          </div>
        </div>

        {/* Right Section - Form */}
<div className="bg-white p-8 shadow-lg rounded-lg ">
  <form className="space-y-6">
    {/* Full Name */}
    <div>
      <label className="block text-sm font-semibold text-gray-700" htmlFor="fullName">
        Full Name
      </label>
      <input
        type="text"
        id="fullName"
        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your full name"
        required
      />
    </div>

    {/* Email Address */}
    <div>
      <label className="block text-sm font-semibold text-gray-700" htmlFor="email">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your email address"
        required
      />
    </div>

    {/* Comments */}
    <div>
      <label className="block text-sm font-semibold text-gray-700" htmlFor="comments">
        Comments
      </label>
      <textarea
        id="comments"
        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
        placeholder="Write your comments"
        required
      />
    </div>

    {/* Submit Button */}
    <div className="text-center">
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Submit
      </button>
    </div>
  </form>
</div>

      </div>
    </div>
  );
};

export default ContactSection;
