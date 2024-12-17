import { useState, useEffect } from "react";


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
          "Return airport transfers.",
          "8 Nights hotel accommodation in selected hotel category.",
          "Meals are provided as outlined in the itinerary.",
          "Return airport transfers.",
          "8 Nights hotel accommodation in selected hotel category.",
          "Meals are provided as outlined in the itinerary.",
        ],
        "excludes": [
          "Personal expenses.",
          "Visa fees (if applicable).",
          "Additional meals not outlined in the itinerary.",
          "Personal expenses.",
          "Visa fees (if applicable).",
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
  ]

  // Load data from local JSON on component mount
  useEffect(() => {
    setSteps(stepsData); // Directly use the imported JSON
  }, []);

  // Handle step change
  const handleStepChange = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="container mx-auto border-green border h-auto p-5 mt-10">
      {/* Stepper buttons */}

      <div className="flex flex-wrap gap-5 w-full">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`flex-1 px-5 py-4 text-lg font-bold border-2 text-center rounded-md 
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
            {typeof steps[activeStep].content === "object" ? (
              <div className="flex flex-col md:flex-row gap-5">
                <div className="border-r-4 md:ml-10 md:w-1/2 p-4">
                  <ul className="list-disc pl-5">
                    {steps[activeStep].content.includes.map((item, i) => (
                      <li
                        key={i}
                        className="font-normal text-lg flex justify-start items-center "
                        style={{
                          listStyle: "none",
                        }}
                      >
                        <span
                          className="inline-block w-2 h-2 bg-primary rounded-full mr-2"
                          style={{ flexShrink: 0 }}
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 md:w-1/2">
                  <ul className="list-disc pl-5">
                    {steps[activeStep].content.excludes.map((item, i) => (
                      <li
                        key={i}
                        className="font-normal text-lg flex justify-start items-center "
                        style={{
                          listStyle: "none",
                        }}
                      >
                        <span
                          className="inline-block w-2 h-2 bg-primary rounded-full mr-2"
                          style={{ flexShrink: 0 }}
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <p>{steps[activeStep].content}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DestinationSteper_Section;
