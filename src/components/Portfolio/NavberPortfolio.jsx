import React, { useState } from 'react';

const NavberPortfolio = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className=" text-black p-4">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-xl font-bold">
                        <a href="#" className="hover:text-gray-500 transition">
                            BHATTI
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6 text-xl font-bold">
                        <a href="#work" className="hover:text-gray-500 transition">
                            Works
                        </a>
                        <a href="#blog" className="hover:text-gray-500 transition">
                            Blog
                        </a>
                        <a href="#contact" className="hover:text-gray-500 transition">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="focus:outline-none"
                        >
                            {menuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden mt-4 text-xl font-bold">
                        <a href="#work" className="block py-2 px-4 hover:bg-gray-500">
                            Works
                        </a>
                        <a href="#blog" className="block py-2 px-4 hover:bg-gray-500">
                            Blog
                        </a>
                        <a href="#contact" className="block py-2 px-4 hover:bg-gray-500">
                            Contact
                        </a>
                    </div>
                )}
            </nav>
        </>
    );
};

export default NavberPortfolio;
