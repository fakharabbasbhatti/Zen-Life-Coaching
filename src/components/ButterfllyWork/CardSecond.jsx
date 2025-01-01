import React from 'react';
import brtflyblack from '../../assets/butflyblack.png';
import brtflyyelow from '../../assets/butflyyelow.png';
import training from '../../assets/traininggod.avif';
import lifecoaching from '../../assets/lifecoaching.webp';
import therapist from '../../assets/therapist.jpg';

const Card = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-[#D9EC6F] hover:bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="w-16 h-16 mb-4">
        <img className="w-full h-full object-cover rounded-full" src={image} alt={title} />
      </div>
      <h2 className="text-xl font-bold text-center mb-2">{title}</h2>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

const CardSecond = () => {
  return (
    <div>
      <div className="w-24 h-24 mb-4 mx-auto">
        <img
          src={brtflyblack}
          alt="Image"
          className="w-24 h-24 ransform hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
      {/* Center Image Section */}
      <div className="text-center p-8 bottom-20">
        <div className="flex items-center justify-center space-x-4">
          <img className="w-14 h-14 rounded-full rotate-45" src={brtflyyelow} alt="left" />
          <h2 className="text-3xl font-bold">Our Services</h2>
          <img className="w-14 h-14 rounded-full -rotate-45" src={brtflyyelow} alt="right" />
        </div>
        <p className="text-lg text-gray-600 mt-4">"Our mission is to create a world where we can live in harmony with nature."</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        <Card
          image={training} // Replace with actual image URL
          title="Online Training"
          description="Accessible, flexible learning with expert guidance, enhancing skills and knowledge"
        />
        <Card
          image={lifecoaching} // Replace with actual image URL
          title="Life Coaching"
          description="Guiding individuals to achieve personal growth, goals, and mental clarity"
        />
        <Card
          image={therapist} // Replace with actual image URL
          title="Therapist"
          description="Providing support and guidance for emotional healing, mental health improvement"
        />
      </div>
    </div>
  );
};

export default CardSecond;
