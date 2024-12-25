import React from 'react';

const SecondPage = () => {
    const images = [
        {
            url: "https://media.istockphoto.com/id/2157933640/photo/topview-asian-creative-team-they-are-discussing-ideas-and-working-on-things-together-to-come.webp?a=1&b=1&s=612x612&w=0&k=20&c=IEF875VKv8H4PDAN0Ao5EY22s3Y9HP20b9J6YSQJEig=",
            title: "Graphic Design",
            description: "This is the description for Graphic Design.",
        },
        {
            url: "https://media.istockphoto.com/id/1918987312/photo/ux-graphic-designer-planning-application-process-development-prototype.webp?a=1&b=1&s=612x612&w=0&k=20&c=z-1sSaVy68zez5x-lpUjLzl0jBnBX2YrivxPvZzRXGU=",
            title: "Computer",
            description: "This is the description for Computer.",
        },
        {
            url: "https://media.istockphoto.com/id/1735411371/photo/close-up-of-a-woman-website-developer-designing-a-webpage-on-laptop-at-creative-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=YNaoS0TxiaEZBlpSs5txkNvaX8EEVeE6cMG7o1FR-70=",
            title: "Prototyping",
            description: "This is the description for Prototyping.",
        },
        {
            url: "https://media.istockphoto.com/id/1472242645/photo/brand-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=OwFiV9w0QK4BDFRmJQRF5Cb3xdN7Jd3wvccGxsO9R8s=",
            title: "Branding",
            description: "This is the description for Branding.",
        },
        {
            url: "https://media.istockphoto.com/id/2152007132/photo/graphic-designer-exploring-ui-ux-on-digital-tablet.webp?a=1&b=1&s=612x612&w=0&k=20&c=moRjCCZx3cm90apYrYQduY-vlLXdU3oGzhiiHTIh2zU=",
            title: "UI/UX Design",
            description: "This is the description for UI/UX Design.",
        },
        {
            url: "https://media.istockphoto.com/id/2185333641/photo/vintage-grunge-background-scratched-concrete-floor-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=QRd-I_ZOwOIZADjYfNuehuNTE4jYUkbf71pvMIbt6XI=",
            title: "Canva",
            description: "This is the description for Canva.",
        },
    ];

    return (
        <>
            <div className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
                    The Latest Work From Gallery
                </h1>
                
                {/* Grid of Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform transition duration-300 hover:scale-105"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-48 md:h-64 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                                    {image.title}
                                </h2>
                                <p className="text-gray-600 mt-2 text-sm md:text-base">
                                    {image.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </>
    );
};

export default SecondPage;
