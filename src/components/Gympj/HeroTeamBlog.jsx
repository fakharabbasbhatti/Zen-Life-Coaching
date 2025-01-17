import React from "react";
import fakhar from "../../assets/profile.jpeg";
import bfirst from "../../assets/b1.jpg";
import bsec from "../../assets/b2.jpg";
import bthird from "../../assets/b3.jpg";
import bfour from "../../assets/b4.jpg";
import bfive from "../../assets/b5.jpg";
import bsix from "../../assets/b6.jpg";

const HeroTeamBlog = () => {
  const cards = [
    {
      mainImage: bfirst,
      smallImage: fakhar,
      name: "my Admin",
      date: "Dec 25, 2024",
      course: "Joga",
      title: "Yoga For Everyone in 2022",
      description: "Discover how yoga practices can transform your physical and mental health. Embrace the power of mindfulness and flexibility through guided exercises suitable for all experience levels.",
    },
    {
      mainImage: bsec,
      smallImage: fakhar,
      name: "my Admin",
      date: "Dec 20, 2024",
      course: "Crossfit",
      title: "Getting Back Into CrossFit ",
      description: "Reignite your CrossFit journey with tips to regain strength and motivation post-vacation. Explore effective routines to ease back into training while avoiding injuries.",
    },
    {
      mainImage: bthird,
      smallImage: fakhar,
      name: "my Admin",
      date: "Dec 25, 2024",
      course: "Fitness",
      title: "Meet Fitness Ambassador Grace",
      description: "Learn about Grace's inspiring fitness journey and her mission to empower others. Explore her tips on staying consistent and overcoming challenges in the fitness world.",
    },
    {
      mainImage: bfour,
      smallImage: fakhar,
      name: "my Admin",
      date: "Dec 20, 2024",
      course: "Meditation",
      title: "The Best Are European ",
      description: "Dive into the benefits of European meditation techniques. Discover tools to enhance relaxation and mindfulness for a more balanced and fulfilling lifestyle.",
    },
    {
      mainImage: bfive,
      smallImage: fakhar,
      name: "my Admin",
      date: "Dec 25, 2024",
      course: "Boxing",
      title: "Fitness a Boost with our Gym",
      description: "Boost your fitness with our boxing programs. Learn the fundamentals of boxing for strength, endurance, and mental focus in a supportive gym environment.",
    },
    {
      mainImage: bsix,
      smallImage: fakhar,
      name: "my Admin",
      date: "Dec 20, 2024",
      course: "Equipment",
      title: "Choose the Right Equipment",
      description: "Make informed choices about fitness equipment for optimal performance. Understand the essentials for your workout goals, whether for strength, endurance, or mobility.",
    },
  ];

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">HeroTeam Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Main Picture */}
            <img
              src={card.mainImage}
              alt="Main"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              {/* Small Picture and Info */}
              <div className="flex items-center mb-4">
                <img
                  src={card.smallImage}
                  alt="Small"
                  className="w-12 h-12 rounded-md mr-3"
                />
                <div className="flex items-center space-x-4 divide-x divide-gray-300">
                  <h4 className="font-semibold text-gray-700 pr-4">
                    {card.name}
                  </h4>
                  <p className="text-sm text-gray-500 pl-4 pr-4">
                    {card.date}
                  </p>
                  <p className="text-sm text-gray-500 hover:text-[#ff2359] pl-4">
                    {card.course}
                  </p>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 hover:text-[#ff2359]">
                {card.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroTeamBlog;
