import React from "react";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import bterflymobile from '../../assets/bterflymobile.png';
import brtflyyelow from '../../assets/butflyyelow.png';

const CardFour = () => {
    return (
        <>
            <div className="container mx-auto p-4 flex flex-col lg:flex-row items-center">
                {/* Left Side */}
                <div className="text-center lg:text-left lg:w-1/2">
                    <h1 className=" text-4xl font-bold mb-4">Experience Zen Life Coaching on Mobile</h1>
                    <p className="text-gray-700 mb-6">
                        Access your coaching sessions, track progress, and practice mindfulness exercises anywhere, anytime with our mobile app.
                    </p>
                    <div className="flex justify-center lg:justify-start gap-4"> 
                        <a
                            href="https://example.com/button1"
                            className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-900 ransform hover:scale-105 transition duration-300 ease-in-out"
                        >
                            <FaApple />
                            App Store
                        </a>
                        <a
                            href="https://example.com/button2"
                            className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-900 ransform hover:scale-105 transition duration-300 ease-in-out"
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
                        className="rounded shadow-lg w-full h-auto max-h-[35rem] object-cover ransform hover:scale-105 transition duration-300 ease-in-out"
                    />
                </div>
            </div>

            {/* TWO SECTION START */}
            <div className="text-center p-8 bottom-20">
                <div className="flex items-center justify-center space-x-4">
                    <img className="w-14 h-14 rounded-full rotate-45" src={brtflyyelow} alt="left" />
                    <h2 className="text-lg sm:text-2xl font-bold">Ready to Begin Your Journey?</h2>
                    <img className="w-14 h-14 rounded-full -rotate-45" src={brtflyyelow} alt="right" />
                </div>
                <p className="text-lg text-gray-600 mt-4">Take the first step towards personal transformation with our experienced life coaches</p>
                <button className="mt-6 px-6 py-3 bg-[#808000] text-white font-medium rounded-full shadow-md hover:bg-[#6d6e27] ransform hover:scale-105 transition duration-300 ease-in-out">
                    Schedule Free Consultation
                </button>
            </div>

        </>
    );
};

export default CardFour;