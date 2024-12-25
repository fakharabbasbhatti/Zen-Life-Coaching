import React from "react";
// React Icons import
import { LuMessageCircleQuestion } from "react-icons/lu";
import { IoRose } from "react-icons/io5";
import { FaHeartPulse } from "react-icons/fa6";

const CardThirdAbout = () => {
    return (
        <>
            {/* FIRST SECTION */}
            <div className="text-center p-8 ">
                <div className="flex items-center justify-center space-x-4 ">
                    <img className="w-14 h-14 rounded-full rotate-45" src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__" alt="left" />
                    <h2 className="text-4xl font-bold text-black">Our Services</h2>
                    <img className="w-14 h-14 rounded-full -rotate-45" src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__" alt="right" />
                </div>
            </div>


            {/* SECOND SECTION */}
            <div className="flex flex-wrap justify-center gap-7 p-4">
                {/* Card 1 */}
                <div className="w-full sm:w-[48%] md:w-[30%] bg-[#D9EC6F] shadow-lg rounded-lg p-6 flex flex-col items-start transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-[#f9f9f9] ease-in-out duration-300">
                    <div className="text-green-500 hover:text-green-700 text-3xl mb-4 ">
                        {/* React Icon */}
                        <LuMessageCircleQuestion />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Mindfulness Coaching</h2>
                    <p className="text-gray-700">
                        Learn techniques to stay present and reduce stress through guided mindfulness practices.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-[48%] md:w-[30%] bg-[#D9EC6F] shadow-lg rounded-lg p-6 flex flex-col items-start transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-[#f9f9f9] ease-in-out duration-300">
                    <div className="text-[#ff2359] hover:text-red-700 text-3xl mb-4">
                        {/* React Icon */}
                        <IoRose />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Personal Development</h2>
                    <p className="text-gray-700">
                        Discover your potential and create actionable plans for personal growth.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-[48%] md:w-[30%] bg-[#D9EC6F] shadow-lg rounded-lg p-6 flex flex-col items-start transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-[#f9f9f9] ease-in-out duration-300">
                    <div className="text-red-600 hover:text-red-500 text-3xl mb-4">
                        {/* React Icon */}
                        <FaHeartPulse />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Wellness Programs</h2>
                    <p className="text-gray-700">
                        Comprehensive programs focusing on physical and mental well-being Wellness Programs.
                    </p>
                </div>
            </div>
        </>
    );
};

export default CardThirdAbout;
