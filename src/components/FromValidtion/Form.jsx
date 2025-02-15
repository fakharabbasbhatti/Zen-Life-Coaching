import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaPen } from "react-icons/fa";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = { ...errors };

    // Basic form validation
    if (!formData.name) formErrors.name = "Name is required!";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Valid email is required!";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      formErrors.phone = "Valid phone number is required!";
   if (!formData.message) formErrors.message = "Message is required!";

    setErrors(formErrors);

    // If there are errors, don't submit
    if (Object.values(formErrors).some((error) => error)) {
      return;
    }

    // Handle form submission (set the submitted data)
    setSubmittedData(formData);

    // Optionally, reset the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#24078c]">
      <div className="max-w-lg mx-auto p-5 bg-[#04074a] shadow-lg rounded-lg">
        <h2 className="text-5xl font-bold text-white text-center mb-8">Apply <span className="text-[#fabd07]">Now</span></h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="flex items-center p-4 bg-gray-300 rounded-lg shadow-md">
            <FaUser className="text-blue-700 text-2xl mr-4" />
            <input
              type="text"  
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg bg-white"
              placeholder="Your Name"
            />
          </div>
          {errors.name && <span className="text-[#fc0505] text-sm">{errors.name}</span>}
          
          {/* Email */}
          <div className="flex items-center p-4 bg-gray-300 rounded-lg shadow-md">
            <FaEnvelope className="text-yellow-600 text-2xl mr-4" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          {errors.email && <span className="text-[#fc0505] text-sm">{errors.email}</span>}

          {/* Phone */}
          <div className="flex items-center p-4 bg-gray-300 rounded-lg shadow-md">
            <FaPhoneAlt className="text-green-700 text-2xl mr-4" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Your Phone Number"
            />
          </div>
          {errors.phone && <span className="text-[#fc0505] text-sm">{errors.phone}</span>}
          

          {/* Message */}
          <div className="flex items-start p-4 bg-gray-300 rounded-lg shadow-md">
            <FaPen className="text-red-700 text-2xl mr-4" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Give short introduction about your self"
              rows="4"
            />
          </div>
          {errors.message && <span className="text-[#fc0505] text-sm">{errors.message}</span>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Submit
          </button>
        </form>

        {/* Display submitted data */}
        {submittedData && (
          <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Submitted Data:</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Phone:</strong> {submittedData.phone}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
         </div>
        )}
      </div>
    </div>
  );
}

export default Form;
