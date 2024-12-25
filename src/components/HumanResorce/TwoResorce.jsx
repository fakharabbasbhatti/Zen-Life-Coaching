import React from "react";
import { FaArrowRight } from "react-icons/fa";
import heroresorce from "../../assets/heropic.jpg";

const TwoResorce = () => {
    return (
        <div className="py-8">
            <h1 className="text-[30px] text-center font-bold mb-6">Recruitment</h1>

            {/* SECOND SECTION */}
            <div className="flex justify-center items-center">
                <div className="flex flex-col lg:flex-row items-center justify-center py-16 px-6 bg-gray-200 gap-12 mx-3 sm:mx-20 text-center shadow-lg border-3 border-gray-700 rounded-lg">
                    {/* Left side image */}
                    <div className="lg:w-1/2 w-full">
                        <img 
                            src={heroresorce} 
                            alt="Description" 
                            className="object-cover w-full h-auto rounded-lg lg:h-[350px] md:h-[200px] sm:h-[150px]" 
                        />
                    </div>

                    {/* Right side content */}
                    <div className="lg:w-1/2 w-full text-black flex flex-col items-center justify-center">
                        <h2 className="text-[25px] font-bold mb-4 md:text-[25px] sm:text-[20px]">
                            Dream Jobs Made Simple
                        </h2>
                        <p className="text-lg justify-items mb-6 md:text-[15px] sm:text-[14px]">
                            Our priority is matching you with the company that suits your professional goals, growth, and happiness. Integrity, personal connection, and deep knowledge in the field of medical sales means the stage is set for your success. We will coach you throughout the process so your job search can run flawlessly.
                        </p>
                        <button className="flex items-center bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-300 transition">
                            <span className="mr-2">Looking for Recruitment</span>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoResorce;
