import React from 'react';
import backgroundImageteam from '../../assets/bterflyteam.jpg';


const HeroTeam = () => {
    return (
        <div>
            {/* Wrapper with Background Image */}
            <div
                className="relative bg-cover bg-center bg-no-repeat min-h-screen"
                style={{
                     backgroundImage:`url(${backgroundImageteam})`,
                }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* HERO SECTION */}
                <div className="relative flex flex-col items-center justify-center h-screen p-5 text-center">
                    <h1 className="text-xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-md mb-4">
                        "HeroTeam Delivers Cutting-Edge"
                    </h1>
                    <p className="text-xl sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
                        Solutions uniting visionaries to drive success and shape the future together!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroTeam;
