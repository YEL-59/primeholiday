import React from 'react';
import img from '../../../../assets/DestinationImg/Itenary1.png';

const ItineraryStep = () => {
    // Inline JSON Data
    const itineraryData = [
        {
            day: 'Day 1',
            meal: 'Dinner',
            description:
                "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a ‘Muscat by Night’ tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the ...",
            image: img,
        },
        {
            day: 'Day 2',
            meal: 'Breakfast',
            description:
            "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a ‘Muscat by Night’ tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the ...",
            image: img,
        },
        {
            day: 'Day 3',
            meal: 'Full-Board',
            description:
                "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a ‘Muscat by Night’ tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the ...",
            image: img,
        },
        {
            day: 'Day 4',
            meal: 'Breakfast & Dinner',
            description:
            "Arrive at Muscat airport, meet and assist by our representative and transfer to the selected hotel. Later in the afternoon, you will be met at the hotel for a ‘Muscat by Night’ tour. Start your drive from the hotel to the residential area of Qurum and then along the mountain road towards the old town of Muscat passing through the corniche. Later you drive through the busy streets of Ruwi then drive by the beautiful Mohamed Al Ameen Mosque, which illuminates the Muscat skyline in the ...",
            image: img,
        },
        
    ];

    return (
        <>
            {/* Header */}
            <div className="bg-green py-3 mb-3 flex justify-center items-center space-x-10">
                <div className="font-semibold text-center text-lg text-ivory-white uppercase">
                    Itinerary
                </div>
            </div>

            {/* Itinerary List */}
            <div className="">
                {itineraryData.map((item, index) => (
                  <div className="container mx-auto border border-green p-5 my-10">
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-12 gap-5"
                  >
                    {/* Text Section */}
                    <div className="md:col-span-9">
                      <div className="flex flex-col md:flex-row justify-between font-medium mb-4">
                        <h1 className="text-base md:text-lg font-bold text-green">{item.day}</h1>
                        <h1 className="text-base md:text-lg font-bold text-green">{item.meal}</h1>
                      </div>
                      <p className="text-sm md:text-lg font-medium leading-6 md:leading-8">
                        {item.description}
                        <span className="text-yellow-500 cursor-pointer"> ... Read more</span>
                      </p>
                    </div>
                
                    {/* Image Section */}
                    <div className="md:col-span-3">
                      <img
                        src={item.image}
                        className="h-40 md:h-full w-full object-cover rounded-md"
                        alt={`Itinerary ${item.day}`}
                      />
                    </div>
                  </div>
                </div>
                
                ))}
            </div>
        </>
    );
};

export default ItineraryStep;
