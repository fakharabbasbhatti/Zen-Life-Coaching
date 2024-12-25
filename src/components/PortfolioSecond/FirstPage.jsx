import React from 'react'
import firstpage from "../../assets/firstpage.png";


const FirstPage = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10 max-w-6xl mx-auto">
                {/* Text Content */}
                <div className="text-center md:text-left md:w-1/2 space-y-6">
                    <h1 className="text-lg text-gray-600">Branding | Image making </h1>
                    <h1 className="text-7xl font-bold text-gray-800">
                        Visual Designer
                    </h1>
                    <p className="text-3xl text-gray-600">
                        This is a template Figma file, turned into code using Anima.
                        Learn more at AnimaApp.com
                    </p>
                    <button className="bg-[#2D2D2D] text-white py-3 px-8 rounded-md shadow hover:bg-gray-600 transition">
                        Contact
                    </button>
                </div>

                {/* Image */}
                <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
                    <img
                        src={firstpage}
                        alt="Example"
                        className="w-full max-w-sm rounded-lg"
                    />
                </div>
            </div>
        </>
    )
}

export default FirstPage;