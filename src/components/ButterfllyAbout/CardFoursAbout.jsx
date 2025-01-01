import React from "react";
// React Icons import
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io5";
import { MdWindow } from "react-icons/md";
import { BsAmazon } from "react-icons/bs";
import bterflymobile from '../../assets/bterflymobile.png';
import brtflyyelow from '../../assets/butflyyelow.png';

const CardFoursAbout = () => {
    return (
        <>
            <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center gap-8">
                {/* Left Side */}
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">Experience Zen Life Coaching on Mobile</h1>
                    <p className="text-gray-700 mb-6">
                        Access your coaching sessions, track progress, and practice mindfulness exercises anywhere, anytime with our mobile app.
                    </p>
                    <div className="flex justify-center lg:justify-start gap-4">
                        <a
                            href="https://example.com/button1"
                            className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-900 transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300"
                        >
                            <FaApple />
                            App Store
                        </a>
                        <a
                            href="https://example.com/button2"
                            className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-900 transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300"
                        >
                            <FaGooglePlay />
                            Play Store
                        </a>
                    </div>
                </div>

                {/* Right Side */}
                <div className="lg:w-1/2 mt-6 lg:mt-0">
                    <img
                        src={bterflymobile}
                        alt="Zen Life Coaching App"
                        className="rounded shadow-lg w-full h-auto max-h-[35rem] object-cover transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300"
                    />
                </div>
            </div>

            {/* TWO SECTION START */}
            <div className="text-center p-8 bottom-20">
                <div className="flex items-center justify-center space-x-4">
                    <img className="w-14 h-14 rounded-full rotate-45" src={brtflyyelow} alt="left" />
                    <h2 className="text-3xl font-bold text-black">Our Partners</h2>
                    <img className="w-14 h-14 rounded-full -rotate-45" src={brtflyyelow} alt="right" />
                </div>
            </div>

            <div className="flex justify-center gap-4 lg:gap-40 p-4 flex-wrap">
                {/* Icon 1 */}
                <div className="text-green-700 hover:text-green-500 text-6xl p-4 transition-transform transform hover:scale-110 hover:shadow-xl ease-in-out duration-300">
                    <IoLogoGoogle />
                </div>

                {/* Icon 2 */}
                <div className="text-yellow-500 hover:text-yellow-600 text-6xl p-4 transition-transform transform hover:scale-110 hover:shadow-xl ease-in-out duration-300">
                    <MdWindow />
                </div>

                {/* Icon 3 */}
                <div className="text-gray-700 hover:text-gray-500 text-6xl p-4 transition-transform transform hover:scale-110 hover:shadow-xl ease-in-out duration-300">
                    <FaApple />
                </div>

                {/* Icon 4 */}
                <div className="text-blue-900 hover:text-blue-500 text-6xl p-4 transition-transform transform hover:scale-110 hover:shadow-xl ease-in-out duration-300">
                    <BsAmazon />
                </div>
            </div>
        </>
    );
};

export default CardFoursAbout;
