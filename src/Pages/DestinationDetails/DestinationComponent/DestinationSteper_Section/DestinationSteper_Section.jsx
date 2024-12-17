import { useState, useEffect } from "react";
import IncludesExcludesStep from "./IncludesExcludesStep";
import HotelsStep from "./HotelsStep";
import PriceValidityStep from "./PriceValidityStep";
import ItineraryStep from "./ItineraryStep";

const DestinationSteper_Section = () => {
  const [steps, setSteps] = useState([]); // State to hold steps data
  const [activeStep, setActiveStep] = useState(0); // Active step state
  const stepsData = [
    {
      "title": "INCLUDES & Excludes",
      "content": {
        "includes": [
          "Return airport transfers.",
          "8 Nights hotel accommodation in selected hotel category.",
          "Meals are provided as outlined in the itinerary.",
        ],
        "excludes": [
          "Personal expenses.",
          "Visa fees (if applicable).",
          "Additional meals not outlined in the itinerary.",
        ]
      }
    },
    {
      "title": "Hotels",
      "content": "Details about the hotel options, amenities, and accommodation types."
    },
    {
      "title": "Price & Validity",
      "content": "Pricing details, validity periods, and special discounts or offers."
    },
    {
      "title": "Itinerary",
      "content": "A detailed itinerary outlining the schedule for the trip."
    }
  ];

  // Load data from local JSON on component mount
  useEffect(() => {
    setSteps(stepsData); 
  }, []);

  // Handle step change
  const handleStepChange = (index) => {
    setActiveStep(index);
  };

  // Render the appropriate component based on active step
  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <IncludesExcludesStep includes={steps[activeStep].content.includes} excludes={steps[activeStep].content.excludes} />;
      case 1:
        return <HotelsStep />;
      case 2:
        return <PriceValidityStep />;
      case 3:
        return <ItineraryStep />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto border-green border h-auto p-5 mt-10">
      {/* Stepper buttons */}
      <div className="flex flex-wrap gap-5 w-full">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`flex-1 px-5 py-4 text-lg font-bold border-2 text-center rounded-md uppercase 
              ${activeStep === index
                ? "bg-green text-white border-green"
                : "bg-ivory-white text-green border-green hover:bg-green hover:text-white"
              }`}
            onClick={() => handleStepChange(index)}
          >
            {step.title}
          </button>
        ))}
      </div>

      {/* Stepper content */}
      {steps.length > 0 && (
        <>
          <div className="container mx-auto mt-5 bg-green-800 rounded text-white p-5">
            <div className="text-lg font-semibold">{steps[activeStep].title}</div>
          </div>

          {/* Active content based on the step */}
          <div className="container mx-auto mt-5 text-gray-800">
            {renderStepContent()}
          </div>
        </>
      )}
    </div>
  );
};

export default DestinationSteper_Section;
