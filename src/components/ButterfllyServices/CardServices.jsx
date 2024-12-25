import React from 'react';
import { FaStar } from 'react-icons/fa';
import { HiUserGroup } from "react-icons/hi";

const CradServices = () => {
    return (

        <div className='bg-[#F5E2AC]'>

            {/* FIRST SECTION */}
            <div className="text-center p-8 bg-[#F5E2AC]">
                <div className="flex items-center justify-center space-x-4 ">
                    <img className="w-14 h-14 rounded-full rotate-45" src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__" alt="left" />
                    <h2 className="text-4xl font-bold text-[#6B21A8]">About Our Services</h2>
                    <img className="w-14 h-14 rounded-full -rotate-45" src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__" alt="right" />
                </div>
                <div className="flex flex-col items-center mt-8"> {/* Added mt-8 to move them down */}
                    <h2 className="text-2xl font-bold">Packages We Provide</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        "Discover our transformative life coaching programs designed to help you reach your full potential"
                    </p>
                </div>
            </div>

            {/* SECOND SECTION */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-4 ">
                {/* Card 1 */}
                <div className="flex flex-col bg-white hover:bg-[#D9EC6F] shadow-lg p-6 rounded-lg w-full max-w-sm transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 cursor-pointer">
                    <div className="flex items-center gap-4 mb-4">
                        <FaStar className="text-3xl text-blue-500" />
                        <h2 className="text-xl font-semibold">Personal Growth</h2>
                    </div>
                    <p className="text-gray-600">
                        One-on-one coaching sessions focused on personal development and goal achievement.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col bg-white hover:bg-[#D9EC6F] shadow-lg p-6 rounded-lg w-full max-w-sm transition-transform transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300 cursor-pointer">
                    <div className="flex items-center gap-4 mb-4">
                        <HiUserGroup className="text-3xl text-blue-500" />
                        <h2 className="text-xl font-semibold">Group Sessions</h2>
                    </div>
                    <p className="text-gray-600">
                        Interactive group coaching programs fostering community and shared growth.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default CradServices;
