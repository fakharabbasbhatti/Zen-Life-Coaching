import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

const FooterPortfolio = () => {
    return (
        <>
        <hr />
            <footer className=" text-black py-3">
                <div className="container mx-auto px-6">
                    {/* Footer Top Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                        {/* Branding */}
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <p className="text-1xl font-bold"><span className='text-[#ff2359]'>BHATTI</span>   © 2024 My Portfolio. All rights reserved.</p>
                            {/* <p className="text-gray-400 mt-2">Built with React & Tailwind CSS</p> */}
                        </div>

                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-blue-400 transition">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-400 transition">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-400 transition">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-400 transition">
                                <FaGithub size={24} />
                            </a>
                           
                        </div>
                    </div>

                 
                </div>
            </footer>
        </>
    )
}

export default FooterPortfolio