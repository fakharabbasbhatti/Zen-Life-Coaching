import React from "react";
import { GiThreeLeaves } from "react-icons/gi";
import { PiGlobeStandFill } from "react-icons/pi";
import { BsQuestionOctagonFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

// Reusable Card Component
const Card = ({ icon, title, subtitle, price, features, buttonText }) => {
  return (
 <div className="bg-[#D9EC6F] hover:bg-white hover:border-blue-500 border rounded-lg shadow-md p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
      {/* Center Icon */}
      <div className="flex items-center justify-center w-16 h-16  text-white hover:text-[#dff36d] bg-blue-500 hover:bg-[#ff2359] rounded-full mb-4">
        <span className="text-2xl">{icon}</span>
      </div>

      {/* Headings */}
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <h3 className="text-gray-800 mb-2">{subtitle}</h3>
      <p className=" text-3xl font-bold mb-4">
        {price}<span className="text-sm text-gray-900">/mo</span>
      </p>

      {/* Features (Icons + Headings) */}
      <div className="grid grid-cols-1 gap-2 mb-4 self-start w-full">
  {features.map((feature, index) => (
    <div key={index} className="flex items-center space-x-3">
      <span className="text-green-700 text-lg">
        <TiTick />
      </span>
      <span className="text-gray-900">{feature.heading}</span>
    </div>
  ))}
</div>


      {/* Button */}
      <button className="bg-[#581C87] text-white px-32 py-2 rounded-lg hover:bg-blue-600 transition">
        {buttonText}
      </button>
    </div>

  );
};

// Main Component
function CardGetStarted() {
  return (
    <>
    {/* FIRST SECTION */}
    <div className="text-center p-8">
        <div className="flex items-center justify-center space-x-4">
          <img className="w-14 h-14 rounded-full rotate-45" src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__" alt="left" />
          <h2 className="text-3xl font-bold">Choose Your Zen Journey</h2>
          <img className="w-14 h-14 rounded-full -rotate-45" src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__" alt="right" />
        </div>
        <p className="text-lg text-gray-600 mt-4">"Select the perfect plan to guide you on your path to inner peace"</p>
      </div>

      {/* SECOND SECTION */}
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <Card
          icon={<GiThreeLeaves />}
          title="Basic"
          subtitle="Begin Your Journey"
          price="$49"
          features={[
            { heading: "2 Monthly Sessions" },
            { heading: "Email Support" },
            { heading: "Basic Meditation Guide" },
          ]}
          buttonText="Get Started"
        />

        {/* Card 2 */}
        <Card
          icon={<PiGlobeStandFill />}
          title="Standard"
          subtitle="Deepen Your Practice"
          price="$99"
          features={[
            { heading: "4 Monthly Sessions" },
            { heading: "Priority Email Support" },
            { heading: "Advanced Meditation Guide" },
            { heading: "Weekly Group Sessions" },
          ]}
          buttonText="Get Started"
        />

        {/* Card 3 */}
        <Card
          icon={<BsQuestionOctagonFill />}
          title="Premium"
          subtitle="Transform Your Life"
          price="$199"
          features={[
            { heading: "8 Monthly Sessions" },
            { heading: "24/7 Direct Support" },
            { heading: "Personalized Meditation Plan" },
            { heading: "1-on-1 Intensive Retreats" },
            { heading: "Lifestyle Consultation" },
          ]}
          buttonText="Get Started"
        />
      </div>
    </div>
    {/* <button className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition mx-auto">
          Back
        </button> */}
    </>
  );
}

export default CardGetStarted;
