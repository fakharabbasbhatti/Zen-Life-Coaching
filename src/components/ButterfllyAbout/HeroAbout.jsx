import React from 'react';

const HeroAbout = () => {
    return (
        <div>
            {/* Wrapper with Background Image */}
            <div
                className="relative bg-cover bg-center bg-no-repeat min-h-screen"
                style={{
                    backgroundImage:
                        'url("https://s3-alpha-sig.figma.com/img/d593/be7e/4ac7350b77768f4d2f1d4b0bc2d7bd5c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cm2ZMBmsc6XIw-WqHFfOk9s3sO7XZVQPYidQC6dDnpa7qJmJKql0MMimNEfGdFhCGfUxu7Gbs5CMAgkFlq1QTZRN2ZjRb2JRktkXd3ojrxYlowEdn18w7cVgW~V9veelp4SeaHlcjcMHTPeOgt7iWnPa3-Myplm9exklyHE6~TBVEid5HgOhVYnHdOrIYvkifaT7hJabcJ2RNWgsjy~li-YaAqBubr~F60HzhKlOBWL50TCttrLKMXcF1dld8gc2efabwGlSha0F01~Do1EviWKvj4j7CN8CnIMviZ909axCGNdE8Z-Pb5tv-k8YXBV3CcdbiI94KwSLS-OYlbUGDQ__")',
                }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* HERO SECTION */}
                <div className="relative flex flex-col items-center justify-center h-screen p-5 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white drop-shadow-md mb-4">
                        "Comprehensive solutions"
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
                        Web development, database management, API integration, tailored to meet business goals!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroAbout;
