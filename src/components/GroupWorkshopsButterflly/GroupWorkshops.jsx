import React from "react";

const workshops = [
  {
    id: 1,
    title: "Leadership Workshop",
    description: "Develop strong leadership skills and inspire your team effectively.",
    image:"https://media.istockphoto.com/id/953656152/photo/executive-mentor-explaining-young-intern-or-new-employee-online-task.jpg?s=612x612&w=0&k=20&c=LtQaYxsAhDvgCVyL5PMrPO_5FpqOqKloClMOVx4gzxI=",
    link: "/workshop/leadership",
    progress: 80, // Progress bar value
    progressColor: "bg-purple-600", // Progress bar color
  },
  {
    id: 2,
    title: "Team Building Workshop",
    description: "Enhance collaboration and build stronger team dynamics.",
    image: "https://images.pexels.com/photos/14382529/pexels-photo-14382529.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/workshop/teambuilding",
    progress: 70,
    progressColor: "bg-green-600",
  },
  {
    id: 3,
    title: "Communication Skills",
    description: "Master the art of communication in professional settings.",
    image: "https://media.istockphoto.com/id/1308494001/photo/business-woman-present-her-idea-to-working-team-business-colleagues-talking-about-plan-or-new.webp?a=1&b=1&s=612x612&w=0&k=20&c=-muWKEI6agF64V2QM-raVg-MH30-yhpycLwsA_E9WxU=",
    link: "/workshop/communication",
    progress: 60,
    progressColor: "bg-blue-600",
  },
  {
    id: 4,
    title: "Conflict Resolution",
    description: "Learn techniques to resolve conflicts and maintain harmony.",
    image: "https://images.pexels.com/photos/7579174/pexels-photo-7579174.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/workshop/conflictresolution",
    progress: 50,
    progressColor: "bg-red-600",
  },
  // New workshops added
  {
    id: 5,
    title: "Time Management",
    description: "Learn how to manage your time effectively and increase productivity.",
    image: "https://media.istockphoto.com/id/1098407382/photo/business-concepts-with-businessman-holding-clock-on-computer-laptop-for-investment-analysis.webp?a=1&b=1&s=612x612&w=0&k=20&c=bSyPnQSYeC6uyCl5AFn8yOb0W01a4NojlBJtAWHFKS0=",
    link: "/workshop/timemanagement",
    progress: 90,
    progressColor: "bg-orange-600",
  },
  {
    id: 6,
    title: "Emotional Intelligence",
    description: "Understand and improve your emotional intelligence for personal growth.",
    image: "https://media.istockphoto.com/id/2162042860/photo/woman-engaging-with-group-in-therapy-session.webp?a=1&b=1&s=612x612&w=0&k=20&c=uU_ej0-Zhlde4lL1A0spDkROSWRMHf7VepCbzThHEPQ=",
    link: "/workshop/emotionalintelligence",
    progress: 75,
    progressColor: "bg-teal-600",
  },
  {
    id: 7,
    title: "Public Speaking",
    description: "Become a confident public speaker and overcome the fear of speaking.",
    image: "https://images.pexels.com/photos/3182762/pexels-photo-3182762.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/workshop/publicspeaking",
    progress: 85,
    progressColor: "bg-yellow-600",
  },
  {
    id: 8,
    title: "Critical Thinking",
    description: "Develop your critical thinking skills to make better decisions to a good.",
    image: "https://images.unsplash.com/photo-1589571731452-5ce34741b171?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENyaXRpY2FsJTIwVGhpbmtpbmd8ZW58MHx8MHx8fDA%3D",
    link: "/workshop/criticalthinking",
    progress: 65,
    progressColor: "bg-indigo-600",
  },
];

const GroupWorkshops = () => {
  return (
    <div className="py-12 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Group Workshops</h2>
        <p className="mt-4 text-gray-600">
          Discover our expertly designed workshops to enhance team skills and individual growth.
        </p>
      </div>

      {/* Workshop Cards */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              {/* Image */}
              <img
                src={workshop.image}
                alt={workshop.title}
                className="w-full h-48 object-cover"
              />
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800">{workshop.title}</h3>
                <p className="mt-2 text-gray-600">{workshop.description}</p>
                {/* <a
                  href={workshop.link}
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition-colors"
                >
                  Learn More
                </a> */}
              </div>

              {/* Progress Bar */}
              <div className="p-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="font-semibold text-sm text-gray-600">{workshop.progress}%</span>
                    </div>
                  </div>
                  <div className="flex mb-2">
                    <div className="w-full bg-gray-200 rounded-full">
                      <div
                        className={`h-2 rounded-full ${workshop.progressColor}`}
                        style={{ width: `${workshop.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupWorkshops;
