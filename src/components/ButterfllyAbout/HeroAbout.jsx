import React from 'react';
import backgroundImagefirst from '../../assets/therapist.jpg';


const HeroAbout = () => {
    return (
        <div>
            {/* Wrapper with Background Image */}
            <div
                className="relative bg-cover bg-center bg-no-repeat min-h-screen"
                style={{
                   backgroundImage:`url(${backgroundImagefirst})`,
                }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* HERO SECTION */}
                <div className="relative flex flex-col items-center justify-center h-screen p-5 text-center">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white drop-shadow-md mb-4">
                        "Comprehensive solutions"
                    </h1>
                    <p className="text-base sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
                        Web development, database management, API integration, tailored to meet business goals!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroAbout;
