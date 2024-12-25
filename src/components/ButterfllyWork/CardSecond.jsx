import React from 'react';

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
          src="https://s3-alpha-sig.figma.com/img/1110/ff0d/3fda0583e2066aef8f4106c5378256aa?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bHr1Q9QxrI2NN-LBfKahFDwO8Qr5wXbwuu95-duOjXlaw9~ZIxIuwcpEN3~CbfqGgKd2YwXukbY4qSlwKx0yrdXeJsR6m7KdFroUsjL2XRxca2pOfaPmSpa4AbtwTj5wDuE58og74k6dzHcWf86fLyfhkeR-JvhKkYKpWO1DOX0gnihrF3kAhUtJWxt8cFMuaes7OVXy6q38dSHNdI2j41ck6lmsTRup38xR9zkiTRTW-suXLYZ1poomRbWzaA1~c2ZNtmu5rQlpjPh3oJCzVCuCjMm89Gkgmc-YTFVkNIRqFbsKqFeU6CE2Yqr7u43iXfRqq-QyWz2JtjeFz1JapA__"
          alt="Image"
          className="w-24 h-24 ransform hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
      {/* Center Image Section */}
      <div className="text-center p-8 bottom-20">
        <div className="flex items-center justify-center space-x-4">
          <img className="w-14 h-14 rounded-full rotate-45" src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__" alt="left" />
          <h2 className="text-3xl font-bold">Our Services</h2>
          <img className="w-14 h-14 rounded-full -rotate-45" src="https://s3-alpha-sig.figma.com/img/4e6a/eadb/238ecd8253d5f07ff3b13f70d9f9a683?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGfC8cKZVS5f0uAUOv2SZ90ug5VXncwWnqyIMJNcl-i~Av1Xhk40xhwTX~Y01bzVt4pPglxmCy62aMW9LmDM9HLdWK~UjAqVbUkfh1HsQ9JRiQFYl9NJZs4ZxIeAzjp2EltKA1EBfgb73yxtAATeCOveesllq3J4GCzmdmR1ImnNvY0xMITosuZG3AkA~hhodOr5aqy~Wy5N9YhQH0hryw~3HJ366oloUazIOczQ3znkj9WPD2jGOMaD-IvmdVC4kMyFEFlrrnWnQjAAJpmM17WUEaP4~d4sGug~eshRlx0ms58BPDyvzlBAO~AqrzBbVUYIlbMzYqDKOCtHHCIjIQ__" alt="right" />
        </div>
        <p className="text-lg text-gray-600 mt-4">"Our mission is to create a world where we can live in harmony with nature."</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        <Card
          image="https://plus.unsplash.com/premium_photo-1667509249132-81954ee9a1be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE9ubGluZSUyMFRyYWluaW5nfGVufDB8fDB8fHww" // Replace with actual image URL
          title="Online Training"
          description="Accessible, flexible learning with expert guidance, enhancing skills and knowledge"
        />
        <Card
          image="https://media.istockphoto.com/id/2158692323/photo/asian-woman-doing-live-stream-on-online-platform.webp?a=1&b=1&s=612x612&w=0&k=20&c=EHGbLnhi1zFRC-17lPGmxulpV8sgJokp12g3Q5TGvik=" // Replace with actual image URL
          title="Life Coaching"
          description="Guiding individuals to achieve personal growth, goals, and mental clarity"
        />
        <Card
          image="https://media.istockphoto.com/id/1988528199/photo/young-female-psychologist-looking-at-camera-with-her-notebook-and-a-pen.jpg?s=612x612&w=0&k=20&c=mYbWOll9ijfAd8mNcBT753JMrszMbv1JbL523kgiiNI=" // Replace with actual image URL
          title="Therapist"
          description="Providing support and guidance for emotional healing, mental health improvement"
        />
      </div>
    </div>
  );
};

export default CardSecond;
