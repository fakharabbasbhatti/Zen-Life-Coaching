import React from 'react';
import backgroundImage from '../../assets/butterfllybg.jpeg';

const Hero = () => {
    return (
        <>
            {/* Wrapper with Background Image */}
            <div
                className="relative bg-cover bg-center bg-no-repeat min-h-screen"
                style={{
                    backgroundImage:
                        'url("https://s3-alpha-sig.figma.com/img/47be/0ef2/c7f5b52cce9dd6e51b91f9d66971ce1b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g2Qn08JhVSb9gXilc527oTLwPYGZGY4bKieSuWWb7QhuHIWaVJ5fRxP-2TO9lxKQYxdbGv1VJMmqUcEU0WI7lr~lyrAxxjYD59oIk~ows6OkLdv8ntm3QFLVzw0JZIYTwhYOa1NvC49zsp8APlnJjRkUvqn9dvdM3vCpSAxwBd7svkAqzfa~qKJN2CeUEbKjD2-L7-dHauwaCeAoeUpdkfa80vGqDWv7Q~fRsYlHIonBV8pRmXUxlYQi5hZPEYZs-kE6bj5xlWx2N5OkOBSFZ8J7qh~ucSZ4zhLbnmsIQyHMm3knIKzXMFkgNpcVglf~ScE1cErXhJ7eFMi7ZSYPtw__")',
                }}
            >
                {/* Mobile Menu Background (visible only on small screens) */}
                <div
                    className="relative bg-cover sm:hidden bg-no-repeat min-h-screen"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    {/* HERO SECTION (Mobile Layout) */}
                    <div className="relative flex flex-col items-center justify-center text-center h-screen p-6">
                        <h1 className="text-4xl font-bold sm:text-4xl md:text-5xl text-white drop-shadow-md mb-4">
                            Welcome to Zen Life
                        </h1>
                        <p className="text-3xl text-white font-semibold leading-relaxed max-w-md">
                            Coaching Your Journey to Personal Growth and Fulfillment Begins Here!
                        </p>
                    </div>
                </div>

                {/* Overlay for larger screens */}
                <div className="hidden sm:flex items-center justify-start h-screen p-8">
                    <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl font-sans text-white drop-shadow-md">
                        "Welcome to Zen Life<br /> Coaching Your Journey<br /> to Personal
                        Growth and<br /> Fulfillment Begins Here!"
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Hero;
