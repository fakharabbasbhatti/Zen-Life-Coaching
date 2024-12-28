import React from 'react';

const TermsPolicy = () => {
  return (
    <div className=" p-8 rounded-lg shadow-lg space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Terms and Policy</h1>
      <p className="text-lg text-gray-600 text-center">
        Please review our Terms and Policies carefully before using our services.
      </p>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Introduction :</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold text-[#ff2359]">[Zen Life Coaching]</span>! These Terms and Policies govern your use of our website. By accessing our website, you agree to these terms. Please read them carefully.
        </p>
      </section>

      {/* Acceptance of Terms */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Acceptance of Terms :</h2>
        <p className="text-gray-700 leading-relaxed">
          By using this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, you must discontinue use immediately.
        </p>
      </section>

      {/* Privacy Policy */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800">Privacy Policy :</h2>
        <p className="text-gray-700">
          At <span className="font-semibold text-[#ff2359]">[Code's Thinker]</span>, your privacy is our priority. This policy explains how we collect, store, and use your data to enhance your experience.
        </p>
      </section>

      {/* Information We Collect */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Information We Collect :</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><span className="font-medium">Personal Information:</span> Name, email address, and contact details.</li>
          <li><span className="font-medium">Usage Data:</span> Browsing behavior, preferences, and interactions.</li>
        </ul>
      </section>

      {/* How We Use Your Data */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Data :</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>To personalize your experience and deliver tailored content.</li>
          <li>To communicate updates, offers, and support services.</li>
          <li>To enhance website functionality and resolve issues.</li>
        </ul>
      </section>

      {/* Data Storage and Security */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Data Storage and Security :</h2>
        <p className="text-gray-700">
          We use advanced encryption and secure storage practices to protect your data. Only authorized personnel have access to your information.
        </p>
      </section>

      {/* Third-Party Services */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Third-Party Services and Cookies :</h2>
        <p className="text-gray-700">
          To provide an optimal experience, we may use third-party services that involve cookies or tracking technologies.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><span className="font-medium">Analytics Tools:</span> To understand user interactions and improve services.</li>
          <li><span className="font-medium">Payment Processors:</span> To ensure secure transactions.</li>
          <li><span className="font-medium">Advertising Platforms:</span> To display relevant content and promotions.</li>
        </ul>
      </section>

      {/* User Responsibilities */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">User Responsibilities :</h2>
        <p className="text-gray-700">
          You agree to use the website in a lawful manner and refrain from activities that could harm or disrupt our services. Prohibited activities include:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Misusing our services or website features.</li>
          <li>Engaging in unlawful activities, such as hacking or fraud.</li>
          <li>Distributing harmful or offensive content.</li>
        </ul>
      </section>

      {/* Intellectual Property Rights */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Intellectual Property Rights :</h2>
        <p className="text-gray-700">
          All content, images, logos, designs, and code on this website are the exclusive <span className="font-semibold text-[#ff2359]">[Zen Life Coaching]</span> and are protected by copyright, trademark, and other intellectual property laws.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Limitation of Liability :</h2>
        <p className="text-gray-700">
          <span className="font-semibold text-[#ff2359]">[Zen Life Coaching]</span> is not liable for any damages or losses arising from the use of this website, including, but not limited to:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Loss of data.</li>
          <li>Service interruptions or downtime.</li>
          <li>Errors or inaccuracies in the content provided.</li>
        </ul>
      </section>

      {/* Third-Party Links */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Third-Party Links :</h2>
        <p className="text-gray-700">
          Our website may contain links to third-party websites. We are not responsible for their content, privacy policies, or practices. We encourage you to review their terms and privacy policies.
        </p>
      </section>

      {/* Modification of Terms */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Modification of Terms :</h2>
        <p className="text-gray-700">
          We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of the website after modifications constitutes your acceptance of the changes.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Contact Information :</h2>
        <p className="text-gray-700">
          For questions or concerns regarding these Terms and Policies, please contact us:
        </p>
        <ul className="text-gray-700">
          <li>Email: <a href="mailto:email@example.com" className="text-blue-500 hover:underline">zenlifecoaching@gmail.com</a></li>
          <li>Phone: +123 456 7890</li>
          <li>Address: 123 Example Street, City, Country</li>
        </ul>
      </section>

      <p className="text-center text-2xl text-black">
        We're Happy to guide you through every step of the process!
      </p>
    </div>
  );
};

export default TermsPolicy;
