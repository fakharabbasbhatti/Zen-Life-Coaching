import React from 'react';
// Importing icons from react-icons
import { FaUserGroup } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { FaRegSquareCaretRight } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { FaMobileScreen } from "react-icons/fa6";


const Card = ({ icon, heading, description }) => {
    return (
        <div className="bg-[#D9EC6F] hover:bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full sm:w-80 md:w-1/3 lg:w-1/4 m-4 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            {/* Icon Section with circular border-radius */}
            <div className="bg-[#F3E8FF] text-[#9333EA] rounded-[20%] p-4">
                {icon}
            </div>

            {/* Heading */}
            <h3 className="text-xl font-semibold mt-4 text-center text-[#581C87]">{heading}</h3>

            {/* Description */}
            <p className="mt-2 text-center text-gray-600">{description}</p>
        </div>
    );
};

const ServicesTeam = () => {
    // Data for the cards (can be fetched from an API or local file)
    const cards = [
        {
            icon: <FaUserGroup className="text-4xl" />,
            heading: '1:1 Coaching Sessions',
            description: 'Personalized coaching sessions tailored to your specific needs and goals.',
        },
        {
            icon: <HiUserGroup className="text-4xl" />,
            heading: 'Group Workshops',
            description: 'Interactive group sessions focusing on specific themes and skill development.',
        },
        {
            icon: <FaRegSquareCaretRight className="text-4xl" />,
            heading: 'Virtual Sessions',
            description: 'Online coaching and consultation services for remote clients.',
        },
        {
            icon: <MdLibraryBooks className="text-4xl" />,
            heading: 'Resource Library',
            description: 'Access to exclusive content, worksheets, and learning materials.',
        },
        {
            icon: <GiProgression className="text-4xl" />,
            heading: 'Progress Tracking',
            description: 'Comprehensive tools to monitor and evaluate your personal growth.',
        },
        {
            icon: <FaMobileScreen className="text-4xl" />,
            heading: 'Mobile App Access',
            description: '24/7 access to resources and coaching tools through our mobile app.',
        },
    ];

    return (
        <>

            {/* FIRST SECTION */}
            <div className="text-center p-8 ">
                <div className="flex items-center justify-center space-x-4 ">
                    <img className="w-14 h-14 rounded-full rotate-45" src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__" alt="left" />
                    <h2 className="text-3xl font-bold text-[#6B21A8]">Our Services</h2>
                    <img className="w-14 h-14 rounded-full -rotate-45" src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__" alt="right" />
                </div>
                <p className="text-lg text-gray-600 mt-4">"Comprehensive coaching solutions designed to help you achieve your personal and professional goals."</p>
            </div>


            {/* SECOND SECTION */}
            <div className="flex flex-wrap justify-center">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        heading={card.heading}
                        description={card.description}
                    />
                ))}
            </div>
        </>
    );
};

export default ServicesTeam;
