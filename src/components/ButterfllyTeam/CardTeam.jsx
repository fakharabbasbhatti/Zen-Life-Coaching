import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import an icon from react-icons
import { Link } from 'react-router-dom';
export const cards = [
  {
    image: 'https://s3-alpha-sig.figma.com/img/410c/340a/a057242400c608368f918307cdd72438?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfpjyLPOnyWB3GL1xLMeHag3jj70GibHy3Ae~4s~Yuu0nps2Dxr8wE5RTDNLJQvuG5jMlJGc7ej4cJ3wQlZJI5RWuU6iLyaEVDh0jzovt5DzJRDySjrIt5oPU6ZIxS6YxjHYuAT914647cTAWf70~wTS8eek9XWURZdPwXf3hjMKUYQfRlWW9fY0SbJdUOvWN2HCYOWYBSBXEGr3XEYl73LKStkczm5ail1P7~SWqsRy767mEkeQWYozM~NKFiyB2HynrQRwy2kQWGjdl9YAGQVTovayjfANKxmf3MWTrVGq7WA5C8tM0rRnBvqZnbMjToiCD6P8mDgNiy4HV7V7fw__',
    heading: 'Dr. Michael Chen',
    title: 'Mindfulness Therapist',
    description: 'Expert in mindfulness-based stress reduction and cognitive behavioral therapy.',
    buttonText: 'Learn More',
    link: 'Michael',
    intro: 'Introdction :',
    introdction: "Dr. Michael Chen is a renowned Mindfulness Therapist with extensive experience in mental health and wellness. Specializing in mindfulness-based stress reduction and cognitive behavioral therapy, he helps clients overcome anxiety, depression, and emotional challenges. Dr. Chen is known for his compassionate approach, combining evidence-based practices with personalized strategies to promote mental clarity and resilience. He empowers individuals to lead balanced, mindful lives through self-awareness and positive change. With a background in psychology and mindfulness training, Dr. Chen is a trusted expert in improving mental well-being, guiding his clients toward greater self-discovery, emotional healing, and sustainable stress management techniques.",
    Exper: 'Experience :',
    Experience: ' Dr. Chen combines mindfulness techniques with traditional therapeutic methods, providing a balanced and effective approach to mental health. He has worked with clients across various age groups, offering personalized treatment plans tailored to individual needs. His expertise includes mindfulness-based stress reduction (MBSR), deep relaxation practices, and emotional regulation strategies. Dr. Chen is passionate about empowering clients to regain control over their mental well-being. His approach emphasizes long-term healing and sustainable mental health practices. Clients appreciate his compassionate, patient-centered approach, which fosters a safe and supportive environment for healing.',
    special: 'Specialization :',
    specialization: 'A Mindfulness Therapist specializes in integrating mindfulness practices with traditional therapeutic techniques to promote emotional well-being and mental health. This approach focuses on cultivating awareness and presence in the moment to help individuals manage stress, anxiety, depression, and other emotional challenges. By teaching mindfulness meditation, breathing exercises, and body awareness, the therapist guides clients to develop greater emotional regulation and resilience. The therapist may use techniques like Mindfulness-Based Stress Reduction (MBSR) and Cognitive Behavioral Therapy (CBT) to address a wide range of psychological issues, ultimately empowering clients to live a more balanced and mindful life.',
    button: 'Back',
    id: 1
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/f578/f9c2/a181ef669150341163e63e6e9da01878?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dQuv907JKAp65kChOzUAxwEv1YeSQbIdyUfiJqLHHl0QJ9dq4N61BfhctFpJxiAqGG5g9tj48zIbf7uHe-T3F7K0UDLAaqKeiddX1x3u6rrS9gLo4zMVjGYm8uBlkB1lBxCGR6HHoZf1q9n53V3UYKIj54P56pZOA2-zZQNGrqTKV7AaCeHR7T4PK0UMHprOpN0wFaf~f0qlQS4Kiebr~JTC~lrmLrIoXqk6KtDTzluOby87RRc7lrRgHIsEdrlnBmuBx8lqDRBhgwAJGEGexM06B~sbIccbQgwVluHiikfZMvw6BlWqX8Qurl~hpW7FOK8xGEUBjNXCQ55rxOhvnQ__',
    heading: 'Sarah Johnson',
    title: 'Senior Life Coach',
    description: '15+ years of experience in a good us a are transformational 15+ years of experience in transformational personal growth.',
    buttonText: 'Learn More',
    link: 'Sarah',
    intro: 'Introdction :',
    introdction: 'Sarah Johnson is a Senior Life Coach with over 15 years of experience in the field of personal development. She specializes in transformational coaching, helping individuals unlock their full potential and overcome life’s challenges. With a focus on self-discovery, emotional well-being, and goal achievement, Sarah uses proven techniques to guide her clients toward success. Her expertise includes career coaching, stress management, and relationship guidance, empowering her clients to lead more fulfilling and balanced lives. Sarah’s empathetic approach and deep understanding of human behavior make her a trusted guide for those seeking meaningful transformation in their personal and professional lives.',
    Exper: 'Experience :',
    Experience: ' She specializes in helping individuals overcome mental and emotional obstacles, fostering self-confidence, and achieving their life goals. With a compassionate approach, Sarah provides guidance on career transitions, relationship challenges, and self-improvement. She is skilled in various coaching methods, including cognitive behavioral techniques and mindfulness practices. Sarah’s clients benefit from her deep understanding of human behavior and her ability to create customized strategies for personal growth. Her holistic approach integrates mental, emotional, and spiritual well-being. Sarah is committed to empowering individuals to unlock their full potential. Her transformative coaching has made a lasting impact on countless lives.',
    special: 'Specialization :',
    specialization: 'A Senior Life Coach specializes in guiding individuals through the challenges and transitions associated with aging. With a deep understanding of the unique life experiences and goals of seniors, they provide support in areas such as career transitions, retirement planning, personal growth, and relationships. They help clients rediscover purpose, set achievable goals, and create fulfilling plans for the next phase of their life. Through one-on-one coaching sessions, a Senior Life Coach helps clients improve their mental, emotional, and physical well-being, fostering a sense of empowerment and encouraging them to embrace this stage with confidence and clarity.',
    button: 'Back',
    id: 2

  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/1d5a/d8aa/f12fd61a75197f707f6ef40c7edd6e1f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PosV6XqYF5gW61ql4ousa~DjXdmWY~W9O-yLOskGqdTmGCvSf1hnVLi4FZb1ZYyHbrYRviBCswYx4neAvjKK8NJ2zFTUshnbhiVkn9gB0tdBx3XxAkA2g8XDEJhvYQTYJlSQqxjoNLmdydE~8KtT3oCMNc4Jk83fc~XXRCXozAF56fmJDuToCf~dIqsEWJrIklhtaLw1abBeZylPDSA7qv~e3u2MiYKlwziUzEbboM6~OSP6~-2P3fUm7fEKJBDCXDJQU~n54S4eiZLuTjEyknjVeABXKi~M2rl0cGQbaNjXBhbNtuI1KI1Zo~hZIRmFqth1YjirIWLxGQImdBPkCg__',
    heading: 'Emma Rodriguez',
    title: 'Wellness Coach',
    description: 'Certified wellness expert specializing in holistic health and lifestyle is a very transformation..',
    buttonText: 'Learn More',
    link: 'Emma',
    intro: 'Introdction :',
    introdction: 'Emma Rodriguez is a certified Wellness Coach dedicated to helping individuals achieve holistic health and balanced lifestyles. With years of experience in wellness coaching, she specializes in guiding clients through lifestyle transformations, focusing on physical health, mental well-being, and emotional resilience. Emma combines evidence-based practices with a personalized approach, empowering her clients to set achievable goals and build sustainable habits. Her expertise includes nutrition guidance, stress management, and fostering self-care routines. Known for her empathetic and motivational coaching style, Emma inspires positive change, helping her clients lead fulfilling lives by aligning their daily habits with their long-term wellness aspirations.',
    Exper: 'Experience :',
    Experience: 'Emma Rodriguez brings over a decade of experience as a certified wellness coach. She has successfully transformed the lives of hundreds of individuals through holistic health practices. Emma specializes in stress management, mindful nutrition, and personalized fitness routines. With her expertise, she empowers clients to lead healthier, balanced lives. Emma integrates mental health support into wellness programs, focusing on overall well-being. She works with clients of all ages and backgrounds, delivering tailored solutions for unique needs. Her approach combines modern wellness strategies with time-tested traditions. Emma’s passion is helping people achieve lasting, sustainable health changes.',
    special: 'Specialization :',
    specialization: 'A Wellness Coach specializes in helping individuals achieve optimal health and well-being by addressing all aspects of their life, including physical, mental, and emotional health. They work closely with clients to develop personalized wellness plans that focus on healthy eating, fitness, stress management, and self-care practices. By providing motivation, guidance, and accountability, a Wellness Coach empowers clients to make lasting lifestyle changes and create sustainable habits that improve overall quality of life. With a holistic approach, they aim to balance mind, body, and spirit, helping individuals reach their full potential and lead a healthier, more fulfilling life.',
    button: 'Back',
    id: 3

  },
];

