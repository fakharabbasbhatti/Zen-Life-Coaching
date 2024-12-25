import React from 'react'

const BlogPortfolio = () => {
  return (
    <div>
         <div className="py-10" id="blog">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Latest Blog Posts</h1>
        <p className="text-lg text-gray-600">Check out the latest insights and stories from our blog.</p>
      </div>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
          <img src="https://media.istockphoto.com/id/1979289147/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=IIZaVsQl6mMcOPgyPrVm8ZlCSBwKdwWju4TTnM7BM4Q=" alt="Blog 1" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h2 className="text-xl font-semibold mb-2">web Development</h2>
          <p className="text-gray-600">Web development involves building and maintaining websites. It includes tasks such as web design, coding, and ensuring a website's functionality across different devices. Popular technologies include HTML, CSS, JavaScript.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
          <img src="https://media.istockphoto.com/id/2035914580/photo/professional-woman-analyzing-data-on-tablet-at-work-desk.jpg?s=612x612&w=0&k=20&c=uxzpep4tT1Qq7IsYb5BjunLbJF2W7Ui-NrhSjbW1slE=" alt="Blog 2" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
          <h2 className="text-xl font-semibold mb-2">Content Marketing Strategies</h2>
          <p className="text-gray-600">Marketing is the process of promoting and selling products or services, including market research and advertising. It involves strategies such as digital marketing, branding, content creation, and customer engagement to increase.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
          <img src="https://media.istockphoto.com/id/2094691380/photo/female-and-male-caucasian-developers-working-on-a-computer-at-the-open-space-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=7SqX4509XQJ9WHfOP_URVENcm8LXr6YO1WDCFaV-IQY=" alt="Blog 3" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h2 className="text-xl font-semibold mb-2">SEO Optimization Tips</h2>
          <p className="text-gray-600">A Best involves enhancing a website’s content, structure, and technical aspects to improve its visibility on search engines like Google. Techniques include keyword research, on-page optimization meta tags, headings, etc.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
          <img src="https://media.istockphoto.com/id/2098359215/photo/digital-marketing-concept-businessman-using-laptop-with-ads-dashboard-digital-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=bo9P4L3HQM2cipWrh8W7_HwPYNnUdHKqucWnduQLge0=" alt="Blog 2" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h2 className="text-xl font-semibold mb-2">Understanding Web Design</h2>
          <p className="text-gray-600">Web design involves creating the layout, structure, and visual elements of a website. It includes aspects like usability, aesthetic appeal, navigation, content arrangement, very good.</p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
          <img src="https://media.istockphoto.com/id/1047699430/photo/overhead-view-on-business-people-around-desk.webp?a=1&b=1&s=612x612&w=0&k=20&c=9NbGDTEuOyRwtUOpaaQtuRtYKjwrn4lq94rHltH_xO4=" alt="Blog 5" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h2 className="text-xl font-semibold mb-2">Email Marketing for Beginners</h2>
          <p className="text-gray-600">Email marketing for beginners involves sending targeted emails to a list of subscribers. It focuses on crafting engaging content, building an email list, and analyzing open rates us.</p>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
          <img src="https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=FbH7i1I3oCXoRfZKFvGj3jMXnsljD8mPmDmvY4IxQuA=" alt="Blog 6" className="w-full h-48 object-cover rounded-t-lg mb-4" />
          <h2 className="text-xl font-semibold mb-2">Social Media Growth Tips</h2>
          <p className="text-gray-600">Boost your social media growth by posting consistently, using engaging visuals, interacting with your audience, leveraging trending hashtags, collaborating with influencers.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default BlogPortfolio;