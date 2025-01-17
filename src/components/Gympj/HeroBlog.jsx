import React from 'react';
import backgroundImageblog from '../../assets/blogpic.jpg';


const HeroBlog = () => {
    return (
        <div>
            {/* Wrapper with Background Image */}
            <div
                className="relative bg-cover bg-center bg-no-repeat min-h-screen"
                style={{
                     backgroundImage:`url(${backgroundImageblog})`,
                }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* HERO SECTION */}
                <div className="relative flex flex-col items-center justify-center h-screen p-5 text-center">
                    <h1 className="text-xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-md mb-4">
                        "Welcome to the HeroTeam Blog!"
                    </h1>
                    <p className="text-xl sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
                    Here, we share insights, strategies, and success stories 
                    focused on innovation, teamwork, and industry breakthroughs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroBlog;
