import React from 'react'
 import cardImage1 from "../../assets/cardfot1.png";
 import cardImage2 from "../../assets/cardfot2.png";
 import cardImage3 from "../../assets/cardfot3.png";

const FourCard = () => {

     const cardFooter = [
         { image: cardImage1, title: "Our Consultants", description: "Unparalleled Expertise" },
         { image: cardImage2, title: "Proven Track Record", description: "Collaborative Approach" },
         { image: cardImage3, title: "Trusted Advisors", description: "Transformative Impact" },
     ];
  return (
    <div>

 <div className="py-12 px-6">
                {/* Heading and Description */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">Let's Discuss Your Goals</h1>
                    <p className="text-lg text-gray-600">At our consulting firm, we're passionate about empowering businesses like yours to reach new heights. We'd love <br></br>the opportunity to learn more about your unique challenges and explore how our comprehensive consulting servi</p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {cardFooter.map((card, index) => (
                        <div
                            key={index}
                            className=" p-6  hover:shadow-lg transition"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-80 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                            <p className="text-gray-600">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>


    </div>
  )
}

export default FourCard