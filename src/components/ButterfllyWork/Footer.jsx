import React from "react";
import { BsQuestion } from 'react-icons/bs';
import { FaInstagram, FaFacebook, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#808000] text-white py-10 px-5 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Row 1 */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center mb-4 gap-2">
                        <div className="border-2 border-dotted border-white rounded-full ">
                            <BsQuestion className="text-white " />
                        </div>
                        <h3 className="text-xl font-semibold">Zen Life Coaching</h3>
                    </div>
                    <p className="text-white hover:text-gray-300">Guiding you towards inner peace and success</p>
                </div>

                {/* Row 2 */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to={'/about'} className="text-white hover:text-gray-300 transition">About</Link></li>
                        <li><Link to={'/team'} className="text-white hover:text-gray-300 transition">Team</Link></li>
                        <li><Link to={'/services'} className="text-white hover:text-gray-300 transition">Services</Link></li>
                        <li><Link to={'/termspolicy'} className="text-white hover:text-gray-300 transition">Terms & Policy</Link></li>
                        <li><Link to={'/contact'} className="text-white hover:text-gray-300 transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Row 3 */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Connect</h3>
                    <div className="flex space-x-4">
                        <FaInstagram className="text-white text-2xl hover:text-red-600 transition cursor-pointer" />
                        <FaFacebook className="text-white text-2xl hover:text-blue-600 transition cursor-pointer" />
                        <FaLinkedin className="text-white text-2xl hover:text-blue-600 transition cursor-pointer" />
                    </div>
                </div>

                {/* Row 4 */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Connect</h3>
                    <div className="relative flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 pr-12 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-200 text-gray-800"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#808000] hover:text-yellow-500 px-2 py-2">
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-10 border-t border-gray-700 pt-5 text-white text-sm">
                © 2025 Zen Life Coaching. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
