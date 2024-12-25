import React from 'react'

const CardThird = () => {
  return (
    <>
      <div className="w-24 h-24 mb-4 mx-auto">
        <img
          src="https://s3-alpha-sig.figma.com/img/1110/ff0d/3fda0583e2066aef8f4106c5378256aa?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bHr1Q9QxrI2NN-LBfKahFDwO8Qr5wXbwuu95-duOjXlaw9~ZIxIuwcpEN3~CbfqGgKd2YwXukbY4qSlwKx0yrdXeJsR6m7KdFroUsjL2XRxca2pOfaPmSpa4AbtwTj5wDuE58og74k6dzHcWf86fLyfhkeR-JvhKkYKpWO1DOX0gnihrF3kAhUtJWxt8cFMuaes7OVXy6q38dSHNdI2j41ck6lmsTRup38xR9zkiTRTW-suXLYZ1poomRbWzaA1~c2ZNtmu5rQlpjPh3oJCzVCuCjMm89Gkgmc-YTFVkNIRqFbsKqFeU6CE2Yqr7u43iXfRqq-QyWz2JtjeFz1JapA__"
          alt="Image"
          className="w-24 h-24 ransform hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>


      <div className="flex mx-5 rounded-lg flex-col md:flex-row items-center justify-start bg-[#D9EC6F] space-y-4 md:space-y-0 md:space-x-4 ">
        {/* Left side image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/d750/0d2b/64fa43613f7d20cbe78ab977ef025fd6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GF2d9SS2u-JJY6ksTGlXGzt8qDR4TCU43OuY~-PbjyHIXLKCPI1wv-9O5jv5o88a2fUepJL~Q6qlMlFiN6dCtQ3~iBtEa2g4FWrThocmKxh4py03zLJKqoUN3oGlyXYdoDI1u-Ox9OceUkwSkep0NbMgZCdJ397EtbyJxtqeP9mb2mi~9A5KntlUOIftq-dYXUuQQsevtXGE0h~Z-yZE9C1ifRzUc8crh1S9v3oprGx~Xt9A0n0jlUuWks3if2cO32HFSscy8dpqduHh0~k708KV6pi26c7L0NfOmsKtcYwVQs0HIBQUfkT8BXRRxAORb1rafVD8lVc3udZDoaZCOg__"
            alt="Zen Life Coaching"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Right side text */}
        <div className="p-4 md:p-7 text-center md:text-left w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">About Zen Life Coaching</h2>
          <p className="text-[#666A52] text-sm sm:text-lg leading-relaxed">
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
