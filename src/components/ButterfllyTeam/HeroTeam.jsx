import React from 'react';

const HeroTeam = () => {
    return (
        <div>
            {/* Wrapper with Background Image */}
            <div
                className="relative bg-cover bg-center bg-no-repeat min-h-screen"
                style={{
                    backgroundImage:
                        'url("https://s3-alpha-sig.figma.com/img/079d/ba2d/87d66d567795c8e26d75d6d2177398cb?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2oQ5c79qHJLq4XPHFyN1JeuI~YHs9yOYEopO9InNWnNgbLSPaChDjcAKDsfltO9R6XuGcBPN~EaZmpULKn-LrIXENuEItmrtb~M3I0~~fq-A293A7LsqODD6MlwCWmeCzHNQYbM0q0g4fG1pZ1I0-NoxN9zwyh4glP4yhcO8ZPkGPBegtFnrThsT26PWHFwhXEe90VOLzeLqhJ9TNLNSNEd~efplBukmzk~8jba1DarRuU8RgeFGc42PTaJvFhqAH68aRtPk--u5~-NOMZNQ4ENBi8nYUTiW4A0WkpUmrtJDopuDDRFG0r3tA1H2eZlc7FK9Nbz3jhDG~9L28WNXg__")',
                }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* HERO SECTION */}
                <div className="relative flex flex-col items-center justify-center h-screen p-5 text-center">
                    <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-md mb-4">
                        "HeroTeam Delivers Cutting-Edge"
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
                        Solutions uniting visionaries to drive success and shape the future together!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroTeam;
