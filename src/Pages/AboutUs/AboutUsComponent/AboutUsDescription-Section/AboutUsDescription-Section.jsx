import React from "react";

const AboutUsDescriptionSection = () => {
  return (
    <div className="container mx-auto mt-10 mb-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column: About Us */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            About Prime Holiday Destinations
          </h1>
          <p className="text-lg text-gray-700">
            Welcome to Prime Holiday Destinations, your gateway to unforgettable travel experiences! We are an outbound tour operator dedicated to providing all-inclusive packages to some of the most exquisite and carefully selected holiday destinations worldwide. Whether you’re seeking adventure, relaxation, or cultural immersion, our expertly crafted itineraries promise to deliver the perfect vacation experience.
          </p>
          <p className="text-lg text-gray-700">
            Our packages include round-trip airport transfers, hotel accommodations, curated meal plans, and guided sightseeing tours. We also offer optional assistance in arranging flights upon request. Each package is thoughtfully designed to align with our dedication to quality, value, and convenience.
          </p>
          <p className="text-lg text-gray-700">
            Our dedication to customer satisfaction extends to every stage of planning. We ensure that every element promised in the itinerary is delivered, giving travellers peace of mind and confidence in choosing PHD.
          </p>
        </div>

        {/* Right Column: Why Choose Us */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">Why Choose Us</h1>
          <ul className="space-y-4 text-lg text-gray-600">
            <li className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Join a curated selection of tools designed to enhance productivity and collaboration.</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Our community relies on us to deliver the best project management solutions, as shown by our loyal user base.</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Enjoy a robust audience with <strong>50K+ monthly visitors</strong> actively seeking tools.</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Gain lifetime visibility for your tool, ensuring continuous exposure to potential users.</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>
                We'll showcase your tool in our{" "}
                <a
                  className="text-indigo-600 hover:text-indigo-500"
                  href="#"
                >
                  feature articles
                </a>{" "}
                and user guides.
              </span>
            </li>
          </ul>

          <p className="text-lg text-gray-700 mt-6">
            <strong>How to Book</strong><br />
            Booking your dream holiday with Prime Holiday Destinations is easy. Simply visit our website, explore our range of packages, and submit an inquiry form. Our friendly team will get in touch and start planning your holiday program. We look forward to making your travel dreams come true.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDescriptionSection;
