import React from 'react'
import brtflyblack from '../../assets/butflyblack.png';
import bterflydiscus from '../../assets/bterflydiscus.jpg';


const CardThird = () => {
  return (
    <>
      <div className="w-24 h-24 mb-4 mx-auto">
        <img
          src={brtflyblack}
          alt="Image"
          className="w-24 h-24 ransform hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>


      <div className="flex mx-5 rounded-lg flex-col md:flex-row items-center justify-start bg-[#D9EC6F] space-y-4 md:space-y-0 md:space-x-4 ">
        {/* Left side image */}
        <div className="w-full md:w-1/2">
          <img
            src={bterflydiscus}
            alt="Zen Life Coaching"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right side text */}
        <div className="p-4 md:p-7 text-center md:text-left w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">About Zen Life Coaching</h2>
          <p className="text-[#666A52] text-justify text-sm sm:text-lg leading-relaxed">
            Welcome to Zen Life Coaching, your partner in personal growth, professional development, and holistic well-being.
            At Zen Life Coaching, we believe that every individual has the potential to lead a balanced, purposeful, and fulfilling life.
            Our approach combines modern coaching techniques with timeless principles of mindfulness and self-awareness to guide you on a transformative journey.
            Whether you're looking to overcome challenges, achieve ambitious goals, or find clarity and peace, our tailored coaching programs are designed to empower you every step of the way.
          </p>
        </div>
      </div>
  

    </>
  )
}

export default CardThird;
