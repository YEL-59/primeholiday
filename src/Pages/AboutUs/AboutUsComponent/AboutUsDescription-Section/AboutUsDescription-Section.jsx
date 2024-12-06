import React from "react";
import Termscondition from "../../../../Components/termscondition/termscondition";

const AboutUsDescriptionSection = () => {
  return (
    <div className="bg-[#fffff0]">
      <div className="container mx-auto  px-4 p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column: About Us */}
          <div className="space-y-6 ">
            <h1 className="text-3xl font-bold text-[#F49D2A]">
              About Prime Holiday Destinations
            </h1>
            <p className="text-xl font-normal text-black  leading-10">
              Welcome to Prime Holiday Destinations, your gateway to
              unforgettable travel experiences! We are an outbound tour operator
              dedicated to providing all-inclusive packages to some of the most
              exquisite and carefully selected holiday destinations worldwide.
              Whether you’re seeking adventure, relaxation, or cultural
              immersion, our expertly crafted itineraries promise to deliver the
              perfect vacation experience.
            </p>
            <p className="text-xl font-normal text-black  leading-10">
              Our packages include round-trip airport transfers, hotel
              accommodations, curated meal plans, and guided sightseeing tours.
              We also offer optional assistance in arranging flights upon
              request. Each package is thoughtfully designed to align with our
              dedication to quality, value, and convenience.
            </p>
            <p className="text-xl font-normal text-black  leading-10">
              Our dedication to customer satisfaction extends to every stage of
              planning. We ensure that every element promised in the itinerary
              is delivered, giving travellers peace of mind and confidence in
              choosing PHD.
            </p>
          </div>

          {/* Right Column: Why Choose Us */}
          <div className="space-y-6 ">
            <h1 className="text-3xl font-bold text-[#F49D2A]">Why Choose Us</h1>

            <ul className="space-y-4 list-disc list-inside text-gray-700 text-xl">
              <li className="flex items-start space-x-3 before:content-['•'] before:mr-2 before:text-gray-700">
                <span>
                 <strong> Expertly Curated Destinations:</strong> Our travel specialists
                  carefully select each destination for its unique attractions,
                  cultural richness, and natural beauty.
                </span>
              </li>
              <li className="flex items-start space-x-3 before:content-['•'] before:mr-2 before:text-gray-700">
                <span>
                  <strong>All-Inclusive Packages: </strong>Enjoy a stress-free holiday with our
                  comprehensive packages, covering accommodations, meals, and a
                  selection of sightseeing tours.
                </span>
              </li>
              <li className="flex items-start space-x-3 before:content-['•'] before:mr-2 before:text-gray-700">
                <span>
                 <strong> Personalized Service:</strong> We tailor our packages to meet your
                  individual preferences and needs, ensuring a personalized and
                  memorable journey.
                </span>
              </li>
              <li className="flex items-start space-x-3 before:content-['•'] before:mr-2 before:text-gray-700">
                <span>
                 <strong> Sustainable Travel:</strong> We are committed to responsible tourism,
                  supporting local communities and minimizing our environmental
                  impact.
                </span>
              </li>
            </ul>

            <p className="text-xl text-gray-700 mt-6">
              <strong>How to Book</strong>
              <br />
              Booking your dream holiday with Prime Holiday Destinations is
              easy. Simply visit our website, explore our range of packages, and
              submit an inquiry form. Our friendly team will get in touch and
              start planning your holiday program. We look forward to making
              your travel dreams come true.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDescriptionSection;