const Cardteam = ({ image, heading, title, description, buttonText, link }) => {
  return (
    <div className="bg-white hover:bg-[#D9EC6F] rounded-lg shadow-lg p-5 w-full sm:w-80 md:w-1/3 lg:w-1/4 m-4 transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
      {/* Image Section */}
      <div className="flex justify-center">
        <img src={image} alt="Card" className="w-32 h-32 object-cover rounded-full" />
      </div>

      {/* Heading, Title, and Description */}
      <h3 className="text-start mt-4 text-2xl font-bold text-[#581C87]">{heading}</h3>
      <h4 className="text-start mt-2 text-lg text-[#9333EA]">{title}</h4>
      <p className="text-start mt-3 text-gray-500">{description}</p>

      {/* Button with Icon */}
      <div className="flex justify-start mt-5">
        <Link to={`/${link}`} className="flex items-center text-blue-500 hover:underline">
          <button className="flex items-center">
            {buttonText} <FaArrowRight className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};


const CardContainer = () => {
  // Data for the cards (can be fetched from an API or local file)

  return (
    <>
      {/* FIRST SECTION */}
      <div className="text-center p-8 bg-[#F5E2AC]">
        <div className="flex items-center justify-center space-x-4 ">
          <img className="w-14 h-14 rounded-full rotate-45" src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__" alt="left" />
          <h2 className="text-3xl font-bold text-[#6B21A8]">Our Expert Team</h2>
          <img className="w-14 h-14 rounded-full -rotate-45" src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__" alt="right" />
        </div>
        <p className="text-lg text-gray-600 mt-4">"Meet our dedicated professionals who are committed to guiding you through your transformational journey"</p>
      </div>

      {/* SECOND SECTION */}
      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Cardteam
            key={index}
            image={card.image}
            heading={card.heading}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            link={card.link}
          />
        ))}

        {/* "View All" Button */}
        <div className="w-full text-center mt-8">
         <Link  to={'/getstarted'} className="px-6 py-2 bg-[#4F56DD] text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors">
            View All
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardContainer;

















