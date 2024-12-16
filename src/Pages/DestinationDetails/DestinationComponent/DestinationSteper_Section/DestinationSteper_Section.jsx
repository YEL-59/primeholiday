import { useState } from 'react';

const DestinationSteper_Section = () => {
  // State to manage which section is active
  const [activeStep, setActiveStep] = useState(0);

  // Data for each section (this can be dynamic or fetched from an API)
  const steps = [
    {
      title: "INCLUDES & Excludes",
      content: (
        <div className="flex flex-col md:flex-row gap-5">
          <div className="border-r-4 md:ml-10 md:w-1/2 p-4">
            <ul className="list-disc pl-5">
              <li>Return airport transfers.</li>
              <li>8 Nights hotel accommodation in selected hotel category.</li>
              <li>Meals are provided as outlined in the itinerary.</li>
            </ul>
          </div>
          <div className="p-4 md:w-1/2">
            <ul className="list-disc pl-5">
              <li>Personal expenses.</li>
              <li>Visa fees (if applicable).</li>
              <li>Additional meals not outlined in the itinerary.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Hotels",
      content: (
        <div>
          <p>Details about the hotel options, amenities, and accommodation types.</p>
        </div>
      ),
    },
    {
      title: "Price & Validity",
      content: (
        <div>
          <p>Pricing details, validity periods, and special discounts or offers.</p>
        </div>
      ),
    },
    {
      title: "Itinerary",
      content: (
        <div>
          <p>A detailed itinerary outlining the schedule for the trip.</p>
        </div>
      ),
    },
  ];

  // Handle step change
  const handleStepChange = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="container mx-auto border-green border h-auto p-5 mt-10">
      {/* Stepper buttons */}
      <div className="flex flex-wrap justify-start md:justify-between gap-5">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`px-5 py-2 text-black border-green-600 border hover:text-white hover:bg-green-800 rounded-lg mb-2 md:mb-0 ${activeStep === index ? 'bg-green-800 text-white' : ''
              }`}
            onClick={() => handleStepChange(index)}
          >
            {step.title}
          </button>
        ))}
      </div>

      {/* Stepper content */}
      <div className="container mx-auto mt-5 bg-green-800 rounded text-white p-5">
        <div className="text-lg font-semibold">{steps[activeStep].title}</div>
      </div>

      {/* Active content based on the step */}
      <div className="container mx-auto mt-5 text-gray-800">
        {steps[activeStep].content}
      </div>
    </div>
  );
};

export default DestinationSteper_Section;
