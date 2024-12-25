import React from "react";
// React Icons import
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

const CardSecAbout = () => {
  return (
    <>
      {/* FIRST SECTION */}
      <div className="text-center p-8 ">
        <div className="flex items-center justify-center space-x-4 ">
          <img className="w-14 h-14 rounded-full rotate-45" src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__" alt="left" />
          <h2 className="text-4xl font-bold text-black">Meet Our Expert Coaches</h2>
          <img className="w-14 h-14 rounded-full -rotate-45" src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__" alt="right" />
        </div>
      </div>


      {/* SECOND SECTION */}
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {/* Card 1 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] bg-white hover:bg-gray-200 shadow-lg rounded-lg p-4 flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300">
          <img
            src="https://s3-alpha-sig.figma.com/img/410c/340a/a057242400c608368f918307cdd72438?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OfpjyLPOnyWB3GL1xLMeHag3jj70GibHy3Ae~4s~Yuu0nps2Dxr8wE5RTDNLJQvuG5jMlJGc7ej4cJ3wQlZJI5RWuU6iLyaEVDh0jzovt5DzJRDySjrIt5oPU6ZIxS6YxjHYuAT914647cTAWf70~wTS8eek9XWURZdPwXf3hjMKUYQfRlWW9fY0SbJdUOvWN2HCYOWYBSBXEGr3XEYl73LKStkczm5ail1P7~SWqsRy767mEkeQWYozM~NKFiyB2HynrQRwy2kQWGjdl9YAGQVTovayjfANKxmf3MWTrVGq7WA5C8tM0rRnBvqZnbMjToiCD6P8mDgNiy4HV7V7fw__"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 transition-transform hover:scale-110 ease-in-out duration-300"
          />
          <h2 className="text-xl font-bold mb-2">Mindfulness Expert</h2>
          <p className="text-gray-600 mb-4">Life Strategy Coach</p>
          <div className="flex gap-4 mb-2">
            <CiLinkedin className="text-blue-600 text-2xl transition-transform hover:scale-125 ease-in-out duration-300" />
            <FaFacebook className="text-blue-400 text-2xl transition-transform hover:scale-125 ease-in-out duration-300" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] bg-white hover:bg-gray-200 shadow-lg rounded-lg p-4 flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300">
          <img
            src="https://s3-alpha-sig.figma.com/img/f578/f9c2/a181ef669150341163e63e6e9da01878?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dQuv907JKAp65kChOzUAxwEv1YeSQbIdyUfiJqLHHl0QJ9dq4N61BfhctFpJxiAqGG5g9tj48zIbf7uHe-T3F7K0UDLAaqKeiddX1x3u6rrS9gLo4zMVjGYm8uBlkB1lBxCGR6HHoZf1q9n53V3UYKIj54P56pZOA2-zZQNGrqTKV7AaCeHR7T4PK0UMHprOpN0wFaf~f0qlQS4Kiebr~JTC~lrmLrIoXqk6KtDTzluOby87RRc7lrRgHIsEdrlnBmuBx8lqDRBhgwAJGEGexM06B~sbIccbQgwVluHiikfZMvw6BlWqX8Qurl~hpW7FOK8xGEUBjNXCQ55rxOhvnQ__"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 transition-transform hover:scale-110 ease-in-out duration-300"
          />
          <h2 className="text-xl font-bold mb-2">Sarah Johnson</h2>
          <p className="text-gray-600 mb-4">Mindfulness Expert</p>
          <div className="flex gap-4 mb-2">
            <CiLinkedin className="text-blue-600 text-2xl transition-transform hover:scale-125 ease-in-out duration-300" />
            <FaFacebook className="text-blue-400 text-2xl transition-transform hover:scale-125 ease-in-out duration-300" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full sm:w-[48%] lg:w-[30%] bg-white hover:bg-gray-200 shadow-lg rounded-lg p-4 flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-2xl ease-in-out duration-300">
          <img
            src="https://s3-alpha-sig.figma.com/img/1d5a/d8aa/f12fd61a75197f707f6ef40c7edd6e1f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PosV6XqYF5gW61ql4ousa~DjXdmWY~W9O-yLOskGqdTmGCvSf1hnVLi4FZb1ZYyHbrYRviBCswYx4neAvjKK8NJ2zFTUshnbhiVkn9gB0tdBx3XxAkA2g8XDEJhvYQTYJlSQqxjoNLmdydE~8KtT3oCMNc4Jk83fc~XXRCXozAF56fmJDuToCf~dIqsEWJrIklhtaLw1abBeZylPDSA7qv~e3u2MiYKlwziUzEbboM6~OSP6~-2P3fUm7fEKJBDCXDJQU~n54S4eiZLuTjEyknjVeABXKi~M2rl0cGQbaNjXBhbNtuI1KI1Zo~hZIRmFqth1YjirIWLxGQImdBPkCg__"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 transition-transform hover:scale-110 ease-in-out duration-300"
          />
          <h2 className="text-xl font-bold mb-2">Emma Davis</h2>
          <p className="text-gray-600 mb-4">Wellness Coach</p>
          <div className="flex gap-4 mb-2">
            <CiLinkedin className="text-blue-600 text-2xl transition-transform hover:scale-125 ease-in-out duration-300" />
            <FaFacebook className="text-blue-400 text-2xl transition-transform hover:scale-125 ease-in-out duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSecAbout;
