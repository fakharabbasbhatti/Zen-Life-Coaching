import React from 'react'
import Contactportfolio from "../../assets/portfolio.jpeg";


const ContactPortfolio = () => {
    return (
        <>
            <div className="bg-gray-200 min-h-screen flex items-center justify-center p-6" id="contact">
                <div className="flex flex-col md:flex-row items-center bg-gray-100 shadow-lg rounded-lg p-8 max-w-5xl w-full">
                    {/* Left Side - Form */}
                    <div className="md:w-1/2 w-full">
                        <h2 className="text-3xl font-bold text-center md:text-left mb-6">Get in Touch</h2>
                        <form>
                            {/* Name Field */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Phone Field */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                                <input
                                    type="tel"
                                    placeholder="Your Phone Number"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Image */}
                    <div
                        className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0 md:pl-6"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <img
                            src={Contactportfolio}
                            alt="Contact Illustration"
                            className="rounded-lg h-[30rem] shadow-lg hover:scale-105 transition transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPortfolio;
