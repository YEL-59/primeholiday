import React, { useState } from 'react';

const OmanSteper_Section = () => {
  // State to manage which section is active
  const [activeStep, setActiveStep] = useState(0);

  // Data for each section (this can be dynamic or fetched from an API)
  const steps = [
    {
      title: "INCLUDES & Excludes",
      content: (
        <>
          <div className="container mx-auto flex gap-5">
            <div className="border-r-4 ml-10">
              <ul>
                <li>Return airport transfers.</li>
                <li>8 Nights hotel accommodation in selected hotel category.</li>
                <li>Meals are provided as outlined in the itinerary.</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Personal expenses.</li>
                <li>Visa fees (if applicable).</li>
                <li>Additional meals not outlined in the itinerary.</li>
              </ul>
            </div>
          </div>
        </>
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
    <div className="border-green-600 border p-5">
      {/* Stepper buttons */}
      <div className="container mx-auto flex justify-between gap-5">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`px-5 py-1 text-black border-green-600 border hover:text-white hover:bg-green-800 ${
              activeStep === index ? 'bg-green-800 text-white' : ''
            }`}
            onClick={() => handleStepChange(index)}
          >
            {step.title}
          </button>
        ))}
      </div>

      {/* Stepper content */}
      <div className="container mx-auto mt-5 bg-green-800 rounded text-white p-5">
        <div className="flex justify-between">
          <div>{steps[activeStep].title}</div>
        </div>
      </div>

      {/* Active content based on the step */}
      <div className="container mx-auto mt-5">{steps[activeStep].content}</div>
    </div>
  );
};

export default OmanSteper_Section;
