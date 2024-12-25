import React from 'react'
import heroportfolio from "../../assets/profile.jpeg";

const HeroPortfolio = () => {
    return (
        <>
            <div className="flex flex-wrap items-center justify-center h-screen px-10 ">
                {/* Left Side - Content */}
                <div className="w-full md:w-1/2 text-center md:text-left p-6">
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">
                    Hi, I am Fakhar,<br></br>
                    <span className='text-5xl font-bold text-[#ff2359]'>Web Developer</span>
                    </h1>
                    <p className="text-1xl text-gray-600 mb-6">
                    I am Fakhar Bahtti web developer specializes in creating and maintaining websites or web applications. They ensure that websites function properly, are visually appealing, and provide a seamless user experience. Web development includes.
                    </p>
                    <button className="px-6 py-3 font-bold bg-[#FF6464] text-white  hover:bg-[#ff7979] transition">
                    Download Resume
                    </button>
                </div>

                {/* Right Side - Animated Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img
                        src={heroportfolio}
                        alt="Creative Concept"
                        className="rounded-lg shadow-lg transform hover:scale-110 transition duration-500 w-[20rem] h-[20rem]"
                    />
                </div>
            </div>
        </>
    )
}

export default HeroPortfolio;