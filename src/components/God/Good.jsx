// import React from 'react'

// const Good = () => {

//     const cards = [
//         { id: 1, name: 'Fakhar', age: '21', buttonText: 'Learn More', },
//         { id: 2, name: 'Ali', age: '21', buttonText: 'Learn More', },
//         { id: 3, name: 'Hadi', age: '19', buttonText: 'Learn More', },
//     ]

//     return (
//         <div>
//             {cards.map((item) => (
//                 <div key={item.id} className='flex justify-center items-center flex-col'>
//                     <h1>{item.name}</h1>
//                     <h2>{item.age}</h2>
//                     <h1>{item.buttonText}</h1>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Good;



import React from 'react';

const Good = () => {
    const cards = [
        { id: 1, image: 'https://s3-alpha-sig.figma.com/img/f578/f9c2/a181ef669150341163e63e6e9da01878?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dQuv907JKAp65kChOzUAxwEv1YeSQbIdyUfiJqLHHl0QJ9dq4N61BfhctFpJxiAqGG5g9tj48zIbf7uHe-T3F7K0UDLAaqKeiddX1x3u6rrS9gLo4zMVjGYm8uBlkB1lBxCGR6HHoZf1q9n53V3UYKIj54P56pZOA2-zZQNGrqTKV7AaCeHR7T4PK0UMHprOpN0wFaf~f0qlQS4Kiebr~JTC~lrmLrIoXqk6KtDTzluOby87RRc7lrRgHIsEdrlnBmuBx8lqDRBhgwAJGEGexM06B~sbIccbQgwVluHiikfZMvw6BlWqX8Qurl~hpW7FOK8xGEUBjNXCQ55rxOhvnQ__', name: 'Ayesha', age: '18', buttonText: 'Learn More' },
        { id: 2, image: 'https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D', name: 'Rida', age: '17', buttonText: 'Learn More' },
        { id: 3, image: 'https://media.istockphoto.com/id/2155405825/photo/lonely-sad-girl-sad-teen-girl-on-a-bench-in-the-park-single-girl-outdoor.webp?a=1&b=1&s=612x612&w=0&k=20&c=oyhbfT6SzswW4gvd5XZIXmG9e-Fsi-DBWwvtyjpdurk=', name: 'Noor', age: '19', buttonText: 'Learn More' },
    ];

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-md rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105"
                    >
                        <div className="flex justify-center">
                            <img src={item.image} alt="Card" className="w-32 h-32 object-cover rounded-full" />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">{item.name}</h1>
                        <h2 className="text-lg text-gray-600  font-semibold">Age: {item.age}</h2>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            {item.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Good;
